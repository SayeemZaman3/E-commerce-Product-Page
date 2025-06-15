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
          <img src="assets/icon-delete.svg" alt="del">
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
  
  totalAmount ? $('#totalAmount').addClass('active') :
  $('#totalAmount').removeClass('active');
  
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
}
cartCheck();