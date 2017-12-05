import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-imgvid',
  templateUrl: './imgvid.component.html',
  styleUrls: ['./imgvid.component.css']
})
export class ImgvidComponent implements OnInit {
items: any= [
  {
    id: 1 ,
    img: '../assets/images/featured_img2.jpg',
  },
  {
    id: 2 ,
    img: '../assets/images/featured_img1.jpg',
  },
  {
    id: 3 ,
    img: '../assets/images/featured_img3.jpg',
  },
  {
    id: 4 ,
    img: '../assets/images/single_post_img.jpg',
  },
  {
    id: 5 ,
    img: '../assets/images/photograph_img2.jpg',
  },
  {
    id: 6 ,
    img: '../assets/images/photograph_img3.jpg',
  },
  {
    id: 7 ,
    img: '../assets/images/photograph_img3.jpg',
  },
  {
    id: 8 ,
    img: '../assets/images/photograph_img3.jpg',
  },
  {
    id: 9 ,
    img: '../assets/images/photograph_img3.jpg',
  }
];
videos: any= [
  {
    id: 1,
    vid: '../assets/videos/Beautiful World - Wild Animals (Petar Milinković - Ashes Of Stars) [Short Film].mp4',
  },
  {
    id: 2,
    vid: '../assets/videos/Short video clip-nature.mp4.mp4',
  }
];
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.imgs').click(function(){
        const idimg = $(this).attr('id');
        const srcimg = $(this).attr('src');
        $('.img2').attr('src', srcimg);
      });
    });
  }

}
