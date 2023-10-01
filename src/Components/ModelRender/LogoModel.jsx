import React,{Suspense} from 'react'
import CanvasLoader from "../CanvasLoader"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const LogoModel = () => {
    const mainlogo=useGLTF("./models/mainmodel.gltf");
    return (
      <primitive object={mainlogo.scene} scale={1.5}/>
    )
}

const MainLogoCanvas=()=>{
    return(
      <div className='h-full md:h-[35.5rem] md:mt-[15rem]'>
      <Canvas shadows frameloop='demand' gl={{preserveDrawingBuffer:true}} camera={{fov:30, near:0.1, far:200, position:[2.5,20,10]}}>
        <Suspense fallback={<CanvasLoader/>}>
          <ambientLight/>
          <pointLight position={[5,5,5]} intensity={100}/>
          <pointLight position={[-3,-3,2]}/>
          <pointLight position={[-5,-5,-5]} intensity={0}/>
          <pointLight position={[3,3,-2]}/>
          <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
          <LogoModel/>
        </Suspense>
      </Canvas>
      </div>
    )
  }

export default MainLogoCanvas