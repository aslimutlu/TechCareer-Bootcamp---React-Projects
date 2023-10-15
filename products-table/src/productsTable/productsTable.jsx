import React from "react";
import { productsData } from "../productsData/productsData";

function ProductsTable() {
  return (
    <>
      <table className="w3-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Supplier ID</th>
            <th>Category ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.supplierId}</td>
                <td>{item.categoryId}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductsTable;
