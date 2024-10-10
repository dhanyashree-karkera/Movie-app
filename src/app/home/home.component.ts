import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  movie=[
    {
      "imdbID": "tt0096895",
      "Title": "Batman",
      "Year": "1998",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg"
    },
    {
      "imdbID": "tt0468569",
      "Title": "The Dark Knight",
      "Year": "2008",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      "imdbID": "tt2975590",
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      "imdbID": "tt1345836",
      "Title": "The Dark Knight Rises",
      "Year": "2012",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      "imdbID": "tt0372784",
      "Title": "Batman Begins",
      "Year": "2005",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      "imdbID": "tt4116284",
      "Title": "The LEGO Batman Movie",
      "Year": "2017",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }
  ]

  constructor(){
    console.log('movie data', this.movie);
    
  }
}
