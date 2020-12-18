import React from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = styled.button`
background: ${({ theme }) => theme.buttonDarkModeColor};
color: ${({ theme }) => theme.text};
`;

const SignUpButton = ({theme, toggleTheme}) => {
    let labelButton = [theme === 'lightTheme' ? 'Tema escuro' : 'Tema claro'].join(' ');
      return (
          <Button onClick={toggleTheme} >
            {labelButton}
          </Button>
      );
  };


  export default SignUpButton;