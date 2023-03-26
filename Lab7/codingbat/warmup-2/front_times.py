def front_times(str, n):
  front = 3
  if front > len(str):
    front = len(str)
  front = str[:front]
  res = ""
  for i in range(n):
    res = res + front
  return res