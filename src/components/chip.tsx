import { PropsWithChildren } from "react";

export default function Chip(props: PropsWithChildren) {
  return (
    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
      {props.children}
    </div>
  );
}
