'''
Johnny Wong
SoftDev2 pd8
K#23 -- Closure
2019-05-01
'''

import random

def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)

greet_heading = make_HTML_heading(greet) # returns the fxn make_HTML_heading.inner
print(greet_heading())
# won't generate different greetings in single run, generated once
print(greet_heading())
print(greet_heading())
print(greet_heading())
