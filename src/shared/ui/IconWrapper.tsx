type IconWrapperProps = {
  src: string;
  size?: number;
  color?: string;
  className?: string;
};

export const IconWrapper = ({
  src,
  size = 24,
  color,
  className,
}: IconWrapperProps) => (
  <div
    className={className}
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
