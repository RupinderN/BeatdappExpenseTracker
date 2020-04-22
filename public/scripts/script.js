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
    $("span").text(totalSum);
    console.log("Total Sum: " + totalSum);
}

// ==========================================================================
// When the user deletes an expense, subtract cost from total, and delete ROW
// ==========================================================================
$(".table tbody").on("click", ".btn", function () {
    var removedItemCost = parseFloat($(this).closest('tr').find('td').eq(1).text().substring(1));
    console.log("Removed Item Cost: " + removedItemCost);

    for (var i = 0; i < totalExpenses.length; i++) {
        if (totalExpenses[i] == removedItemCost) {
            totalExpenses.splice(i, 1);
            break;
        }
    }

    console.log("Total Expenses: " + totalExpenses);
    addTotalExpenses();
    $(this).closest('tr').remove();
});

// ===================================================================
// Don't refresh the page on submit, otherwise the expenses will RESET
// ===================================================================
$("#my_form").submit(function (e) {
    e.preventDefault();
});