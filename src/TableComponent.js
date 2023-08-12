import React, { useState } from "react";

const ordersData = [
  { id: 1, ordername: "Order 1", orderstatus: "completed" },
  { id: 2, ordername: "Order 2", orderstatus: "pending" },
  { id: 3, ordername: "Order 3", orderstatus: "aborted" }
  // ... other orders
];

const TableComponent = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filterOrders =
    statusFilter === "all"
      ? ordersData
      : ordersData.filter((order) => order.orderstatus === statusFilter);

  return (
    <>
      <label>
        Select The orser:
        <select onChange={handleFilterChange}>
          <option>all</option>
          <option value="completed">completed</option>
          <option>pending</option>
          <option>aborted</option>
        </select>
      </label>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>OrderName</th>
            <th>OrderStatus</th>
          </tr>
        </thead>
        <tbody>
          {filterOrders.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.ordername}</td>
              <td>{item.orderstatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TableComponent;
