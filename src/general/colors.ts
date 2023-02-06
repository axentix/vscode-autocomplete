const color_types = [
  {
    type: "light",
    nbr: 4,
  },
  {
    type: "dark",
    nbr: 5,
  },
];

const base_colors = [
  "blue",
  "red",
  "green",
  "cyan",
  "magenta",
  "yellow",
  "orange",
  "viride",
  "amaranth",
  "mole",
  "airforce",
  "meadow",
  "grey",
];

const fixed_colors = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "transparent",
  "white",
  "black",
];

const mapped_colors = base_colors.flatMap((color) => {
  return color_types
    .flatMap((color_type) => {
      return Array.from(
        { length: color_type.nbr },
        (_, i) => color + "-" + color_type.type + "-" + (i + 1)
      );
    })
    ;
});

const colors = base_colors
  .concat(fixed_colors)
  .concat(mapped_colors);

export default colors
