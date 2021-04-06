import { DataService } from './dataService';
import { UserService } from './userService';

function main() {
    let ds = new DataService();
    let us = new UserService(ds);
    let threshold = 10;
    us.getUsersWithPopularPosts(threshold).then((data) => {
        console.log(`There are ${data.length} users with more than ${threshold} comments.`);
    });
}

console.log('Starting...');
main();
