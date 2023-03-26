def front3(str):
    end = 3
    if len(str) < end:
      end = len(str)
    front = str[:end]
    return front * 3 