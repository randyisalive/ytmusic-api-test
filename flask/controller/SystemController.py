from flask import Blueprint, request, jsonify
import os


SystemController = Blueprint("SystemController", __name__)


@SystemController.route("/api/open_folder")
def open_folder():
    path = r"C:\Users\Rendy\Documents\GitHub\ytmusic-api-test\downloads"
    os.startfile(path)
    return jsonify({"message": "open explorer"})
