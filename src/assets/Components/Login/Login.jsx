import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../Firebase/Firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const refEmail = useRef(' ')
    const handleSignin = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        setError(' ')
        setSuccess(' ')
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if(result.user.emailVerified){
                    setSuccess('Successfully Log In ')
                    console.log(result.user);
                }
                else{
                    alert("please verify your email...!")
                }
            })
            .catch(error => {
                console.log(error);
                setError(error)
            })

    }
    const handleResetPass = () => {
        const email = refEmail.current.value ;  
        console.log(email);
        sendPasswordResetEmail(auth, email)
            .then(()=>{
                alert('check your email')

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {
                            error && <p>{error.message}</p>
                        }
                        {
                            success && <p>{success}</p>
                        }
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={refEmail} type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleResetPass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    <Link to="/SignUp" className="label-text-alt link link-hover">new account</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;