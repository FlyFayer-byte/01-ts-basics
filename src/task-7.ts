console.log("Task 7:");
// Завдання 7: Функція, що повертає Promise
// Напишіть функцію, яка повертає Promise, що резолвиться через 1 секунду з рядком "Hello from TS".
// Використайте типізацію для параметра, що повертається.
function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then(result => console.log(result));
