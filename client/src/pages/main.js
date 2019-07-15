import React from 'react'
import Game from '../containers/game';
import About from '../containers/about';
import Rules from '../containers/rules';

const main = () =>  {
    return (
        <>
            <Game />
            <Rules />
            <About />
        </>
    )
}


export default main;