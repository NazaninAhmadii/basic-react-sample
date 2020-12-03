import React, { Component } from 'react'
import ErrorBoundary from '../../ErrorBoundry/ErrorBoundary'
import Person from './Person/Person';

class Persons extends Component {

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return null
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('[Persons.js] componnetDidUpdate')
    }

    //cleanup, it happens right before he component has removed
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
                click={() => this.props.clicked(index)}
                change={(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
            /></ErrorBoundary>
        }

        )
    }

}

export default Persons