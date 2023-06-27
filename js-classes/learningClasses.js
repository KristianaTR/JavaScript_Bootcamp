// class Student {
//     constructor (name, points) {
//         this.name = name;
//         this.points = points;
//     }

//     sayInformation() {
//         console.log (`Student: ${this.name} got: ${this.points} points`);
//     }
// }

// const student1 = new Student ('Mustafa', 55);
// const student2 = new Student ('Denis', 88);

// student1.sayInformation();

// class BankAccount {
//     constructor(name, number, money) {
//         this.accountHolder = name;
//         this.accountNumber = number
//         this.balance = money
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }

//     withdraw(amount) {
//         if (amount <= this.balance) {
//             this.balance -= amount;
//         } else {
//             console.log(
//                 `Account ${this.accountHolder} does not have enough balance remaining!`
//             )
//         }
//         this.balance -= amount;
//     }
// }

// const account1 = new BankAccount('Mustafa', 123135454645132, 500);
// account1.withdraw(1500);
// console.log("🚀 ~ file: learningClasses.js:35 ~ account1.withdraw(1500):", account1.withdraw(1500))

class Rectangle {
    constructor (height, wigth) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }

    getPerimeter() {
        return (this.height + this.width)*2;
    }
}

const rectangle1 = new Rectangle(10, 20);

rectangle1.getArea();
rectangle1.getPerimeter();

