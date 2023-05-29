var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
var max = 100.00;
var APlus = 95.00;
var A = 90.00;
var AMinus = 85.00;
var BPlus = 80.00
var B = 75.00;
var BMinus = 70.00;
var CPlus = 65.00;
var C = 60.00;
var CMinus = 55.00;
var D = 50.00;
var F = 0.00;

createHistogram();

function compareGrade(grade) {

    if (grade <= max && grade >= APlus) {
        var row = document.getElementById("APlusRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < APlus && grade >= A) {
        var row = document.getElementById("ARow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < A && grade >= AMinus) {
        var row = document.getElementById("AMinusRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < AMinus && grade >= BPlus) {
        var row = document.getElementById("BPlusRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < BPlus && grade >= B) {
        var row = document.getElementById("BRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < B && grade >= BMinus) {
        var row = document.getElementById("BMinusRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < BMinus && grade >= CPlus) {
        var row = document.getElementById("CPlusRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < CPlus && grade >= C) {
        var row = document.getElementById("CRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < C && grade >= CMinus) {
        var row = document.getElementById("CMinusRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < CMinus && grade >= D) {
        var row = document.getElementById("DRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }

    if (grade < D && grade >= F) {
        var row = document.getElementById("FRow");
        var x = row.insertCell(1);
        x.innerHTML = "X";
    }
}

function clearHistogram() {
    for (var i = 0; i < 11; i++) {
        var numOfCells = document.getElementById("histogramTable").rows[i].cells.length;
        var rowID = document.getElementById("histogramTable").rows[i].id;
        var row = document.getElementById(rowID);

        for (var j = 0; j < numOfCells - 1; j++) {
            row.deleteCell(1);
        }
    }
}

function addGrade() {
    var input = parseFloat(document.getElementById("newGrade").value);

    if (input > max || input < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
    } else {
        grades.push(input)
        document.getElementById("error").innerHTML = "";
    }
    
    document.getElementById("newGrade").value = "";

    compareGrade(input);
}

var histogramRows = document.getElementsByClassName("Bounds");

for (var i = 0; i < histogramRows.length; i++) {
    histogramRows[i].addEventListener("change", createHistogram);
}

function createHistogram() {
    clearHistogram();

    for (var i = 0; i < grades.length; i++) {
        compareGrade(grades[i]);
    }
}

document.getElementById("Max").addEventListener("change", changeMax);
document.getElementById("APlus").addEventListener("change", changeAPlus);
document.getElementById("A").addEventListener("change", changeA);
document.getElementById("AMinus").addEventListener("change", changeAMinus);
document.getElementById("BPlus").addEventListener("change", changeBPlus);
document.getElementById("B").addEventListener("change", changeB);
document.getElementById("BMinus").addEventListener("change", changeBMinus);
document.getElementById("CPlus").addEventListener("change", changeCPlus);
document.getElementById("C").addEventListener("change", changeC);
document.getElementById("CMinus").addEventListener("change", changeCMinus);
document.getElementById("D").addEventListener("change", changeD);
document.getElementById("F").addEventListener("change", changeF);

function changeMax() {
    var x = document.getElementById("Max").value;

    if (x < APlus || x < A || x < AMinus || x < BPlus || x < B || x < BMinus || x < CPlus || x < C || x < CMinus || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("Max").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("Max").style.backgroundColor = "";

        max = parseFloat(x);
    }
}

function changeAPlus() {
    var x = document.getElementById("APlus").value;
    
    if (x > max || x < A || x < AMinus || x < BPlus || x < B || x < BMinus || x < CPlus || x < C || x < CMinus || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("APlus").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("APlus").style.backgroundColor = "";
        
        APlus = parseFloat(x);
    }
}

function changeA() {
    var x = document.getElementById("A").value;
    
    if (x > max || x > APlus || x < AMinus || x < BPlus || x < B || x < BMinus || x < CPlus || x < C || x < CMinus || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("A").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("A").style.backgroundColor = "";
        
        A = parseFloat(x);
    }
}

function changeAMinus() {
    var x = document.getElementById("AMinus").value;
    
    if (x > max || x > APlus || x > A || x < BPlus || x < B || x < BMinus || x < CPlus || x < C || x < CMinus || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("AMinus").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("AMinus").style.backgroundColor = "";
        
        AMinus = parseFloat(x);
    }
}

function changeBPlus() {
    var x = document.getElementById("BPlus").value;
    
    if (x > max || x > APlus || x > A || x > AMinus|| x < B || x < BMinus || x < CPlus || x < C || x < CMinus || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("BPlus").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("BPlus").style.backgroundColor = "";
        
        BPlus = parseFloat(x);
    }
}

function changeB() {
    var x = document.getElementById("B").value;
    
    if (x > max || x > APlus || x > A || x > AMinus|| x > BPlus || x < BMinus || x < CPlus || x < C || x < CMinus || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("B").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("B").style.backgroundColor = "";
        
        B = parseFloat(x);
    }
}

function changeBMinus() {
    var x = document.getElementById("BMinus").value;
    
    if (x > max || x > APlus || x > A || x > AMinus|| x > BPlus || x > B || x < CPlus || x < C || x < CMinus || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("BMinus").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("BMinus").style.backgroundColor = "";
        
        BMinus = parseFloat(x);
    }
}

function changeCPlus() {
    var x = document.getElementById("CPlus").value;
    
    if (x > max || x > APlus || x > A || x > AMinus|| x > BPlus || x > B || x > BMinus || x < C || x < CMinus || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("CPlus").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("CPlus").style.backgroundColor = "";
        
        CPlus = parseFloat(x);
    }
}

function changeC() {
    var x = document.getElementById("C").value;
    
    if (x > max || x > APlus || x > A || x > AMinus|| x > BPlus || x > B || x > BMinus || x > CPlus || x < CMinus || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("C").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("C").style.backgroundColor = "";
        
        C = parseFloat(x);
    }
}

function changeCMinus() {
    var x = document.getElementById("CMinus").value;
    
    if (x > max || x > APlus || x > A || x > AMinus|| x > BPlus || x > B || x > BMinus || x > CPlus || x > C || x < D || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("CMinus").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("CMinus").style.backgroundColor = "";
        
        CMinus = parseFloat(x);
    }
}

function changeD() {
    var x = document.getElementById("D").value;
    
    if (x > max || x > APlus || x > A || x > AMinus|| x > BPlus || x > B || x > BMinus || x > CPlus || x > C || x > CMinus || x < F) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("D").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("D").style.backgroundColor = "";
        
        D = parseFloat(x);
    }
}

function changeF() {
    var x = document.getElementById("F").value;
    
    if (x > max || x > APlus || x > A || x > AMinus|| x > BPlus || x > B || x > BMinus || x > CPlus || x > C || x > CMinus || x > D) {
        document.getElementById("error").innerHTML = "Invalid Input!";
        document.getElementById("F").style.backgroundColor = "#efabbb";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("F").style.backgroundColor = "";
        
        F = parseFloat(x);
    }
}
