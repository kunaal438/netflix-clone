const api_key = 'e69826e4e066f007b75fffb9504faec7';

const popular_url = 'https://api.themoviedb.org/3/movie/popular?api_key=';
const upcoming_url = 'https://api.themoviedb.org/3/movie/upcoming?api_key='
const img_url = 'https://image.tmdb.org/t/p/w500/';

const popularMovies = popular_url + api_key;
const upcomingMovies = upcoming_url + api_key;

// console.log(upcomingMovies);
const parent = [...document.querySelectorAll('.cards-container')];

const makingPoster = (int, data) => {

    let parentDiv = parent[int];

    data.map(item => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        parentDiv.appendChild(div);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(document.createTextNode(item.title));

        img.setAttribute('src', `${img_url}${item.poster_path}`);
        p.className = 'title';
        div.className = 'card';
    })
}

// fetching popular movies through api
// fetch(popularMovies)
// .then(res => res.json())
// .then(data => {
//     localStorage.setItem('popular', JSON.stringify(data.results));
//     makingPoster(0, data.results);
// })

// // fetching upcoming movies through api
// fetch(upcomingMovies)
// .then(res => res.json())
// .then(data => {
//     localStorage.setItem('upcoming', JSON.stringify(data.results));
//     console.log(data.results);
//     makingPoster(1, data.results);
// })

let data1 = JSON.parse(localStorage.getItem('popular'));
makingPoster(0, data1);

let data2 = JSON.parse(localStorage.getItem('upcoming'));
makingPoster(1, data2);