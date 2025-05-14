import { useState } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "./authService";
import useAuth from "./useAuth";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const auth = useAuth();
   const navigate = useNavigate();

   // useEffect(() => {
   //    if (auth?.user?.email) navigate(-1);
   // }, [auth]);

   const handleLogin = async (e) => {
      e.preventDefault();
      try {
         const user = await loginUser(email, password);
         auth.login(user);
         navigate("/dashboard");
      } catch (err) {
         setError("Login failed");
      }
   };

   return (
      <div>
         <h2>Login</h2>
         {error && <p style={{ color: "red" }}>{error}</p>}
         <form onSubmit={handleLogin}>
            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>
         </form>
      </div>
   );
};

export default Login;
