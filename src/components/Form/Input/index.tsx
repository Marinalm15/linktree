import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  className: string;
  type: string;
  placeholder: string;
  name: string;
}

export const Input = ({
  className,
  type,
  placeholder,
  register,
  name,
}: InputProps) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};
