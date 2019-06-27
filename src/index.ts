import { Collection } from './models/Collection';
import { UserList } from './views/UserList';
import { User, UserProps } from './models/User';

const root = document.getElementById('root');
if (root) {
	const users = new Collection(
		'http://localhost:3000/users',
		(json: UserProps) => {
			return User.buildUser(json);
		}
	);
	users.on('change', () => {
		return new UserList(root, users);
	});
	users.fetch();
}
