import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import * as dat from 'dat.gui';
// 导入轨道控制器
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000)

camera.position.set(0, 0, 10)
scene.add(camera)

// 创建几何体
for(let i = 0; i<50; i++) {
const geometry = new THREE.BufferGeometry()
const positionArry = new Float32Array(9)
  for(let j = 0; j < 9; j++) {
    positionArry[j] = Math.random() * 5
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positionArry, 3))
  let color = new THREE.Color(Math.random(), Math.random(), Math.random())
  // 创建材质
  const material = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: .5
  })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
}



// //创建 dat
// const gui = new dat.GUI()
// gui.add(cube.position, 'x').min(0).max(5).step(0.1).name('移动x轴').onChange(value => {
//   console.log(value)
// })

const canvas = document.querySelector('.webgl') as HTMLCanvasElement

// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas
})

// 设置渲染尺寸
renderer.setSize(window.innerWidth, window.innerHeight)

// 创建轨道控制器
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// 设置clock
const clock = new THREE.Clock()

  // 设置动画
// gsap.to(cube.position, {x: 5, duration: 5, ease: 'power1.inout',repeat: -1, 
// yoyo: true,onComplete: () => {
//     console.log('complete')
//   }})
// gsap.to(cube.rotation, {x: 2 * Math.PI, duration: 5, ease: 'power1.inout', repeat: -1,yoyo: true})

function animation() {

  requestAnimationFrame(animation)
  controls.update()
  renderer.render(scene, camera)
}
animation()

window.addEventListener('resize', () => {
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight
  // 更新摄像机的投影矩阵
  camera.updateProjectionMatrix()
  // 更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 设置渲染器的像素比
  renderer.setPixelRatio(window.devicePixelRatio)
})

