'''
Team StanfordMarshmallows -- Hui Min Wu, Daniel Keriazis, and Johnny Wong
SoftDev2 pd8
K#08 -- Ay Mon, Go Git It From Yer Flask
2019-03-08
'''

'''
Pokedex Database

Contains the following information of Pokemon:
id
names in English, Japanese, and Chinese
type
base stats: (HP, Attack, Defense, Sp Attack, Sp Defense, Speed)

Raw data: https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json

Import directions:
Attach the '--jsonArray' flag when importing
Example:
mongoimport --db DB_NAME --collection COLLECTION_NAME --drop --jsonArray --file PATH/TO/pokedex.json
'''

import pymongo
from bson.json_util import loads

# 167.99.145.123:27017 # Johnny's DO Droplet

def setup_db(ip):
    SERVER_ADDR = ip
    connection = pymongo.MongoClient(SERVER_ADDR)
    connection.drop_database('marshmallows')
    db = connection.marshmallows
    collection = db.pokedex

    with open('data/pokedex.json') as f:
        #documents = loads(f.read().replace('Sp.', 'Sp'))
        documents = loads(f.read())
    collection.insert_many(documents)
    print(collection.count_documents({}))
    return collection

def pokemon_type(collection, type):
    '''
    Return query of Pokemon with <type>
    '''
    poke_list = []
    for pokemon in collection.find({'type': {'$in': [type]}}):
        poke_list.append({'pokemon': pokemon['name']['english'], 'id': pokemon['id'], 'type': pokemon['type'], 'stats':pokemon['base']})
    return poke_list

def pokemon_name(collection, name):
    '''
    Return query of Pokemon with <name>
    '''
    poke_list = []
    for pokemon in collection.find({'name.english': name}):
        poke_list.append({'pokemon': pokemon['name']['english'], 'id': pokemon['id'], 'type': pokemon['type'], 'stats':pokemon['base']})
    return poke_list

def pokemon_id(collection, id):
    '''
    Return query of Pokemon with <id>
    '''
    poke_list = []
    for pokemon in collection.find({'id': int(id)}):
        poke_list.append({'pokemon': pokemon['name']['english'], 'id': pokemon['id'], 'type': pokemon['type'], 'stats':pokemon['base']})
    return poke_list


def pokemon_stat(collection, stat, value):
    '''
    Return query of Pokemon with <stat> with a value >= to <value>
    '''
    poke_list = []
    print(stat)
    key = 'base.{0}'.format(stat)
    print(key)
    for pokemon in collection.find({key: {'$gte': int(value)}}):
        poke_list.append({'pokemon': pokemon['name']['english'], 'id': pokemon['id'], 'type': pokemon['type'], 'stats':pokemon['base']})
    return poke_list


'''
# TESTS
print('Query for Grass type Pokemon')
pokemon_type('Grass')
print('------------------------------')
print('Query for Dragonite')
pokemon_name('Dragonite')
print('------------------------------')
print('Query for Pokemon with HP >= 50')
pokemon_stat('HP', 50)
print('------------------------------')
print('Query for Pokemon up to #381')
pokemon_id(381)
'''
