window.addEventListener("load",initAll,false);
var nodeChgArea;

function initAll()
{
	document.getElementById("theForm").addEventListener("submit", nodeChanger, false);
	nodeChgArea = document.getElementById("modifiable");
}

function addNode()
{
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);
	nodeChgArea.appendChild(newGraf);
}

function delNode()
{	
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);
	nodeChgArea.removeChild(oldGraf);
}

function insertNode()
{	
	var grafChoice = document.getElementById("grafCount").selectedIndex; // where user wants to enter
	var inText = document.getElementById("textArea").value; // what user wants to enter
	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);
	var allGrafs = nodeChgArea.getElementsByTagName("p"); // array of p
	var oldGraf = allGrafs.item(grafChoice);
	nodeChgArea.insertBefore(newGraf,oldGraf);
}

function replaceNode()
{
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);
	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);
	nodeChgArea.replaceChild(newGraf,oldGraf);
}

function nodeChanger(evt)
{	
	var actionType = -1;
	var pGrafCT = nodeChgArea.getElementsByTagName("p").length;
	var radioButtonSet = document.getElementById("theForm").nodeAction;

	for (var i = 0; i < radioButtonSet.length; i++)
	{
		if (radioButtonSet[i].checked)
		{
			actionType = i;
		}
	}

	switch(actionType)
	{
		case 0:
			addNode();
			break;
		case 1:
			if (pGrafCT > 0)
			{
				delNode();
				break;
			}
		case 2:
			if (pGrafCT > 0)
			{
				insertNode();
				break;
			}
		case 3:
			if (pGrafCT > 0)
			{
				replaceNode();
				break;
			}	
        case 4: 
            if (pGrafCT > 0)
            {
                moveNodeUp();
                break;
            }
            
        case 5: 
            if (pGrafCT > 0)
            {
                moveNodeDown();
                break;
            }
        case 6:
            if (pGrafCT > 0)
            {
                highlightNode();
                break;
            }
        case 7:
            if (pGrafCT > 0)
            {
                clearAllNodes();
                break;
            }
		default:
			alert("No valid action was chosen");		
	}

	document.getElementById("grafCount").options.length = 0;

	for (i = 0; i < nodeChgArea.getElementsByTagName("p").length; i++) 
	{
		document.getElementById("grafCount").options[i] = new Option(i+1);
	}

	evt.preventDefault();
}

function moveNodeUp() {
    var grafChoice = document.getElementById("grafCount").selectedIndex;
    if (grafChoice > 0) {
        var allGrafs = nodeChgArea.getElementsByTagName("p");
        var selectedGraf = allGrafs.item(grafChoice);
        var previousGraf = allGrafs.item(grafChoice - 1);
        nodeChgArea.insertBefore(selectedGraf, previousGraf);
    }
}

function moveNodeDown() {
    var grafChoice = document.getElementById("grafCount").selectedIndex;
    var allGrafs = nodeChgArea.getElementsByTagName("p");
    if (grafChoice < allGrafs.length - 1) {
        var selectedGraf = allGrafs.item(grafChoice);
        var nextGraf = allGrafs.item(grafChoice + 1);
        nodeChgArea.insertBefore(nextGraf, selectedGraf);
    }
}

function highlightNode() {
    var grafChoice = document.getElementById("grafCount").selectedIndex;
    var allGrafs = nodeChgArea.getElementsByTagName("p");
    var selectedGraf = allGrafs.item(grafChoice);
    selectedGraf.classList.add("highlighted");
}

function clearAllNodes() {
    nodeChgArea.innerHTML = ""; 
}
