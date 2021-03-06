from flask_script import Manager
from applications.app import app, db

manager = Manager(app)

@manager.command
def create_db():
    """Creates the db tables."""
    db.create_all()


if __name__ == '__main__':
    app.run(port=3001)
    manager.run()