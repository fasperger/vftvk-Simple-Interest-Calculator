function compute()
{
    // Variables setup
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value * years * rate / 100;
    var amount = parseFloat(principal.value) + parseFloat(interest);

    var year = new Date().getFullYear()+parseInt(years);
    
    //Number input validation
    if(principal.value <= 0){
        alert("Please enter a positive value, greater than zero.");
        principal.focus();
    }
    // if number is positive and greater than zero, then it should display the text containing the resulting information
    else {
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal.value+"</mark>, \
        <br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+amount+"</mark>,\
        <br\>in the year <mark>"+year+"</mark>\<br\>"
    }   
}
// function that updates the rate when sliding the form element
function updateRate()
{
    var rateval = document.getElementById("rate").value+"%";
    document.getElementById("rate_val").innerText=rateval;
}


        