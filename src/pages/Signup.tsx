import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");

  const signUpWithUsernameAndPassword = async (e: any) => {
    e.preventDefault();
    if (password === confPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (e) {
        setError("Sorry, something went wrong. Please try again.");
      }
    } else setError("Passwords do not match!");
  };

  return (
    <div>
      <form>
        {"" !== error && <div>{error}</div>}
        <div>
          <input
            type="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="exampleInputEmail1">Email address</label>
        </div>
        <div>
          <input
            type="password"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label htmlFor="exampleInputPassword1">Password</label>
        </div>
        <div>
          <input
            type="password"
            id="exampleInputPassword2"
            placeholder="Confirm Password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          ></input>
          <label htmlFor="exampleInputPassword2">Password</label>
        </div>
        <div>
          <button
            type="submit"
            onClick={(e) => signUpWithUsernameAndPassword(e)}
          >
            Submit
          </button>
        </div>
        <div>
          <span>
            Already a user? <Link to="/">Sign In here.</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
