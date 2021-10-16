function checkdata()
{
    var amount_data = document.getElementById("principal"); 
    
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var amount = parseFloat(principal) + parseFloat(interest);

    var year = new Date().getFullYear()+parseInt(years);

    if(principal <= 0){
        alert("Please enter a positive value, greater than zero.");
        amount_data.focus();
        return false;
    }
    else {
        document.getElementById("interest").innerHTML=interest;
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


        