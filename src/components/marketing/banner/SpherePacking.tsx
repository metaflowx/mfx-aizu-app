"use client"; // Ensure this runs only on the client side

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Hero from "../hero";

const SpherePacking: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let container: HTMLDivElement | null;
    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let group: THREE.Object3D;
    let adding = true;
    let theta = 0;
    let dz = 0;
    let mx = 0;
    let mouse = { x: 0, y: 0 };
    let h: { x: number; y: number; z: number; R: number }[] = [];
    let i = 0;
    let sw = 1000;
    let innerSphereRadius = sw * 0.45;
    let radius = 20;
    let n: { x: number; y: number; z: number; R: number };
    let xp: number, yp: number, zp: number;
    let attempts = 0;
    let M = Math, R = M.random, C = M.cos, pi2 = M.PI * 2;

    function draw(obj: { x: number; y: number; z: number; R: number }) {
      let r, g, b;
      if (R() > 0.9) {
        r = 100 + R() * 150;
        b = 50 + R() * 100;
        g = 0;
      } else {
        r = R() * 50;
        b = 100 + R() * 155;
        g = R() * r + b * 0.5;
      }
      let col = (r << 16) | (g << 8) | b;
      let faces = 6 + ~~(obj.R * 0.4);
      let geometry = new THREE.SphereGeometry(obj.R, faces, faces);
      let material = new THREE.MeshLambertMaterial({ color: col });
      let sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(obj.x, obj.y, obj.z);
      group.add(sphere);
    }

    function create(render: boolean) {
      if (render) {
        n.R = radius;
        draw(n);
        h.push(n);
      }
      radius = 2;
      attempts = 0;
      xp = sw * R() - sw * 0.5;
      yp = sw * R() - sw * 0.5;
      zp = sw * R() - sw * 0.5;
      n = { x: xp, y: yp, z: zp, R: radius };
    }

    function test() {
      let dcenter = Math.sqrt(xp * xp + yp * yp + zp * zp);
      if (dcenter + radius > sw * 0.5 || dcenter - radius < innerSphereRadius) {
        create(false);
        return;
      }
      let ok = true;
      while (ok) {
        attempts++;
        i = h.length;
        while (i--) {
          let dx = xp - h[i].x, dy = yp - h[i].y, dz = zp - h[i].z;
          let d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (radius + h[i].R > d || radius > 70) {
            ok = false;
          }
        }
        radius += 1;
        if (dcenter + radius > sw * 0.5) ok = false;
      }
      radius -= 5;
      create(radius > 20);
    }

    function add() {
      let j = 0;
      while (j++ < 50) test();
    }

    function animate() {
      requestAnimationFrame(animate);
      if (adding) add();
      renderScene();
    }

    function renderScene() {
      mx -= (mx - mouse.x * 0.04) * 0.1;
      theta += mx;
      dz -= 2;
      group.rotation.y = theta;
      let zo = dz < -1000 ? -1000 : dz;
      let py = Math.cos(dz / 260) * 300;
      let pz = zo + Math.sin(dz / 200) * 400;
      camera.position.set(100, py, pz);
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    // function init() {
    //   container = containerRef.current;
    //   if (!container) return;

    //   scene = new THREE.Scene();
    //   group = new THREE.Object3D();
    //   group.rotation.z = 20;
    //   scene.add(group);

    //   camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    //   camera.position.set(0, 0, 0);
    //   scene.add(camera);

    //   let light1 = new THREE.DirectionalLight(0xff9090, 1);
    //   light1.position.set(0, 1, 0).normalize();
    //   scene.add(light1);

    //   let light2 = new THREE.DirectionalLight(0xffffff);
    //   light2.position.set(0, 0, -1).normalize();
    //   scene.add(light2);

    //   renderer = new THREE.WebGLRenderer({ antialias: true });
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    //   container.appendChild(renderer.domElement);

    //   n = { x: 0, y: 0, z: 0, R: 1 };
    //   h.push(n);
    //   create(false);

    //   document.addEventListener("mousedown", toggleAdding);
    //   document.addEventListener("mousemove", onDocumentMouseMove);
    //   animate();
    // }
    function init() {
      container = containerRef.current;
      if (!container) return;
    
      // Set fixed height of 1200px
      const canvasWidth = window.innerWidth;
      const canvasHeight = 1400;
    
      scene = new THREE.Scene();
      group = new THREE.Object3D();
      group.rotation.z = 20;
      scene.add(group);
    
      camera = new THREE.PerspectiveCamera(70, canvasWidth / canvasHeight, 1, 10000);
      camera.position.set(0, 0, 0);
      scene.add(camera);
    
      let light1 = new THREE.DirectionalLight(0xff9090, 1);
      light1.position.set(0, 1, 0).normalize();
      scene.add(light1);
    
      let light2 = new THREE.DirectionalLight(0xffffff);
      light2.position.set(0, 0, -1).normalize();
      scene.add(light2);
    
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(canvasWidth, canvasHeight);
      container.appendChild(renderer.domElement);
    
      n = { x: 0, y: 0, z: 0, R: 1 };
      h.push(n);
      create(false);
    
      document.addEventListener("mousedown", toggleAdding);
      document.addEventListener("mousemove", onDocumentMouseMove);
      animate();
    }
    

    function toggleAdding() {
      adding = !adding;
    }

    function onDocumentMouseMove(event: MouseEvent) {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    init();

    return () => {
      document.removeEventListener("mousedown", toggleAdding);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div style={{ position: "absolute", top: 0, left: 0,right:0, width: "100%", height: "100%", zIndex: -1,overflowX:"hidden" }}>
    <div ref={containerRef} style={{ width: "100%", height: "1200px",}} />
  </div>

  )
 

   
};

export default SpherePacking;




