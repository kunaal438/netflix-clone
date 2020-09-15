const api_key = 'e69826e4e066f007b75fffb9504faec7';

const popular_url = 'https://api.themoviedb.org/3/movie/popular?api_key=';
const img_url = 'https://image.tmdb.org/t/p/w500/';

const popularMovies = popular_url + api_key;

const makingPoster = (data) => {
    const parent = document.querySelector('.cards-container');

    data.map(item => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        parent.appendChild(div);
        div.appendChild(img);
        div.appendChild(p);
        p.appendChild(document.createTextNode(item.title));

        img.setAttribute('src', `${img_url}${item.poster_path}`);
        p.className = 'title';
        div.className = 'card';
    })
}

// fetching through api

// fetch(popularMovies)
// .then(res => res.json())
// .then(data => {
//     localStorage.setItem('obj', JSON.stringify(data.results));
//     makingPoster(data.results);
// })

let data = JSON.parse(localStorage.getItem('obj'));
makingPoster(data);