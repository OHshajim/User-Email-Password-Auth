import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../Firebase/Firebase.config";
import { useState } from "react";

const Signup = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        // reset error
        setError(' ')
        setSuccess(' ')
        if(password.length<6){
            setError("Password should be at least 6 characters ")
            return ;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Successfully created ')
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })

    }
    return (
        <div className="">
            <div className="mx-auto  p-5 md:w-1/2 text-center">
                <h2 className='text-3xl mb-5'>Please Sign up</h2>
                <form className="space-y-4 " onSubmit={handleSignUp}>
                    <input className="w-3/4 py-3 px-3 text-xl" required placeholder="Enter your Email" type="email" name="email" /><br />
                    <input className="w-3/4 py-3 px-3 text-xl" required placeholder="Enter your Password" type="password" name="password" /><br />
                    <input className="btn btn-accent w-3/4" type="submit" name="submit" />
                </form>
                {
                    error && <p className="text-red-600 text-xl my-3">{error}</p>
                }
                {
                    success && <p className="text-green-600 text-xl my-3">{success}</p>
                }

            </div>
        </div>
    );
};

export default Signup;