import { DataService } from './dataService';
import { MovieService } from './movieService';

function main() {
    let ds = new DataService();
    let us = new MovieService(ds);
    let genre = 'Comedy';
    us.getMovieStars(genre).then((data) => {
        console.log(`The biggest stars in ${genre} are ${
            data.map(x => x.first_name + ' ' + x.last_name).join(',')
        } with average ratings of ${
            data.map(x => x.average_rating)
        } respecively.`);
    });
}

console.log('Starting...');
main();
