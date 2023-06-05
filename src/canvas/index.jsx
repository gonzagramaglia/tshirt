import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import TShirt from "./TShirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <TShirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel