const sizes = {
  min: 1,
  max: 6,
};

const border_styles = [
  "dashed",
  "dotted",
  "double",
  "groove",
  "hidden",
  "none",
  "inset",
  "outset",
  "ridge",
  "solid",
  "revert",
];

const border_sides = ["t", "r", "l", "b"];

const mapped_border_sizes = Array.from(
  { length: sizes.max },
  (_, i) => "bd-" + (i + sizes.min)
);

const mapped_border_styles = border_styles.map((style) => {
  return `bd-${style}`;
});

const mapped_borders_sides = border_sides.flatMap((border) => {
  return Array.from({ length: sizes.max }, (_, i) => `bd-${border}-${i}`);
});

const borders = mapped_border_sizes
  .concat(mapped_border_styles)
  .concat(mapped_borders_sides);

export default borders
