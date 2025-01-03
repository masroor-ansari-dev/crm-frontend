import React from "react";
import "./Entry.page.css";
import { LoginForm } from "../../components/Login/Login.Comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import {useState} from "react"

export const Entry = () =>{

    const [ email , setEmail ] = useState("")
    const [password , setPassword ] = useState ("") 
    const [ frmLoad , setFormLoad ] = useState('login')

    const handleOnChange = (e) => {
        const {name , value} = e.target
        console.log(name,value)
        switch(name){
            case 'email' :
                setEmail(value)
                break;
                
                case 'password' :
                setPassword(value)
                break;

                case 'default' :
                    break;
        }
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(!email || !password){
            alert("Fill up the form pease")
        }
        //Submit the form details
    }

    const frmSwitcher = (frmType) =>{
        if(frmType)
              setFormLoad(frmType)
        else
            setFormLoad('login')
    }

   

    return (
        <div className="entry-page bg-info">
            
            <div className="form-box">
                { frmLoad === 'login' && (
                 <LoginForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} 
                 frmSwitcher={frmSwitcher}
                 email={email} password={password}/>
               )}
               { frmLoad === 'reset' && (
                 <ResetPassword handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} 
                 frmSwitcher={frmSwitcher}
                 email={email} password={password}/>
               ) }
            </div>
        </div>
    )
}