from app import app
from app.models.task import Task
from flask import jsonify

@app.route('/')
def index():
    return 'Flask API for a TaskList'

@app.route('/get_tasks', methods=['GET'])
def get_tasks():
    
    activeTasks = Task.query.filter_by(active=True).all()
    tasks = []

    for task in activeTasks:
        tasks.append({
            "id": task.id,
            "title": task.title,
            "description": task.description,
            "status": task.status,
            "active": task.active
        })
        
    return jsonify({
        'tasks': tasks
    })


#@app.route('/add_task')
#def add_task():
#    return add_task
#
#@app.route('/delete_task')
#def delete_task():
#    return delete_task
#
#@app.route('/update_task')
#def update_task():
#    return update_task