from flask import Blueprint, request, jsonify, send_file, send_from_directory
from services.DownloadService import InsertDownload, GetDownload, DeleteDownload
import os

DownloadController = Blueprint("DownloadController", __name__)


@DownloadController.route("/api/get-downloads")
def get_download():
    if request.method == "GET":
        data = GetDownload()
        return jsonify(data)
    return jsonify({"route": "/api/get_downloads"})


@DownloadController.route("/api/insert-download")
def insert_download():
    if request.method == "POST":
        data = request.get_json()
        song_title = data.get("song_title")
        if not song_title == "":
            InsertDownload(f"{song_title}.mp3")
            return jsonify({"message": "song inserted!"})
        return jsonify({"message": "insert failed..."})
    return jsonify({"api: /api/insert-download"})


@DownloadController.route("/api/delete", methods=["POST", "GET"])
def delete():
    if request.method == "POST":
        data = request.get_json()
        song_title = data.get("song_title")
        path = f"downloads/{song_title}"
        if os.path.exists(path):
            os.remove(path)
            DeleteDownload(song_title)
            return jsonify({"message": "Delete" + path})
        return jsonify({"message": path + " not found"})
    return jsonify({"api": "/api/delete"})
