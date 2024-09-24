# สอน Loop ได้ดีที่สุด -> Factorial
# 5! -> 120 -> 5 x 4 x 3 x 2 x 1

inp = int(input('Enter a number : '))
base = inp

# x + 0 = x

# x * 0 = 0
# x * 1 = x 
res = 1

while inp > 0:
    res = res * inp
    inp -= 1

# for i in range(base):
    # res = res * (i + 1)

print('Factorial of ' + str(base) + ' is ' + str(res))
