import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../Firebase/Firebase.config";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isShow, setShow] = useState(false)
    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const checked = e.target.terms.checked
        console.log(email, password, checked);
        // reset error
        setError(' ')
        setSuccess(' ')
        if (password.length < 6) {
            setError("Password should be at least 6 characters ")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError("Password should be have  Capital  letter ")
            return;
        }
        else if (!checked) {
            setError("please accept our terms and conditions")
            return;
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
                    <input className="w-full py-3 px-3 text-xl" required placeholder="Enter your Email" type="email" name="email" /><br />
                    <div className="relative border ">
                        <input
                            className="w-full py-3 px-3 text-xl"
                            required placeholder="Enter your Password"
                            type={isShow ? "text" : "password"} name="password"
                        />
                        <span className="absolute top-4 text-2xl right-2 " onClick={() => setShow(!isShow)}>{isShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
                    </div>
                    <br />
                    <div className="text-start ">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className=" mx-1" htmlFor="terms"></label>Accept our <a href="">Terms and Conditions</a>
                    </div>
                    <br />
                    <input className="btn btn-accent w-full" type="submit" name="submit" />
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