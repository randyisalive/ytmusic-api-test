from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv


# services
from services.DownloadService import InsertDownload, CheckDownload, GetDownloadAudio
from yt import yt

# controller
from controller.SystemController import SystemController
from controller.DownloadController import DownloadController
from controller.YouTubeController import YouTubeController


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
    search = data.get("search")
    suggestions = yt.search(search)
    return jsonify(suggestions)


@app.route("/api/get_playlist", methods=["POST", "GET"])
def get_playlist_by_id():
    if request.method == "POST":
        data = request.get_json()
        id = data.get("id")
        playlist = yt.get_playlist(id, 1, related=True)
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


app.register_blueprint(SystemController)
app.register_blueprint(DownloadController)
app.register_blueprint(YouTubeController)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
