const hexColorToRGB = (hex) => {
  const R = parseInt(hex.slice(1, 3), 16);
  const G = parseInt(hex.slice(3, 5), 16);
  const B = parseInt(hex.slice(5, 7), 16);
  return [R, G, B];
};

const h2rgb = (hex) => {
  if (!hex) return '0, 0, 0, ';
  const [R, G, B] = hexColorToRGB(hex);
  return `${R}, ${G}, ${B},`;
};

export function getStyle(props) {
  return {
    verticalAlign: props.grid_vertical_align,
    style: {
      backgroundColor: props.backgroundColor,
      ...(props.roundedCorner && {
        borderRadius: props.roundedCorner,
      }),
      ...(props.shadowDepth && {
        boxShadow: `0px 0px ${props.shadowDepth}px rgba(${h2rgb(
          props.shadowColor,
        )} ${(props.shadowDepth * 100) / 0.24})`,
      }),
    },
  };
}
