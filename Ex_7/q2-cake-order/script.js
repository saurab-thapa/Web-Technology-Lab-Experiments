$(document).ready(function () {
  $("#placeOrder").click(function () {
    const quantities = [
      Number($("#colorQty").val()),
      Number($("#brownQty").val()),
      Number($("#milkyQty").val()),
      Number($("#blackQty").val())
    ];

    if (quantities.some(q => !Number.isInteger(q) || q < 0)) {
      alert("Please enter whole-number quantities of zero or more.");
      return;
    }

    const total = quantities[0] * 300 +
                  quantities[1] * 200 +
                  quantities[2] * 250 +
                  quantities[3] * 350;

    $("#totalPrice").text("₹" + total.toLocaleString("en-IN"));
    $("#message").text(total > 0 ? "Thank you! Your order total is ready." : "Choose at least one cake to place an order.");
  });
});
