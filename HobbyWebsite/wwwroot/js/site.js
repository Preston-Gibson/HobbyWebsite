// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function calculateFee() {
    let hourlyRate = $('#hourlyRate').val();
    let numHours = $('#numHours').val();
    if (numHours >= 0 ) {
        $('#resultString').text(`Total: $${(hourlyRate * numHours).toFixed(2)}`)
    } else {
        alert(`The number of hours must be a positive number.`);
    }
}