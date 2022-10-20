import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Select from 'react-select'
import { Link } from 'react-router-dom';


const Signup = () => {
  const { register, control, watch, handleSubmit, formState: { errors } } = useForm();
  const [checkPass, setCheckPass] = useState(false);

  // all change password , the watch is change
  const password = watch('Password');
  const cpassword = watch('ConfirmPassword');

  const onSubmit = data => {
    if (data.Password === data.ConfirmPassword) {
      console.log(data);
    }
  }

  // register('Password' , {
  //   onBlur : (e)=> {
  //     setPass1(e.target.value);
  //     checkPassword(e);
  //   },
  // })

  // console.log(errors)

  // for confirm password will start  after inter in ConfirmPassword
  register('ConfirmPassword', {
    onBlur: () => setCheckPass(true),
  });

  const options = [
    {
      value: '0',
      label: 'Male'
    },
    {
      value: '1',
      label: 'Female'
    },
  ]


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

      {/* user input */}
      <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label className="text-white">Full Name</Form.Label>
        <Form.Control type="text"
          placeholder="Enter full name"
          {...register("FullName",
            {
              required: true,
              pattern: /^[A-Za-z\s]+$/i,
              minLength: 6
            }
          )}
        />
        {
          errors?.FullName?.type === 'required'
          &&
          <p className="text-danger">FullName is required</p>
        }
        {
          errors?.FullName?.type === 'pattern'
          &&
          <p className="text-danger">FullName is invalid</p>
        }
        {
          errors?.FullName?.type === 'minLength'
          &&
          <p className="text-danger">FullName is less than 6 characters</p>
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
              minLength: 8,
            }
          )}
        />
        {
          errors?.Password?.type === 'required'
          &&
          <p className="text-danger">Password is required</p>
        }
        {
          errors?.Password?.type === 'minLength'
          &&
          <p className="text-danger">Password is less than 8 characters </p>
        }
      </Form.Group>

      {/* Password input */}
      <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
        <Form.Label className="text-white">Confirm Password</Form.Label>
        <Form.Control type="password"
          placeholder="Confirm Password"
          {...register("ConfirmPassword",
            {
              required: true,
            }
          )}
        />
        {
          errors?.ConfirmPassword?.type === 'required'
          &&
          <p className="text-danger">Confirm Password is required</p>
        }

        {
          password !== cpassword && checkPass
          &&
          <p className="text-danger">confirm Password is not match</p>
        }
      </Form.Group>

      {/*personal information  */}
      <div className="d-flex">
        <div className="w-50">
          <Controller
            name="gander"
            control={control}
            render={({ field }) => <Select
              placeholder="gander"
              className="mb-2 w-100"
              options={options}
              {...register('gander', { required: true })}
              {...field}
            />}
          />
          {
            errors?.gander?.type === 'required'
            &&
            <p className=" ms-2 text-danger">gander is required</p>
          }
        </div>
        <Form.Group className="mb-4 ms-4 w-50" controlId="formBasicAge">
          <Form.Control type="number"
            placeholder="Age"
            {...register("age",
              {
                required: true,
                min: 18
              }
            )}
          />
          {
            errors?.age?.type === 'required'
            &&
            <p className="text-danger">Age is required</p>
          }
          {
            errors?.age?.type === 'min'
            &&
            <p className="text-danger">the minimun age is 18</p>
          }
        </Form.Group>
      </div>



      {/* submit */}
      <div className="d-flex">
        <Button variant="primary" className="w-50" type="submit">
          SignUp
        </Button>
        <p className="ms-4 text-white">Already have account! <Link to='/signin'>Sigin</Link></p>
        
      </div>
    </Form>
  )
}

export default Signup;