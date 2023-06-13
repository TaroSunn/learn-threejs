import './style.css'
import * as THREE from 'three'
// 导入轨道控制器
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000)

camera.position.set(0, 0, 10)
scene.add(camera)

// 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)
// 创建材质
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const canvas = document.querySelector('.webgl') as HTMLCanvasElement

// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas
})

// 设置渲染尺寸
renderer.setSize(window.innerWidth, window.innerHeight)

// 创建轨道控制器
const controls = new OrbitControls(camera, canvas)

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// 设置clock

const clock = new THREE.Clock()

function animation() {
  // 获取时钟运行总时长
  let time = clock.getElapsedTime()
  let deltaTime = clock.getDelta()
  // console.log(time)
  let t = time % 5
  cube.position.x = t* 1
  requestAnimationFrame(animation)

  renderer.render(scene, camera)
}
animation()