import React from 'react'


const withWrappClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}

export default withWrappClass
