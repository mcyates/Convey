import { Model } from './Model';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
export interface UserProps {
	name?: string;
	age?: number;
	id?: number;
}

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps) {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>('http://localhost:3000')
		);
	}
}

export default User;
