import React from 'react'

function Alert(props) {
    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div>
                <div  className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.type}</strong> : {props.alert.msg}
                </div>
            </div>}
        </div>
    )
}

export default Alert