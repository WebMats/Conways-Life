import React from 'react'
import Game from '../containers/game';
import About from '../containers/about';
import Rules from '../containers/rules';

const main = () =>  {
    return (
        <>
            <div className="content-wrapper">
                <Game />
                <Rules />
            </div>
            <About />
        </>
    )
}


export default main;