function changeStyle()
{
	var paragraph=document.getElementsByClassName('para');
	for(i=0;i<2;i++)
	{
		paragraph[i].innerHTML="New text "+(i+1);
	}
	
}
function addText()
{
	if(confirm("These changes are final"))
	{
		var paragraph=document.getElementsByClassName('para');
		paragraph[4].innerHTML=paragraph[2].innerHTML+paragraph[3].innerHTML;
		paragraph[2].innerHTML="";
		paragraph[3].innerHTML="";
		document.getElementById("test").style.visibility="hidden";
	}
}
