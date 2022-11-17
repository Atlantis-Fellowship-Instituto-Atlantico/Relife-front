import { createContext, FC, ReactNode, useState } from "react";
import { RegisterContextData } from './RegisterTypes';

interface RegisterProviderProps {
	children: ReactNode;
}

export const RegisterContext = createContext({} as RegisterContextData);

export const RegisterContextProvider: FC<RegisterProviderProps> = ({
	children,
}: RegisterProviderProps) => {
	const [selectedItem, setSelectedItem] = useState(true);

	const handleClickButton = () => setSelectedItem(false);


	return (
		<RegisterContext.Provider
			value={{
				selectedItem,
				setSelectedItem,
				handleClickButton,
			}}
		>
			{children}
		</RegisterContext.Provider>
	);
};
