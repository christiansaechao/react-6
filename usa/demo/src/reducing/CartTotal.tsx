import ProblemCard from "../extras/ProblemCard";

// cart.reduce((acc, curr) => , default value)

type ItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const CartTotal = () => {
  const cart = [
    { id: 1, name: "Book", price: 10, quantity: 2 },
    { id: 2, name: "Pen", price: 3, quantity: 5 },
    { id: 2, name: "Coloring Pencil", price: 32, quantity: 10 },
    { id: 2, name: "Notebook", price: 66, quantity: 4 },
    { id: 2, name: "Backpack", price: 23, quantity: 88 },
  ];

  const total = cart.reduce((acc: number, item: ItemType) => {
    const curTotal = item.price * item.quantity;
    acc = acc + curTotal;
    return acc;
  }, 0);

  return (
    <ProblemCard
      title="Reduce 09 — Calculate totals"
      method="reduce"
      question="Use reduce() to calculate total cost: sum(price * quantity)."
      dataPreview={cart}
    >
      ${total}
    </ProblemCard>
  );
};
