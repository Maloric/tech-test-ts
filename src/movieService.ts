import { DataService } from './dataService';

export class MovieService {
    constructor(private dataService: DataService) {}

    async getMovieStars(genre: string, yearThreshold: number): Promise<any> {
        return Promise.resolve({})
    }
}
