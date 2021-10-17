function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var amount = parseFloat(principal) + parseFloat(interest);

    var year = new Date().getFullYear()+parseInt(years);

    if(principal.value <= 0){
        alert("Please enter a positive value, greater than zero.");
        principal.focus();
    }
    else {
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>, \
        <br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+amount+"</mark>,\
        <br\>in the year <mark>"+year+"</mark>\<br\>"
    }   
}

function updateRate()
{
    var rateval = document.getElementById("rate").value+"%";
    document.getElementById("rate_val").innerText=rateval;
}


        