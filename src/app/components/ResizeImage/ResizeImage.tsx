type ResizeImageProps = {
  src: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  alt: string;
};

const ResizeImage: React.FC<ResizeImageProps> = ({
  src: SvgComponent,
  alt,
}) => {
  return (
    <SvgComponent
      className="w-[5vw] h-[5vw] min-w-[18px] min-h-[18px] max-w-[1.5625vw] max-h-[1.5625vw]"
      aria-label={alt}
    />
  );
};

export default ResizeImage;
