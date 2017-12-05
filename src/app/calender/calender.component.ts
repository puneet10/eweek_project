import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  ngOnInit() {
  $(document).ready(function(){
    $('.searchbox').hide();
    $('#searchicon').click(function(e){
      e.stopPropagation();
      $('.searchbox').toggle();
      $('#searchicon').hide();
    });
    $('.searchbox').click(function(e){
      e.stopPropagation();
    });
  });
  }
}

