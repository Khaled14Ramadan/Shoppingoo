import { Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Signin = () => {
  const { register,  handleSubmit, formState: { errors } } = useForm();
 

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <Form className="w-50" onSubmit={handleSubmit(onSubmit)}>
      {/* Email input */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-white">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email",
            {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            }
          )}
        />
        {
          errors?.email?.type === 'required'
          &&
          <p className="text-danger">Email is required</p>
        }
        {
          errors?.email?.type === 'pattern'
          &&
          <p className="text-danger">Email is invalid</p>
        }
      </Form.Group>

      {/* Password input */}
      <Form.Group className="mb-3" controlId="formBasicPassword"> 
        <Form.Label className="text-white">Password</Form.Label>
        <Form.Control type="password"
          placeholder="Password"
          {...register("Password",
            {
              required: true,
            }
          )}
          />
          {
            errors?.Password?.type === 'required'
            &&
            <p className="text-danger">Password is required</p>
          }
      </Form.Group>

   {/* submit */}
   <div className="d-flex">
        <Button variant="primary" className="w-50" type="submit">
          Signin
        </Button>
        <p className="ms-4 text-white">Don't have account ? <Link to='/signup'>Sigup</Link></p>
        
      </div>
    </Form>
  )
}

export default Signin;