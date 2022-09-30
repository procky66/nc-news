import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = props => {
	const [user, setUser] = useState({
        "username": "tickle122",
        "name": "Tom Tickle",
        "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
      },);

      const value=[user,setUser]

	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	);
};
