import React from 'react';

import './Main.css'

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/47818941?v=4" />
                    <footer>
                        <strong> Kevin Silva </strong>
                        <p>Desenvolvedor desde Dezembro de 2012.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/47818941?v=4" />
                    <footer>
                        <strong> Kevin Silva </strong>
                        <p>Desenvolvedor desde Dezembro de 2012.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/47818941?v=4" />
                    <footer>
                        <strong> Kevin Silva </strong>
                        <p>Desenvolvedor desde Dezembro de 2012.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}