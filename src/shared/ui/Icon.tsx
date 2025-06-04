type IconProps = {
  src: string;
  size?: number;
  color?: string;
};

export const Icon = ({ src, size = 24, color }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      maskImage: `url(${src})`,
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      backgroundColor: color || "currentColor",
      WebkitMaskImage: `url(${src})`,
      WebkitMaskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
    }}
  />
);
