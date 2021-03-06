import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Humanas extends Component {
    constructor() {
        super();
        this.handleKey = this.handleKey.bind(this);
    }

    componentDidMount() {
        document.getElementsByClassName("container")[0].focus();
        window.responsiveVoice.speak("Você irá começar o simulado de ciências humanas. Pressione J para começar o seu simulado quando estiver pronto. Após iniciar pressione F a qualquer momento para encerrar a prova.");
    }

    handleKey(event) {
        if (event.key === 'j') {
            this.props.history.push('/questoes-humanas');
        }
    }

    render() {
        return (
            <div className="container" tabIndex="0" onKeyPress={this.handleKey}>
                <h2 className="text-center">Simulado de Humanas</h2>

                <div className="row options text-center">
                    <div className="col">
                        <div className="container">
                            <h4>45 QUESTÕES</h4>
                        </div>
                    </div>
                    <div className="col">
                    <Link to="/questoes-humanas">
                        <button className="btn">COMEÇAR</button>
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Humanas;
