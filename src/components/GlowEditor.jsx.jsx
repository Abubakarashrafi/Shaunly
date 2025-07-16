import { useState } from "react";
import Sidebar from "./Sidebar";
import CanvasPreview from "./CanvasPreview";
import useShapeEditor from '../hooks/useShapeEditor'
import Navbar from "./Navbar";

const GlowEditor = () => {
  const [codeType, setCodeType] = useState("css");
  const [showSidebar, setShowSidebar] = useState(true); // ⬅ sidebar toggle

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
      <Navbar onToggleSidebar={() => setShowSidebar(prev => !prev)} />

      <div className="flex flex-col-reverse md:flex-row items-start min-h-screen">
        {/* Sidebar - conditionally rendered on mobile */}
        {showSidebar && (
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
        )}

        {/* Canvas Preview */}
        <div className="w-full md:flex-1 min-h-[50vh] md:min-h-screen">
          <CanvasPreview
            shape={shape}
            setShape={setShape}
            setSelectedShape={setSelectedShape}
          />
        </div>
      </div>
    </section>
  );
};

export default GlowEditor;
