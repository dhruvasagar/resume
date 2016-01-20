/* global $, moment */

$(document).ready(function () {
  moment.lang("en");

  var total_experience = moment("2006-08-18", "YYYY-MM-DD").fromNow(true);
  $('#total_experience').text(total_experience + ' ');

  $('.collapsible').click(function() {
    $(this).find('.collapse').toggleClass('in');
    $(this).find('.glyphicon').toggleClass('glyphicon-triangle-bottom');
  });
});
