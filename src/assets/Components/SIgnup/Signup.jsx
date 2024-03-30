
const Signup = () => {
    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email ,password);
    }
    return (
        <div className="  ">
            <div className="mx-auto  p-5 md:w-1/2 text-center">
                <h2 className='text-3xl mb-5'>Please Sign up</h2>
                <form className="space-y-4 " onSubmit={handleSignUp}>
                    <input className="w-3/4 py-3 px-3 text-xl" type="email" name="email" /><br />
                    <input className="w-3/4 py-3 px-3 text-xl" type="password" name="password" /><br />
                    <input className="btn btn-accent w-3/4" type="submit" name="submit" /><br />
                </form>
            </div>
        </div>
    );
};

export default Signup;