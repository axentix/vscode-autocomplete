const other_base = ["blockquote", "truncate", "divider", "responsive-media"];

const cursor_types = [
  "default",
  "pointer",
  "not-allowed",
  "grab",
  "wait",
  "zoom-in",
  "zoom-out",
  "none",
];

const cursors = cursor_types.map((type) => `cursor-${type}`);

const overflow_types = [
  "hidden",
  "scroll",
  "auto",
  "visible",
  "initial",
  "inherit",
];

const overflows = overflow_types.map((type) => `overflow-${type}`);

const positions = ["absolute-pos", "fixed-pos", "relative-pos"];

const opacity = [
  "opacity-0",
  "opacity-10",
  "opacity-20",
  "opacity-30",
  "opacity-40",
  "opacity-50",
  "opacity-60",
  "opacity-70",
  "opacity-80",
  "opacity-90",
  "opacity-100",
];


const others = other_base.concat(positions).concat(opacity).concat(cursors).concat(overflows)
export default others
