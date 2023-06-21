from firebase_admin import firestore


def initialize_firestore():
    db = firestore.Client()
    return db
