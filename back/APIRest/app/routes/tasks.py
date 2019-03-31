import sys
from flask import Flask, jsonify
from app.models.task import *

def get_tasks():
    import pdb; pdb.set_trace()
    
    tasks = []
    
    for task in Task.objects:
        taskJson = task.to_json()
        taskData = json.loads(taskJson)
        tasks.append(taskData)
    return jsonify({
        'tasks': tasks
    })

def add_tasks():
    return 'add_tasks'

def delete_tasks():
    return 'delete_tasks'

def update_tasks():
    return 'update_tasks'