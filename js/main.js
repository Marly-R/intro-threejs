import * as THREE from './three.js';

// crea una esena 
const scene = new THREE.Scene();

//Crea una camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Crea un render (Dibuja en un esenario tridimencionl todo lo que quieras mostrar en un paguina 3D)
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

//Crea el documento HTML para visulisar la esena 3D
document.body.appendChild( renderer.domElement );

// Dibujar un cuboide,       y le da Dimenciones (Ancho en el eje , Alto y Profundidad )
const geometry = new THREE.BoxGeometry( 2, 1, 3 );

//Crea un material para la geometria  
const material = new THREE.MeshBasicMaterial( { color: 0xf2be63 } );

//Dibuja la geometria con el material
const cube = new THREE.Mesh( geometry, material );

//Agrega el cubo a la esena  
scene.add( cube );

//alejaminto o acercamiento del cubo 
camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}