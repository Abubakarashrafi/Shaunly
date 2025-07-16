import { useState } from "react";
import Sidebar from "./Sidebar";
import CanvasPreview from "./CanvasPreview";
import useShapeEditor from '../hooks/useShapeEditor'
import Navbar from "./Navbar";
const GlowEditor = () => {
  const [codeType, setCodeType] = useState("css");
  const {
    shape,
    setShape,
    shapeCounter,
    setShapeCounter,
    selectedShape,
    setSelectedShape,
    updateShape,
    updateShadow,
    addShape,
    removeShape,
    addShadow,
    removeShadow
  } = useShapeEditor();



  return (
    <section className="relative bg-black min-h-screen overflow-hidden">
      <Navbar/>
       
      <div className="flex  items-start ">
        {/* Sidebar */}
        <Sidebar
          shape={shape}
          addShape={addShape}
          removeShape={removeShape}
          setShape={setShape}
          selectedShape={selectedShape}
          setSelectedShape={setSelectedShape}
          shapeCounter={shapeCounter}
          setShapeCounter={setShapeCounter}
          codeType={codeType}
          setCodeType={setCodeType}
          updateShape={updateShape}
          addShadow={addShadow}
          updateShadow={updateShadow}
          removeShadow={removeShadow}
        />

        {/* Right Side Preview */}
        <CanvasPreview
          shape={shape}
          setShape={setShape}
          setSelectedShape={setSelectedShape}
        />
     
      </div>
    </section>
  );
};

export default GlowEditor;
