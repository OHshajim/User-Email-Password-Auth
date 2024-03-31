import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../Firebase/Firebase.config";
import { useState } from "react";

const HeroRegisterForm = () => {
    const [error, SetError] = useState('')
    const [success, SetSuccess] = useState('')

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        SetError(' ')
        SetSuccess(' ')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                SetSuccess("Successfully Created .")
            })
            .catch(error => {
                console.log(error);
                SetError(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Welcome! To register for our service, please provide your name, email address, and desired password. We are thrilled to have you join our community!</p>
                        {
                            error && <p className="text-red-600 text-2xl">{error}</p>
                        }
                        {
                            success && <p className="text-green-600 text-2xl">{success}</p>
                        }
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroRegisterForm;