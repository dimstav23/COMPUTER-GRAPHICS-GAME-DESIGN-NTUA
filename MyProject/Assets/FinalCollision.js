#pragma strict
 
function Start () {

}

/*function OnCollisionEnter (col : Collision)
{	
	Debug.Log("collision happens");
    if(col.gameObject.tag=="RedTower1" && HeroRespawner.redTower1_type1>=10 && HeroRespawner.redTower1_type2>=10)
    {
    	HeroRespawner.redTower1_ready = 1;
        
    }
    if(col.gameObject.tag=="RedTower2" && HeroRespawner.redTower2_type1>=10 && HeroRespawner.redTower2_type2>=10)
    {
    	HeroRespawner.redTower2_ready = 1;
        
    }
    if(col.gameObject.tag=="GreenTower1" && HeroRespawner.greenTower1_type1>=10 && HeroRespawner.greenTower1_type2>=10)
    {
 
    	HeroRespawner.greenTower1_ready = 1;
        
    }
    if(col.gameObject.tag=="GreenTower2" && HeroRespawner.greenTower2_type1>=10 && HeroRespawner.greenTower2_type2>=10)
    {
    	HeroRespawner.greenTower2_ready = 1;
        
    }
}*/

function OnTriggerEnter (other : Collider) {
		//other o ka8e tower 
		Debug.Log(other.gameObject.tag);
		//Destroy(other.gameObject);
	if(other.gameObject.tag=="RedTower1" && HeroRespawner.whichHero == 1)
    {
    	HeroRespawner.redTower1_type1++;
        
    }
    if(other.gameObject.tag=="RedTower2" && HeroRespawner.whichHero == 1)
    {
    	HeroRespawner.redTower2_type1++;
        
    }
    if(other.gameObject.tag=="GreenTower1" && HeroRespawner.whichHero == 1)
    {
 
    	HeroRespawner.greenTower1_type1++;
        
    }
    if(other.gameObject.tag=="GreenTower2" && HeroRespawner.whichHero == 1)
    {
    	HeroRespawner.greenTower2_type1++;
        
    }
    
    
    
    
    
    if(other.gameObject.tag=="RedTower1" && HeroRespawner.whichHero == 2)
    {
    	HeroRespawner.redTower1_type2++;
        
    }
    if(other.gameObject.tag=="RedTower2" && HeroRespawner.whichHero == 2)
    {
    	HeroRespawner.redTower2_type2++;
        
    }
    if(other.gameObject.tag=="GreenTower1" && HeroRespawner.whichHero == 2)
    {
 
    	HeroRespawner.greenTower1_type2++;
        
    }
    if(other.gameObject.tag=="GreenTower2" && HeroRespawner.whichHero == 2)
    {
    	HeroRespawner.greenTower2_type2++;
        
    }
    
    
    
    
	if(other.gameObject.tag=="RedTower1" && HeroRespawner.redTower1_type1>=10 && HeroRespawner.redTower1_type2>=10)
    {
    	HeroRespawner.redTower1_ready = 1;
        HeroRespawner.redFire1.SetActive(true);
    }
    if(other.gameObject.tag=="RedTower2" && HeroRespawner.redTower2_type1>=10 && HeroRespawner.redTower2_type2>=10)
    {
    	HeroRespawner.redTower2_ready = 1;
        HeroRespawner.redFire2.SetActive(true);
    }
    if(other.gameObject.tag=="GreenTower1" && HeroRespawner.greenTower1_type1>=10 && HeroRespawner.greenTower1_type2>=10)
    {
 
    	HeroRespawner.greenTower1_ready = 1;
        HeroRespawner.greenFire1.SetActive(true);
    }
    if(other.gameObject.tag=="GreenTower2" && HeroRespawner.greenTower2_type1>=10 && HeroRespawner.greenTower2_type2>=10)
    {
    	HeroRespawner.greenTower2_ready = 1;
        HeroRespawner.greenFire2.SetActive(true);
    }
}

function Update () {
	
}