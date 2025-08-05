import {
  Float,
  Text,
  Environment,
  useGLTF,
  PresentationControls,
  ContactShadows,
  Html,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  console.log(computer);
  return (
    <>
      <Environment preset="city" />
      <color args={["#171717"]} attach={"background"} />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#f0f0f0"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive position-y={-1.2} object={computer.scene}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://vanshnagar.me/" frameborder="0"></iframe>
            </Html>
          </primitive>
          <Text
            fontSize={1}
            position={[3, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            Vansh nagar
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} />
    </>
  );
}
