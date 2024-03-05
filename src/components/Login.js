import React, { useState } from 'react'

export default function Login(props) {

    const [credentials, setCredentials] = useState({email:"",password:""})
 
   



    const handleSubmit= async(e)=>{

        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})

          });
          const json= await response.json();
          console.log(json);
          if (json.success){
            //save the auth token and redirect
            localStorage.setItem('token',json.authToken)
            props.showAlert("Logged in successfully","success")

            
          }
          else{
            // alert("Invalid credentials")
            props.showAlert("Invalid details","danger")

          }


    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}
