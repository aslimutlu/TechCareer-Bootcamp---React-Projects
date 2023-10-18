import React, { useEffect, useState } from "react";
import axios from "axios";

function SuppliersTable() {
  const [suppliers, setsuppliers] = useState([]);

  useEffect(() => {
    getSuppliers();
  }, []);

  const getSuppliers = () => {
    axios.get("https://northwind.vercel.app/api/suppliers").then((x) => {
      setsuppliers(x.data);
    });
  };

  const deleteSupplier = (id) => {
    var result = window.confirm("Are you sure you want to delete?");
    if (result)
      axios
        .delete("https://northwind.vercel.app/api/suppliers" + id)
        .then((x) => {
          getSuppliers();
        });
  };

  return (
    <>
      <h1 style={{color:"#ffeeba"}} >Suppliers Lenght: {suppliers.length}</h1>
      <table style={{textAlign:"center"}} className="table w3-stiped table-bordered table-hover">
        <thead className="table-warning">
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Country</th>
            <th>City</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="justify-content-center">
          {suppliers.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td>{item.address.country}</td>
                <td>{item.address.city}</td>
                <td>
                  <button className="btn btn-outline-warning table-warning  " onClick={() => deleteSupplier(item.id)}>
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

export default SuppliersTable;
