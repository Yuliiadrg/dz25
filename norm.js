/* Level NORM
1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.*/
// let fiveDigitNumber = +prompt("Enter a five-digit integer number:", 19191);
// let arrayList = ("" + fiveDigitNumber).split("").map(Number);
// console.log(arrayList);
// console.log(arrayList[0]);
// let end = 0;
// if (fiveDigitNumber >= 10000 && fiveDigitNumber <= 99999) {
//     if (arrayList[0] === arrayList[4]) {
//         if (arrayList[1] === arrayList[3]) {
//             alert("This number is palindrome");
//             console.log(arrayList);
//         } else {
//             alert("This isn't a polindrome number");

//         }
//     } else {
//         alert("This isn't a polindrome number")
//     }
// } else {
//     alert("This is not a five-digit number");
// }

// Second variant
function isPolindrom(item) {
    const reverse = item.split("").reverse().join("");
    return reverse === item;
}
while (true) {
    userNumber = prompt(`Введіть число для перевірки`);
    if (userNumber === null) {
        continue;
    }
    if (isNaN(userNumber)) {
        continue;
    }
    break;
}
isPolindrom(userNumber) ? alert(`Ваше число є поліндромом`) : alert(`Ваше число НЕ є поліндромом`);
/*2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
        a) від 200 до 300 - знижка буде 3%; 
        b) від 300 до 500 - 5%;
        c) від 500 і вище - 7%. */
        // let purchaseAmount = +prompt("Enter amount of purchase:", 200);
        // let discount;
        // switch (true) {
        //     case (purchaseAmount >= 200 && purchaseAmount < 300):
        //         discount = purchaseAmount * 0.03;
        //         break;
        //     case (purchaseAmount >= 300 && purchaseAmount < 500):
        //         discount = purchaseAmount * 0.05;
        //         break;
        //     case (purchaseAmount >= 500):
        //         discount = purchaseAmount * 0.07;
        //         break;
        //     default:
        //         case (purchaseAmount < 200):
        //         alert("Sorry, there is no discount for your purchase amount");
        //         break;
        // }
        // if (discount !== undefined) {
        //     let totalAmount = purchaseAmount - discount;
        //     alert(`The saved money: ${Math.floor(discount)}, so total amount with discount is ${Math.floor(totalAmount)}`);
        // }

/*3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
При цьому також порахуй, скільки з них парних і непарних. 
Виведи статистику на екран. 
Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем*/
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;
    function num() {
        while (true) {
            num = +prompt(`Enter a number`);
            if (isNaN(userNumber2)) {
                alert(`You entered an invalid number`);
                continue;
            }
            break;
        }
        return userNumber2;
    }
    for (let i = 0; i < 10; i++) {
    if (num > 0) {
        positive++;
        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    } else if (num < 0) {
        negative++;
        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    } else {
        zero++;
    }
}
alert(`Amount positive number: ${positive}, 
negative numbers: ${negative}, 
zeros: ${zero}, 
even numbers: ${even}, 
odd numbers: ${odd}`);
/*4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день?» 
і так до тих пір, поки користувач натискає OK*/
const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
let i = 0;
while (true){
    let result = confirm(`${days[i%7]}. Хочеш побачити наступний день? `);
    if (!result) {
        break;
    }
    i++;
}