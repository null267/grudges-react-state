import React, { useReducer } from 'react';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';
import { GrudgeContext } from './GrudgeContext';

const Application = () => {
  const { undo, isPast, redo, isFuture } = React.useContext(GrudgeContext);
 
  return (
    <div className="Application">
      <NewGrudge />
      <section>
        <button disabled={!isPast} onClick={undo}>
          Undo
        </button>
        <button disabled={!isFuture} onClick={redo}>
          Redo
        </button>
      </section>
      <Grudges />
    </div>
  );
};

export default Application;
