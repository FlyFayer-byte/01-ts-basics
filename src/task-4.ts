// Завдання 4: Функція з необов'язковим параметром
// Напишіть функцію, яка приймає ім'я (string), вік (number) та необов'язковий параметр email (string).
// Функція повинна виводити інформацію про користувача. Якщо email не надано, функція повинна вивести лише ім'я та вік.
console.log("Task 4:");

function printUserInfo(
    name: string,
    age: number,
    email?: String
): void {   // вказує, що функція не повертає значення
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
