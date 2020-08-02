function addcontent()
{
	var elementh=document.createElement("h1")
	var main=document.getElementById("main");
	main.appendChild(elementh);
	var texth=document.createTextNode("How we came to existence?");
	elementh.appendChild(texth);



	var element=document.createElement("p")
	main.appendChild(element);
	var text=document.createTextNode("Organisms of many species are specialized into male and female varieties, each known as a sex.[1][2] Sexual reproduction involves the combining and mixing of genetic traits: specialized cells known as gametes combine to form offspring that inherit traits from each parent. The gametes produced by an organism define its sex: males produce small gametes (e.g. spermatozoa, or sperm, in animals) while females produce large gametes (ova, or egg cells). Individual organisms which produce both male and female gametes are termed hermaphroditic.[2] Gametes can be identical in form and function (known as isogamy), but, in many cases, an asymmetry has evolved such that two different types of gametes (heterogametes) exist (known as anisogamy).");
	element.appendChild(text);
	
	var pAttribute=document.createAttribute("id");
	pAttribute.value="test";
	element.setAttributeNode(pAttribute);
}
function remove()
{
	var elementh=document.getElementsByTagName("h1")[2];
	var parent=elementh.parentNode;
	parent.removeChild(elementh);
	
	var para=document.getElementsByTagName("p")[2];
	parent.removeChild(para);
}
