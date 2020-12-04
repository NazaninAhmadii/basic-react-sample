import React from 'react'


const withWrappClass = (WrappedComponent, className) => {
    return props => (// don't forget to pass props to the component
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default withWrappClass
