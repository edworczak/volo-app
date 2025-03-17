type StyledInputProps = {
    label: string;
    type?: "email" | "password" | "number" | "datetime-local";
    value?: string | number;
    labelHidden?: boolean;
  };
  
  export default function StyledInput({ label, type, value, labelHidden }: StyledInputProps) {
      return (
          <label className="flex flex-col gap-2">
            <span className={labelHidden ? "hidden" : ""}>{label}</span>
            <input className="border-1 border-blue p-2" type={type ? type : "text"} value={value}/>
          </label>
      );
    }
    