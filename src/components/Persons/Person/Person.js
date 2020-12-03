import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Radium from 'radium'
// import Aux from '../../hoc/Aux'
import WithClass from '../../hoc/WithClass';



class Person extends Component {

    render() {
        console.log('[Person.js] rendering...')
        return (
            // <Aux>
            // <Fragment>
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.change} value={this.props.name}></input>
            </WithClass>
            // </Fragment>
            // </Aux>

        )
    }

}

export default Radium(Person);