import React from 'react';
import DOM from 'react-dom';

const Hello = () => {
  return (
    <div>
      <h1>
        Hello world
      </h1>
      from bundled.js
    </div>
  )
};

DOM.render(<Hello />, document.querySelector('div#root'));
