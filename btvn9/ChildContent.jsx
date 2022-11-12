import React from "react";
import "./index.css";
import { useContext } from "react";
import { ThemeChildContent } from "./App";
export default function ChildContent() {
  const theme = useContext(ThemeChildContent);
  return (
    <p className="childContent" style={{ backgroundColor: theme }}>
      ChildComponent: Đây là component con của MainContent
    </p>
  );
}
