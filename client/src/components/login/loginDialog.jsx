import { Box, Button, Dialog, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";

const Component = styled(Box)`
    height: 70vh;
    width: 50vw;
    display: flex;
`;
const Image = styled(Box)`
    background: #2874f0 url(/login.png) center 85% no-repeat;
    height: 100%;
    width: 40%;
    padding: 2rem 3rem;
    box-sizing: border-box;
    & > p, & > h5 {
        color: white;
    }
`;
const Wrapper = styled(Box)`
    display: flex;
    width: 60%;
    flex-direction: column;
    padding: 2rem;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Create = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    cursor: pointer;
    font-weight: bold;
`


const LoginOrRegister = ({ isOpen, setIsOpen }) => {
    const [loginOrRegister, setLoginOrRegister] = useState(true);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        phone: ""
    });

    const handleRegister = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setUserData({...userData, [name]: value});
    }

    return (
        < Dialog open={isOpen} onClose={() => { setLoginOrRegister(true); setIsOpen(!isOpen) }} PaperProps={{ sx: { maxWidth: "unset" } }}>
            <Component>
                {
                    loginOrRegister ?
                        <Image>
                            <Typography variant="h5">Login</Typography>
                            <Typography style={{ marginTop: 20 }}>Get Access to your Orders, Whistlist and Recommendations</Typography>
                        </Image>
                        :
                        <Image>
                            <Typography variant="h5">Looks like you're new here!</Typography>
                            <Typography style={{ marginTop: 20 }}>Sign Up with your mobile number to get started</Typography>
                        </Image>
                }
                {
                    loginOrRegister ?
                        <Wrapper>
                            <TextField variant="standard" autoFocus label="Enter Email/Mobile number" />
                            <TextField variant="standard" label="Enter Password" />
                            <Typography style={{ fontSize: 12, color: "#878787" }}>By continuing, you agree to Flipkart's Terms of Use and Privacy policy.</Typography>
                            <Button style={{ background: "#fb641b", color: "#fff", textTransform: "none" }}>Login</Button>
                            <Typography style={{ textAlign: "center" }}>OR</Typography>
                            <Button style={{ color: "#2874f0", textTransform: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.4)" }}>Request OTP</Button>
                            <Create onClick={() => setLoginOrRegister(!loginOrRegister)}>New to Flipkart? Create an Account</Create>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" label="Enter First Name" name="firstName" onChange={(e) => handleRegister(e)}/>
                            <TextField variant="standard" label="Enter Last Name" name="lastName" onChange={(e) => handleRegister(e)}/>
                            <TextField variant="standard" label="Enter User Name" name="userName" onChange={(e) => handleRegister(e)}/>
                            <TextField variant="standard" label="Enter Email Address" name="email" onChange={(e) => handleRegister(e)}/>
                            <TextField variant="standard" label="Enter Password" name="password" onChange={(e) => handleRegister(e)}/>
                            <TextField variant="standard" label="Enter Mobile Number" name="phone" onChange={(e) => handleRegister(e)}/>
                            <Button style={{ background: "#fb641b", color: "#fff", textTransform: "none" }}>Register</Button>
                        </Wrapper>
                }
            </Component>
        </Dialog>
    )
}

export default LoginOrRegister;