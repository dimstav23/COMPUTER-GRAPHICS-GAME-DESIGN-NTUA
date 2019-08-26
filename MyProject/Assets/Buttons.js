#pragma strict

function Start () {

}
function OnGUI () {
    // Make a background box
    GUI.Box (Rect (10,10,100,90),"");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (20,20,80,20), "Green")) {
        Application.LoadLevel (1);
    }

    // Make the second button.
    if (GUI.Button (Rect (20,70,80,20), "Red")) {
        Application.LoadLevel (2);
    }
}
function Update () {

}