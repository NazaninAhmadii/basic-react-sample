import React from 'react'
import ErrorBoundary from '../../ErrorBoundry/ErrorBoundary'
import Person from './Person/Person';

const Persons = (props) => {

    return props.persons.map((person, index) => {
        return <ErrorBoundary key={person.id}><Person
            click={() => props.clicked(index)}
            change={(event) => props.changed(event, person.id)}
            name={person.name}
            age={person.age}
        /></ErrorBoundary>
    }

    )
}

export default Persons