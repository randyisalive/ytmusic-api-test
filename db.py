import sqlite3

DATABASE = "database.db"


def db_connection():
    db = sqlite3.connect(DATABASE)
    return db
