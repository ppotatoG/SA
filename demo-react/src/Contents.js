import React from 'react';

import Boxes from './Boxes';

const Contents = () => {
  const mainTextArr = ['easy', 'simple'];
  const mainText = mainTextArr.map((text, idx) => {
    return <li key={idx}>{text}</li>;
  });

  return (
    <div className="contents">
      <section id="main">
        <h2>
          <div className="mainText">
            <ul>{mainText}</ul>
          </div>
          <p>Scroll Animation</p>
        </h2>
      </section>

      <section>
        <Boxes />
      </section>
    </div>
  );
};

export default Contents;
