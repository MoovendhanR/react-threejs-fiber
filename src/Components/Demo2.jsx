import { CameraShake, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Demo2 = () => {
  return (
    <Canvas>
      
  <OrbitControls
    ref={{
      current: '[Circular]'
    }}
   />
  <CameraShake
    controls={{
      current: '[Circular]'
    }}
    maxPitch={0.05}
    maxRoll={0.05}
    maxYaw={0.05}
    pitchFrequency={0.8}
    rollFrequency={0.8}
    yawFrequency={0.8}
  />
  {/* <Wt /> */}

    </Canvas>
  )
}

export default Demo2
