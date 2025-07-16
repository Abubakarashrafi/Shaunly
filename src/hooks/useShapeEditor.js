import { useState } from "react";

export default function useShapeEditor() {
  const [selectedShape, setSelectedShape] = useState(0);
  const [shapeCounter, setShapeCounter] = useState(1);

  const [shape, setShape] = useState([
    {
      label: "Core",
      x: 40,
      y: 0,
      width: 80,
      height: 80,
      blur: 5,
      color: "#fff200",
      radius: { topLeft: 50, topRight: 50, bottomLeft: 50, bottomRight: 50 },
      shadows: [
        {
          label: "Strong Core Glow",
          x: 0,
          y: 0,
          spread: 50,
          blur: 90,
          opacity: 1,
          color: "#fff700",
        },
        {
          label: "Outer Core Halo",
          x: 0,
          y: 0,
          spread: 80,
          blur: 120,
          opacity: 0.6,
          color: "#ffe600",
        },
      ],
    },
  ]);

  const updateShape = (key, value, index) => {
    setShape((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [key]: value,
      };
      return updated;
    });
  };

  const updateShadow = (key, value, shapeIndex, shadowIndex) => {
    setShape((prev) => {
      const updated = [...prev];
      const shadows = [...updated[shapeIndex].shadows];
      shadows[shadowIndex] = {
        ...shadows[shadowIndex],
        [key]: value,
      };
      updated[shapeIndex].shadows = shadows;
      return updated;
    });
  };

  const addShape = () => {
    setShape((prev) => [
      ...prev,
      {
        label: `Shape_${shapeCounter + 1}`,
        x: 0,
        y: 0,
        width: 80,
        height: 80,
        blur: 0,
        color: "#ffffff",
        radius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
        shadows: [],
      },
    ]);
    setShapeCounter((count) => count + 1);
  };

  const removeShape = (index) => {
    setShape((prev) => prev.filter((_, i) => i !== index));
    if (selectedShape === index) {
      setSelectedShape(0);
    }
  };

  const addShadow = (index) => {
    setShape((prev) => {
      const updated = [...prev];
      const shape = { ...updated[index] };
      const newShadow = {
        label: `Shadow ${shape.shadows.length + 1}`,
        x: 100,
        y: 0,
        spread: 0,
        blur: 0,
        opacity: 1,
        color: "#ffffff",
      };
      shape.shadows = [...(shape.shadows || []), newShadow];
      updated[index] = shape;
      return updated;
    });
  };

  const removeShadow = (shapeIndex, shadowIndex) => {
    setShape((prev) => {
      const updated = [...prev];
      const shadows = [...updated[shapeIndex].shadows];
      updated[shapeIndex].shadows = shadows.filter((_, i) => i !== shadowIndex);
      return updated;
    });
  };

  return {
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
    removeShadow,
  };
}
