import { ChangeEventHandler, KeyboardEvent, ChangeEvent } from "react";

interface AssessmentOptionProps {
  id: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  color: string;
  option: string;
}

export default function AssessmentOption({
  id,
  checked,
  onChange,
  color,
  option,
}: AssessmentOptionProps) {
  return (
    <div className="flex items-center gap-4">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        tabIndex={-1}
      />
      <label
        htmlFor={id}
        id={`${id}-label`}
        className={`flex-1 cursor-pointer px-3 sm:px-4 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium transition duration-200
          ${checked ? "bg-blue-100 border-blue-400" : "hover:bg-blue-50"}
        `}
        tabIndex={0}
        onKeyDown={(e: KeyboardEvent<HTMLLabelElement>) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            onChange(e as unknown as ChangeEvent<HTMLInputElement>);
          }
        }}
        aria-pressed={checked}
        role="checkbox"
        aria-checked={checked}
      >
        <span
          className={`mr-3 inline-block w-7 h-7 rounded border-2 border-gray-300 align-middle text-center ${
            checked ? `${color} ring-2 ring-blue-400 bg-blue-50` : ""
          }`}
          aria-hidden="true"
        >
          {checked ? (
            <i className="fas fa-check text-lg flex items-center justify-center h-full w-full"></i>
          ) : (
            <span className="sr-only">Select</span>
          )}
        </span>
        <span>{option}</span>
      </label>
    </div>
  );
}
