import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { observe } from './mock/observe';

import 'normalize.css';
import './index.css';

observe((knightPosition) =>
  ReactDOM.render(
    <React.StrictMode>
      <App knightPosition={knightPosition} />
    </React.StrictMode>,
    document.getElementById('root')
  )
);
