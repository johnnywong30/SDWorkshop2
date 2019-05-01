'''
Johnny Wong
SoftDev2 pd8
K#22 -- Closure
2019-04-30
'''

def repeat(str):
    def iterate(factor):
        return str * factor
    return iterate

r1 = repeat("hello")
r2 = repeat("goodbye")

# invoke repeat's inner fxn with val
print(r1(2)) # --> hellohello
print(r2(2)) # --> goodbyegoodbye
print(repeat("cool")(3)) # --> coolcoolcool


def make_counter():
    counter = 0
    def increment():
        nonlocal counter
        counter = counter + 1
        return counter
    return increment

ctr1 = make_counter()
# invoke ctr1's inner fxn
print(ctr1()) # --> nonlocal counter is now 1
print(ctr1()) # --> nonlocal counter is now 2
ctr2 = make_counter()
# invoke ctr2's inner fxn
print(ctr2()) # --> nonlocal counter is now 1
# invote ctr1's inner fxn
print(ctr1()) # --> nonlocal counter is now 3
# invoke ctr2's inner fxn
print(ctr2()) # --> nonlocal counter is now 2
