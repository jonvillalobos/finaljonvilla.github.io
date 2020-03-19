import React, { Component } from 'react'

import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
            <div class="Kanto">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a class="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
                        Kanto Pokédex
                        </a>
                    <h2 class="nav-item">
                        <a class="nav-link navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" href="index.html">Pokédex Home</a></h2>
                    <h2 class="nav-item">
                        <a class="nav-link navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" href="Weather.html">Weather</a></h2>
                    </nav>
            </div>
            
        )
    }
}


