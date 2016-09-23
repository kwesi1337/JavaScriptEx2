// Opgave 1

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var demo = document.getElementById("demo");

div1.style.color = "red";
div2.style.color = "blue";
div3.style.color = "green";


// Opgave 2


function Person(firstName, lastName, phone, email) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;

}
;



var p1 = new Person("Hans", "Henriksen", 1111, "HH@H.dk");
var p2 = new Person("Mogens", "Henriksen", 1111, "MH.dk");
var p3 = new Person("Grete", "Henriksen", 1111, "GH@H.dk");


var arrOfPer = [p1, p2, p3];
var arrLength = arrOfPer.length;
var tBody = document.getElementById("tBody");

for (var i = 0; i < arrLength; i++) {

    var row = document.createElement("tr");
    var tempPerson = arrOfPer[i];
    console.log(tempPerson.firstName);
    row.innerHTML = "<td>" + tempPerson.firstName + "</td>";
    row.innerHTML += "<td>" + tempPerson.lastName + "</td>";
    row.innerHTML += "<td>" + tempPerson.phone + "</td>";
    row.innerHTML += "<td>" + tempPerson.email + "</td>";
tBody.appendChild(row);


};

//Opgave 3
var divFirst = document.getElementById("divFirst");
var divSecond = document.getElementById("divSecond");
var divThird = document.getElementById("divThird");

divFirst.onclick = function () {
    
    alert("Black clicked");
};

divSecond.onclick = function () {
    alert("Blue clicked");
};

divThird.onclick = function () {
    
    alert("Yellow clicked");
};


//Opgave 4

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

one.onmouseover = function () {
    
    one.innerHTML = "You are over  me";
};

one.onmouseleave = function (){
    
    one.innerHTML = "";
};

two.onmouseover = function (){
    two.innerHTML = "You are over me";
    
};

two.onmouseleave = function () {
    
    two.innerHTML = "";
    
    
};

three.onmouseover = function () {
    
    three.innerHTML = "You are over me";
};

three.onmouseleave = function () {
    
    
    three.innerHTML = "";
    
};

// Opgave 5

var three = document.getElementById("tableToBody");
var btn = document.getElementById("btn");
var tableToBody = document.getElementById("tableToBody");

btn.onclick = function () {
    
    var rowToTable = document.createElement("tr");
    var name = document.getElementById("namefield").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    rowToTable.innerHTML = "</td>" + name + "</td>";
    rowToTable.innerHTML += "</td>" + gender + "</td>";
    tableToBody.appendChild(rowToTable);
    
};


// Opgave 6


var lList = document.getElementById("list").getElementsByTagName("li");
var lArg = lList.length;
var listDiv = document.getElementById("listDiv");

checkList(lArg);

function checkList(n) {
    if (n % 2 === 0){
        
        listDiv.style.backgroundColor = "red";
    } 
    
    else {
        
        listDiv.style.backgroundColor = "blue";
    }
};

for (var i = 0; i < lList.length; i++){
    
    changeFont(lList[i]);
}

function changeFont(listEle){
    
    listEle.onclick = function () {
        
        alert("I was clicked." + listEle.innerText);
    };
    
    
    listEle.onmouseover = function (){
        
        listEle.style.fontSize = "xx-large";
    };
    
    listEle.onmouseleave = function (){
        
        listEle.style.fontSize = "medium";
        
    };
    
}

