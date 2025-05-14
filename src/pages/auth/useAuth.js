import { use } from "react";
import { AuthContext } from "./AuthContext";

const useAuth = () => use(AuthContext);

export default useAuth;
