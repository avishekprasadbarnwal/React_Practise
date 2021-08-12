import React from 'react';

// number of props in first function in this case is as per our choice and the requirement
const withClass = (WrappedComponent, className) => {
    return(
        (props) => {
            return(
                <div className={className}>
                    <WrappedComponent {...props}></WrappedComponent>
                </div>
            )
        }
    )
}

export default withClass;
