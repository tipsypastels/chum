import { ComponentChildren } from "preact";

interface ContainerProps {
  children: ComponentChildren;
}

export default function Container(props: ContainerProps) {
  return (
    <div class="flex h-screen items-center justify-center">
      {props.children}
    </div>
  );
}
