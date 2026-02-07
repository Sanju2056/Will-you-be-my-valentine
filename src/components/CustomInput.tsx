import { useState } from "react";

interface CustomInputProps {
  label: string
  placeholder: string
  type?: 'text' | 'password'
  renderRight?: any
  register: any
  errors: any
  containerStyle?: any
  bgColor?: any
  activeOutlineColor?: string
  inActiveOutlineColor?: string
  isTextArea?: boolean
  className?: string
  disabled?: boolean
  resize?: boolean,
}

const CustomInput = ({
  label,
  placeholder,
  type,
  renderRight,
  register,
  errors,
  containerStyle,
  bgColor,
  activeOutlineColor = "border-gray",
  inActiveOutlineColor = "border-transparent",
  isTextArea,
  className,
  disabled,
  resize = true,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex flex-col w-full ${containerStyle}`}>
      {label && (
        <span className="font-montserrat text-light-black font-medium text-sm mb-2">
          {label}
        </span>
      )}
      <div
        className={`rounded-lg py-2.5 px-3 font-montserrat font-medium text-sm flex items-center border-2 ${bgColor ?? "bg-[#F7F7F7]"
          } ${isFocused ? activeOutlineColor : inActiveOutlineColor
          } ${className}`}
      >
        {isTextArea ? (
          resize ? (
            <textarea
              {...register}
              disabled={disabled}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 bg-transparent outline-none"
              placeholder={placeholder}
              rows={5}
              type={type ?? "text"}
              style={{ lineHeight: "1.5" }}
            />
          ) : (
            <textarea
              {...register}
              disabled={disabled}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 bg-transparent outline-none resize-none overflow-hidden"
              placeholder={placeholder}
              rows={1}
              type={type ?? "text"}
              style={{
                lineHeight: "1.5",
              }}
            />
          )
        ) : (
          <input
            {...register}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 bg-transparent outline-none whitespace-pre-wrap break-words overflow-hidden"
            placeholder={placeholder}
            type={type ?? "text"}
            style={{ height: "auto", lineHeight: "1.5" }}
          />
        )}
        {renderRight}
      </div>
      {errors?.message && (
        <span className="whitespace-pre text-xs mt-2 text-orange-700">
          {errors?.message}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
