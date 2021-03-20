var bt1=document.getElementById('b1');[]
var bt2=document.getElementById('b2');
var bt3=document.getElementById('b3');
bt1.addEventListener("click",somme);
bt2.addEventListener("click",valeur);
bt3.addEventListener("click",equation);
var bs1=document.getElementById("sln1")
var bs2=document.getElementById("sln2")
var bs3=document.getElementById("sln3")
bs1.addEventListener("click",ex1);
bs2.addEventListener("click",ex2);
bs3.addEventListener("click",ex3);
var bt4=document.getElementById("ex4");
bt4.addEventListener("click",ex4);
var xx1=document.getElementById("x1");
var titre=document.getElementById("titre");
titre.addEventListener("mouseenter",tin);
titre.addEventListener("mouseleave",tout)
//document.getElementById("").style.fontSize()
var img2=document.getElementById("img3");
img2.addEventListener("click",img);


function somme(){
  var x = prompt('Saisir x:');  
    x = Number(x) ;
    var y= prompt('Saisir y:');  
    y = Number(y) ;
    var z=x+y;
    alert(x + "+" + y + "=" + z); 

}
function valeur(){
 	var A = prompt('Entrez un nombre'); 
    A = Number(A);
    alert("|" + A + "| = " + Math.abs(A)); 
 }
 
function equation(){
 	var a, b  
    a = prompt('a'); 
    a = Number(a);
    a = prompt('b');  
    b = Number(b);
    if (a == 0 && b == 0) { alert('IR') } 
    	else if (a == 0 && b != 0) { alert("Pas de Solution dans IR") }
    		else { alert("x= " + -b / a) } 

 }
function ex1(){
	document.getElementById("tt").style.display="block";
	document.getElementById("tt1").style.display="none";
	document.getElementById("tt2").style.display="none";
}
function ex2(){
	document.getElementById("tt").style.display="none";
	document.getElementById("tt1").style.display="block";
	document.getElementById("tt2").style.display="none";
}
function ex3(){
	document.getElementById("tt").style.display="none";
	document.getElementById("tt1").style.display="none";
	document.getElementById("tt2").style.display="block";
}
function ex4() {
  	do{
  		var x=prompt("donner un entier positif");
  	}
  	while(x<0);
  	var t=[];
  
  	for (var i=1; i<=x; i++) {
  		if (x % i == 0) {
  			t.push(i);
  		}

  	xx1.innerHTML= t;	
    if (t.length==2){xx1.innerHTML= t + "<br>" + (x +" "+ "premier" );}
      else {
        xx1.innerHTML= t + "<br>" + (x+ " " + "non premier");
      }
  	}
  	
}  
function tin() {
  titre.style.backgroundColor = "black";
  titre.style.fontSize="40px";
  titre.style.color="white";
}
function tout() {
  titre.style.backgroundColor = "blue";
  titre.style.fontSize="10";
  titre.style.color="black";
}
function img() {
  img2.src="file:///C:/Users/Joker/Desktop/java%20rania%20ben%20chaaben/tp3.3/images/java.png";
}
 