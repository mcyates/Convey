import { User } from './models/User';

const user = new User({ name: 'ted', age: 20 });
user.on('change', () => {
	console.log('changed1!');
});
user.on('change', () => {
	console.log('changed2!');
});
user.on('deleted', () => {
	console.log('deleted!');
});
console.log(user.events);
// user.trigger('change');
user.trigger('deleted');
