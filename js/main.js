const api_key = 'e69826e4e066f007b75fffb9504faec7';

const popular_url = 'https://api.themoviedb.org/3/tv/popular?api_key=';
const upcoming_url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=';
const toprated_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
const tranding_url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';
const img_url = 'https://image.tmdb.org/t/p/w500/';

const popularMovies = popular_url + api_key;
const upcomingMovies = upcoming_url + api_key;
const topratedMovies = toprated_url + api_key;
const trandingMovies = tranding_url + api_key;

// banner variables
const bannerImg = document.querySelector('.banner-img');
const bannerHeading = document.querySelector('.banner-heading');
const bannerInfo = document.querySelector('.banner p');

// console.log(upcomingMovies);
const parent = [...document.querySelectorAll('.cards-container')];

const makingPoster = (int, data) => {

    let parentDiv = parent[int];

    data.map(item => {
        const div = document.createElement('div');
        const img = document.createElement('img');

        parentDiv.appendChild(div);
        div.appendChild(img);

        img.setAttribute('src', `${img_url}${item.poster_path}`);
        div.className = 'card';
    })
}

let arr;

// fetching tranding movies through api
// fetch(trandingMovies)
// .then(res => res.json())
// .then(data => {
//     localStorage.setItem('tranding', JSON.stringify(data.results));
//     // console.log(data.results);
//     makingPoster(0, data.results);
//     arr.push(data.results);
// })

// // fetching popular movies through api
// fetch(popularMovies)
// .then(res => res.json())
// .then(data => {
//     localStorage.setItem('popular', JSON.stringify(data.results));
//     makingPoster(1, data.results);
//     arr.push(data.results);
// })

// // fetching upcoming movies through api
// fetch(upcomingMovies)
// .then(res => res.json())
// .then(data => {
//     localStorage.setItem('upcoming', JSON.stringify(data.results));
//     makingPoster(2, data.results);
//     arr.push(data.results);
// })

// // fetching toprated movies through api
// fetch(topratedMovies)
// .then(res => res.json())
// .then(data => {
//     localStorage.setItem('toprated', JSON.stringify(data.results));
//     // console.log(data.results);
//     makingPoster(3, data.results);
//     arr.push(data.results);
// })

let data1 = JSON.parse(localStorage.getItem('tranding'));
makingPoster(0, data1);

let data2 = JSON.parse(localStorage.getItem('popular'));
makingPoster(1, data2);

let data3 = JSON.parse(localStorage.getItem('upcoming'));
makingPoster(2, data3);

let data4 = JSON.parse(localStorage.getItem('toprated'));
makingPoster(3, data4);

arr = [data1, data2, data3, data4];
let randomArr = Math.floor(Math.random() * arr.length);
let bannerDataArr = arr[randomArr];
let bannerDataArrRandom = Math.floor(Math.random() * bannerDataArr.length);
let bannerData = bannerDataArr[bannerDataArrRandom];

bannerImg.setAttribute('src', `https://image.tmdb.org/t/p/original/${bannerData.backdrop_path}`)
bannerHeading.innerHTML = bannerData.title;
bannerInfo.innerHTML = bannerData.overview;