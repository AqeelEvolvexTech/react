import useAuth from "./auth/useAuth";

const Dashboard = () => {
   const { user, logout } = useAuth();

   return (
      <>
         <h1>Welcome, {user?.email}</h1>
         <button onClick={logout}>Logout</button>
      </>
   );
};

export default Dashboard;
