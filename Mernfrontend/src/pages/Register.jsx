import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { registration } from "../redux/apiCalls"; // Make sure this import is still needed.
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.div`
  color: red;
  /* Add other styles for the error message here */
`;

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { isRegistering, error } = useSelector((state) => state.registration);
  const a = useSelector((state) => state.registration);
console.warn(a)

  

  const handleClick = (e) => {
    e.preventDefault();
    registration(dispatch, {name, lastname, email, username, password, confirmpassword });
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
           placeholder="name" 
           onChange={(e) => setName(e.target.value)}
          />

          <Input
             placeholder="last name" 
             onChange={(e) => setLastname(e.target.value)}
          />

          <Input
           placeholder="username"
           onChange={(e) => setUsername(e.target.value)}
           />

          <Input
             placeholder="email" 
             onChange={(e) => setEmail(e.target.value)}
          />

          <Input
           placeholder="password"
           onChange={(e) => setPassword(e.target.value)} 

           />

          <Input 
          placeholder="confirm password" 
          onChange={(e) => setConfirmPassword(e.target.value)}

          />

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button  onClick={handleClick}   disabled={isRegistering}>CREATE</Button>
          {error && <Error>Something went wrong...</Error>}
          {/* {!error && } */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;