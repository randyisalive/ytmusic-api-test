from db import db_connection
import io
import base64


def GetDownload():
    db = db_connection()
    cur = db.cursor()
    try:
        table_name = "songs"
        sql = (
            "SELECT id, img, song_id, song_title, author_id, author_name FROM "
            + table_name
        )
        cur.execute(sql)
        songs = cur.fetchall()
        songs_list = [
            {
                "id": i[0],
                "img": i[1],
                "song_id": i[2],
                "song_title": i[3],
                "author_id": i[4],
                "author_name": i[5],
            }
            for i in songs
        ]
        cur.close()
        db.close()
        return songs_list
    except Exception as e:
        print(e)


def GetDownloadAudio(video_id):
    db = db_connection()
    cur = db.cursor()
    try:
        table_name = "songs"
        sql = f"SELECT data FROM {table_name} WHERE song_id = ?"
        cur.execute(sql, (video_id,))
        data = cur.fetchone()
        cur.close()
        db.close()
        if data:
            buffer = io.BytesIO(data[0])
            buffer.seek(0)
            return buffer
        else:
            print("No data found for the given video_id")
            return None
    except Exception as e:
        print(e)
        return None


def CheckDownload(id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = f"SELECT song_id FROM songs WHERE id = ?"
        params = (id,)
        cur.execute(sql, params)
        song = cur.fetchall()
        print(len(song))
        if len(song) >= 0:
            return True
        return True
    except Exception as e:
        print(e)


def InsertDownload(img, song_id, title, author_id, author_name, data):
    db = db_connection()
    cur = db.cursor()
    try:
        table_name = "songs"
        params = (
            img,
            song_id,
            title,
            author_id,
            author_name,
            data,
        )
        sql = f"INSERT INTO {table_name} (img,song_id,song_title,author_id, author_name,data) VALUES (?,?,?,?,?,?)"
        cur.execute(sql, params)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        print(e)


def DeleteDownload(id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = "DELETE FROM songs WHERE id = ?"
        param = (id,)
        cur.execute(sql, param)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        print(e)
