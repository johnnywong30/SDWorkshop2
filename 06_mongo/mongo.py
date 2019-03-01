'''
Team AppleWine -- Addison Huang, Johnny Wong
SoftDev2 pd8
K#06 -- Yummy Mongo Py
2019-03-01
'''
import pymongo

SERVER_ADDR = "167.99.145.123:27017" # Johnny's DO Droplet
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def find_rest_b(borough):
    'Prints query for all restaurants in specified borough'
    for restaurant in collection.find({'borough': borough}):
        print(restaurant)


def find_rest_z(zipcode):
    'Prints query for all restaurants in specified zip code'
    for restaurant in collection.find({'address.zipcode': zipcode}):
        print(restaurant)

def find_rest_z_grade(zipcode, grade):
    'Prints query for all restaurants in a specified zip code with a specified grade'
    for restaurant in collection.find({'$and': [{'address.zipcode': zipcode}, {'grades.grade': grade}]}):
        print(restaurant)

def find_rest_z_score(zipcode, score):
    'Prints query for all restaurants in a specified zip code with a score below a specified threshold'
    for restaurant in collection.find({'$and': [{'address.zipcode': zipcode}, {'grades.score': {'$lt': score}}]}):
        print(restaurant)

def find_rest_z_score_sorted(zipcode, score):
    'Prints query for all restaurants in a specified zip code with a score below a specified threshold sorted by earliest grade'
    for restaurant in collection.find({'$and': [{'address.zipcode': zipcode}, {'grades.score': {'$lt': score}}]}).sort('grades.date'):
        print(restaurant)


'''
print('ALL RESTAURANTS IN BOROUGH Manhattan:')
find_rest_b('Manhattan')
print('------------------------------------------------')
print('ALL RESTAURANTS IN ZIPCODE 10282')
find_rest_z('10282')
'''
print('------------------------------------------------')
print('ALL RESTAURANTS IN ZIPCODE 10282 WITH GRADE "B"')
find_rest_z_grade('10282', 'B')
print('------------------------------------------------')
print('ALL RESTAURANTS IN ZIPCODE 10282 WITH SCORE LESS THAN 10')
find_rest_z_score('10282', 10)
print('------------------------------------------------')
print('ALL RESTAURANTS IN ZIPCODE 10282 WITH SCORE LESS THAN 10 SORTED BY EARLIEST GRADE')
find_rest_z_score_sorted('10282', 10)
