'''
PapaGooyens -- Aaron Li & Johnny Wong
SoftDev2 pd8
K19 --
2019-04-16
'''
testa = [1, 2, 3]
testb = [2, 3, 4]
c = [1, 2]
d = ['red', 'white']

'''
Union of sets A & B denoted A u B
'''

def union(a, b):
    return a 5+ [i for i in b if i not in a]

print("Union:")
print(union(testa, testb))

'''
Intersection of sets A & B
'''
def interesection(a, b):
    return [i for i in a if i in a and i in b]
print("Interesection")
print(interesection(testa, testb))

'''
Set difference of A & B
'''
def setDiff(a, b):
    return [i for i in a if i in a and i not in b]
print("Set Difference:")
print(setDiff(testb, testa))

'''
Symmetric difference of sets A and # B
'''
def symDiff(a, b):
    return setDiff(a, b) + setDiff(b, a)
print("Symmetric Difference")
print(symDiff(testa, testb))

'''
cartesian product of A & B (ordered pair)
'''
def cartProduct(a, b):
    return [(x, y) for x in a for y in b]
print("Cartesian Product:")
print(cartProduct(c, d))

'''
string set intersex
'''
# def strSect(a, b):
#     return [i for i in ]
