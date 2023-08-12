import "./styles.css";
import React from "react";
import TableComponent from "./TableComponent";

// const ordersData = [
//   { id: 1, ordername: 'Order 1', orderstatus: 'completed' },
//   { id: 2, ordername: 'Order 2', orderstatus: 'pending' },
//   { id: 3, ordername: 'Order 3', orderstatus: 'aborted' },
//   // ... other orders
// ];

export default function App() {
  return (
    <div className="App">
      <h1>Order Table</h1>
      <TableComponent />
    </div>
  );
}
