import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// Load the 3D model
const loader = new GLTFLoader();
loader.load('model.glb', function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  
  function animate() {
    requestAnimationFrame(animate);
    model.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
  animate();
}, undefined, function (error) {
  console.error(error);
});

window.addEventListener('resize', function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
