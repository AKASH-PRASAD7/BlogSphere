import React, { forwardRef, useId } from "react";

const Select = forwardRef(
  ({ optopns = [], label, className = "", ...preprocessCSS }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="">
            {label}
          </label>
        )}
        {
          <select
            {...props}
            ref={ref}
            id={id}
            className={`px-3 py-2 rounded-lg
            bg-white
            text-black outline-none focus:bg-gray-50
            duration-200 border border-gray-200 w-full 
            ${className}`}
          >
            {optopns?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        }
      </div>
    );
  }
);

export default forwardRef(Select);
