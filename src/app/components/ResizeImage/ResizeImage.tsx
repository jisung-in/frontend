import { useEffect, useState } from "react";

type ScreenSize = "sm" | "md" | "lg" | "xl" | "xl2";

type ResizeImageProps = {
  src: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  alt: string;
};

const ResizeImage: React.FC<ResizeImageProps> = ({
  src: SvgComponent,
  alt,
}) => {
  const [screenSize, setScreenSize] = useState<ScreenSize | "default">(
    "default",
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setScreenSize("sm");
      } else if (width <= 900) {
        setScreenSize("md");
      } else if (width <= 1200) {
        setScreenSize("lg");
      } else if (width <= 1800) {
        setScreenSize("xl");
      } else {
        setScreenSize("xl2");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSVG = () => {
    const sizeMap: Record<ScreenSize, { width: number; height: number }> = {
      sm: { width: 18, height: 18 },
      md: { width: 22, height: 22 },
      lg: { width: 24, height: 24 },
      xl: { width: 25, height: 25 },
      xl2: { width: 27, height: 27 },
    };

    if (screenSize === "default") {
      return <SvgComponent width={30} height={30} aria-label={alt} />;
    }

    const { width, height } = sizeMap[screenSize];

    return <SvgComponent width={width} height={height} aria-label={alt} />;
  };

  return renderSVG();
};

export default ResizeImage;
