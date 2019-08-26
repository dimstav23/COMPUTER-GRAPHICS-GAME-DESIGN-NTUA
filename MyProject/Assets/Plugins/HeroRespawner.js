#pragma strict
import System.Linq;
public static var redFire1 : GameObject;
public static var redFire2 : GameObject;
public static var greenFire1 : GameObject;
public static var greenFire2 : GameObject;

function Start () {
	redFire1 = GameObject.FindGameObjectWithTag("RedFire1");
	redFire2 = GameObject.FindGameObjectWithTag("RedFire2");
	greenFire1 = GameObject.FindGameObjectWithTag("GreenFire1");
	greenFire2 = GameObject.FindGameObjectWithTag("GreenFire2");	
	redFire1.SetActive(false);
	redFire2.SetActive(false);
	greenFire1.SetActive(false);
	greenFire2.SetActive(false); 
}

var hero1 : GameObject; // το πρώτο αντικείμενο
var hero2 : GameObject; // το δεύτερο
var ray: Ray;
var hit: RaycastHit;
var gridSpacing = 1.0; 
var newHero : GameObject;
var objectToMove : GameObject;
var nextNameNumber = 0 ;
var enemy : GameObject;
public static var target : Vector3 ;
var collObject : String ;
var boxW : float = 150f;
var boxH : float = 20f;
public static var redTower1_type1 = 0;
public static var redTower1_type2 = 0;
public static var redTower1_ready = 0;
public static var redTower2_type1 = 0;
public static var redTower2_type2 = 0;
public static var redTower2_ready = 0;
public static var greenTower1_type1 = 0;
public static var greenTower1_type2 = 0;
public static var greenTower1_ready = 0;
public static var greenTower2_type1 = 0;
public static var greenTower2_type2 = 0;
public static var greenTower2_ready = 0;
public static var gameover = 0;
public static var restart = 0;

public static var whichHero = 0; //public static var whichHero = 1; an 8elw na arxizw me green prin pathsw otidhpote
public static var colourHero= 0; 
function OnGUI () {
	if (gameover == 0)
	{
		if (GUI.Button (Rect (10,10,120,30), "Hero 1")) {
			whichHero = 1;
			Debug.Log("Hero "+whichHero+" chosen");
			
		}
		if (GUI.Button (Rect (10,50,120,30), "Hero 2")) {
			whichHero = 2;
			Debug.Log("Hero "+whichHero+" chosen");
		}	
		if (GUI.Button (Rect (680,10,120,30), "Red Hero")) {
			colourHero = 1;
			Debug.Log("Hero "+colourHero+" chosen");
		}	
		if (GUI.Button (Rect (680,50,120,30), "Green Hero")) {
			colourHero = 2;
			Debug.Log("Hero "+colourHero+" chosen");
		}
		
		if (redTower1_ready == 1){	
			GUI.color = Color.yellow;
			GUI.Box (Rect (230, 10, 160, 60), "Type 1 collisions: " + redTower1_type1 + "\nType 2 collisions: " + redTower1_type2+ "\nRed Tower 1: OK");
		}
		else {
			GUI.color = Color.yellow;
			GUI.Box (Rect (230, 10, 160, 40), "Type 1 collisions: " + redTower1_type1 + "\nType 2 collisions: " + redTower1_type2);
		}
		
		if (greenTower1_ready == 1){	
			GUI.color = Color.yellow;
			GUI.Box (Rect (460, 10, 160, 60), "Type 1 collisions: " + greenTower1_type1 + "\nType 2 collisions: " + greenTower1_type2+ "\nGreen Tower 1: OK");
		}
		else {	
			GUI.color = Color.yellow;
			GUI.Box (Rect (460, 10, 160, 40), "Type 1 collisions: " + greenTower1_type1 + "\nType 2 collisions: " + greenTower1_type2);
		}
		
		if (redTower2_ready == 1){	
			GUI.color = Color.yellow;
			GUI.Box (Rect (560, 100, 160, 60), "Type 1 collisions: " + redTower2_type1 + "\nType 2 collisions: " + redTower2_type2+ "\nRed Tower 2: OK");
		}
		else {
			GUI.color = Color.yellow;
			GUI.Box (Rect (560, 100, 160, 40), "Type 1 collisions: " + redTower2_type1 + "\nType 2 collisions: " + redTower2_type2);
		}
		
		if (greenTower2_ready == 1){	
			GUI.color = Color.yellow;
			GUI.Box (Rect (120, 100, 160, 60), "Type 1 collisions: " + greenTower2_type1 + "\nType 2 collisions: " + greenTower2_type2+ "\nGreen Tower 2: OK");
		}
		else {	
			GUI.color = Color.yellow;
			GUI.Box (Rect (120, 100, 160, 40), "Type 1 collisions: " + greenTower2_type1 + "\nType 2 collisions: " + greenTower2_type2);
		}
	}
	if (gameover == 1)
	{
		//Debug.Log("gameover");
		GUI.color = Color.yellow;
		GUI.Box (Rect ( 335 , 10 , 160 , 30), "GAME IS OVER");
		GUI.color = Color.green;
		//Debug.Log("gameover2");
		GUI.Box (Rect ( 335 , 40 , 160 , 30), "Do you want to restart?");
		GUI.color = Color.yellow;
		if (GUI.Button (Rect (250,180,160,60), "yes")) {
			restart = 1;
			//Debug.Log (restart);
		}
		else if (GUI.Button (Rect (450,180,160,60), "no")) {
			restart = 0;
		}
	}
}




function GetGridPosition (originalPosition : Vector3) {

	//var newx = (Mathf.Round (originalPosition.x / gridSpacing) * gridSpacing);
	//var newz = (Mathf.Round (originalPosition.z / gridSpacing) * gridSpacing);
	var newx : float;
	var newz : float;
	var roundx = Mathf.Round (originalPosition.x / gridSpacing);
	if (roundx%2==0)
		newx = roundx*gridSpacing;
	else if (roundx*gridSpacing <= originalPosition.x)
		newx = (roundx+1)*gridSpacing;
	else
		newx = (roundx-1)*gridSpacing;
	
	var roundz = Mathf.Round (originalPosition.z / gridSpacing);
	if (roundz%2==0)
		newz = roundz*gridSpacing;
	else if (roundx*gridSpacing <= originalPosition.x)
		newz = (roundz+1)*gridSpacing;
	else
		newz = (roundz-1)*gridSpacing;
		
	var convertPosition = new Vector3 (newx, (originalPosition.y), newz);
	return convertPosition;
}

function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) {
	var i = 0.0;
	var rate = 1.0/time;
	while (i < 1.0) {
	i += Time.deltaTime * rate;
	if (thisTransform!=null){
	thisTransform.position = Vector3.Lerp(startPos, endPos, i);
	yield;}
	}
//
}

function FindClosestRed (whichObject : GameObject) : GameObject {
	// Find all game objects with tag Tower
	var gos1 : GameObject[];
	gos1 = GameObject.FindGameObjectsWithTag("RedTower1"); 
	var gos2 : GameObject[];
	gos2 = GameObject.FindGameObjectsWithTag("RedTower2");
	var gos : GameObject[] = gos1.Concat(gos2).ToArray();
	var closest : GameObject; 
	var distance = Mathf.Infinity; 
	var position = transform.position; 
	// Iterate through them and find the closest one
	for (var go : GameObject in gos)  { 
		var diff = (go.transform.position - whichObject.transform.position);
		var curDistance = diff.sqrMagnitude; 
		if (curDistance < distance) { 
			closest = go; 
			distance = curDistance; 
		} 
	} 
	return closest;	
}
function FindClosestGreen (whichObject : GameObject) : GameObject {
	// Find all game objects with tag Tower
	var gos1 : GameObject[];
	gos1 = GameObject.FindGameObjectsWithTag("GreenTower1"); 
	var gos2 : GameObject[];
	gos2 = GameObject.FindGameObjectsWithTag("GreenTower2");
	var gos : GameObject[] = gos1.Concat(gos2).ToArray(); 
	var closest : GameObject; 
	var distance = Mathf.Infinity; 
	var position = transform.position; 
	// Iterate through them and find the closest one
	for (var go : GameObject in gos)  { 
		var diff = (go.transform.position - whichObject.transform.position);
		var curDistance = diff.sqrMagnitude; 
		if (curDistance < distance) { 
			closest = go; 
			distance = curDistance; 
		} 
	} 
	return closest;	
}

function FindClosest (whichObject : GameObject) : GameObject {
	// Find all game objects with tag Tower
	var gos1 : GameObject[];
	gos1 = GameObject.FindGameObjectsWithTag("RedTower1"); 
	var gos2 : GameObject[];
	gos2 = GameObject.FindGameObjectsWithTag("RedTower2");
	var gosred : GameObject[] = gos1.Concat(gos2).ToArray();
	gos1 = GameObject.FindGameObjectsWithTag("GreenTower1"); 
	gos2 = GameObject.FindGameObjectsWithTag("GreenTower2");
	var gosgreen : GameObject[] = gos1.Concat(gos2).ToArray();
	var gos : GameObject [] = gosgreen.Concat(gosred).ToArray();
	var closest : GameObject; 
	var distance = Mathf.Infinity; 
	var position = transform.position; 
	// Iterate through them and find the closest one
	for (var go : GameObject in gos)  { 
		var diff = (go.transform.position - whichObject.transform.position);
		var curDistance = diff.sqrMagnitude; 
		if (curDistance < distance) { 
			closest = go; 
			distance = curDistance; 
		} 
	} 
	return closest;	
}



function Update () {
	ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	if (Physics.Raycast(ray, hit, 100)) {
		Debug.Log ("Hit point: " + hit.point + " Grid Position: " + GetGridPosition (hit.point));
	}
	
	if (gameover == 0)
	{
		var coor : Vector3;
		if(Input.GetMouseButtonDown(0)) 	
		{
			if ((whichHero==1) && (Mathf.RoundToInt(GetGridPosition (hit.point).x)%2==0) && (Mathf.RoundToInt(GetGridPosition (hit.point).z)%2==0)  )
			{
		   		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    			if (Physics.Raycast(ray, hit, 100)) {
            		if (hit.collider.name=="Plane") {
						if (colourHero==1){
							coor = GetGridPosition(hit.point) + Vector3(0,1,0);
							newHero=Instantiate(hero2, coor, Quaternion.identity);
							newHero.name = "HeroType1"+nextNameNumber+"with colour Red";
							objectToMove = GameObject.Find("HeroType1"+nextNameNumber+"with colour Red");
						}
						else if (colourHero==2){
							coor = GetGridPosition(hit.point) + Vector3(0,1,0);
							newHero=Instantiate(hero1, coor, Quaternion.identity);
							newHero.name = "HeroType1"+nextNameNumber+"with colour Green";
							objectToMove = GameObject.Find("HeroType1"+nextNameNumber+"with colour Green");
						}
						Debug.Log("Hero instantiated on ("+coor.x+","+coor.y+","+coor.z+")");
						//target = GameObject.Find("bottomleft");
						enemy = FindClosest(objectToMove);
						/*if (enemy.tag == "RedTower1") {
							redTower1_type1++;
						}
						else if (enemy.tag == "RedTower2") {
							redTower2_type1++;
						}
						else if (enemy.tag == "GreenTower1") {		
							greenTower1_type1++;
						}	
						else if (enemy.tag == "GreenTower2") {
							greenTower2_type1++;
						}
						Debug.Log("Type1: " + greenTower1_type1);
						Debug.Log (enemy.name);
						Debug.Log ("object " + objectToMove.name + " will move to " + enemy.name);*/
						nextNameNumber++;							
						//hero1.transform.position = Vector3.MoveTowards(transform.position, target.gameObject.transform.position, 10);    	
						target = enemy.transform.position;
						target.y -= 2.5;
						//MoveObject (objectToMove.transform, objectToMove.transform.position,target, 1.0);

    				}
				}

    		}
			else if (whichHero==2 && (Mathf.RoundToInt(GetGridPosition (hit.point).x)%2==0) && (Mathf.RoundToInt(GetGridPosition (hit.point).z)%2==0) )
			{	
		   		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    			if (Physics.Raycast(ray, hit, 100)) {
            		if (hit.collider.name=="Plane") {
            			if (colourHero==1){
							newHero=Instantiate(hero2, hit.point + Vector3(0, 1, 0), Quaternion.identity);
							newHero.name = "HeroType2"+nextNameNumber+"with colour Red";
							objectToMove = GameObject.Find("HeroType2"+nextNameNumber+"with colour Red");
							enemy = FindClosestRed(objectToMove);
							/*if (enemy.tag == "RedTower1") {
								Debug.Log("increase red tower 1 type2");
								redTower1_type2++;
							}
							if (enemy.tag == "RedTower2") {
								redTower2_type2++;
							}*/
						}
						else if (colourHero==2){
							newHero=Instantiate(hero1, hit.point + Vector3(0, 1, 0), Quaternion.identity);
							newHero.name = "HeroType2"+nextNameNumber+"with colour Green";
							objectToMove = GameObject.Find("HeroType2"+nextNameNumber+"with colour Green");
							enemy = FindClosestGreen(objectToMove);
							/*if (enemy.tag == "GreenTower1") {
								Debug.Log("increase green tower 1 type2");
								greenTower1_type2++;
							}
							if (enemy.tag == "GreenTower2") {
								greenTower2_type2++;
							}*/
						}
						//target = GameObject.Find("bottomleft");
						
						/*Debug.Log ("Type 2: " + greenTower1_type2);
						Debug.Log (enemy.name);
						Debug.Log ("object " + objectToMove.name + " will move to " + enemy.name);*/
						nextNameNumber++;
						target= enemy.transform.position;
						target.y -= 2.5;
						//MoveObject (objectToMove.transform, objectToMove.transform.position,target, 1.0);
    					}
    				}
    			}
			} 
		
		if ( redTower1_ready == 1 && redTower2_ready == 1 && greenTower1_ready == 1 && greenTower2_ready == 1 )
		{
			gameover = 1;
		}
		
	}
	else
	{
			if (restart == 1){
				redTower1_type1 = 0;
				redTower1_type2 = 0;
				redTower1_ready = 0;
				redTower2_type1 = 0;
				redTower2_type2 = 0;
				redTower2_ready = 0;
				greenTower1_type1 = 0;
				greenTower1_type2 = 0;
				greenTower1_ready = 0;
				greenTower2_type1 = 0;
				greenTower2_type2 = 0;
				greenTower2_ready = 0;
				restart = 0 ;
				gameover = 0 ;
		 		Application.LoadLevel ("reload");
		 	}
	}
	
	
}