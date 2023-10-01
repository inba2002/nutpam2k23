import React,{Suspense} from 'react'
import CanvasLoader from "../CanvasLoader"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane, Preload, useGLTF, useHelper } from "@react-three/drei";
import { PerspectiveCamera,PointLightHelper } from "three";

const LogoModel = () => {
    const mainlogo=useGLTF("./models/mainmodel.gltf");
    return (
      <primitive object={mainlogo.scene} scale={0.55}/>
    )
}

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 10);
  return (
    <group position={[0, 1, 4]}>
      {/* <cameraHelper args={[camera]} /> */}
    </group>
  );
}

const PointHelper = () => {
  // const ref = useRef()
  // useHelper(ref, PointLightHelper, 1)

  return(
    <>
      <pointLight  args={[`white`, 300,10]} position={[2, 2, 8]} />
      <pointLight  args={[`white`, 150,8]} position={[-6, 4, 3]} />
      <pointLight  args={[`white`, 300,10]} position={[-6, -6, 0]} />
      
      <pointLight  args={[`white`, 300,10]} position={[3, 6, -6]} />
      <pointLight  args={[`white`, 250,10]} position={[-6, -3, -4]} />
      <pointLight  args={[`white`, 150,7]} position={[5, -3, -5]} />
    </>
  ) 
}

const MainLogoCanvas=()=>{
    return(
      <div className='h-full md:h-[35.5rem] md:mt-[15rem]'>
      <Canvas shadows frameloop='demand' gl={{preserveDrawingBuffer:true}} camera={{fov:60, near:1, far:10, position:[0,1,4]}}>
        <Suspense fallback={<CanvasLoader/>}>
        <PointHelper />
          
          <OrbitControls
            autoRotate={true}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <LogoModel />
          <CameraHelper />
        </Suspense>
      </Canvas>
      </div>
    )
  }

export default MainLogoCanvas