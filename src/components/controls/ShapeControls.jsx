import { Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ShapeControls = ({
  shapes,
  selectedShape,
  setSelectedShape,
  removeShape,
  addShape
}) => {
  return (
    <div className="flex-1 overflow-auto space-y-3 pr-1 relative">
      <AnimatePresence>
        {shapes.map((sh, index) => {
          const isSelected = index === selectedShape;
          return (
            <motion.div
              key={sh.label}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                scale: 0.3,
                opacity: 0,
                rotate: -15,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}

              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => setSelectedShape(index)}
              className="relative cursor-pointer"
            >
              {/* Animated Background Highlight */}
              {isSelected && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 rounded-lg bg-blue-100 z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <div className="relative z-10 flex items-center justify-between text-base h-[4.25rem] px-4 rounded-lg">
                <p className="text-lg">{sh.label}</p>
                <motion.div
                  whileHover={{ scale: 1.15, backgroundColor: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeShape(index);
                  }}
                  className="hover:text-red-600 w-12 h-12 rounded-md flex items-center justify-center"
                >
                  <Trash2 />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <motion.button
        onClick={addShape}
      
        whileTap={{ scale: 0.95 }}
        className="mt-2 w-full py-1 bg-black text-white rounded-md hover:bg-slate-800 text-xl"
      >
        <span className="text-3xl">+</span> Add Shape
      </motion.button>
    </div>
  );
};

export default ShapeControls;
