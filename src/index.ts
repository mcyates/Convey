import { User } from './models/User';

const user = new User({ name: 'ted', age: 20 });
console.log(user.get('name'));
console.log(user.get('age'));
user.set({});
console.log(user.get('name'));
console.log(user.get('age'));
