console.log("Task 6:");

// Завдання 6: Функція з дженериками
// Напишіть функцію, яка приймає масив будь-якого типу та повертає перший елемент цього масиву.
// Використайте дженерики для забезпечення типобезпеки.

function getFirstElement<T>(arr: T[]): T | undefined {
    console.log(arr);
    return arr[0];
}

getFirstElement([1, 2, 3]);           // 1
getFirstElement(["a", "b", "c"]);     // "a"
getFirstElement([true, false, true]); // true
