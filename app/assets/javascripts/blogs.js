function revealMoreBlogPosts(){
  var allBlogEntries = $('.featured-blog-entry-container');
  var allVisibleBlogEntries = $('.featured-blog-entry-container:visible');
  var nonVisibleBlogEntries = $('.featured-blog-entry-container:hidden');
  var firstNonVisible = allVisibleBlogEntries.last().next();
  for(i=0;i<6;i++){
    firstNonVisible.show();
    var firstNonVisible = $('.featured-blog-entry-container:visible').last().next();
  }

  allVisibleBlogEntries.hide();
  if(allBlogEntries.last().is(':visible')){
    $('#previous-blog-posts').hide();
  };
  $('#newer-blog-posts').show();
  window.scrollTo(0, 0);

  var allPreviewBlogEntries = $('.preview-blog-post-container');
  var allVisiblePreviewBlogEntries = $('.preview-blog-post-container:visible');
  var nonVisiblePreviewBlogEntries = $('.preview-blog-post-container:hidden');
  if(allPreviewBlogEntries.last().is(':hidden')){
    var firstNonVisiblePreview = allVisiblePreviewBlogEntries.last().next();
  }else{
    var firstNonVisiblePreview = $('.preview-blog-post-container').first();
  }
  for(i=0;i<6;i++){
    firstNonVisiblePreview.show();
    var firstNonVisiblePreview = firstNonVisiblePreview.next()
  }
  allVisiblePreviewBlogEntries.hide();
}

function revealLessBlogPosts(){
  var allBlogEntries = $('.featured-blog-entry-container');
  var allVisibleBlogEntries = $('.featured-blog-entry-container:visible');
  var nonVisibleBlogEntries = $('.featured-blog-entry-container:hidden');
  var lastNonVisible = allVisibleBlogEntries.first().prev();
  for(i=6;i>0;i--){
    lastNonVisible.show();
    var lastNonVisible = $('.featured-blog-entry-container:visible').first().prev();
  }

  allVisibleBlogEntries.hide();
  if(allBlogEntries.first().is(':visible')){
    $('#newer-blog-posts').hide();
  };
  $('#previous-blog-posts').show();

  window.scrollTo(0, 0);

  var allPreviewBlogEntries = $('.preview-blog-post-container');
  var allVisiblePreviewBlogEntries = $('.preview-blog-post-container:visible');
  var nonVisiblePreviewBlogEntries = $('.preview-blog-post-container:hidden');
  // debugger
  if(allPreviewBlogEntries.first().is(':hidden')){
    var firstNonVisiblePreview = allVisiblePreviewBlogEntries.first().prev();
  }else{
    var firstNonVisiblePreview = $('.preview-blog-post-container').last();
  }
  for(i=6;i>0;i--){
    firstNonVisiblePreview.show();
    var firstNonVisiblePreview = firstNonVisiblePreview.prev()
  }
  allVisiblePreviewBlogEntries.hide();
}

$(document).ready(function(){
  $('#previous-blog-posts').on('click', revealMoreBlogPosts);
  $('#newer-blog-posts').on('click', revealLessBlogPosts);
  $('#newer-blog-posts').hide();
})