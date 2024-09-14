from flask import Blueprint, request, jsonify, send_file
from services.DownloadService import GetDownloadAudio
import os

SystemController = Blueprint("SystemController", __name__)


@SystemController.route("/api/open_folder")
def open_folder():
    path = "downloads"
    os.startfile(path)
    return jsonify({"message": "open explorer"})


# stream audio as blob for PLaySong.jsx
@SystemController.route("/api/get-audio", methods=["GET", "POST"])
def get_audio():
    data = request.get_json()
    video_id = data.get("video_id")
    print(video_id)
    data = GetDownloadAudio(video_id)
    if data:
        return send_file(data, mimetype="audio/mp3")
    return jsonify({"message": False})
