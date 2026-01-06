type NeonTextProps = {
  children: React.ReactNode;
};

export default function NeonText({ children }: NeonTextProps) {
  return <span className="neon-text">{children}</span>;
}