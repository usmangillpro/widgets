import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [openNav, setOpenNav] = useState(true);
  return (
    <div>
      <button onClick={() => setOpenNav(!openNav)}>Toggle Dropdown</button>
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
      {openNav ? (
        <Dropdown
          selected={selected}
          setSelected={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
