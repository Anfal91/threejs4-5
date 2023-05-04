import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("rgb(120,120,120)")
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: "rgb(120,120,120)" });
const cube = new THREE.Mesh(geometry, material);

const light = new THREE.PointLight(0xffffff,1)
light.position.y = 1;

cube.add(light)
scene.add(cube);

camera.position.z=5;
camera.position.y=2;
controls.update();


function animate() {

    requestAnimationFrame(animate);

    controls.update()
    renderer.render(scene, camera);

}
animate();