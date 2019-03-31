from app import app

@app.route('/')
def index():
    return 'Flask API for a TaskList'