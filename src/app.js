import React, { useState, useMemo } from "react";

import RoomAllocation from "./pages/RoomAllocation";

export default () => {
  const guest = 10;
  const room = 3;

  const [result, setResult] = useState([]);

  const remain = useMemo(() => {
    const total = result.reduce((acc, curr) => {
      return acc + curr.adult + curr.child;
    }, 0);

    return guest - total;
  }, [result]);

  return (
    <>
      <h3>
        住房人數: {guest} 人 / {room} 房
      </h3>
      <h3 style={{ background: "#6ed1e0", padding: 6 }}>
        尚未分配人數: {remain} 人
        {remain < 0 && (
          <p style={{ color: "red" }}>{`(人數過多，上限 ${guest})`}</p>
        )}
      </h3>
      <RoomAllocation
        guest={guest}
        room={room}
        onChange={(val) => {
          setResult(val);
        }}
      />
    </>
  );
};
