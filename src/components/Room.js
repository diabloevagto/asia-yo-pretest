import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CustomInputNumber from "../components/CustomInputNumber";

const Div = styled.div`
  border-top: 1px solid black;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default (props) => {
  const { max, onChange } = props;

  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);

  useEffect(() => {
    onChange({
      adult,
      child,
    });
  }, [adult, child]);

  return (
    <Div>
      <h3>
        房間: {adult + child} 人
        {adult + child > max && (
          <p style={{ color: "red" }}>{`(人數過多，上限 ${max})`}</p>
        )}
        {adult === 0 && child > 0 && (
          <p style={{ color: "red" }}>最少要有 1 位大人</p>
        )}
      </h3>
      <Row>
        <div>
          <p>大人</p>
          <p>年齡: 20+</p>
        </div>
        <CustomInputNumber
          min={0}
          max={max}
          step={1}
          name="adult"
          value={adult}
          disabled={false}
          onChange={(evt) => {
            setAdult(Number(evt.target.value));
          }}
          onBlur={(evt) => console.log(evt)}
        />
      </Row>
      <Row>
        <div>
          <p>小孩</p>
        </div>
        <CustomInputNumber
          min={0}
          max={max - 1}
          step={1}
          name="child"
          value={child}
          disabled={adult < 1}
          onChange={(evt) => {
            setChild(Number(evt.target.value));
          }}
          onBlur={(evt) => console.log(evt)}
        />
      </Row>
    </Div>
  );
};
