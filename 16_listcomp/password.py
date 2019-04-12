# Johnny Wong
# SoftDev2 pd 8
# K16 -- Do You Even List?
# 2019-04-12



# password validator (min len of 6)
def validate(password):
    if len(password) > 6:
        UC_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        LC_CHAR = "abcdefghijklmnopqrstuvwxyz"
        has_upper = len([x for x in password if x in UC_CHAR]) > 0
        has_lower = len([x for x in password if x in LC_CHAR]) > 0
        has_num = len([1 for x in password if x.isdigit() ]) > 0
        return has_upper and has_lower and has_num
    return False

# password rater
def rate(password):
    if validate(password):
        UC_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        LC_CHAR = "abcdefghijklmnopqrstuvwxyz"
        S_CHAR = ".?!&#,;:-_*"
        def rate_char(char):
            if char in UC_CHAR:
                return 1
            if char in LC_CHAR:
                return 0
            if char in S_CHAR:
                return 2
            if char.isdigit():
                return 1
        rating = sum([rate_char(x) for x in password])
        if rating > 10:
            return 10
        return rating
    return 0

# tests
good_pass = "!iLoveLittleKittens123"
bad_pass = "iL!"
decent_pass = "1LOvEcats?"
print("Testing validator:")
print(validate(good_pass)) # True
print(validate(bad_pass)) # False
print(validate(decent_pass)) # True

print("Testing rater:")
print(rate(good_pass)) # 8
print(rate(bad_pass)) # 0
print(rate(decent_pass)) # 6
