window.onload = function() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    var date = new Date();

    document.getElementById('date').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();
};

(new Date().getHours() > 12) {
    document.getElementById("theGreet").innerHTML = "Good Afternoon!";
