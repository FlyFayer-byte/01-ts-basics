// Завдання 5: Функція з обмеженим набором рядкових літералів
// Напишіть функцію, яка приймає один параметр status,
// який може бути лише одним із трьох рядкових літералів: "loading", "success", або "error".
// Функція повинна виводити відповідне повідомлення залежно від значення status.
console.log("Task 5");

function logStatus(
    status: "loading" | "success" | "error"
): void {  // вказує, що функція не повертає значення 
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");
