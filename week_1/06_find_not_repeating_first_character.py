input = "abacabade"


# def find_not_repeating_character(string):
#     # 이 부분을 채워보세요!
#     alphabet_count = {}
#     for alphabet in input:
#         if alphabet in alphabet_count.keys():
#             alphabet_count[alphabet] += 1
#         else:
#             alphabet_count[alphabet]
#     return "_"


# result = find_not_repeating_character(input)
# print(result)

alphabet_count = {}
for alphabet in input:
    if alphabet in alphabet_count.keys():
        alphabet_count[alphabet] += 1
    else:
        alphabet_count[alphabet] = 1

print(alphabet_count.items())

# 미완. 현재 익숙한 자바스크립트로 풀기로