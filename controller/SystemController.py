from flask import Blueprint, request, jsonify, send_file
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
    song_title = data.get("song_title")
    current_dir = os.getcwd()
    audio_path = f"{current_dir}/downloads/{song_title}"
    if os.path.exists(audio_path):
        print("audio path: ", audio_path)
        return send_file(audio_path, mimetype="audio/mp3")
    return jsonify({"message": False})
