from db.firestore import initialize_firestore


def get_firestore():
    return initialize_firestore()
