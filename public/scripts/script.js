var totalExpenses = [];
var totalSum = 0;

// =====================================================================================
// GET all of the values the user typed in the INPUT BOXES, and APPEND expenses to TABLE
// =====================================================================================
function recordInputs() {
    // Get all values that were typed in
    var expenseName = $("input#name").val();
    var expenseMoney = parseFloat($("input#money").val());
    var expenseCategory = $("input#category").val();

    // Append values typed to the table
    $('.table').append("<tr>" +
        "<td>" + expenseName + "</td>" +
        "<td>" + "$" + expenseMoney + "</td>" +
        "<td>" + expenseCategory + "</td>" +
        "<td>" + "<button type='button' class='btn btn-danger btn-sm'><i class='fas fa-trash'></i></button>" + "</td>" +
        "</tr>");

    // Keep an array of all the expenses
    totalExpenses.push(expenseMoney);

    // Clear Input Fields after submission
    $("#my_form")[0].reset();
}

// =======================
// ADD all of the expenses
// =======================
function addTotalExpenses() {
    var arrayOfNumbers = totalExpenses.map(Number);
    var sumOfNumbers = arrayOfNumbers.reduce((a, b) => a + b, 0);
    totalSum = sumOfNumbers;

    // Change value of "TOTAL EXPENSES" in the HTML to sum of all expenses, to 2 decimal values
    $("span").text(totalSum.toFixed(2));
}

// ================================================================================
// When the user deletes an expense, subtract cost from total, and delete table ROW
// ================================================================================
$(".table tbody").on("click", ".btn", function () {
    // Get cost of removed expense
    var removedItemCost = parseFloat($(this).closest('tr').find('td').eq(1).text().substring(1));

    // Find cost of item in totalExpenses array, and remove it
    for (var i = 0; i < totalExpenses.length; i++) {
        if (totalExpenses[i] == removedItemCost) {
            totalExpenses.splice(i, 1);
            break;
        }
    }

    // Add the total cost after the user deleted an expense
    addTotalExpenses();

    // delete TABLE ROW
    $(this).closest('tr').remove();
});

// ===================================================================
// Don't refresh the page on submit, otherwise the expenses will RESET
// ===================================================================
$("#my_form").submit(function(e) {
    e.preventDefault();
});