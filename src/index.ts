import { User } from './models/User';

// const user = new User({ name: 'dave', age: 33, id: 1 });
const user = new User({ name: 'dave', age: 33 });

// user.set({ name: 'ted', age: 22 });
// user.fetch();
user.save();
