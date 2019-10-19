import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

export default Counter
