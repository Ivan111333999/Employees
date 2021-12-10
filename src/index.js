import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/app';

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById('root')
);

