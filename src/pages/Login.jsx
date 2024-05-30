import React, { useContext, useState } from "react";
import { Card, CardHeader, CardBody, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.config";

function Login() {
    const { mode, setUser } = useContext(myContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //* Login Function
    const login = async () => {
        if (email.trim() === "" || password === "") {
            toast.error('Please fill all fields');
            return;
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user); // Set the user in the context
            toast.success('Login successful.');
            navigate(`/dashboard/${result.user.uid}`); // Navigate to dashboard with user ID
        } catch (error) {
            toast.error('Login Failed');
            console.log(error);
        }
    };

    //* Google Login Function
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user); // Set the user in the context
            toast.success('Login with Google successful.');
            navigate(`/dashboard/${result.user.uid}`); // Navigate to dashboard with user ID
        } catch (error) {
            toast.error('Google Login Failed');
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-[24rem]" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>
                <CardHeader color="blue" floated={false} shadow={false} className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center" style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" className="h-20 w-20" alt="Login Icon" />
                        </div>
                    </div>
                    <Typography variant="h4" style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>
                        Login
                    </Typography>
                </CardHeader>
                <CardBody>
                    <form className="flex flex-col gap-4">
                        <Input type="email" label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button onClick={login} style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)', color: mode === 'dark' ? 'black' : 'white' }}>Login</Button>
                        <Button onClick={loginWithGoogle} style={{ background: 'rgb(66, 133, 244)', color: 'white' }}>Login with Google</Button>
                        <div className="mt-3 text-center">
                            <Typography variant="small" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                Don't have an account? <Link to="/signup" style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>Sign up</Link>
                            </Typography>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}

export default Login;
