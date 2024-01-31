import React from "react";
import { Counter } from "./components/Counter";
import { Headings } from "./components/Headings";
import { Input } from "./components/Input";

export default function App () {
  return (
    <div>
      <Counter/>
      <Headings/>
      <Input/>
    </div>
  );
}
