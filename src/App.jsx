import React, { useState, useEffect } from "react";
import "./index.css";
export default () => {
  if (!localStorage.getItem("dataUser")) {
    localStorage.setItem(
      "dataUser",
      JSON.stringify({ company: "", contact: "", country: "" })
    );
  }
  const data = JSON.parse(localStorage.getItem("dataUser"));
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  console.log(value1);
  console.log(localStorage.getItem("dataUser"));
  console.log(data);

  useEffect(() => {
    localStorage.setItem(
      "dataUser",
      JSON.stringify({ ...data, company: value1 })
    );
  }, [value1]);
  useEffect(() => {
    localStorage.setItem(
      "dataUser",
      JSON.stringify({ ...data, contact: value2 })
    );
  }, [value2]);
  useEffect(() => {
    localStorage.setItem(
      "dataUser",
      JSON.stringify({ ...data, country: value3 })
    );
  }, [value3]);
  return (
    <>
      <h2>HTML Table</h2>

      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Type your company's name here..."
              value={data.company}
              onChange={(e) => {
                setValue1(e.target.value);
              }}
            ></input>
          </td>
          <td>
            <input
              type="text"
              placeholder="Type your contact here..."
              value={data.contact}
              onChange={(e) => {
                setValue2(e.target.value);
              }}
            ></input>
          </td>
          <td>
            <input
              type="text"
              placeholder="Type your country..."
              value={data.country}
              onChange={(e) => {
                setValue3(e.target.value);
              }}
            ></input>
          </td>
        </tr>
      </table>
    </>
  );
};
