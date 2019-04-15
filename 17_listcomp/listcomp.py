'''
PaPayas - Mohtasim Howlader, Johnny Wong
SoftDev2 pd8
K17 -- PPFTLCW
2019-04-15
'''

'''
#1
->
['00', '22', '44', '66', '88']
'''
loopy1 = []
for x in range(5):
      loopy1.append(str(x*2) * 2)
lc1 = [str(x * 2) * 2 for x in range(5)]
print("Problem 1:")
print(loopy1)
print(lc1)
'''
#2
->
[7, 17, 27, 37, 47]
'''
loopy2 = []
for x in range(5):
    loopy2.append(x * 10 + 7)
lc2 = [x * 10 + 7 for x in range(5)]

print("Problem 2")
print(loopy2)
print(lc2)

'''
#3
->
[0, 0, 0, 0, 1, 2, 0, 2, 4]
'''
loopy3 = []
for x in range(3):
    for i in range(3):
        loopy3.append(x*i)

lc3 =[x*i for x in range(3) for i in range(3)]
print("Problem 3:")
print(loopy3)
print(lc3)


'''
#4
Composites on range [0,100], in ascending order.
'''
loopy4 = []
for x in range(4, 101):
    for i in range (2,10):
        if x % i == 0 and x != i:
            loopy4.append(x)
            break
lc4 = [i for i in range(2, 101) if i in [i if i % j == 0 else False for j in range(2, i)] ]
print("Problem 4:")
print(loopy4)
print(lc4)

'''
#5
Primes on range [0,100], in ascending order.
'''

loopy5 = []
for i in range(2, 101):
    factorable = False
    for j in range(2, i):
        if i % j == 0:
            factorable = True
            break
    if not factorable:
        loopy5.append(i)

lc5 = [i for i in range(2, 101) if i not in [i if i % j == 0 else False for j in range(2, i)] ]

print("Problem 5:")
print(loopy5)
print(lc5)


'''
#6
All divisors of a number, listed in ascending order.
'''
def get_divisors(num):
    divisors = []
    for i in range(1, num + 1):
        if num % i == 0:
            divisors.append(i)
    return divisors

def get_divisors_lc(num):
    divisors = [i for i in range(1, num + 1) if num % i == 0]
    return divisors

print("Problem 6:")
print(get_divisors(625)) # --> [1, 5, 25, 125, 625]
print(get_divisors_lc(625)) # --> [1, 5, 25, 125, 625]


'''
#7
Transpose a matrix (turn rows into columns and vice-versa...)
'''
def transpose(matrix):
    tranposition = []
    for i in range(len(matrix)):
        col = []
        for j in range(len(matrix)):
            col.append(matrix[j][i])
        tranposition.append(col)
    return tranposition

def transpose_lc(matrix):
    tranposition = [ [row[col] for row in matrix] for col in range(len(matrix))]
    return tranposition

print("Problem 7:")
test_matrix = [ [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ]
'''
-->
[ [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
'''
print(transpose(test_matrix))
print(transpose_lc(test_matrix))
