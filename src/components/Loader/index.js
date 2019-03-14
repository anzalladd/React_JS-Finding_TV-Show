import React from 'react';
import loaderSrc from '../../logo.svg';

const loader = (props) => (
  <div>
    <img
    style={{width: 75}}
    alt="loader"
    src={loaderSrc}/>
  </div>
);

export default loader;
