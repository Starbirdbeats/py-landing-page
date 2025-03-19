"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export function Laptop3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5
    camera.position.y = 1

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Create a simple laptop model
    const laptopGroup = new THREE.Group()
    scene.add(laptopGroup)

    // Base of laptop
    const baseGeometry = new THREE.BoxGeometry(3, 0.2, 2)
    const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 })
    const base = new THREE.Mesh(baseGeometry, baseMaterial)
    laptopGroup.add(base)

    // Screen of laptop
    const screenGeometry = new THREE.BoxGeometry(3, 2, 0.1)
    const screenMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 })
    const screen = new THREE.Mesh(screenGeometry, screenMaterial)
    screen.position.y = 1.1
    screen.position.z = -1
    screen.rotation.x = -Math.PI / 6 // Tilt the screen
    laptopGroup.add(screen)

    // Screen display
    const displayGeometry = new THREE.PlaneGeometry(2.8, 1.8)

    // Create a canvas for the screen texture
    const canvas = document.createElement("canvas")
    canvas.width = 512
    canvas.height = 512
    const context = canvas.getContext("2d")

    if (context) {
      // Fill with a gradient background
      const gradient = context.createLinearGradient(0, 0, 0, 512)
      gradient.addColorStop(0, "#1E88E5")
      gradient.addColorStop(1, "#64B5F6")
      context.fillStyle = gradient
      context.fillRect(0, 0, 512, 512)

      // Add some UI elements
      context.fillStyle = "white"
      context.fillRect(50, 50, 412, 50)
      context.fillRect(50, 120, 200, 300)
      context.fillRect(270, 120, 192, 150)
      context.fillRect(270, 290, 192, 130)

      // Add some text
      context.fillStyle = "#1E88E5"
      context.font = "bold 24px Arial"
      context.fillText("MyRevManager", 60, 85)

      // Create texture from canvas
      const texture = new THREE.CanvasTexture(canvas)
      const displayMaterial = new THREE.MeshBasicMaterial({ map: texture })
      const display = new THREE.Mesh(displayGeometry, displayMaterial)
      display.position.z = 0.06
      screen.add(display)
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-[400px]" />
}

