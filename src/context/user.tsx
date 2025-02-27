import { useState, createContext, useContext, type ReactNode } from 'react';

type UserContextType = {
	callMe: string;
	email: string;
	handleUserChange: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserContextProviderProps = {
	children: ReactNode;
};

const initialCallMe = 'Kyle';
const initialEmail = 'kyle@example.com';

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [callMe, setCallMe] = useState(initialCallMe);
	const [email, setEmail] = useState(initialEmail);

	function handleUserChange() {
		setCallMe(callMe);
		setEmail(email);
	}

	return (
		<UserContext.Provider
			value={{
				callMe,
				email,
				handleUserChange,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within an <UserContextProvider />');
	}
	return context;
};
