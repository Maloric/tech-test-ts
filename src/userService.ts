import { DataService } from './dataService';

export class UserService {
    constructor(private dataService: DataService) {}

    getUsersWithPopularPosts(commentThreshold: number): Promise<any[]> {
        return Promise.resolve([]);
    }
}
