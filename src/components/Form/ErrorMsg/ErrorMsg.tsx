interface ErrorProps {
  message: string | undefined;
}

export const Error = ({ message }: ErrorProps) => {
  return <p>{message}</p>;
};
