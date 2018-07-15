import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    componentDidMount() {
        document.getElementsByClassName("container")[0].focus();

        window.responsiveVoice.speak("Olá, bem vindo ao simulado Enem");
        window.responsiveVoice.speak("Pressione J para acessar o simulado de linguagens");
    }

    handleKey(event) {
        if (event.key == 'j')
            window.responsiveVoice.speak("Você selecionou a prova de linguagens");
    }

    render() {
        return (
            <div className="container" tabIndex="0" onKeyPress={this.handleKey}>
                <h2 className="text-center">Bem vindo ao EnemDV</h2>
                <h3 className="text-center">O que você quer estudar hoje?</h3>

                <div className="row text-center options">
                    <div className="col">
                        <Link to="/simulado">
                            <button className="btn">Simulado de Linguagens</button>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/simulado">
                            <button className="btn">Simulado de Ciências Humanas</button>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/simulado">
                            <button className="btn">Simulado Completo</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
