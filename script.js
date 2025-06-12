// Navigation
// Mobile

$('#open-nav').click(() =>{
  $('#mnav, #overlay').toggleClass('active');
})

$(document).click((e) => {
  if (!$(e.target).closest('#mnav, #open-nav').length) {
    $('#mnav, #overlay').removeClass('active');
  }
})

$('.close').click(() => {
  $('#mnav, #overlay').removeClass('active');
});