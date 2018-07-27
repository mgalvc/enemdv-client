import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

class Finish extends Component {
    componentDidMount() {
        document.getElementsByClassName("container")[0].focus();
        window.responsiveVoice.speak("Você terminou a prova com." + this.props.match.params.hits + ". Acertos. Pressione J para voltar para a página inicial.")
    }

    render() {
        return (
            <div className="container" tabIndex="0" onKeyPress={this.handleKey}>
                <h2 className="text-center">Você terminou a prova com <h1>{this.props.match.params.hits}</h1> acertos</h2>

                <div className="row text-center options">
                    <div className="col">
                        <Link to="/">
                            <button className="btn">Voltar para a Página Inicial</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Finish
