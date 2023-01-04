import { ReactNode } from "react";

type ForecastElements = {
  title: string;
  icon: ReactNode;
  temperature: string;
};

export default function ForecastElement({
  title,
  icon,
  temperature,
}: ForecastElements) {
  return (
    <div className="flex flex-col items-center min-w-[96px] px-4">
      <p className="text-sm">{title}</p>
      {icon}
      <p>{temperature}</p>
    </div>
  );
}
