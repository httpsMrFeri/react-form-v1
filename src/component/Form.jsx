import React from 'react'

function Form({ setFormData, formData }) {
    let data = { name: "", password: "", email: "", number: "" }, form = document.querySelector('.form form')
    // form.addEventListener('submit', () => {
    //     let name = document.querySelector('.form form #name').value,
    //         password = document.querySelector('.form form #password').value,
    //         email = document.querySelector('.form form #email').value,
    //         number = document.querySelector('.form form #number').value,
    //         data = {name:name,password:password,email:email,number:number}

    //     setFormData([...formData,data])
    // })

    function NameUnchange(event) {
        data.name = event.target.value
    }
    function PasswordUnchange(event) {
        data.password = event.target.value
    }
    function EmailUnchange(event) {
        data.email = event.target.value
    }
    function NumberUnchange(event) {
        data.number = event.target.value
    }

    function onSubmitForm(event) {
        event.preventDefault();
        setFormData([...formData, data])
        console.log(formData)
        form.reset()
    };

    return (
        <div className='form'>
            <form onSubmit={onSubmitForm}>
                <div class="input-container ic1">
                    <input type={'text'} id={'name'} className={"input"} autoComplete={'off'} placeholder={' '} onChange={NameUnchange}></input>
                    <div class="cut"></div>
                    <label for={"text"} className={"placeholder"}>First name</label>
                </div>
                <div class="input-container ic1">
                    <input type={'password'} id={'password'} className={"input"} autoComplete={'off'} placeholder={' '} onChange={PasswordUnchange}></input>
                    <div class="cut"></div>
                    <label for={"password"} className={"placeholder"}>Password</label>
                </div>
                <div class="input-container ic1">
                    <input type={'email'} id={'email'} className={"input"} autoComplete={'off'} placeholder={' '} onChange={EmailUnchange}></input>
                    <div class="cut"></div>
                    <label for={"email"} className={"placeholder"}>Email</label>
                </div>
                <div class="input-container ic1">
                    <input type={'number'} id={'number'} className={"input"} autoComplete={'off'} placeholder={' '} onChange={NumberUnchange}></input>
                    <div class="cut"></div>
                    <label for={"number"} className={"placeholder"}>Phone Number</label>
                </div>
                <input type={'submit'} className={"submit"}></input>
            </form>
        </div>
    )
}

export default Form