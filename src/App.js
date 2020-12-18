import './App.css';
import { ThemeProvider } from 'styled-components';

import InputText from './inputText';
import React, { Component } from 'react';
import { lightTheme, darkTheme } from './theme';

import SignUpButton from './SignUpButton';
import { GlobalStyle } from './GlobalStyle';

import BarraNavegacao from './BarraNavegacao';
import Carrossel from './Carrossel';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme: 'lightTheme',
    };

  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme === 'lightTheme' ? lightTheme : darkTheme}>
        <GlobalStyle/>
          <div className="App">
            <BarraNavegacao />
            <Carrossel />
          </div>
      </ThemeProvider>
    );
  }
}


export default App;
