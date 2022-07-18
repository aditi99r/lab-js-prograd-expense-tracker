function addTransaction()
{
    var costing = 
    {
        id: localStorage.length,
        name: document.getElementById("text").value,
        amount: document.getElementById("amount").value
    };
    if(costing.name && costing.amount)
    {
        localStorage.setItem(costing.id, JSON.stringify(costing));
    }
}

var positive = 0.00, negative = 0.00, balance = 0.00;

for (let i = localStorage.length ; i>0; i--) 
{
    var item = JSON.parse(localStorage.getItem(i-1));
    var li = document.createElement("li");
    if(item.amount<0)
    {
        li.classList.add("minus");
        negative = negative + parseFloat(item.amount);
        negative.toFixed(2);
    }
    else 
    {
        li.classList.add("plus");
        positive = positive + parseFloat(item.amount);
    }
    var ul = document.getElementById("list");
    ul.appendChild(li);
    li.innerHTML = "<div>"+item.name+"</div> <div>"+item.amount+"</div>" ;
}
balance = negative + positive;
negative = negative.toFixed(2);
positive = positive.toFixed(2);
balance = balance.toFixed(2);
document.getElementById("balance").innerHTML = "$"+balance;
document.getElementById("money-plus").innerHTML = "+$"+positive;
document.getElementById("money-minus").innerHTML = "-$"+negative;