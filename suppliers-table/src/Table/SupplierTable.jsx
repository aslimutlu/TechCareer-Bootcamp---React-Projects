import React, { useState } from "react";
import { supplierData } from "../Data/suppliersData";

function SupplierTable() {
  const [supplier, setsupplier] = useState(supplierData);

  const deleteSupplier = (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      var filteredSupplier = supplier.filter((x) => x.id !== id);
      setsupplier([...filteredSupplier]);
    }
  };

  return (
    <>
      <h1>Length: </h1>
      <table className="w3-table w3-stiped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Country</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {supplier.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td>{item.address.country}</td>
                <td>
                  <button
                    onClick={() => deleteSupplier(item.id)}
                    className="w3-button w3-red"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default SupplierTable;
