import './style.css'
import * as THREE from 'three'

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
  color: 0xff0000
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

renderer.render(scene, camera)