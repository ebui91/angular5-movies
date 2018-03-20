import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';   
import { HttpClient } from '@angular/common/http';  


@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  selectedMovie: Object = {};
  genres: any[];

  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) { 
    this.route.params.subscribe(res => console.log(this.route.params._value.id));
  }

  ngOnInit() {
    this.getMovieInfo();
  }

  getMovieInfo(){
    this.httpClient.get(`https://api.themoviedb.org/3/movie/${this.route.params._value.id}?api_key=126293cbe36ad88482598ec4e7595380`)
    .subscribe((response) => {
      this.selectedMovie = response;
      console.log(this.selectedMovie);
    })
  }

  generateGenres() {
    this.selectedMovie.genres.map((genre) => this.genres.push(genre.name));
    console.log(this.genres);
  }

  backHome() {
    this.router.navigate(['']);
  }
}
