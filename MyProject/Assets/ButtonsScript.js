#pragma strict

function Start () {

}

public static var whichHero = 1;

function OnGUI () {
	if (GUI.Button (Rect (10,10,120,30), "Green Hero")) {
		whichHero = 1;
		Debug.Log("Hero "+whichHero+" chosen");
		
	}
	if (GUI.Button (Rect (10,50,120,30), "Red Hero")) {
		whichHero = 2;
		Debug.Log("Hero "+whichHero+" chosen");
		
	}	
}


function Update () {
 


}