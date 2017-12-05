import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.css']
})
export class CollegelistComponent implements OnInit {
clg_list: any = [
  {
    s_no: 1,
    collegename: 'collge 1' ,
    phone: 123456,
    event_list: ['eve -1', 'eve-2', 'eve-3'],
    amount_paid: 13000,
    comments : ['need stay facility'],
  },
  {
    s_no: 2,
    collegename: 'collge 2' ,
    phone: 123456,
    event_list: ['eve -1', 'eve-2'],
    amount_paid: 13000,
    comments : ['need stay facility', 'need pickup facility'],
  },
  {
    s_no: 3,
    collegename: 'collge 3' ,
    phone: 123456,
    event_list: ['eve -1', 'eve-2', 'eve-3'],
    amount_paid: 13000,
    comments : ['need stay facility'],
  }
];
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.button1').click(function() {
        $('i', this).toggleClass('fa fa-angle-up fa fa-angle-down');
      });
    });
  }

}
