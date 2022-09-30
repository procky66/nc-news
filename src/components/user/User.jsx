import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../utils/api";
import { UserContext } from "../contexts/User";
import Loading from "../Loading";

import "./User.css";

function User() {
	const [user, setUser] = useContext(UserContext);
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getUsers().then(data => {
			setUsers(data.users);
		});
		setIsLoading(false);
	}, []);

	return (
		<div className="user">
			<Loading isLoading={isLoading}>
				<label htmlFor="username">Username:</label>
				<select
					onChange={e => {
						setUser(users.filter(user => user.username === e.target.value)[0]);
					}}
					id="username"
				>
					{users.map(user => (
						<option key={user.username} value={user.username}>
							{user.username}
						</option>
					))}
				</select>
				<figure>
					<img src={user.avatar_url} alt={`Avatar for ${user.name}`} />
					<figcaption>{user.name}</figcaption>
				</figure>
			</Loading>
		</div>
	);
}

export default User;
