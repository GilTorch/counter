import React from "react";

function Child({ onChange }) {
  console.log("Child rendered"); // 👈 We'll watch this log
  return (
    <div>
      <input placeholder="Type here..." onChange={onChange} />
    </div>
  );
}

export default Child;

// export default React.memo(Child);
