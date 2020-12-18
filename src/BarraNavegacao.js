import { ThemeProvider } from 'styled-components';

import { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';

import SignUpButton from "./SignUpButton";
import { GlobalStyle } from './GlobalStyle';

import { lightTheme, darkTheme } from './theme';

import 'bootstrap/dist/css/bootstrap.min.css';



class BarraNavegacao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: 'lightTheme',
        };

    }


    toggleTheme = () => {
        if (this.state.theme === 'lightTheme') {
            this.setState({
                theme: "darkTheme",
            });
        } else {
            this.setState({
                theme: "lightTheme",
            });
        }
    }


    render() {
        return (
            <ThemeProvider theme={this.state.theme === 'lightTheme' ? lightTheme : darkTheme}>
            <Navbar>
            <GlobalStyle/>
                    <Nav theme={this.state.theme === 'lightTheme' ? lightTheme : darkTheme}>
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#destaques">Destaques</Nav.Link>
                        <Nav.Link href="#aboutus">Sobre nós</Nav.Link>
                        <Nav.Link href="#planos">Planos</Nav.Link>
                        <Nav.Link href="#midias">Mídias</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                    </Nav>
                    <SignUpButton theme={this.state.theme} toggleTheme={this.toggleTheme} />
            </Navbar>
            </ThemeProvider>
        );
    }
}

export default BarraNavegacao;