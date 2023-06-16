import { Canvas, useFrame } from "@react-three/fiber";
import "../App.css";
const { useRef, useState } = require("react");


  function Cylinder3d(props) {
    const ref = useRef();
  
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    useFrame((state,delta)=>(ref.current.rotation.x+=0.01))
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <cylinderGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "orange"}
        />
      </mesh>
    );
  }


  function FunCall(){
    return (
      <div className="App">
        <Canvas>
        <color attach="background" args={["grey"]}/>

            <pointLight position={[10, 10, 10]} />
            <ambientLight />
            <Cylinder3d position={[-1.2, 0, 0]} />
            <Cylinder3d position={[1.2, 0, 0]} />
          </Canvas>
   
          {/* Canvas 2 */}
          <Canvas>
          <color attach="background" args={["grey"]}/>

            <pointLight position={[10, 10, 10]} />
            <ambientLight intensity={0.5} />
            <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
            <Cylinder3d position={[1.2, 0, 0]} wireframe={true} />
          </Canvas>
   
          {/* Canvas 3 */}
          <Canvas>
          <color attach="background" args={["grey"]}/>

            <pointLight position={[10, 10, 10]} />
            <ambientLight color={"red"} />
            <Cylinder3d position={[-1.2, 0, 0]} />
            <Cylinder3d position={[1.2, 0, 0]} />
          </Canvas>
          {/* <CatmullRomCurveExample/> */}
          {/* <Example/> */}
      </div>
    )
  }
  
  export default FunCall;
  