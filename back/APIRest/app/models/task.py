from flask import Flask
from app import db, manager

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40))
    description = db.Column(db.String(900))
    status = db.Column(db.String(1))
    active = db.Column(db.Boolean)

    def __init__(self, title, description=None, status='P', active=True):
        self.title = title
        self.description = description
        self.status = status
        self.active = active

    def add(task):
        db.session.add(task)
        return db.session.commit()
 
    def update():
        return db.session.commit()

db.create_all()
manager.create_api(Task, methods=['POST', 'GET', 'PUT'])
