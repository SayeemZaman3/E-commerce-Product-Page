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
    $(`#p${index}`)
      .removeClass('main-img')
      .addClass('side-img');
    $(`#p${index+1}`)
      .removeClass('side-img')
      .addClass('main-img');
    
    setImage();
    index++;
  } else {
    $(`#p${index}`).attr('class', 'side-img');
    index = 0;
    $(`#p${index}`).attr('class', 'main-img');
  }
}

function prevImg() {
  if(index !== 0){
    $(`#p${index}`)
      .removeClass('main-img')
      .addClass('side-img');
    $(`#p${index-1}`)
      .removeClass('side-img')
      .addClass('main-img');
  
    index--;
  } else {
    $(`#p${index}`).attr('class', 'side-img');
    index = 3;
    $(`#p${index}`).attr('class', 'main-img');
  }
}

// Desktop
$('[id^=p]').click(function() {
  
  if ($(this).hasClass('main-img')) return;
  
  // Set classes
  $('.main-img').removeClass('main-img').addClass('side-img');
  $(this).removeClass('side-img').addClass('main-img');
  
  index = parseInt($(this).attr('id').slice(1));
  
  // Set image
  setImage();
});

function setImage() {
  $('#displayImg').attr('src', $('.main-img').attr('src'));
}


// Repeater
setInterval(nextImg, 4000)
