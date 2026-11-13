import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleChange(value, name) {
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }
function handleSubmit(email, password) {
    console.log("Email:", email);
    console.log("Password:", password);
}
  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <input
        className="border rounded px-3 py-2"
        name="email"
        type="email"
        placeholder="Enter your Email"
        onChange={(e) => handleChange(e.target.value, e.target.name)}
      />
      <input
        className="border rounded px-3 py-2"
        name="password"
        type="password"
        placeholder="Enter your Password"
        onChange={(e) => handleChange(e.target.value, e.target.name)}
      />
      <button className="bg-blue-600 text-white rounded px-3 py-2"
        onClick = {() => handleSubmit(email, password)}> 
        Login
      </button>
    </div>
  );
}
