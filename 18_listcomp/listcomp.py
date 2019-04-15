'''
Johnny Wong
SoftDev2 pd8
K18 --
2019-04-16
'''

# get Pythagorean triplets over the range 0-n
def get_ptriplets(n):
    # a can be any num
    # b > a
    # c > b
    triplets = [(a, b, c) for a in range(1, n + 1) for b in range(a, n + 1) for c in range(b, n + 1) if a**2 + b**2 == c**2]
    return triplets

print(get_ptriplets(10))
print(get_ptriplets(30))

# quicksort using list comprehension
def quicksort(arr):
    # arr is sorted if len is 1 or less
    if len(arr) <= 1:
        return arr
    # pivot can be any element
    pivot = arr[0]
    # partition array into elements less than pivot and continue to quicksort partition
    less = quicksort([x for x in arr[1:] if x < pivot])
    # partition array into elements greater than or equal to pivot and continue to quicksort partition
    greater = quicksort([x for x in arr[1:] if x >= pivot])
    return less + [pivot] + greater

test = [21, 53, 222, 2019, 2, 20, 18, 1, 2001, 15]
print(test)
print(quicksort(test))
