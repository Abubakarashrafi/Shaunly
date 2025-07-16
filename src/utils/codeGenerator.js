
export const generateCodeForShape = (shape) => {
  if (!shape) return { css: "", jsx: "" };
  
  const { width, height, blur, color, radius, shadows,label } = shape;

  const boxShadow = shadows
    .map((sh) => {
      const r = parseInt(sh.color.slice(1, 3), 16);
      const g = parseInt(sh.color.slice(3, 5), 16);
      const b = parseInt(sh.color.slice(5, 7), 16);
      return `${sh.x}px ${sh.y}px ${sh.blur}px ${sh.spread}px rgba(${r}, ${g}, ${b}, ${sh.opacity})`;
    })
    .join(", ");

  return {
    css: `.${label} {
  width: ${width}px;
  height: ${height}px;
  filter: blur(${blur}px);
  border-top-left-radius: ${radius.topLeft}px;
  border-top-right-radius: ${radius.topRight}px;
  border-bottom-left-radius: ${radius.bottomLeft}px;
  border-bottom-right-radius: ${radius.bottomRight}px;
  background: ${color};
  box-shadow: ${boxShadow}; 
}`,

    jsx: `<div
  style={{
    width: "${width}px",
    height: "${height}px",
    filter: "blur(${blur}px)",
    borderTopLeftRadius: "${radius.topLeft}px",
    borderTopRightRadius: "${radius.topRight}px",
    borderBottomLeftRadius: "${radius.bottomLeft}px",
    borderBottomRightRadius: "${radius.bottomRight}px",
    background: "${color}",
    boxShadow: "${boxShadow}"
  }}>
</div>`,
  };
};
