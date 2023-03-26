x = input()
x = x[::-1]
i = 0
while x[i] == "0":
    x = x[1:]
print(x)