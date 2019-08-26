#pragma strict

function Start () {

}



//function OnCollisionExit(col : Collision) {
//	Debug.Log("Exit collision");
//	if ((HeroRespawner.redTower1_type1 >= 10) && (HeroRespawner.redTower1_type2 >= 10)) Destroy(GameObject.FindWithTag("RedTower1"));
//}

function Update () {

}
//function OnCollisionEnter (col : Collision)
//{	
//	Debug.Log("collision happens");
 //   if(col.gameObject.tag=="Sphere")
  //  {
   // 	Debug.Log("Object Found");
   //     Destroy(col.gameObject);
   //     
   // }
 //   
//}

function OnTriggerEnter (other : Collider) {
		// to other edw einai o hero Debug.Log(other.gameObject.tag)
		Debug.Log("triggers");
		Destroy(other.gameObject);
	}
