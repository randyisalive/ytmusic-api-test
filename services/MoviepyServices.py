from moviepy.editor import VideoFileClip
import os


def ConvertToMp3(yt, file_remove=False):
    path_mp4 = "downloads/" + yt.title + ".mp4"
    path_mp3 = "downloads/" + yt.title + ".mp3"
    video = VideoFileClip(path_mp4)
    video.audio.write_audiofile(path_mp3)
    video.close()
    if file_remove:
        os.remove(path_mp4)
