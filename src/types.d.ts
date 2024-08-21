declare module "*.module.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>> | string | undefined;
  export default content;
}
