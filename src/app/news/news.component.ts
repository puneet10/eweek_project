import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  Headline: string ;
  Headline2: any = [] ;
news: any = [
            {
              id: 1,
              headline: 'HEADLINE',
              news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.' +
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo',
              date: '24 jan',
              img: '../assets/images/photograph_img2.jpg'
            },
            {
              id: 2,
              headline: 'HEADLINE',
              news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,\ sed do eiusmod tempor\r\n'  +
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo',
              date: '24 jan',
              img : '../assets/images/photograph_img2.jpg'
            },
            {
              id: 3,
              headline: 'HEADLINE',
              news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.\\n\\n' +
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo',
              date: '24 jan',
              img : '../assets/images/photograph_img2.jpg'
            },
            {
              id: 4,
              headline: 'HEADLINE',
              news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.\\n\\n' +
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo',
              date: '24 jan',
              img : '../assets/images/photograph_img2.jpg'
            }
          ];
  constructor() { }

  ngOnInit() {
  }
  fun(headline) {
    this.Headline = headline;
    this.Headline2.push(this.Headline);
    console.log(this.Headline2);
    console.log(this.Headline);
  }

}
