def string_match(a, b):
  s = min(len(a), len(b))
  cnt = 0
  for i in range(s-1):
    ass = a[i:i + 2]
    bss = b[i:i + 2]
    if ass == bss:
      cnt = cnt + 1

  return cnt