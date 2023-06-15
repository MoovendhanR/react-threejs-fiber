import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


function Model(props){
   const {scene} = useGLTF("/outdoor_fireplace.glb");

   return <primitive object={scene} {...props}/>
}

function Bmw() {

  return (
  <Canvas dpr={[1,2]} shadows camera={{fav:45}} style={{"position":"absolute"}}>
    <color attach="background" args={["#ab745a"]}/>
    <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1,Math.PI/4]}>
      <Stage environment={null}>
           <Model scale={0.01}/>
      </Stage>

    </PresentationControls>
  </Canvas>
  );
}

export default Bmw;
