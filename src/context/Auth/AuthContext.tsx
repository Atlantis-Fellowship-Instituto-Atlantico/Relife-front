import { createContext } from "react";
import { Admin } from "../../Types/Admin";
import { Institution } from "../../Types/Institution";
import { User } from "../../Types/User";


export interface AuthContextType {
	user: User | null;
	// institution: Institution | null;
	// admin: Admin | null;

	signin: (email: string, password: string) => Promise<boolean>;
	signout: () => void;
}



export const AuthContext = createContext<AuthContextType>(null!);


