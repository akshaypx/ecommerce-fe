import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { showNotification } from "../utils/notification";
import { Input } from "antd";
import Title from "antd/es/typography/Title";
import CustomButton from "../components/CustomButton";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      showNotification("success", "Login Successful", "Welcome back!");
      navigate("/profile");
    } catch (error: any) {
      console.error("Failed to login", error);
      showNotification("error", "Login Failed", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-4 flex-col gap-4 max-w-[400px] m-auto"
    >
      <Title level={3}>Welcome to Moon Creations</Title>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <CustomButton type="submit" label={"Login"} />
      <p>
        New here? Create account{" "}
        <Link to="/register" className="text-blue-700 underline">
          Here
        </Link>
      </p>
    </form>
  );
};

export default Login;
