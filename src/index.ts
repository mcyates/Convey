import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

console.log(user);

user.on('change', () => {
	console.log('Record Changed');
});

user.set({ age: 1 });
