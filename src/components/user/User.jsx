import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";

import "./User.css";

function User() {
	const hardCodedDefaultUser = "tickle122";

	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});

	useEffect(() => {
		getUsers().then(data => {
			setUsers(data.users);
			setUser(data.users.filter(user => user.username === hardCodedDefaultUser)[0])
		});
	}, []);

	return (
		<div className="user">
			<label htmlFor="username">Username:</label>
			<select
				defaultValue={hardCodedDefaultUser}
				onChange={e => {
					setUser(users.filter(user => user.username === e.target.value)[0]);
				}}
				id="username"
			>
				{users.map((user, index) => (
					<option key={user.username} value={user.username}>
						{user.username}
					</option>
				))}
			</select>
			<figure>
				<img src={user.avatar_url} alt="Avatar for user" />
				<figcaption>{user.name}</figcaption>
			</figure>
		</div>
	);
}

export default User;
