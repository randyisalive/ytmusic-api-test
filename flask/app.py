from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import io
import os
from pytubefix import YouTube
from dotenv import load_dotenv


# services
from services.DownloadService import InsertDownload, CheckDownload
from services.MoviepyServices import ConvertToMp3
from yt import yt

# controller
from controller.SystemController import SystemController
from controller.DownloadController import DownloadController


app = Flask(__name__)
CORS(app)

load_dotenv(".env")
app.secret_key = os.getenv("SECRET_KEY")
app.debug = True if os.getenv("DEBUG") == "True" else False


@app.route("/api/search", methods=["POST", "GET"])
def search_music():
    if request.method == "POST":
        data = request.get_json()
        search = data.get("search")
        search_results = yt.search(search)
        return jsonify(search_results)
    return render_template("index.html")


@app.route("/api/get_user_playlist", methods=["POST", "GET"])
def get_library_playlists():
    playlists = yt.get_library_playlists(limit=25)
    return jsonify(playlists)


@app.route("/api/get_search_suggestions", methods=["POST", "GET"])
def get_search():
    data = request.get_json()
    browseId = data.get("browseId")
    suggestions = yt.get_song_related(browseId=browseId)
    return jsonify(suggestions)


@app.route("/api/get_playlist", methods=["POST", "GET"])
def get_playlist_by_id():
    if request.method == "POST":
        data = request.get_json()
        id = data.get("id")
        print(id)
        playlist = yt.get_playlist(id, 1, related=True)
        print(playlist)
        return jsonify(playlist)
    return jsonify({"message": "hello"})


@app.route("/api/user", methods=["POST", "GET"])
def get_user():
    if request.method == "POST":
        data = request.get_json()
        channelId = data.get("channelId")
        user = yt.get_user(channelId=channelId)
        return jsonify(user)
    return jsonify({"message": "hello"})


@app.route("/api/download", methods=["POST", "GET"])
def download_url():
    if request.method == "POST":
        url = request.get_json().get("url")
        buffer = io.BytesIO()
        try:
            yt = YouTube(url)
            stream = yt.streams.get_audio_only()
            print(stream)
            filename = yt.title + ".mp3"
            video_id = yt.video_id
            stream.stream_to_buffer(buffer)
            buffer.seek(0)
            audio_data = buffer.read()
            author_name = yt.author
            author_id = yt.channel_id
            # Assuming ConvertToMp3 is a custom function you have defined
            # ConvertToMp3(download_path, file_remove=True)

            # Assuming CheckDownload is a function that checks if the download was successful
            if CheckDownload(filename):
                # Assuming InsertDownload is a function that logs the download
                InsertDownload(
                    yt.thumbnail_url,
                    video_id,
                    yt.title,
                    author_id,
                    author_name,
                    audio_data,
                )

            return jsonify(
                {
                    "message": True,
                    "song_data": {"title": yt.title, "video_id": video_id},
                }
            )
        except Exception as e:
            print(e)
            return jsonify({"message": False})
    return jsonify("index.html")  # Create an HTML template for the form


app.register_blueprint(SystemController)
app.register_blueprint(DownloadController)

if __name__ == "__main__":
    app.run()
