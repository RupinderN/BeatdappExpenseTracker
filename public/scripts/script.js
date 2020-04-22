// =====================================================================================
// GET all of the values the user typed in the INPUT BOXES, and APPEND expenses to TABLE
// =====================================================================================
function recordInputs() {
    // Get all values that were typed in
    var expenseName = $("input#name").val();
    var expenseMoney = $("input#money").val();
    var expenseCategory = $("input#category").val();

    // Append values typed to the table
    $('.table').append("<tr>" 
    + "<td>" + expenseName + "</td>" 
    + "<td>" + "$" + expenseMoney + "</td>" 
    + "<td>" + expenseCategory + "</td>" 
    + "<td>" + "<button type='button' class='btn btn-danger btn-sm'>Remove</button>" + "</td>" 
    + "</tr>");

    // Clear Input Fields after submission
    $("#my_form")[0].reset();
}