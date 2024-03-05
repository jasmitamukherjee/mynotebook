import React,{useState} from 'react'


export default function Signup(props) {

   
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})

    const handleSubmit= async(e)=>{
        e.preventDefault();
       const {name,email,password} =credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            
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
            localStorage.setItem('token',json.authToken)
            props.showAlert("Account created successfully","success")

        }
        else{
          props.showAlert("Invalid credentials","danger")

        }
            
          
         


    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})

    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
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
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
