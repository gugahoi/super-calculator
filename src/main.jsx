import React from 'react';
import ReactDom from 'react-dom';

import { sum } from './sum';

class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {
            x: 0,
            y: 0
        };
    }

    update(event){
        let val = event.target.value,
            name = event.target.name
        this.setState({ [name]: parseFloat(val) || 0 });
    }

    render() {
        let x = this.state.x,
            y = this.state.y;

        return (
            <div>
                <h1>The Super Calculator</h1>
                <p>
                    <input type="number" name="x" value={ x } onChange={ this.update }/> 
                    + 
                    <input type="number" name="y" value={ y } onChange={ this.update }/> 
                    = { sum(x,y) }
                </p>
            </div>
        );
    }
} 

ReactDom.render(<App />, document.querySelector('#main'));
