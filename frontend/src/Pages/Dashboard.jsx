import { useEffect, useState } from "react"
import { Appbar } from "../Components/Appbar"
import { Balance } from "../Components/Balance"
import { Users } from "../Components/Users"
import axios from "axios"
import { useNavigate } from "react-router"

export const Dashboard = () => {
    const [currentBalance, setCurrentBalance] = useState(0)
    const [firstName, setFirstName] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/", {
            headers: {
                authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((response) => {
                setCurrentBalance(response.data.balance)
            })
            .catch((error) => {
                console.log(error);
                navigate('/signin');
            })

        axios.get("http://localhost:3000/api/v1/user/", {
            headers: {
                authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((response) => {
            setFirstName(response.data.firstname.toUpperCase());
        }).catch((error) => {
            console.log(error);
            navigate('/signin');
        })
    }, [])


    return (
        <div>
            <Appbar firstname={firstName} />
            <div className="px-1 md:px-2 lg:px-36 mt-8">
                <Balance value={currentBalance} />
                <Users />
            </div>
        </div>
    )
}

