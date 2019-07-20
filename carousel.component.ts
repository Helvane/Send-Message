import {Component, OnInit, wtfStartTimeRange} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cssclass = '';
  cars: any;
  carousel: any;
  constructor() { }
    this.index = 0;
    this.cars = [
  {title: 'car 1', url: 'assets/car1.jpg'},
  {title: 'car 2', url: 'assets/car2.jpg'},
  {title: 'car 3', url: 'assets/car3.jpg'},
  {title: 'car 4', url: 'assets/car4.jpg'},
  {title: 'car 5', url: 'assets/car5.jpg'},
  {title: 'car 6', url: 'assets/car6.jpg'},
  {title: 'car 7', url: 'assets/car7.jpg'}
];

  let temp = Object.assign([], this.cars)
  this.carousel = this.cars.splice(0,3);

  ngOnInit() {
  }

  next() {
    this.cssclass = '';
    this.index++;
    const start = this.index * 3;
    const end = start + 3;
    if(start >= this.cars.length) {
      start = this.cars.length - 3;
      end = this.cars.length;
    }
    this.carousel = this.cars.splice(start, end);
    setTimeout((){
      this.cssclass = 'goright';
    }, 200);
  }

  prev() {
    this.cssclass = '';

    this.index--;
    const start = this.index * 3;
    const end = start + 3;
    if(start >= 0) {
      start = 0;
      end = 3;
    }
    this.carousel = this.cars.splice(start, end);
    setTimeout((){
      this.cssclass = 'goleft';
    }, 200);
  }

}
