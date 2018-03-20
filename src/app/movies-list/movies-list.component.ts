import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList: any[];

  constructor(private httpClient: HttpClient) { }

  
  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.httpClient.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=126293cbe36ad88482598ec4e7595380')
      .subscribe((response) => {
        this.moviesList = response.results;
        console.log(this.moviesList);
      })
  }
}
