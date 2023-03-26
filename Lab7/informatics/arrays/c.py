n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in arr:
    if i > 0:
        cnt += 1
print(cnt)