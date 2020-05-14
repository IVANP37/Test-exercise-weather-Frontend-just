import React, { Component } from 'react';
import Seo from '../component/svg/seo.svg';
import People from '../component/svg/people.svg';
import './styles.css';


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" ><span>Test Client</span>Weather</a>
                        <ul className="user-menu">
                            <li className="dropdown pull-right">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown"><img src={People} /> Candidate <span className="caret"></span></a>

                                <ul className="dropdown-menu" role="menu">                                   
                                    <li>
                                        <a  href="/" >

                                            <img src={Seo} /> |

                                     Ivan M Portuondo</a>
                                    </li>

                                </ul>
                            </li>
                        </ul >
                    </div >

                </div >
            </nav >





        )
    }
}