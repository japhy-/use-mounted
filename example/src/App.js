import React, { useState } from 'react';
import { Example } from './Example';

const App = () => {
  const [ toggle, setToggle ] = useState(true);
  const [ result, setResult ] = useState('');

  return (
    <div>
      <h2>Instructions</h2>
      <ul>
        <li>Click the "Toggle Example Component" button to show or hide the <b>Example</b> component.</li>
        <li>Click the "Increment Counter" button to increment a state variable in the <b>Example</b> component after a 3 second delay.</li>
        <li>Click the "Turn useMounted() Hook On/Off" button to toggle the use of the <code>useMounted()</code> hook in the <b>Example</b> component.</li>
      </ul>

      <ul>
        <li>If you click the "Increment Counter" button, and do not click the "Toggle Example Component" button before 3 seconds have elapsed, the "Result" area will give a "CONTROL" message.</li>
        <li>If you click the "Increment Counter" button, and click the "Toggle Example Component" button before 3 seconds have elapsed, the <b>Example</b> component
            will attempt to update its state while unmounted.</li>
        <ul>
          <li>If the <code>useMounted()</code> hook is turned on, then when the state update is attempted it will be intercepted, and the "Result" area will give a "SUCCESS" message.</li>
          <li>If the <code>useMounted()</code> hook is turned off, then when the state update is attempted, the "Result" area will give a "FAILURE" message.</li>
        </ul>
      </ul>
      <div><button onClick={() => setToggle((t) => !t)}>Toggle <b>Example</b> Component</button></div>
      <div>Result: {result}</div>
      <div>
        <h3>Example Component:</h3>
        {toggle && <Example setResult={setResult}/>}
      </div>
    </div>
  );
};

export default App;