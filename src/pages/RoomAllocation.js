import React, { useState } from "react";

import CustomInputNumber from "../components/CustomInputNumber";

export default () => {
  const [val, setVal] = useState(22);

  return (
    <>
      <h1>hello world</h1>
      <CustomInputNumber
        min={0}
        max={30}
        step={3}
        name="name"
        value={val}
        disabled={false}
        onChange={(evt) => {
          setVal(Number(evt.target.value));
        }}
        onBlur={(evt) => console.log(evt)}
      />
    </>
  );
};
