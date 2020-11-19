import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const [referral, setReferral] = useState(null);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (referral.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    if (ref.current) {
      setReferral(ref.current);
      document.body.addEventListener("click", onBodyClick);
    }

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, [referral]);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => setSelected(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      <h4 className={"ui header " + selected.value}>{selected.label}</h4>
    </div>
  );
};

export default Dropdown;
