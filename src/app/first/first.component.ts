import { Component, OnInit } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor( private route: ActivatedRoute,     private router: Router) { }
  admin: any= {
    name : 'ADMIN',
    image : '/assets/images/jack.jpeg',
  };

  ngOnInit() {
  $(document).ready(function(){
    $('#msgicon').click(function(e){
      e.stopPropagation();
      $('#msgddm').toggle();
    $('#searchicon').show('fast');
      $('#admin_ddm,#notifyddm,#taskddm,.searchbox').hide();
    });
    $('#notifyicon').click(function(e){
      e.stopPropagation();
      $('#notifyddm').toggle();
      $('#searchicon').show('fast');
      $('#taskddm,#msgddm,.searchbox,#admin_ddm').hide();
    });
    $('#taskicon').click(function(e){
      e.stopPropagation();
      $('#taskddm').toggle();
      $('#searchicon').show('fast');
      $('#notifyddm,#msgddm,.searchbox,#admin_ddm').hide();
    });
    $('.searchbox').hide();
    $('#searchicon').click(function(e){
      e.stopPropagation();
      $('.searchbox').toggle();
      $('#searchicon,#taskddm,#msgddm,#notifyddm,#admin_ddm').hide();
    });
    $('.searchbox').click(function(e){
      e.stopPropagation();
    });
    $('#admin_dd').click(function(e){
      e.stopPropagation();
      $('#admin_ddm').toggle();
    $('#searchicon').show('fast');
      $('.searchbox,#taskddm,#msgddm,#notifyddm').hide();
    });
  });
  $(document).on('click', function() {
    $('#msgddm').hide('fast');
    $('#taskddm').hide('fast');
    $('#notifyddm').hide('fast');
    $('.searchbox').hide('fast');
    $('#admin_ddm').hide('fast');
    $('#searchicon').show('fast');
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    
   
});
$(document).ready(function(){
  $('.btn_toggle').click(function(){
   //  $('#sidebar-wrapper').animate({
   //    width:'toggle'
   //  }, 300);
   $('#sidebar-wrapper').slideToggle()
    });
   });
  }
}
