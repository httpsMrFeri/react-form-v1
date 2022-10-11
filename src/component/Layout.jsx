import React , {useState} from 'react'
import SideBar from './SideBar'
import Form from './Form'
import ShowForm from './ShowForm'
import Circle from './Circle'

function Layout() {

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState([{name:"admin",password:"admin",email:"admin@gmail.com",number:"123456789"}]);
    
    function HandlerShowForm(formData){
        console.log(formData)
        formData == true ? setShowForm(false) : setShowForm(true)
    }

    return (
        <React.Fragment>
            <Circle/>
            <SideBar
                HandlerShowForm = {HandlerShowForm}
            />
            <main>
            {
                showForm == false ? 
                <Form
                    setFormData = {setFormData}
                    formData = {formData}
                /> 
                : 
                <ShowForm
                    formData = {formData}
                />
            }
            </main>
        </React.Fragment>
    )
}

export default Layout