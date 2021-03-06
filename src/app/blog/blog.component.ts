import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
 constructor(){}

 ngOnInit(){

 	jQuery(function($){

 			let owl = $('.owl-carousel');

		 	owl.owlCarousel({
		    margin:10,
		    touchDrag:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		$('.customNextBtn').click(function() {
		    owl.trigger('next.owl.carousel');
		});

		$('.customPrevBtn').click(function() {
		    owl.trigger('prev.owl.carousel');
		});

	});

  }


}
