'''
Team Papayas - Mohtasim Howlader, Johnny Wong
SoftDev2 pd8
K20 -- Reductio ad Absurdum
2019-04-18
'''

from functools import reduce

TEXT = "romeo.txt"

'''
Return frequency of a word or phrase in the Tragedy of Romeo and Juliet
'''
def freq(word):
    with open(TEXT) as f:
        text = f.read().lower()
    return len([x for x in range(len(text) - len(word)) if text[x: x + len(word)] == word.lower()])

# test answers from CTRL + F through text

print(freq("Romeo")) # --> 321
print(freq("Juliet")) # --> 195
print(freq("i love")) # --> 6

'''
Return most frequent word in Tragedy of Romeo and Juliet
'''
def mostFreq():
    with open(TEXT) as f:
        text = f.read().lower()
    words = {i for i in text.split()} # set comprehension
    mostFreqWord = reduce(lambda a, b: a if text.count(a) > text.count(b) else b, words)
    return mostFreqWord, text.count(mostFreqWord)

print(mostFreq()) # --> 'o', 10269???
