#pragma strict

var xSpeed : float = 2f;

function Start () {

}

function Update () {

	transform.Translate(Vector3(1, 0, 0) * xSpeed * Time.deltaTime);

}