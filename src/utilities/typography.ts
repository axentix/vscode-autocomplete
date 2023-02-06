const text_alignments = [
  "text-left",
  "text-right",
  "text-justify",
  "text-cebter",
];
const spacings = ["container", "mt-auto", "mb-auto", "ml-auto", "mr-auto"];

const font_sizes_params = {
  min: 1,
  max: 12,
};
const mapped_font_sizes = Array.from(
  { length: font_sizes_params.max },
  (_, i) => "font-s" + (i + font_sizes_params.min)
);

const heading_sizes_params = {
  min: 1,
  max: 6,
};
const mapped_heading_sizes = Array.from(
  { length: heading_sizes_params.max },
  (_, i) => "h" + (i + heading_sizes_params.min)
);

const font_weigth_params = {
  min: 1,
  max: 9,
};
const mapped_font_weigths = Array.from(
  { length: font_weigth_params.max },
  (_, i) => `font-w${i + font_weigth_params.min}00`
);

const base_line_height = ["lh-normal"];
const line_height_params = {
  min: 1,
  max: 6,
};
const mapped_line_height = Array.from(
  { length: line_height_params.max },
  (_, i) => `lh-${i + font_weigth_params.min}`
);

const mapped__rem_line_height = Array.from(
  { length: line_height_params.max },
  (_, i) => `lh-rem-${i + font_weigth_params.min}`
);

const word_break = [
  "wb-normal",
  "wb-break-all",
  "wb-keep-all",
  "wb-break-word",
  "wb-unset",
];

const typography = text_alignments
  .concat(spacings)
  .concat(mapped_font_sizes)
  .concat(mapped_font_weigths)
  .concat(mapped_heading_sizes)
  .concat(base_line_height)
  .concat(mapped_line_height)
  .concat(mapped__rem_line_height)
  .concat(word_break);

export default typography;
