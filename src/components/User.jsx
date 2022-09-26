import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import "./User.css"

function User() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState("");

	const selectUser = username => {
		setUser(users.filter(user => user.username === username)[0]);
	};

	useEffect(() => {
		getUsers().then(data => {
			setUsers(data.users);
		});
	}, [user]);

	return (
		<div className="user">
			<label htmlFor="username">Username:</label>
			<select
				onChange={e => {
					selectUser(e.target.value);
				}}
				id="username"
				value={user.username}
			>
				<option value="" defaultValue="" hidden>
					Select user
				</option>
				{users.map((user,index) => (
					<option key={user.username} value={user.username}>
						{user.username}
					</option>
				))}
			</select>
			<figure>
				<img src={user.avatar_url} alt="Avatar for user" />
				<figcaption>{user.username}</figcaption>
			</figure>
		</div>
	);
}

export default User;
