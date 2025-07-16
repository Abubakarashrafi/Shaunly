function ColorPicker({ label, value, onChange }) {
    return (
        <div className="flex flex-col space-y-2 w-full">
            {/* Label */}
            <label className="font-medium text-gray-800">
                {label}: <span style={{color:value}} className="ml-1 inline-block w-4 h-4 rounded-full ">{value} </span>
            </label>

            {/* Color input */}
            <input
                type="color"
                value={value}
                onChange={onChange}
                className="w-full h-12 p-0 border-none cursor-pointer rounded-full bg-transparent"
            />
        </div>
    );
}

export default ColorPicker;
