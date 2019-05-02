'''
Johnny Wong
SoftDev2 pd8
K#23 -- Closure
2019-05-01
'''

import random

def make_HTML_heading(f):
    def inner():
        return '<h1>' + f() + '</h1>'
    return inner

# equiv to greet = make_HTML_heading(greet)
@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)

print(greet())
print(greet())
