import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { SubHeading } from "../Components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';


export const SignUp = () => {
    const navigate = useNavigate();
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    localStorage.clear();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div onClick={() => navigate('/')} className="absolute left-10 top-7 text-2xl font-bold">Tranzix</div>
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter you information to create an account"} />
                <InputBox onChange={e => {
                    setFirstName(e.target.value)
                }} placeholder={"John"} label={"First Name"} />
                <InputBox onChange={e => {
                    setLastName(e.target.value)
                }} placeholder={"Doe"} label={"Last Name"} />
                <InputBox onChange={e => {
                    setUserName(e.target.value)
                }} placeholder={"johndoe@gmail.com"} label={"Email"} />
                <InputBox onChange={e => {
                    setPassword(e.target.value)
                }} placeholder={"123456"} label={"Password"} />
                <div className="pt-4">
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            firstname,
                            lastname,
                            password
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")
                    }} label={"Sign Up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}   