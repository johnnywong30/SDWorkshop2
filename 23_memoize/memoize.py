'''
Johnny Wong
SoftDev2 pd8
K#23 -- Memoize
2019-05-01
'''

def memoize(f):
    memo = {}
    def helper(x):
        # if x isn't in dict, add it and it's corresponding fib val
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return helper

# equiv to fib = memoize(fib)
@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(5))
print(fib(9))
# huge difference between computation speed from pure recursion to memoization
print(fib(500))
