import React from 'react'

function ShowForm({ formData }) {
    console.log(formData)
    return (
        <div className='formData'>
        {
            formData.map((item) => (
                <div className='box'>
                    <p className={'dataValue'}><h6>name: </h6> {item.name}</p>
                    <p className={'dataValue'}><h6>password: </h6> {item.password}</p>
                    <p className={'dataValue'}><h6>email: </h6> {item.email}</p>
                    <p className={'dataValue'}><h6>numbr: </h6>{item.number}</p>
                </div>
            ))
        }
        </div>
    )
}

export default ShowForm