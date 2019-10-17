import React from 'react';
import './App.css';
import {BasicRouter} from './Config/index'
import {Provider} from 'react-redux'
import state from './Store/index'


function App() {
  return (
    <div className="App">
      <Provider store={state} >
        <BasicRouter />
      </Provider>
    </div>
  );
}

export default App;
