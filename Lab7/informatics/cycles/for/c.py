a = int(input())
b = int(input())
for i in range(a, b + 1):
    if (i ** 0.5) == int(i ** 0.5):
        print(i, end = " ")