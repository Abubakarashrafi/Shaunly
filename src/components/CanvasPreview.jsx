import { motion } from "framer-motion";

const CanvasPreview = ({ shape, setShape, setSelectedShape }) => {
    return (
        <div className="flex my-32 px-20 gap-x-10 flex-wrap mix-blend-screen">
            {shape.map((item, index) => (
                <motion.div
                    key={item.label + index}
                    drag
                    dragMomentum={false}
                    onClick={() => setSelectedShape(index)}
                    onDragEnd={(event, info) => {
                        const { x, y } = info.point;
                        setShape((prev) => {
                            const updated = [...prev];
                            updated[index].x = x;
                            updated[index].y = y;
                            return updated;
                        });
                    }}
                    className="flex mt-10 items-center cursor-move"
                    style={{
                        width: `${item?.width}px`,
                        height: `${item?.height}px`,
                        x: item.x,
                        y: item.y,
                        filter: `blur(${item?.blur}px)`,
                        borderTopLeftRadius: `${item?.radius.topLeft}px`,
                        borderTopRightRadius: `${item?.radius.topRight}px`,
                        borderBottomLeftRadius: `${item?.radius.bottomLeft}px`,
                        borderBottomRightRadius: `${item?.radius.bottomRight}px`,
                        background: `${item?.color}`,
                        boxShadow: item?.shadows
                            .map((sh) => {
                                const r = parseInt(sh.color.slice(1, 3), 16);
                                const g = parseInt(sh.color.slice(3, 5), 16);
                                const b = parseInt(sh.color.slice(5, 7), 16);
                                return `${sh.x}px ${sh.y}px ${sh.blur}px ${sh.spread}px rgba(${r},${g},${b},${sh.opacity})`;
                            })
                            .join(", "),
                    }}
                />
            ))}
        </div>
    );
};

export default CanvasPreview;
