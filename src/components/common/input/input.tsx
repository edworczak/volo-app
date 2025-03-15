type StyledInputProps = {
    label: string;
    type?: "email" | "password";
  };
  
  export default function StyledInput({ label, type }: StyledInputProps) {
      return (
          <label className="flex flex-col gap-2">
            <span>{label}</span>
            <input className="border-1 border-blue p-2" type={type ? type : "text"}/>
          </label>
      );
    }
    