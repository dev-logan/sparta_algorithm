const all_students = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"]
const present_students = ["정연", "모모", "채영", "쯔위", "사나", "나연", "미나", "다현"]

all_students.sort()
present_students.sort()

let answer
for (let i = 0; i < all_students.length; i++) {
    if (all_students[i] !== present_students[i]) {
        answer = all_students[i]
        break
    }
}

console.log(answer)