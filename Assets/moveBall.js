#pragma strict

var speed = 10;

function Start () {

}

function Update () {

	if (Input.GetKey ("left")) transform.Translate (Vector3(-1,0,0) * Time.deltaTime*speed);
	if (Input.GetKey ("right")) transform.Translate (Vector3(1,0,0) * Time.deltaTime*speed);
	if (Input.GetKey ("up")) transform.Translate (Vector3(0,0,1) * Time.deltaTime*speed);
	if (Input.GetKey ("down")) transform.Translate (Vector3(0,0,-1) * Time.deltaTime*speed);

}

