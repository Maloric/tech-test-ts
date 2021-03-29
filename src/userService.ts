import { DataService } from './dataService';
import { of, Observable } from 'rxjs';

export class UserService {
    constructor(private dataService: DataService) {}

    getUsersWithPopularPosts(commentThreshold: number): Observable<any[]> {
        return of([]);
    }
}
