import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); //width  | height | depth
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // color
const cube = new THREE.Mesh( geometry, material ); // init figure
scene.add( cube ); // add to scene

camera.position.z = 2; //camera zoom

function animate() {
	requestAnimationFrame( animate ); // must bc work only when u use the tab

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    cube.rotation.z += 0.005;

	renderer.render( scene, camera ); // must to render
}

animate(); //init