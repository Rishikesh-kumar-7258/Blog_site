from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

app = Flask(__name__)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.String(1500), nullable=False)
    time = db.Column(db.DateTime, default=datetime.utcnow)
    tag = db.Column(db.String(50), nullable=False)
    # image = db.Column(db.)

    def __repr__(self):
        return f"{self.id}-{self.title}"

@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/admin", methods=["GET", "POST"])
def admin():
    if request.method == 'POST':
        title = request.form['title']
        tag = request.form['tag']
        content = request.form['content']
        post = Post(title=title, tag=tag, content=content)
        db.session.add(post)
        db.session.commit()
        redirect('/admin')
    return render_template("admin.html")

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, port=5000)