import React, { useEffect, useState, useRef, useContext } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null) // giving access to DOM elements
    const authContext = useContext(AuthContext)

    useEffect(() => {
        toggleBtnRef.current.click()
        console.log('[Cockpit.js] useEffect ')
        // HTTP request...
        return () => { // cleanup in react hook which is componentDidUnmount
            console.log('[Cockpit.js] cleanup useEffect!')
        }
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect ')
        // HTTP request...
        return () => { // cleanup in react hook which is componentDidUnmount
            console.log('[Cockpit.js] 2nd cleanup useEffect!')
        }
    })

    useEffect(() => {
        console.log('[Cockpit.js] useEffect update data on Cloud...')
        // HTTP request...
        setTimeout(() => {
            console.log('Saved data to cloud!')
        }, 1000)
    }, [props.persons]) // points to all the data that actually are used in the Effect like when our person changes


    useEffect(() => {
        console.log('[Cockpit.js] useEffect fetch data...')
        // HTTP request...
        const timer = setTimeout(() => {
            console.log('fetch data!')
        }, 1000)
        return () => {
            clearTimeout(timer)
            console.log('[Cockpit.js cleanup on Timer')
        }
    }, []) // runs just when the components renders for the first time
    // it means this Effect has no dependencies


    const assignedClasses = []
    let btnClass = ''

    if (props.showPersons) {
        btnClass = classes.Red
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red)
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a React App!</h1>
            <p>This is really working</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={() => props.clicked()}
            >Switch Name</button>
            {/* <AuthContext.Consumer>
                {(context) =>
                    <button onClick={context.login}>Login</button>
                }

            </AuthContext.Consumer> */}

            <button onClick={authContext.login}>Login</button>
        </div>
    )
}

export default React.memo(Cockpit)