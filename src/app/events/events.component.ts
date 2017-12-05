import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  count: any = 0;
  not_registered: any= [];
  items: any = [];
  constructor() {
    this.items = [
      {
        event_id: 1,
        event_name: 'FUZZY LOGIC',
        event_img: '../assets/images/featured_img1.jpg',
        event_details: [    'rule #1',    'rule  #2',    'rule  #3'],
        prize_amount: 5000,
        college_list: [ ]
      },
      {
        event_id: 2,
        event_name: 'FREE BIE',
        event_img: '../assets/images/add_img.jpg',
        event_details: [    'rule #1' ,
                            'rule  #2',
                            'rule  #3' ],
        prize_amount: 1000,
        college_list: ['college-1', 'college-2']
      },
      {
        event_id: 3,
        event_name: 'TREASURE HUNT',
        event_img: '../assets/images/featured_img2.jpg',
        event_details: [    'rule #1',    'rule  #2',    'rule  #3'],
        prize_amount: 10000,
        college_list: []
      },
      {
        event_id: 4,
        event_name: 'BEST MANAGER',
        event_img: '../assets/images/featured_img3.jpg',
        event_details: [    'rule #1',    'rule  #2',    'rule  #3'],
        prize_amount: 2000,
        college_list: ['college-1', 'college-2', 'college-3']
      }
    ];
    for (const item of this.items){
      if (item.college_list.length === 0) {
        this.count++;
        this.not_registered.push(item.event_name);
      }
    }
  }
  ngOnInit() {
    $(document).ready(function(){
      $('#plusicon').hide();
      $('#demo2').hide();
      $('#addevent').hover(function(){
        $('#addeventtext').toggle();
         $('#plusicon').toggle();
      });
      $('.hovereffect').hover(function (e) {
        e.preventDefault();
        $('.dd-imenu').hide();
        $('.dd-dmenu').hide();
        $(this).children('.z-text').css('top', '0').fadeToggle(500);
      });
      $('.colleges').hover(function(){
        $('.collegelist').toggle();
      });
      $(this).find('#update').hide();
      $('#ebutton').click(function(){
        $(this).find('#update').show();
      });
      $('.button1').click(function() {
        $('i', this).toggleClass('fa fa-angle-left fa fa-angle-down');
      });
    });
    $(document).click(function(){
      $('.dd-imenu').hide();
      $('.dd-dmenu').hide();
      $('#nr_list').hide();
    });
  }
}
