import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  state: string;
};

export default function Detail({ icon, title, state }: Props) {
  return (
    <div className="flex justify-center text-white">
      {icon}
      <p className="font-light ml-2">
        {title} <span className="font-medium ml-1">{state}</span>
      </p>
    </div>
  );
}
