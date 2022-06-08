import React, { useCallback } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  > input {
    width: 80px;
    font-size: 16px;
    text-align: center;
  }
`;

const Btn = styled.div`
  border: 1px solid blue;
  border-radius: 4px;
  width: 48px;
  height: 48px;
  font-size: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};

  background-color: ${(props) => (props.disabled ? "lightgray" : "white")};
  color: ${(props) => (props.disabled ? "gray" : "black")};
`;

export default (props) => {
  const { min, max, step, name, value, disabled, onChange, onBlur } = props;

  const onSubClick = useCallback(() => {
    emitChange(value - step > min ? value - step : min);
  }, [min, step, value]);

  const onAddClick = useCallback(() => {
    emitChange(value + step < max ? value + step : max);
  }, [max, step, value]);

  const emitChange = useCallback((v) => {
    if (v >= min && v <= max && disabled === false) {
      onChange({
        target: {
          name,
          value: v,
        },
      });
    }
  }, []);

  return (
    <Div>
      <Btn onClick={onSubClick} disabled={value <= min || disabled}>
        -
      </Btn>
      <input
        inputMode="numeric"
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onBlur={onBlur}
        disabled={disabled}
        onChange={(e) => emitChange(e.target.value)}
      />
      <Btn onClick={onAddClick} disabled={value >= max || disabled}>
        +
      </Btn>
    </Div>
  );
};
