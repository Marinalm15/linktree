interface ErrorProps {
  message: string;
}

export const Error = ({ message }: ErrorProps) => {
  return <p>{message}</p>;
};
