from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restless import APIManager
from flask_cors import CORS

POSTGRES = {
    'user': 'postgres',
    'password': 'dpomgk13',
    'db': 'tasklist',
    'host': 'localhost',
    'port': '5432',
}

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:%(password)s@%(host)s:%(port)s/%(db)s' % POSTGRES
db = SQLAlchemy(app)

manager = APIManager(app, flask_sqlalchemy_db=db)