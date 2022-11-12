import React, { useState, useEffect } from "react";
import "./index.css";
export default () => {
  const [value1, setValue1] = useState(() => {
    const storageParse = JSON.parse(localStorage.getItem("storage"));
    return storageParse;
  });
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
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
              value={value1}
              onChange={(e) => {
                setValue1(() => {
                  const newValue1 = e.target.value;
                  const storageString = JSON.stringify(newValue1);
                  localStorage.setItem("storage", storageString);
                  console.log(localStorage.getItem("storage"));
                  return newValue1;
                });
              }}
            ></input>
          </td>
          <td>
            <input
              type="text"
              placeholder="Type your contact here..."
              value={value2}
              onChange={(e) => {
                setValue2((prev) => {});
              }}
            ></input>
          </td>
          <td>
            <input
              type="text"
              placeholder="Type your country..."
              value={value3}
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
