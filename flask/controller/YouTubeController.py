from flask import Blueprint, request, jsonify
from pytubefix import YouTube
import io
import base64
from services.DownloadService import InsertDownload, CheckDownload, GetDownload


YouTubeController = Blueprint("YouTubeController", __name__)


@YouTubeController.route("/api/download", methods=["POST", "GET"])
def download_url():
    if request.method == "POST":
        video_id = request.get_json().get("video_id")
        buffer = io.BytesIO()
        try:
            yt = YouTube(f"https://www.youtube.com/watch?v={video_id}")
            stream = yt.streams.get_audio_only()
            video_id = yt.video_id
            if not CheckDownload(video_id):
                return jsonify({"message": False, "video_id": video_id})
            stream.stream_to_buffer(buffer)
            buffer.seek(0)
            audio_data = buffer.read()
            audio_base64 = base64.b64encode(audio_data).decode()
            author_name = yt.author
            author_id = yt.channel_id
            limit_download = 3
            downloads_list = GetDownload()
            if downloads_list is not None and len(downloads_list) >= limit_download:
                # if above limit, then stream the song
                return jsonify(
                    {
                        "message": f"Song limit is: {limit_download} Songs",
                        "song_data": {
                            "song_title": yt.title,
                            "author_name": author_name,
                            "video_id": video_id,
                            "audio_data": audio_base64,
                        },
                    }
                )
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
                    "song_data": {
                        "song_title": yt.title,
                        "author_name": author_name,
                        "video_id": video_id,
                        "audio_data": audio_base64,
                    },
                }
            )
        except Exception as e:
            print(e)
            return jsonify(
                {
                    "message": False,
                    "song_data": {"title": yt.title, "video_id": video_id},
                }
            )
    return jsonify("index.html")
