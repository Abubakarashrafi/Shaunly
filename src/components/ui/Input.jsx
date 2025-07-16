function Input({ label, min, max, onChange, value, type, step }) {
  const percentage = ((value - min) / (max - min)) * 100;

  const handleChange = (e) => {
    let val = Number(e.target.value)
    if(val > max) val = max;
    if(val < min) val = min;
    onChange({target:{value:val}}) 
  }

  return (
    <div className="flex flex-col space-y-2 w-full">
      {/* Label with current value */}
      <label className="font-medium text-gray-800">
        {label}: <span className="text-blue-600">{value}px</span>
      </label>

      {/* Range + Number */}
      <div className="flex items-center space-x-4">
        <div className="relative w-full h-4">
          {/* Track background */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-2 bg-gray-300 rounded-full" />

          {/* Filled track */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-2 bg-blue-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />

          {/* Actual input range over it */}
          <input
            type={type}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            className="w-full appearance-none bg-transparent relative z-10 h-4
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:w-5
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:border-2
              [&::-webkit-slider-thumb]:border-blue-500
              [&::-webkit-slider-thumb]:shadow-md
              [&::-moz-range-thumb]:appearance-none
              [&::-moz-range-thumb]:h-5
              [&::-moz-range-thumb]:w-5
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-white
              [&::-moz-range-thumb]:border-2
              [&::-moz-range-thumb]:border-blue-500"
          />
        </div>

        {/* Number box */}
        {type === 'range' && (

          <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
          />
        )}
      </div>
    </div>
  );
}

export default Input;
