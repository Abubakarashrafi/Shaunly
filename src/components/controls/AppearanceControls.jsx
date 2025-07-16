import Input from "../ui/Input";
import ColorPicker from "../ui/ColorPicker";

const AppearanceControls = ({ shape, selectedShape, setShape, updateShape }) => {
    return (
        <div className="flex-1 space-y-3 mt-2">
            <ColorPicker
                label="Color"
                value={shape[selectedShape]?.color}
                onChange={(e) => updateShape("color", e.target.value, selectedShape)}
            />
            <Input
                label="Border Radius"
                value={shape[selectedShape]?.radius.topLeft}
                type="range"
                min={0}
                max={100}
                onChange={(e) =>
                    setShape((prev) => {
                        const upd = [...prev];
                        const val = e.target.value;
                        upd[selectedShape].radius = {
                            topLeft: val,
                            topRight: val,
                            bottomLeft: val,
                            bottomRight: val,
                        };
                        return upd;
                    })
                }
            />
            <Input
                label="Blur"
                value={shape[selectedShape]?.blur}
                step={0.5}
                type="range"
                min={0}
                max={70}
                onChange={(e) =>
                    updateShape("blur", e.target.value, selectedShape)
                }
            />
        </div>
    );
};

export default AppearanceControls;
