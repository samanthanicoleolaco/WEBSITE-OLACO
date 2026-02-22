document.addEventListener("DOMContentLoaded", function () {


    
    const phTime = new Date().toLocaleString("en-PH", {
        timeZone: "Asia/Manila"
    });

    document.getElementById("demo").innerHTML =
        "Current PH Time: " + phTime;
});


function showMessage() {
    alert("Hello! Welcome to my portfolio ");
}