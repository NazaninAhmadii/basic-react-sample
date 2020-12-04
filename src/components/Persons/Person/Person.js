import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Radium from 'radium'
// import Aux from '../../hoc/Aux'
import WithClass from '../../hoc/WithClass';
import PropTypes from 'prop-types'



class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef() // in react 16.3
    }

    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            // <Aux>
            // <Fragment>
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => {inputEl.focus()}} in old react
                    ref={this.inputElementRef}
                    type='text' onChange={this.props.change} value={this.props.name}></input>
            </WithClass>
            // </Fragment>
            // </Aux>

        )
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default Radium(Person);