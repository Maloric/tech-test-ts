import { DataService } from './dataService';
import { MovieService } from './movieService';

function main() {
    let ds = new DataService();
    let us = new MovieService(ds);

    let output = (genre, yearThreshold) =>
        us.getMovieStars(genre, yearThreshold).then((data) => {
            console.log(`The biggest star in ${genre} ${yearThreshold > 0 ? 'since ' + yearThreshold : 'of all time'} is ${data.first_name} ${data.last_name} with an average rating of ${data.average_rating}.`);
    });

    output('Comedy', 2001);
    output('Comedy', 0);
    output('Action', 2001);
    output('Action', 0);
}

console.log('Starting...');
main();
