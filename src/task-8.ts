console.log("Task 8:");
// Завдання 8: Функція з асинхронним запитом
// Напишіть асинхронну функцію, яка робить GET-запит до публічного API (наприклад, JSONPlaceholder)
// для отримання списку постів. Функція повинна повертати Promise, що резолвиться з масивом постів.
// Використайте типізацію для відповіді API.
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
