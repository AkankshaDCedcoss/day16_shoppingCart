var products = [
  {
    id: 101,
    title: "Shirt 101",
    image: "pr.jpg",
    price: 150,
    count: 1,
    totalprice: 150,
  },
  {
    id: 102,
    title: "Shirt 102",
    image: "product1.jpg",
    price: 120,
    count: 1,
    totalprice: 120,
  },
  {
    id: 103,
    title: "Shoes 103",
    image: "product2.webp",
    price: 110,
    count: 1,
    totalprice: 110,
  },
  {
    id: 104,
    title: "Shoes 104",
    image: "product4.jpg",
    price: 130,
    count: 1,
    totalprice: 130,
  },
  {
    id: 105,
    title: "Shirt 105",
    image: "product5.jpeg",
    price: 100,
    count: 1,
    totalprice: 100,
  },
];
var addToCarts = [];
var buyNow = [];
$(document).ready(function () {
    $("#empty").hide();
  $("#movetocart").hide();
  $("#movetobuy").hide();
  $("#checkout").hide();
  $("#cart1").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 101) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 101) {
            addToCarts[m].count++;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }
    display();
    $("#movetobuy").show();
    $("#empty").show();
  });
  $("#cart2").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 102) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 102) {
            addToCarts[m].count++;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }
    display();
    $("#movetobuy").show();
    $("#empty").show();
  });

  $("#cart3").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 103) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 103) {
            addToCarts[m].count++;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }
    display();
    $("#movetobuy").show();
    $("#empty").show();
  });

  $("#cart4").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 104) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 104) {
            addToCarts[m].count++;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }
    display();
    $("#movetobuy").show();
    $("#empty").show();
  });

  $("#cart5").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 105) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 105) {
            addToCarts[m].count++;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }
    display();
    $("#movetobuy").show();
    $("#empty").show();
  });
}); // End of document ready

function add(addToCarts) {
  html =
    "<h1>MY CART</h1><table><tr><th>product_ID</th><th>product_TITLE</th><th>product_IMAGE</th><th>product_PRICE</th><th>product_QUANTITY</th><th>product_TOTALPRICE</th><th>Update</th><th>Delete</th><th>Move</th></tr>";
  for (var i = 0; i < addToCarts.length; i++) {
    html +=
      "<tr><td>" +
      addToCarts[i].id +
      "</td><td>" +
      addToCarts[i].title +
      "</td><td>" +
      addToCarts[i].image +
      "</td><td>" +
      addToCarts[i].price +
      "</td><td>" +
      addToCarts[i].count +
      "</td><td>" +
      addToCarts[i].totalprice +
      "</td><td><button id='update' onclick='update(" +
      addToCarts[i].id +
      ")'>Update</button></td><td><button id='delete'  onclick='deleteItemC(" +
      addToCarts[i].id +
      ")'>delete</button>" +
      "</td><td><button id='moveItemBuy' onclick='moveInBuy(" +
      addToCarts[i].id +
      ")'>Move In Buy</button></td>";
  }
  html += "</table>";
  document.getElementById("viewcart").innerHTML = html;
}
function display() {
  html =
    "<h1 id='head1'>MY CART</h1><table><tr><th>ID</th><th>TITLE</th><th>IMAGE</th><th>PRICE</th><th>QUANTITY</th><th>TOTALPRICE</th><th>Update</th><th>Delete</th><th>Move</th></tr>";
  for (var i = 0; i < addToCarts.length; i++) {
    html +=
      "<tr><td>" +
      addToCarts[i].id +
      "</td><td>" +
      addToCarts[i].title +
      "</td><td>" +
      addToCarts[i].image +
      "</td><td>" +
      addToCarts[i].price +
      "</td><td><input type='text' id='quantity' value='" +
      addToCarts[i].count +
      "'></td><td>" +
      addToCarts[i].totalprice +
      "</td><td><button id='update' onclick='update(" +
      addToCarts[i].id +
      ")'>Update</button></td><td><button id='delete'  onclick='deleteItemC(" +
      addToCarts[i].id +
      ")'>delete</button>" +
      "</td><td><button id='moveItemBuy' onclick='moveInBuy(" +
      addToCarts[i].id +
      ")'>Move In Buy</button></td>";
  }
  html += "</table>";
  document.getElementById("viewcart").innerHTML = html;
}
function addInBuy(buyNow) {
  html =
    "<h1>BUY NOW</h1><table><tr><th>product_ID</th><th>product_TITLE</th><th>product_IMAGE</th><th>product_PRICE</th><th>product_QUANTITY</th><th>product_TOTALPRICE</th><th>Move</th><th>";
  for (var i = 0; i < buyNow.length; i++) {
    html +=
      "<tr><td>" +
      buyNow[i].id +
      "</td><td>" +
      buyNow[i].title +
      "</td><td>" +
      buyNow[i].image +
      "</td><td>" +
      buyNow[i].price +
      "</td><td>" +
      buyNow[i].count +
      "</td><td>" +
      buyNow[i].totalprice +
      "</td><td><button id='update' onclick='update(" +
      buyNow[i].id +
      ")'>Update</button></td><td><button id='delete'  onclick='deleteItemB(" +
      buyNow[i].id +
      ")'>delete</button>" +
      "</td><td><button id='moveItemCart' onclick='moveInCart(" +
      buyNow[i].id +
      ")'>Move In Cart</button></td>";
  }
  html += "</table>";
  document.getElementById("buynow").innerHTML = html;
}
function displayBuy() {
  html =
    "<h1 id='head2'>BUY NOW</h1><table><tr><th>ID</th><th>TITLE</th><th>IMAGE</th><th>PRICE</th><th>QUANTITY</th><th>TOTALPRICE</th><th>Update</th><th>Delete</th><th>Move</th></tr>";
  for (var i = 0; i < buyNow.length; i++) {
    html +=
      "<tr><td>" +
      buyNow[i].id +
      "</td><td>" +
      buyNow[i].title +
      "</td><td>" +
      buyNow[i].image +
      "</td><td>" +
      buyNow[i].price +
      "</td><td><input type='text' id='quantity' value='" +
      addToCarts[i].count +
      "'></td><td>" +
      buyNow[i].totalprice +
      "</td><td><button id='update' onclick='update(" +
      buyNow[i].id +
      ")'>Update</button></td><td><button id='delete'  onclick='deleteItemB(" +
      buyNow[i].id +
      ")'>delete</button>" +
      "</td><td><button id='moveItemCart' onclick='moveInCart(" +
      buyNow[i].id +
      ")'>Move In Cart</button></td>";
  }
  html += "</table>";

  document.getElementById("buynow").innerHTML = html;
}
$("#buy1").click(function () {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == 101) {
      var flag = 0;
      for (var m = 0; m < buyNow.length; m++) {
        if (buyNow[m].id == 101) {
          buyNow[m].count++;
          flag = 1;
          break;
        }
      }
      if (flag != 1) {
        console.log("Inside Flag");
        buyNow.push(products[i]);
      }
    }
  }
  displayBuy();
  $("#movetocart").show();
  $("#checkout").show();
});
$("#buy2").click(function () {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == 102) {
      var flag = 0;
      for (var m = 0; m < buyNow.length; m++) {
        if (buyNow[m].id == 102) {
          buyNow[m].count++;
          flag = 1;
          break;
        }
      }
      if (flag != 1) {
        console.log("Inside Flag");
        buyNow.push(products[i]);
      }
    }
  }
  displayBuy();
  $("#movetocart").show();
  $("#checkout").show();
});
$("#buy3").click(function () {
  $("#movetocart").show();
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == 103) {
      var flag = 0;
      for (var m = 0; m < buyNow.length; m++) {
        if (buyNow[m].id == 103) {
          buyNow[m].count++;
          flag = 1;
          break;
        }
      }
      if (flag != 1) {
        console.log("Inside Flag");
        buyNow.push(products[i]);
      }
    }
  }
  displayBuy();
  $("#movetocart").show();
  $("#checkout").show();
});
$("#buy4").click(function () {
  $("#movetocart").show();
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == 104) {
      var flag = 0;
      for (var m = 0; m < buyNow.length; m++) {
        if (buyNow[m].id == 104) {
          buyNow[m].count++;
          flag = 1;
          break;
        }
      }
      if (flag != 1) {
        console.log("Inside Flag");
        buyNow.push(products[i]);
      }
    }
  }
  displayBuy();
  $("#movetocart").show();
  $("#checkout").show();
});
$("#buy5").click(function () {
  $("#movetocart").show();
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == 105) {
      var flag = 0;
      for (var m = 0; m < buyNow.length; m++) {
        if (buyNow[m].id == 105) {
          buyNow[m].count++;
          flag = 1;
          break;
        }
      }
      if (flag != 1) {
        console.log("Inside Flag");
        buyNow.push(products[i]);
      }
    }
  }
  $("#movetocart").show();
  $("#checkout").show();
  displayBuy();
});
$("#movetocart").click(function () {
  $("#movetobuy").show();
  console.log("Inside Move to cart");
  for (var i = 0; i < buyNow.length; i++) {
    addToCarts.push(buyNow[i]);
    buyNow.splice(i, 1);
  }
  display();
  displayBuy();
  $("#checkout").show();
});
$("#movetobuy").click(function () {
  $("#movetocart").show();
  console.log("Inside Move to buy");
  for (var i = 0; i < addToCarts.length; i++) {
    buyNow.push(addToCarts[i]);
    addToCarts.splice(i, 1);
  }
  display();
  displayBuy();
  $("#checkout").show();
});

function deleteItemC(m) {
  for (var i = 0; i < addToCarts.length; i++) {
    if (addToCarts[i].id == m) {
      addToCarts.splice(i, 1);
    }
  }
  display();
}
function deleteItemB(m) {
  for (var i = 0; i < buyNow.length; i++) {
    if (buyNow[i].id == m) {
      buyNow.splice(i, 1);
    }
  }
  displayBuy();
}
function moveInCart(m) {
  for (var i = 0; i < buyNow.length; i++) {
    if (buyNow[i].id == m) {
      addToCarts.push(buyNow[i]);
      buyNow.splice(i, 1);
    }
  }
  displayBuy();
  display();
}
function moveInBuy(m) {
  for (var i = 0; i < addToCarts.length; i++) {
    if (addToCarts[i].id == m) {
      buyNow.push(addToCarts[i]);
      addToCarts.splice(i, 1);
    }
  }
  displayBuy();
  display();
}

function UpdateC(m) {
  var val1 = document.getElementById("quantity").value;

  for (var m = 0; m < addToCarts.length; m++) {
    if (addToCarts[m].id == m) {
      addToCarts[m].quantity = val1;
    }
  }
}
function UpdateB(m) {
  var val1 = document.getElementById("quantity").value;

  for (var m = 0; m < buyNow.length; m++) {
    if (buyNow[m].id == m) {
      buyNow[m].quantity = val1;
    }
  }
}
$("#empty").click(function()
{
    for (var i = 0; i < addToCarts.length; i++) {
        addToCarts.splice(i, 1);
    }
    display();
});
