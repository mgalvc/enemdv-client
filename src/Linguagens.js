import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Linguagens extends Component {
    constructor() {
        super();
        this.handleKey = this.handleKey.bind(this);
    }

    componentDidMount() {
        document.getElementsByClassName("container")[0].focus();
        window.responsiveVoice.speak("O simulado de linguagens contém X questões. Pressione J para começar o seu simulado quando estiver pronto");
    }

    handleKey(event) {
        console.log(this.props.location.pathname);
    }

    render() {
        return (
            <div className="container" tabIndex="0" onKeyPress={this.handleKey}>
                <h2 className="text-center">Simulado de Linguagens</h2>

                <div className="row options text-center">
                    <div className="col">
                        <div className="container">
                            <h4>X QUESTÕES</h4>
                        </div>
                    </div>
                    <div className="col">
                        <Link to="/questoes-linguagens">
                            <button className="btn">COMEÇAR</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Linguagens;
