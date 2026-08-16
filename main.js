import * as THREE from 'three';

// init

const container = document.getElementById( 'three-container' );
let width = container.clientWidth;
let height = container.clientHeight;

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true, alpha:true } );
renderer.setClearColor( 0x0000ff, 0.01); 
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
container.appendChild( renderer.domElement );

// handle resize

window.addEventListener( 'resize', onResize );

function onResize() {

	width = container.clientWidth;
	height = container.clientHeight;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize( width, height );

}

// animation

function animate( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}