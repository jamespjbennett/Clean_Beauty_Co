// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require parallax
//= require jquery.turbolinks
//= require_tree .


  // HOMEPAGE FUNCTIONS ***************
function toggleAboutUsContent(){
  if($('.read-more').text() == "Read more"){
    $('.homepage-about-us span').slideDown();
    $('.read-more').text('Read less')
  } else{
    $('.homepage-about-us span').slideUp();
    $('.read-more').text('Read more')
  }
}

function activateMenuDropdown(){
  if($($(this).children()[1]).is(":visible")){
    $($(this).children()[1]).hide();
  }else{
    if($(this).hasClass('recipes-click-dropdown')){
      $('.shop-dropdown').hide();
      $('.events-dropdown').hide();
      $('.recipes-dropdown').show();
    } else if($(this).hasClass('product-click-dropdown')){
      $('.shop-dropdown').show();
      $('.recipes-dropdown').hide();
      $('.events-dropdown').hide();
    }else{
      $('.shop-dropdown').hide();
      $('.recipes-dropdown').hide();
      $('.events-dropdown').show();
    }
  }
}


$(document).ready(function(){
  console.log('hello');
  // HOMEPAGE FUNCTIONS ***************
  // if(window.location.pathname.split('/')[1] == "blog_entries"){
  //   if($('iframe').length <=3 ){
  //     location.reload();
  //   }
  // }
  // $('.feature-images-links div h2').hide();
  if(window.location.pathname == "/"){
    $('body').addClass('cloud-cursor');
  } else if(window.location.pathname == "/abouts"){
    $('body').addClass('apple-cursor');
  } else if(window.location.pathname == "/press"){
    $('body').addClass('cloud-cursor');
  } else if(window.location.pathname == "/blog_entries"){
    $('body').addClass('star-cursor');
  } else if(window.location.pathname == "/contacts/new"){
    $('body').addClass('strawb-cursor');
  } else if(window.location.pathname == "/diy_beauty"){
    $('body').addClass('carrot-cursor');
  }
  
  $('.homepage-about-us span').hide();
  $('.read-more').on('click', toggleAboutUsContent);
  $('.product-image img').hover(function(){
    $(this).animate({opacity: 0.5}, 50)
  })
  $('.product-image img').mouseleave(function(){
    $(this).animate({opacity:1}, 50);
  });

  $('.preview-image-container img').hover(function(){
    $(this).animate({opacity: 0.5}, 50)
  })
  $('.preview-image-container img').mouseleave(function(){
    $(this).animate({opacity:1}, 50);
  });

  $('.indiv-recipe ').hover(function(){
    $(this).find('img').animate({opacity: 0.5}, 50)
  })
  $('.indiv-recipe ').mouseleave(function(){
    $(this).find('img').animate({opacity: 1}, 50)
  })

  $('.separate-dropdown').on('click', activateMenuDropdown)

  // $(window).scroll(function () { 
  //       console.log($(window).scrollTop())
  //     if ($(window).scrollTop() > 801) {
  //       $('.navbar').addClass('navbar-fixed-top');
  //       $('.about-us-container').css('margin-top', '100px');
  //       // $('.feature-images-links').css('margin-top', '80px');
  //     }
  //     if ($(window).scrollTop() < 800) {
  //       $('.navbar').removeClass('navbar-fixed-top');
  //       $('.about-us-container').css('margin-top', '0px');
  //       // $('.feature-images-links').css('margin-top', '0px');


  //     }
  //   });
});
