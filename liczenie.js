function sprawdz()
{
let liczba = document.getElementById("pole").value;
let uchwyt = document.getElementById("wynik");

if (liczba==="" || liczba === " ") uchwyt.innerHTML="wprowadź liczbę";
else if (liczba>0) uchwyt.innerHTML="dodatnia";
else if (liczba<0) uchwyt.innerHTML="ujemna";
else if (liczba==0) uchwyt.innerHTML="zero";

else document.uchwyt.innerHTML="to nie jest liczba";

} 


