const TemplateImgs = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export default TemplateImgs;
