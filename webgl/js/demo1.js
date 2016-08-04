//获取容器
var container = document.getElementById('container');

//创建three.js渲染器，并添加到<div>标签中
var renderer = new THREE.WebGLRenderer();
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

//创建three.js场景
var scene = new THREE.Scene();

//创建相机，并添加到场景中
var camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);
camera.position.set(0, 0, 3.3333);
scene.add(camera);

//创建一个矩形几何体，并添加到场景中
var geometry = new THREE.PlaneGeometry(1, 1);
var mesh = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial());
scene.add(mesh);

//渲染绘制
renderer.render(scene,camera);
