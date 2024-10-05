import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Slice/cartSlice";

function List() {
  const dispatch = useDispatch();

  const Dummy = [
    {
      id: "pr1",
      title: "Product 1",
      price: 100,
    },
    {
      id: "pr2",
      title: "Product 2",
      price: 200,
    },
    {
      id: "pr3",
      title: "Product 3",
      price: 400,
    },
  ];

  return (
    <div className="App">
      <h2>Products</h2>
      <ul>
        {Dummy.map((item) => (
          <li key={item.id}>
            {item.title} - Rs {item.price}
            <button onClick={() => dispatch(addItemToCart(item))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
