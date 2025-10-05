interface Product {
  readonly id: number;  // Це поле тільки для читання
  title: string;        // Це поле обов'язкове
  description?: string; // Це поле необов'язкове
}

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
