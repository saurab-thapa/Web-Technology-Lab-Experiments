$(document).ready(function () {
  $("#evaluate").click(function () {
    const amount = Number($("#amount").val());
    const rent = Number($("#rent").val());
    const accessories = Number($("#accessories").val());
    const emergency = Number($("#emergency").val());
    const savings = Number($("#savings").val());
    const totalPercent = rent + accessories + emergency + savings;

    if (amount <= 0 || [rent, accessories, emergency, savings].some(p => p < 0 || p > 100)) {
      alert("Please enter a valid amount and percentages between 0 and 100.");
      return;
    }
    if (totalPercent !== 100) {
      alert("The percentages must add up to exactly 100%.");
      return;
    }

    $("#rentResult").text("₹" + (amount * rent / 100).toFixed(2));
    $("#accessoriesResult").text("₹" + (amount * accessories / 100).toFixed(2));
    $("#emergencyResult").text("₹" + (amount * emergency / 100).toFixed(2));
    $("#savingsResult").text("₹" + (amount * savings / 100).toFixed(2));
    $("#message").text("Budget evaluated successfully!").css("color", "#167d68");
  });
});
