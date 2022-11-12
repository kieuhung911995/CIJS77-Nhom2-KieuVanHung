import React from "react";
import "./index.css";
import ChildContent from "./ChildContent";
export default function MainContent() {
  return (
    <>
      <h1 className="mainContent">
        MainComponent: Đây là component con của App
      </h1>
      <div className="flex">
        <ChildContent />
      </div>
    </>
  );
}
