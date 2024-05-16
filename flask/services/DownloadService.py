from db import db_connection


def GetDownload():
    db = db_connection()
    cur = db.cursor()
    try:
        table_name = "songs"
        sql = "SELECT * FROM " + table_name
        cur.execute(sql)
        songs = cur.fetchall()
        songs_list = [{"id": i[0], "song_title": i[1]} for i in songs]
        cur.close()
        db.close()
        return songs_list
    except Exception as e:
        print(e)


def CheckDownload(song_title):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = f"SELECT song_title FROM songs WHERE song_title = ?"
        params = (song_title,)
        cur.execute(sql, params)
        song = cur.fetchall()
        if len(song) > 0:
            return True
        return False
    except Exception as e:
        print(e)


def InsertDownload(title):
    db = db_connection()
    cur = db.cursor()
    try:
        table_name = "songs"
        params = (title,)
        sql = f"INSERT INTO {table_name} (song_title) VALUES (?)"
        cur.execute(sql, params)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        print(e)


def DeleteDownload(title):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = "DELETE FROM songs WHERE song_title = ?"
        param = (title,)
        cur.execute(sql, param)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        print(e)
