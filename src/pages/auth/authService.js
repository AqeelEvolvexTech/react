// Dummy login service
export const loginUser = async (email, password) => {
   if (email === "admin@example.com" && password === "123456") {
      return { email, token: "fake-jwt-token" };
   }
   throw new Error("Invalid credentials");
};

export const getUserFromStorage = () => {
   const user = localStorage.getItem("user");
   return user ? JSON.parse(user) : null;
};
