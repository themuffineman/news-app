import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "./types";

interface UserContextProps {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    userData: User[];
    setUserData: Dispatch<SetStateAction<User[]>> ;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined)