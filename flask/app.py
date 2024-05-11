from flask import Flask, render_template, request, jsonify, send_file
from flask_cors import CORS
from flask_debugtoolbar import DebugToolbarExtension
from ytmusicapi import YTMusic
from pytube import YouTube
import os

from controller.SystemController import SystemController

from services.MoviepyServices import ConvertToMp3

app = Flask(__name__)
CORS(app)

app.secret_key = "1"
app.debug = True
DebugToolbarExtension(app)


@app.route("/api/search", methods=["POST", "GET"])
def search_music():
    yt = YTMusic("oauth.json")  # Replace with your authentication details
    if request.method == "POST":
        data = request.get_json()
        search = data.get("search")
        search_results = yt.search(search)
        return jsonify(search_results)
    return render_template("index.html")


@app.route("/api/get_user_playlist", methods=["POST", "GET"])
def get_library_playlists():
    yt = YTMusic("oauth.json")
    playlists = yt.get_library_playlists(limit=25)
    return jsonify(playlists)


@app.route("/api/get_search_suggestions", methods=["POST", "GET"])
def get_search():
    yt = YTMusic("oauth.json")
    data = request.get_json()
    browseId = data.get("browseId")
    suggestions = yt.get_song_related(browseId=browseId)
    return jsonify(suggestions)


@app.route("/api/get_playlist", methods=["POST", "GET"])
def get_playlist_by_id():
    yt = YTMusic("oauth.json")
    if request.method == "POST":
        data = request.get_json()
        id = data.get("id")
        playlist = yt.get_playlist(id, 100)
        return jsonify(playlist)
    return jsonify({"message": "hello"})


@app.route("/api/user", methods=["POST", "GET"])
def get_user():
    yt = YTMusic("oauth.json")
    if request.method == "POST":
        data = request.get_json()
        channelId = data.get("channelId")
        user = yt.get_user(channelId=channelId)
        return jsonify(user)
    return jsonify({"message": "hello"})


@app.route("/api/download", methods=["POST", "GET"])
def download():
    if request.method == "POST":
        url = request.get_json().get("url")
        try:
            yt = YouTube(url)
            stream = yt.streams.get_lowest_resolution()
            filename = yt.title + ".mp4"
            stream.download(output_path="downloads", filename=filename)
            ConvertToMp3(yt, file_remove=True)
            return jsonify({"message": True})
        except Exception as e:
            return jsonify({"message": False})
    return jsonify("index.html")  # Create an HTML template for the form


app.register_blueprint(SystemController)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
