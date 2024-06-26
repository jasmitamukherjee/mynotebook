import React,{useState} from 'react'
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';


export default function Signup(props) {
  
const navigate=useNavigate()

   
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})

    const handleSubmit= async(e)=>{
      
        e.preventDefault();
       const {name,email,password} =credentials;
        const response = await fetch("https://mynotebook-back-fty4.onrender.com/api/auth/createuser", {
            
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify({name,email,password})

          });
          const json= await response.json();
          console.log(json);
          
          if(json.success){
            //save the auth token and redirect
            // localStorage.setItem('token',json.authToken)
            props.showAlert("Account created successfully","success")
            navigate("/login")

        }
        else{
          props.showAlert("Invalid credentials","danger")

        }
            
          
         


    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})

    }

  return (
    <div className='container mt-2'>
     
        <form onSubmit={handleSubmit}>
        <h2>
           Sign Up to continue to myNotebook
          </h2>
        <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="name" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" placeholder="name"/>
    
  </div>

  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email"  onChange={onChange}  aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="email"  className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
 

  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required  placeholder="Password"/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required placeholder="Password"/>
  </div>
 
  <button type="submit" className="btn btn-dark btn-outline-light my-2">Submit</button>
</form>
    </div>
  )
}
