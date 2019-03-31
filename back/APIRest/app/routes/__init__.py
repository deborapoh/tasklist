from app import app, db
from app.models.task import Task
from flask import jsonify, request

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

@app.route('/add_task', methods=['POST'])
def add_task():
    title = request.args.get("title")
    description = request.args.get("description")
    status = request.args.get("status")
    active = request.args.get("active")

    if active == 'true':
        active = True
    elif active == 'false':
        active = False

    task = Task(title, description, status, active)
    try:
        Task.add(task)
        return jsonify({
            'result': "registro adicionado com sucesso!"
        })
    except:
        return jsonify({
            'result': "Não foi possível adicionar o registro!"
        })

@app.route('/delete_task', methods=['PUT'])
def delete_task():
    id = request.args.get("id")
    task = Task.query.filter_by(id=id).first()
    task.active = False

    try:
        Task.update()
        return jsonify({
            'result': "registro deletado com sucesso!"
        })
    except:
        return jsonify({
            'result': "Não foi possível deletar o registro!"
        })
    

@app.route('/update_task', methods=['PUT'])
def update_task():
    id = request.args.get("id")
    task = Task.query.filter_by(id=id).first()

    title = request.args.get("title")
    description = request.args.get("description")
    status = request.args.get("status")

    if title:
        task.title = title
    if description:
        task.description = description
    if status:
        task.status = status

    try:
        Task.update()
        return jsonify({
            'result': "registro atualizado com sucesso!"
        })
    except:
        return jsonify({
            'result': "Não foi possível atualizar o registro!"
        })