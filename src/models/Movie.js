export class Movie {
    constructor(data) {
        this.id = data.id
        this.backdropImg = `https://image.tmdb.org/t/p/original${data.backdrop_path}`
        this.posterImg = `https://image.tmdb.org/t/p/original${data.poster_path}`
        this.title = data.original_title
        this.description = data.overview
        this.release_date = data.release_date
        this.vote_avg = data.vote_average
    }
}


// let moviedata = {
//     "adult": false,
//     "backdrop_path": "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
//     "genre_ids": [
//         878,
//         12,
//         28
//     ],
//     "id": 76600,
//     "original_language": "en",
//     "original_title": "Avatar: The Way of Water",
//     "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//     "popularity": 3464.178,
//     "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//     "release_date": "2022-12-14",
//     "title": "Avatar: The Way of Water",
//     "video": false,
//     "vote_average": 7.7,
//     "vote_count": 5982
// }