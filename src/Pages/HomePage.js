import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage(){
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                  Hi,I am  
                  <span>
                         Lala Huseynova
                </span>
                </h1>
                <p className="h-sub-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                       <FontAwesomeIcon icon ={faFacebook} className="icon fb" />
                    </Link>
                    <Link  className="icon-holder">
                       <FontAwesomeIcon icon ={faGithub} className="icon gt" />
                    </Link>
                    <Link  className="icon-holder">
                       <FontAwesomeIcon icon ={faLinkedin} className="icon lk"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;