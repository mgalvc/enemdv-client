import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.options = this.options.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    componentDidMount() {
        document.getElementsByClassName("container")[0].focus();
        window.responsiveVoice.speak("Olá, bem vindo ao simulado Enem");
        this.options();
    }

    options() {
        window.responsiveVoice.speak("Pressione J para acessar o simulado de linguagens. Pressione K para acessar o simulado de ciências humanas. Pressione H para ouvir as opções novamente.");
    }

    handleKey(event) {
        console.log(this.props.location.pathname)
        if (event.key === 'j') {
            this.props.history.push('/linguagens');
        } else if (event.key === 'k') {
            this.props.history.push('/humanas');
        } else if (event.key === 'h') {
            this.options();
        }
    }

    render() {
        return (
            <div className="container" tabIndex="0" onKeyPress={this.handleKey}>
                <h2 className="text-center">Bem vindo ao EnemDV</h2>
                <h3 className="text-center">O que você quer estudar hoje?</h3>

                <div className="row text-center options">
                    <div className="col">
                        <Link to="/linguagens">
                            <button className="btn">Simulado de Linguagens</button>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/humanas">
                            <button className="btn">Simulado de Ciências Humanas</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
