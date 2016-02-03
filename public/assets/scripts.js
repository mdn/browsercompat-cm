$(document).ajaxStart(function() {
  $('body').addClass('loading');
  $('#loading').text('Loading.');
});

$(document).ajaxStop(function() {
  $('body').removeClass('loading');
  $('#loading').text('');
});
