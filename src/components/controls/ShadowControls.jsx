// ShadowControls.jsx
import Input from "../ui/Input";
import ColorPicker from "../ui/ColorPicker";
import { Trash2 } from "lucide-react";
import Button from "../ui/Button";

const ShadowControls = ({
    updateShadow,
    shape,
    selectedShape,
    addShadow,
    removeShadow
}) => {


    return (
        <div className="flex-1 space-y-3 mt-2">
            {shape[selectedShape]?.shadows.map((sh, index) => (
                <div key={index} className="border p-4">
                    <div className="flex justify-between mb-4 items-center">
                        <p className="text-lg font-semibold">Shadow {index + 1}</p>
                        <div
                            onClick={() => {
                               removeShadow(selectedShape,index)
                            }}
                            className="hover:bg-blue-50 cursor-pointer hover:text-red-600 w-12 h-12 rounded-md flex items-center justify-center"
                        >
                            <Trash2 />
                        </div>
                    </div>

                    {[
                        { label: "x offset", key: "x", min: -600, max: 600 },
                        { label: "y offset", key: "y", min: -600, max: 600 },
                        { label: "blur", key: "blur", min: 0, max: 200 },
                        { label: "spread", key: "spread", min: -40, max: 100 },
                        { label: "opacity", key: "opacity", min: 0, max: 1, step: 0.1 },
                    ].map(({ label, key, min, max, step }) => (
                        <Input
                            key={key}
                            label={label}
                            type="range"
                            min={min}
                            max={max}
                            step={step}
                            value={sh[key]}
                            onChange={(e) => updateShadow(key, e.target.value, selectedShape, index)}
                        />
                    ))}

                    <ColorPicker label="Color" value={sh.color}
                        onChange={(e) => updateShadow("color", e.target.value, selectedShape, index)} />
                </div>
            ))}

            <Button
                onClick={ 
                 ()=>addShadow(selectedShape)
                }
                  >
                <span className="text-3xl">+</span> Add Shadow
            </Button>
        </div>
    );
};

export default ShadowControls;
