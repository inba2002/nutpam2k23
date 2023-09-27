import React,{Suspense} from 'react'
import CanvasLoader from "../CanvasLoader"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const LogoModel = () => {
    const mainlogo=useGLTF("./models/mainlog.gltf");
    return (
      <primitive object={mainlogo.scene} scale={10}/>
    )
}

const MainLogoCanvas=()=>{
    return(
      <Canvas shadows frameloop='demand' gl={{preserveDrawingBuffer:true}} camera={{fov:20, near:0.1, far:300, position:[-100,-5,-100]}}>
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
          <LogoModel/>
        </Suspense>
      </Canvas>
    )
  }

export default MainLogoCanvas