def string_splosion(str):
  res = ""
  for i in range(len(str)):
    res = res + str[:i + 1]
  return res