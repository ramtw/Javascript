function changeText()
{
	//-------------child to parent--------------
	//var child=document.getElementById("p1");
	//var parent=child.parentNode;
	//var parent=child.parentElement;
	//parent.style.color="blue";
	
	//-----------parent to child---------------
	//var parent=document.getElementById("main");
	//var child=parent.lastElementChild;
	//var child=parent.firstElementChild;
	//var child=parent.childNodes[3];
	//child.style.color="blue";

	//---------sibling to sibling--------------
	var para2=document.getElementById("p2");
	//var sibling=para2.nextElementSibling;
	var sibling=para2.previousElementSibling;
	
	sibling.style.color="red";
	
}
