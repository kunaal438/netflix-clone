const api_key = 'e69826e4e066f007b75fffb9504faec7';

const popular_url = 'https://api.themoviedb.org/3/tv/popular?api_key=';
const upcoming_url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=';
const toprated_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
const tranding_url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';
const genres_url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=';

const tv_genresSorted_url = 'http://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&sort_by=popularity.desc&with_genres=';
const img_url = 'https://image.tmdb.org/t/p/w500/';

const popularMovies = popular_url + api_key + '&language=en-US';
const upcomingMovies = upcoming_url + api_key + '&language=en-US';
const topratedMovies = toprated_url + api_key + '&language=en-US';
const trandingMovies = tranding_url + api_key + '&language=en-US';
const genresList = genres_url + api_key + '&language=en-US';

// banner variables
const bannerImg = document.querySelector('.banner-img');
const bannerHeading = document.querySelector('.banner-heading');
const bannerInfo = document.querySelector('.banner p');

// console.log(upcomingMovies);
const parent = [...document.querySelectorAll('.cards-container')];

const makingPoster = (int, data, type) => {

    let parentDiv = parent[int];

    data.map(item => {
        if (!(item.poster_path === null && item.backdrop_path === null)) {
            const div = document.createElement('div');
            const img = document.createElement('img');

            parentDiv.appendChild(div);
            div.appendChild(img);

            if (item.poster_path === null) {
                img.setAttribute('src', `${img_url}${item.backdrop_path}`);
            } else {
                img.setAttribute('src', `${img_url}${item.poster_path}`);
            }
            if (type === 'show') {
                img.className = 'img';
            }

            div.className = 'card';
        }
    })
}

let arr = [];
let allGenres;

// fetching tranding movies through api
fetch(trandingMovies)
    .then(res => res.json())
    .then(data => {
        // console.log(data.results);
        makingPoster(0, data.results, 'movie');
        arr.push(data.results);
        setTimeout(() => {
            settingBanner();
        }, 100);
    })

// fetching popular movies through api
fetch(popularMovies)
    .then(res => res.json())
    .then(data => {
        makingPoster(1, data.results, 'movie');
        arr.push(data.results);
    })

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

fetch(genresList)
    .then(res => res.json())
    .then(data => {
        allGenres = data.genres;
    })

const settingBanner = () => {
    let randomArr = Math.floor(Math.random() * arr.length);
    let bannerDataArr = arr[randomArr];
    let bannerDataArrRandom = Math.floor(Math.random() * bannerDataArr.length);
    let bannerData = bannerDataArr[bannerDataArrRandom];

    bannerImg.setAttribute('src', `https://image.tmdb.org/t/p/original${bannerData.backdrop_path}`)
    bannerHeading.innerHTML = bannerData.title || bannerData.original_name || bannerData.original_title;
    bannerInfo.innerHTML = bannerData.overview;
}

fetch(genresList)
    .then(res => res.json())
    .then(data => {
        console.log(data.genres);
        allGenres = data.genres;
        getalldata();

    })

const getGenresId = (genre) => {
    let a;
    allGenres.map(item => {
        if (item.name.toLowerCase() === genre) {
            a = item.id;
        }
    })

    return a;
}

let genreNumber = 2;

const fetchGenre = (genre) => {
    let genreId = getGenresId(genre);
    // console.log(genreId);
    fetch(`${tv_genresSorted_url}${genreId}`)
        .then(res => res.json())
        .then(data => {
            makingPoster(genreNumber, data.results, 'show');
            // console.log(data);
            genreNumber++;
        })
}

const getalldata = () => {
    fetchGenre('action');
    fetchGenre('science fiction');
    fetchGenre('adventure');
    fetchGenre('comedy');
    fetchGenre('horror');
}
