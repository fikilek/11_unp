from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def index():
    fk = 'fikile'
    return render_template("unp.html", fk=fk)


if __name__ == "__main__":
    app.run(debug=True)
