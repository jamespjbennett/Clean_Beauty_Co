function revealMoreBlogPosts(){
  var allBlogEntries = $('.featured-blog-entry-container');
  var allVisibleBlogEntries = $('.featured-blog-entry-container:visible');
  var nonVisibleBlogEntries = $('.featured-blog-entry-container:hidden');
  var firstNonVisible = allVisibleBlogEntries.last().next();
  var nonVisibleBlogEntriesToShow = nonVisibleBlogEntries.slice(0, 6);
  for(i=0;i<6;i++){
    firstNonVisible.show();
    var firstNonVisible = $('.featured-blog-entry-container:visible').last().next();
  }

  allVisibleBlogEntries.hide();
  if(allBlogEntries.last().is(':visible')){
    $('#previous-blog-posts').hide();
    $('#newer-blog-posts').show();
  };
  window.scrollTo(0, 0);
}

$(document).ready(function(){
  $('#previous-blog-posts').on('click', revealMoreBlogPosts);
  $('#newer-blog-posts').hide();
})