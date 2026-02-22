import React, { useState } from 'react';
import Add from './add';
import Sub from './sub';
import Multiply from './multiply';
import Divide from './divide';

const Step1 = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [op, setOp] = useState(null);

  const disabled = a === '' || b === '';

  return (
    <>
      <h2>Interactive Calculator</h2>

      <div style={{ marginBottom: 8 }}>
        <label style={{ marginRight: 8 }}>
          A: <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
        </label>
        <label>
          B: <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setOp('add')} disabled={disabled} style={{ marginRight: 6 }}>Add</button>
        <button onClick={() => setOp('sub')} disabled={disabled} style={{ marginRight: 6 }}>Subtract</button>
        <button onClick={() => setOp('mul')} disabled={disabled} style={{ marginRight: 6 }}>Multiply</button>
        <button onClick={() => setOp('div')} disabled={disabled} style={{ marginRight: 6 }}>Divide</button>
        <button onClick={() => { setA(''); setB(''); setOp(null); }}>Clear</button>
      </div>

      <div>
        {op === 'add' && <Add a={a} b={b} />}
        {op === 'sub' && <Sub a={a} b={b} />}
        {op === 'mul' && <Multiply a={a} b={b} />}
        {op === 'div' && <Divide a={a} b={b} />}
      </div>
    </>
  );
};

export default Step1;
