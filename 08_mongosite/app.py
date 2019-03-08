'''
Team StanfordMarshmallows -- Hui Min Wu, Daniel Keriazis, and Johnny Wong
SoftDev2 pd8
K#08 -- Ay Mon, Go Git It From Yer Flask
2019-03-08
'''

import os

import pymongo
from flask import Flask, render_template, request, flash, redirect, url_for

import util.mongo as mongo


app = Flask(__name__)
app.secret_key = os.urandom(32)

collection = None

@app.route('/')
def index():
    if collection != None:
        return render_template('query.html', dropped=True)
    return render_template('droplet.html')

@app.route('/ip', methods=['POST'])
def drop():
    ip = request.form['droplet']
    global collection
    collection = mongo.setup_db(ip)
    print('it worked')
    print(collection.count_documents({}))
    return redirect(url_for('index'))

@app.route('/search')
def search():
    if collection != None:
        results = []
        if 'id' in request.args:
            id = request.args['id']
            results = mongo.pokemon_id(collection, id)
        if 'name' in request.args:
            name = request.args['name']
            results = mongo.pokemon_name(collection, name)
        if 'type' in request.args:
            type = request.args['type']
            results = mongo.pokemon_type(collection, type)
        if 'stat' in request.args:
            stat = request.args['stat']
            val = request.args['statval']
            results = mongo.pokemon_stat(collection, stat, val)
        print(results)
        return render_template('results.html', dropped=True, collection=results)
    return redirect(url_for('index'))


if __name__ == "__main__":
    app.debug= True
    app.run()
