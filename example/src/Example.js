import React, { useState, useEffect, useRef } from 'react';
import { useMounted } from '@ithreat/use-mounted';

export const Example = ({ setResult }) => {
  const isMounted = useMounted();
  const [useMount, setUseMount] = useState(false);
  const checkIfMounted = useRef(useMount);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    checkIfMounted.current = useMount;
  }, [useMount]);

  const incrementCounter = () => {
    if (!isMounted()) {
      if (checkIfMounted.current) {
        setResult("SUCCESS: useMounted() prevented unmounted component from attempting state update");
        return;
      }
      setResult("FAILURE: unmounted component attempted state update");
    }
    else {
      setResult("CONTROL: mounted component can do state update");
    }

    setCounter((c) => c + 1);
  };

  return (
    <blockquote>
      <div>
        <button onClick={() => setTimeout(incrementCounter, 3000)}>Increment Counter (after 3s delay)</button> &bull;
        Counter = {counter}
      </div>
      <div>
        <button onClick={() => setUseMount((t) => !t)}>Turn <b>useMounted()</b> Hook {useMount ? 'Off' : 'On'}</button> &bull;
        useMount() is {useMount ? '' : 'not'} being used.
      </div>
    </blockquote>
  );
};
