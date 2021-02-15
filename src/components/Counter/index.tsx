import React, { useState, forwardRef, useImperativeHandle } from 'react';

interface CounterRef{
  addCount(): void;
}

const Counter: React.ForwardRefRenderFunction<CounterRef> = (props,ref) => {
  const [count, setCount] = useState<number>(1)

  useImperativeHandle(ref, () => ({
      addCount() {
        setCount(value => value+1);
      }
    })
  )

  return (
    <span>Form total renders: {count}</span>
  );
}

export default forwardRef(Counter);
