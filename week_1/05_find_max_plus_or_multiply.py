input = [0, 3, 5, 6, 1, 2, 4]


def find_max_plus_or_multiply(array):
    # 이 부분을 채워보세요!
    result = max(array[0] * array[1], array[0] + array[1])
    for i in range(2, len(array)):
        result = max(result * array[i], result + array[i])
    return result

result = find_max_plus_or_multiply(input)
print(result)