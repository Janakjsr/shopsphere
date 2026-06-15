import type { ReactNode } from "react";

type ShellCardProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export const ShellCard = ({ title, description, children }: ShellCardProps) => (
  <section className="shell-card">
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </section>
);

