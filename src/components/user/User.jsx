import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";
import Loading from "../Loading";

import "./User.css";

function User({user,setUser}) {

	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const hardCodedDefaultUser = "tickle122";

	useEffect(() => {
		setIsLoading(true);
		getUsers().then(data => {
			setUsers(data.users);
			setUser(
				data.users.filter(user => user.username === hardCodedDefaultUser)[0]
			);
		});
		setIsLoading(false);
	}, []);

	return (
		<div className="user">
			<Loading isLoading={isLoading}>
				<label htmlFor="username">Username:</label>
				<select
					defaultValue={hardCodedDefaultUser}
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
