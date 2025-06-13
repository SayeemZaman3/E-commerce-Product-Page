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

// Image Slider
let index = 0;

function nextImg() {
  if(index !== 3){
    $(`#p${index}`).attr('class', 'side-img');
    $(`#p${index+1}`).attr('class', 'main-img');
    
    index++;
  } else {
    $(`#p${index}`).attr('class', 'side-img');
    index = 0;
    $(`#p${index}`).attr('class', 'main-img');
  }
}

function prevImg() {
  if(index !== 0){
    $(`#p${index}`).attr('class', 'side-img');
    $(`#p${index-1}`).attr('class', 'main-img');
  
    index--;
  } else {
    $(`#p${index}`).attr('class', 'side-img');
    index = 3;
    $(`#p${index}`).attr('class', 'main-img');
  }
}