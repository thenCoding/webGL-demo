//设置场景
var scene = new THREE.Scene();

//设置相机
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 10000);
camera.position.z = 900;
//设置渲染器(antialias开启抗锯齿)
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//设置几何体
var geometry = new THREE.CubeGeometry(100, 100, 100);

//设置材质
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

//设置网格
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//初始化光源
var light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
light.position.set(100, 100, 200);
scene.add(light);


var scale = 'bigger';
function render() {
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    if (scale == 'bigger') {
        cube.rotation.z += 0.1;
        cube.rotation.z >= 800 && (scale = 'smaller');
    }
    if (scale == 'smaller') {
        cube.rotation.z -= 0.1;
        cube.rotation.z <= 100 && (scale = 'bigger');
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();
















