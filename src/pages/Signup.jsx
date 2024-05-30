import React, { useContext, useState } from "react";
import { Card, CardHeader, CardBody, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.config";

function Signup() {
    const { mode } = useContext(myContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //* Signup Function
    const signup = async (e) => {
        e.preventDefault(); // Prevent form submission
        if (email.trim() === "" || password === "") {
            toast.error('Please fill all fields');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success('Signup successful.');
            navigate('/dashboard'); 
        } catch (error) {
            toast.error('Signup Failed');
            console.error('Error signing up with email and password:', error);
        }
    };

    //* Google Signup Function
    const signupWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            toast.success('Signup with Google successful.');
            navigate('/dashboard'); 
        } catch (error) {
            toast.error('Google Signup Failed');
            console.error('Error signing up with Google:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-[24rem]" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>
                <CardHeader
                    color="blue"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                >
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" className="h-20 w-20" alt="Signup Icon" />
                        </div>
                    </div>
                    <Typography variant="h4" style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>
                        Signup
                    </Typography>
                </CardHeader>
                <CardBody>
                    <form className="flex flex-col gap-4" onSubmit={signup}>
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)', color: mode === 'dark' ? 'black' : 'white' }}
                        >
                            Signup
                        </Button>
                        <Button
                            type="button"
                            onClick={signupWithGoogle}
                            style={{ background: 'rgb(66, 133, 244)', color: 'white' }}
                        >
                            Signup with Google
                        </Button>
                        <div className="mt-3 text-center">
                            <Typography variant="small" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                Already have an account? <Link to="/login" style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>Login</Link>
                            </Typography>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}

export default Signup;
