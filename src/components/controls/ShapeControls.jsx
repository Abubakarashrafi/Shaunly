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
    <div className="flex-1 overflow-y-auto space-y-3 pr-1 relative max-h-[50vh] md:max-h-none">
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
              {isSelected && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 rounded-lg bg-blue-100 z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <div className="relative z-10 flex items-center justify-between h-12 sm:h-14 px-3 sm:px-4 rounded-lg">
                <p className="text-sm sm:text-base">{sh.label}</p>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeShape(index);
                  }}
                  className="hover:text-red-600 w-8 h-8 rounded-md flex items-center justify-center"
                  aria-label="Delete shape"
                >
                  <Trash2 className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <motion.button
        onClick={addShape}
        whileTap={{ scale: 0.95 }}
        className="mt-2 w-full py-1.5 bg-black text-white rounded-md hover:bg-slate-800 text-sm sm:text-base flex items-center justify-center gap-1"
      >
        <span className="text-lg font-semibold">+</span>
        <span>Add Shape</span>
      </motion.button>

    </div>
  );
};

export default ShapeControls;
