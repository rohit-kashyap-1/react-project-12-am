import { render } from '@testing-library/react'
import React from 'react'

//props =  parameters
function ContactComponent(props) {
    return (
        <>
           <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-6'>
                <h1>{props.title}</h1>
                </div>
                <div className='col-md-6'></div>
                
            </div>
           </div>
        </>
    )
}

export default ContactComponent