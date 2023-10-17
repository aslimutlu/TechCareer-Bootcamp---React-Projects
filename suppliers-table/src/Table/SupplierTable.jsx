import React, { useState } from "react";
import { supplierData } from "../Data/suppliersData";

function SupplierTable() {
  const [supplier, setsupplier] = useState(supplierData);
  const [order, setorder] = useState("ASC")

  const sorting=(col)=> {
    if (order ==="ASC"){
      const sorted = [...supplier].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setsupplier(sorted);
      setorder("DESC")
    }

    if (order ==="DESC"){
      const sorted = [...supplier].sort((a,b)=>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setsupplier(sorted);
      setorder("ASC")
    }

  }

  const deleteSupplier = (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      var filteredSupplier = supplier.filter((x) => x.id !== id);
      setsupplier([...filteredSupplier]);
    }
  };

  return (
    <>
      <h1>Length: {supplier.length}</h1>
      <table className="table w3-stiped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th onClick={()=>sorting("companyName")}>Company Name</th>
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
