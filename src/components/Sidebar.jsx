import { ChevronRightIcon, Copy } from "lucide-react";
import ShapeControls from "./controls/ShapeControls";
import DimensionsControls from "./controls/DimensionsControls";
import AppearanceControls from "./controls/AppearanceControls";
import ShadowControls from "./controls/ShadowControls";
import { generateCodeForShape } from "../utils/codeGenerator"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Sidebar = ({
  shape,
  setShape,
  selectedShape,
  setSelectedShape,
  shapeCounter,
  setShapeCounter,
  codeType,
  setCodeType,
  updateShape,
  updateShadow,
  addShadow,
  removeShadow,
  addShape,
  removeShape
}) => {
  const [expandable, setExpandable] = useState("");


  const generatedCode = generateCodeForShape(shape[selectedShape])[codeType];

  const renderTabContent = (tab) => {
    switch (tab) {
      case "Shapes":
        return (
          <ShapeControls
            shapes={shape}
            selectedShape={selectedShape}
            setSelectedShape={setSelectedShape}
            setShapes={setShape}
            shapeCounter={shapeCounter}
            setShapeCounter={setShapeCounter}
            addShape={addShape}
            removeShape={removeShape}
          />
        );
      case "Dimensions":
        return (
          <DimensionsControls
            shape={shape}
            selectedShape={selectedShape}
            updateShape={updateShape}
          />
        );
      case "Appearance":
        return (
          <AppearanceControls
            shape={shape}
            selectedShape={selectedShape}
            updateShape={updateShape}
            setShape={setShape}
          />
        );
      case "Shadows":
        return (
          <ShadowControls
            shape={shape}
            selectedShape={selectedShape}
            setShape={setShape}
            shapeCounter={shapeCounter}
            updateShadow={updateShadow}
            addShadow={addShadow}
            removeShadow={removeShadow}
          />
        );
      default:
        return null;
    }
  };

  const TABS = ["Shapes", "Dimensions", "Appearance", "Shadows"];

  return (
    <div className="w-[400px] shrink-0 bg-white border-r shadow-sm p-4 min-h-screen overflow-hidden">
      {TABS.map((tab) => (
        <div className="mx-2 p-2 w-full relative" key={tab}>
          <div
            onClick={() => setExpandable((prev) => (prev === tab ? "" : tab))}
            className="relative text-xl font-medium cursor-pointer h-12 px-3 flex items-center justify-between rounded-lg overflow-hidden"
          >
            {/* Animated Background for Active Tab */}
            {expandable === tab && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-gray-100 rounded-lg z-0"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Label and Icon */}
            <span className={`z-10 ${expandable === tab ? "text-black font-semibold" : "text-gray-500"}`}>
              {tab}
            </span>

            <motion.div
              animate={{ rotate: expandable === tab ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="z-10"
            >
              <ChevronRightIcon className="w-5" />
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {expandable === tab && (
              <motion.div
                key={tab}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 70,
                }}
                className="overflow-hidden mt-2"
              >
                {renderTabContent(tab)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}


      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-2">
            {["css", "jsx"].map((type) => (
              <button
                key={type}
                onClick={() => setCodeType(type)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium border ${
                  codeType === type
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}>
                {type.toUpperCase()}
              </button>
            ))}
          </div>
          <motion.button
            whileTap={{ scale: 0.2 }}
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-1 text-sm px-3 py-1.5 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition"
          >
            <Copy className="h-4 w-4" />
            Copy
          </motion.button>

        </div>

        <textarea
          readOnly
          value={generatedCode}
          className="w-full h-40 p-3 rounded-md bg-gray-100 border border-gray-300 font-mono resize-none text-gray-800"
        />
      </div>
    </div>
  );
};

export default Sidebar;
