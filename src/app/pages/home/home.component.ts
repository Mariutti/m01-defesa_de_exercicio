import { Component, OnInit } from '@angular/core';
import { CatFactService } from 'src/app/services/cat-fact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  urlCatFactApi: string = 'https://cat-fact.herokuapp.com/facts';
  urlDogFactApi: string = 'https://dogapi.dog/api/v2/facts';
  urlCatApi: string = 'https://api.thecatapi.com/v1/images/search';
  urlDogApi: string = 'https://api.thedogapi.com/v1/images/search';

  factText!: string;

  img: string = '';

  constructor(private catFactService: CatFactService) {}

  ngOnInit() {
    this.getCatFact();

    this.clickCat();
  }

  getCatFact() {
    this.catFactService.getFromApi(this.urlCatFactApi).subscribe((data) => {
      const i = Math.floor(Math.random() * data.length);
      this.factText = `Cat fact: ${data[i].text}`;
    });
  }

  clickCat() {
    this.catFactService.getFromApi(this.urlCatApi).subscribe((data) => {
      this.img = data[0].url;
      this.getCatFact();
    });
  }

  clickDog() {
    this.catFactService.getFromApi(this.urlDogApi).subscribe((data) => {
      this.img = data[0].url;
    });
    this.catFactService.getFromApi(this.urlDogFactApi).subscribe((data) => {
      this.factText = `Dog Fact: ${data.data[0].attributes.body}`;
    });
  }
}
