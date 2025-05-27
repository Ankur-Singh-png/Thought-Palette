import { createContext, useState, useEffect } from "react";
import axios from "axios";

//We want to store the user data to be stored in a common place as we needs his id for creating new post or deleting any post, login or logout
//We will therefore use useContext hook here as we need the user data in navigation bar post pages etc. and all data is present in Authcontext
export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
//If there user is logged in Local storage of browser wil have its data if not then it will be null

//Everything stored in localstorage is in form of string, JSON.parse is a function that converts string to object 
 const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

 //login function
 const login = async(inputs)=> {
    const res = await axios.post("/auth/login",inputs)
    setCurrentUser(res.data)
 };
 const logout = async(inputs)=> {
    await axios.post("/auth/logout")
    setCurrentUser(null)
 };

 //UseEffect will update everytime user logs in
 useEffect(() => {
   localStorage.setItem("user", JSON.stringify(currentUser));
}, [currentUser])

return(
    //Value will let us use the 3 defined functions anywhere in the App
   <AuthContext.Provider value={{currentUser, login, logout}}>
     {children}
   </AuthContext.Provider>
);
}
