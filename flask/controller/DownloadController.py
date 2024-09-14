from flask import Blueprint, request, jsonify, send_file, send_from_directory
from services.DownloadService import InsertDownload, GetDownload, DeleteDownload
import os

DownloadController = Blueprint("DownloadController", __name__)


@DownloadController.route("/api/get-downloads")
def get_download():
    data = GetDownload()
    if request.method == "GET":
        print(data)
        return jsonify(data)
    return jsonify({"route": "/api/get_downloads"})


@DownloadController.route("/api/insert-download")
def insert_download():
    if request.method == "POST":
        data = request.get_json()
        img = data.get("img")
        song_id = data.get("song_id")
        song_title = data.get("song_title")
        if not song_title == "":
            return jsonify({"message": "song inserted!"})
        return jsonify({"message": "insert failed..."})
    return jsonify({"api: /api/insert-download"})


@DownloadController.route("/api/delete", methods=["POST", "GET"])
def delete():
    if request.method == "POST":
        data = request.get_json()
        id = data.get("song_title")
        songs = GetDownload()
        for i in songs:  # type: ignore
            if id == i["id"]:
                DeleteDownload(id)
    return jsonify({"api": "/api/delete"})
