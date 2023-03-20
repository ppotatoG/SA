import React, { useEffect } from 'react';

import { ESSA } from 'es-sa/dist/main';
import { SaBox } from 'es-sa/dist/component';
import 'es-sa/dist/sa.css';

const boxesData = [
  { type: 'fade' },
  { type: 'from-right' },
  { type: 'from-top' },
  { type: 'from-bottom' },
  { type: 'from-left' },
  { type: 'flip-right' },
  { type: 'flip-top' },
  { type: 'flip-bottom' },
  { type: 'flip-left' },
  { type: 'scale' },
  {
    type: 'from-top',
    duration: '2500',
    once: 'true',
  },
  {
    type: 'from-bottom',
    delay: '1000',
  },
  {
    type: 'from-right',
    once: 'false',
  },
  {
    type: 'scale',
    scale: '20',
    once: 'false',
    duration: '5000',
    time: 'ease-out',
  },
  {
    type: 'scale',
    duration: '5000',
    time: 'ease-in',
  },
  {
    type: 'fade',
    duration: '1500',
    delay: '500',
  },
];
const Boxes = () => {
  useEffect(() => {
    ESSA.init();
  }, []);

  return (
    <>
      {boxesData.map((box, boxIdx) => {
        return (
          <SaBox className="box" key={boxIdx} {...box}>
            <pre>
              {Object.entries(box).map((val) => {
                return `${val[0]}="${val[1]}"\n`;
              })}
            </pre>
          </SaBox>
        );
      })}
      <SaBox
        className="box"
        type="from-bottom"
        duration="200"
        delay="100"
        time="ease-in-out"
        once="false"
      >
        type="from-bottom"
        <br />
        duration="200"
        <br />
        delay="100"
        <br />
        time="ease-in-out"
        <br />
        once="false"
      </SaBox>
    </>
  );
};

export default Boxes;
