function revealMoreBlogPosts(){
  var allBlogEntries = $('.featured-blog-entry-container');
  var allVisibleBlogEntries = $('.featured-blog-entry-container:visible');
  var nonVisibleBlogEntries = $('.featured-blog-entry-container:hidden');
  var nonVisibleBlogEntriesToShow = allVisibleBlogEntries.slice(0, 6);
  nonVisibleBlogEntriesToShow.show();
  allVisibleBlogEntries.hide();
}

$(document).ready(function(){
  $('#more-blog-posts').on('click', revealMoreBlogPosts)
})