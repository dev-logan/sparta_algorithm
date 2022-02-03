class Person {
    constructor(param_name) {
        this.name = param_name
    }

    talk() {
        return console.log('안녕하세요 저는 ' + this.name + ' 입니다')
    }
}

const person_1 = new Person("유재석")
console.log(person_1)
console.log(person_1.name)
person_1.talk()