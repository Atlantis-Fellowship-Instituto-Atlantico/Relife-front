
export interface ITokenInfo {
	id: string;
	exp: number;
	iat: number;
	role: string;
	email: string;
}

export interface TokenState {
	token: string;
}


export interface IUserData {
	email?: string;
	token?: TokenState;
	role?: string;
}


export interface IContext extends IUserData {
	// token: TokenState;
	authenticate(email: string, password: string): Promise<void>;
	logout(): void;

	// userLogged(): boolean;
}

export interface IAuthProvider {
	children: JSX.Element;
}
