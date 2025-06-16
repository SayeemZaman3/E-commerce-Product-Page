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

// Buttons
$('.prev')
  .html('<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>')
  .click(prevImg);
$('.next')
  .html('<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>')
  .click(nextImg);
  

// Prev & Next
let index = 0;

function nextImg() {
  if(index !== 3){
    $(`#p${index}, #p0${index}`)
      .removeClass('main-img')
      .addClass('side-img');
    $(`#p${index+1}, #p0${index+1}`)
      .removeClass('side-img')
      .addClass('main-img');
    
    setImage();
    index++;
  } else {
    $(`#p${index}, #p0${index}`).attr('class', 'side-img');
    index = 0;
    $(`#p${index}, #p0${index}`).attr('class', 'main-img');
  }
}

function prevImg() {
  if(index !== 0){
    $(`#p${index}, #p0${index}`)
      .removeClass('main-img')
      .addClass('side-img');
    $(`#p${index-1}, #p0${index-1}`)
      .removeClass('side-img')
      .addClass('main-img');
  
    index--;
  } else {
    $(`#p${index}, #p0${index}`).attr('class', 'side-img');
    index = 3;
    $(`#p${index}, #p0${index}`).attr('class', 'main-img');
  }
}

// Desktop
$('[id^=p]').filter(function(){
  return this.id.length === 2 || this.id.length === 3;
}).click(function() {
  
  if ($(this).hasClass('main-img')) return;
  
  // Set classes
  $('.main-img')
    .removeClass('main-img')
    .addClass('side-img');
  $(this)
    .removeClass('side-img')
    .addClass('main-img');
  
  index = parseInt($(this).attr('id').slice(1));
  
  // Set image
  setImage();
});

function setImage() {
  $('#displayImg, #displayImage').attr('src', $('.main-img').attr('src'));
}


// Repeater
setInterval(nextImg, 4000)


// Buy Section

// Amount of purchase
let amount = 0;

$('#plus').click(() => {
  amount++;
  setAmount();
});
$('#minus').click(() => {
  amount--;
  setAmount();
});

function setAmount() {
  $('#amount').val(amount);
}

$('#amount').change(() => {
  amount = parseInt( $('#amount').val() );
})


// Cart

$('#cartBtn').click(() => {
  $('#cart').toggleClass('active')
});

$(document).click((e) => {
  if (!$(e.target).closest('#cart, button').length) {
    $('#cart').removeClass('active');
  }
});

// Add To Cart
let totalAmount = 0;

$('#add-to-cart').click(() => {
  if ($('#amount').val() > 0) {
    createItem("Fall Limited Sneakers Edition", 125, "assets/image-product-1-thumbnail.jpg", parseInt($('#amount').val()));
    $('#cart').addClass('active');
    $('#amount').val(0);
    amount = 0;
  }
});


function createItem(name, price, img, amount) {
  $('#cart').append(`
  <div class="item">
    <div class="info">
      <img src="${img}" alt="assets/image-product-1-thumbnail.jpg" class="item-img">
      <div class="details">
        <p class="name">${name}</p>
        <p class="price-tag">$${price} × ${amount}</p>
        <p class="total-price">$${price*amount}</p>
        <button class="del">
          <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
        </button>
      </div>
    </div>
    <button class="checkout">Checkout</button>
  </div>
  `)
  totalAmount += amount;
  
  // For Deleting Item In Cart
  $('.del').click(function() {
    totalAmount -= amount;
    $('#totalAmount').text(totalAmount);
    
    $(this).closest('.item').remove();
    
    cartCheck()
  });
  
  $('#totalAmount').text(totalAmount);
  cartCheck()
}

// Nothing Message
function cartCheck() {
  if ($('.item').length === 0) {
    $('#status').addClass('active');
  } else {
    $('#status').removeClass('active');
  }
  totalAmount ? $('#totalAmount').addClass('active') :
  $('#totalAmount').removeClass('active');
}
cartCheck();


// Lightbox
$('#displayImg').click(() => {
  $('#lightbox').addClass('active');
})
$('.close').click(()=>{
  $('#lightbox').removeClass('active');
})