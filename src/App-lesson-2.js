import React from "react";
import "./App.css";

import { Product } from "./Product";

const List = ({ list }) =>
  list.map((item) => (
    <React.Fragment key={item.id}>
      <Product product={item} />
      <Product product={item} />
      <Product product={item} />
    </React.Fragment>
  ));

function App() {
  const data = [
    {
      id: 1,
      name: "iPhone 13",
      price: 199,
      inStock: true,
    },
    {
      id: 2,
      name: "iPhone 14",
      price: 999,
      inStock: true,
    },
    {
      id: 3,
      name: "iPhone 15",
      price: null,
      inStock: true,
    },
  ];

  // const list = data.map((item) => <Product product={item} />);

  return (
    <div className="App">
      <h1>Сторінка продукту</h1>

      <List list={data} />

      {/* {data.map(List)} */}
    </div>
  );
}

export default App;
