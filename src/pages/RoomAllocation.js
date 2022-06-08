import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Room from "../components/Room";

export default (props) => {
  const maxGuestOfRoom = 4;
  const { room, onChange } = props;

  const [result, setResult] = useState(
    Array.from(Array(room).keys()).map((v) => ({
      adult: 1,
      child: 0,
    }))
  );

  useEffect(() => {
    onChange(result);
  }, result);

  return (
    <>
      {Array.from(Array(room).keys()).map((v) => (
        <Room
          key={v}
          max={maxGuestOfRoom}
          onChange={(r) => {
            let c = JSON.parse(JSON.stringify(result));
            c[v] = r;
            setResult(c);
          }}
        />
      ))}
    </>
  );
};
