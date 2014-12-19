#pragma strict

var pi = 3.14159653589;

var xSpeed : float = 48f;
var xT = 1; // period in seconds
var zSpeed : float = 48f;
var zT = 1; // period in seconds
var ySpeed : float = 3f;
var yT = 10; // period in seconds
function Start () {

}

function Update () {
	var xVelocity = xSpeed * Mathf.Cos(2*pi * (Time.time / xT));
	transform.Translate(Vector3(1, 0, 0) * xVelocity * Time.deltaTime);
	
	var zVelocity = zSpeed * Mathf.Sin(2*pi * (Time.time / zT));
	transform.Translate(Vector3(0, 0, 1) * zVelocity * Time.deltaTime);

	var yVelocity = ySpeed * Mathf.Sin(2*pi * (Time.time / yT));
	transform.Translate(Vector3(0, 1, 0) * yVelocity * Time.deltaTime);
}