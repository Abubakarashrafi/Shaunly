import { motion } from "framer-motion";
import Input from "../ui/Input";

const DimensionsControls = ({ shape, selectedShape, updateShape }) => {
  return (
    <div className="flex-1 space-y-3 mt-2">
      {["width", "height"].map((key) => (
      
          <Input
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={shape[selectedShape]?.[key]}
            type="range"
            min={0}
            max={500}
            onChange={(e) => updateShape(key, e.target.value, selectedShape)}
            />
      ))}
    </div>
  );
};

export default DimensionsControls;
