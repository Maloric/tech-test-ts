import { DataService } from './dataService';
import { of, Observable } from 'rxjs';
import {tap, map, mergeMap} from "rxjs/operators";

export class UserService {
    constructor(private dataService: DataService) {}

    getUsersWithPopularPosts(commentThreshold: number): Observable<any[]> {
        return this.dataService.getComments().pipe(
            map ( comments => comments.reduce((commentCount, comment) => {
                commentCount[comment.postId] = (commentCount[comment.postId] || 0) + 1;
                return commentCount;
            }, {} )),
            mergeMap(commentCount => this.dataService.getPosts().pipe(
                map(posts => posts
                    .filter(post => commentCount[post.id.toString()] >= commentThreshold)
                    .map(post => post.userId))
            )),
            mergeMap(popularUserIds => this.dataService.getUsers().pipe(
                map(users => users.filter(user => popularUserIds.find( userId => userId === user.id)))
            ))
        );
    }
}
