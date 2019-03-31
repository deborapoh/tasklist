from flask import Flask
from app import db, manager

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40))
    description = db.Column(db.String(900))
    status = db.Column(db.String(1))
    active = db.Column(db.Boolean)

db.create_all()
manager.create_api(Task, methods=['POST', 'GET', 'PUT'])
