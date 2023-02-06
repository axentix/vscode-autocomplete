const rounded_values = [0, 1, 2, 3, 4, "full"];

const rounded_base = rounded_values.map((rounded) => `rounded-${rounded}`);

const rounded_corners_values = ["tl", "tr", "bl", "br"];

const rounded_corners = rounded_corners_values
  .map((rcv) => {
    return rounded_values.map((rv) => `rounded-${rcv}-${rv}`);
  })
  .flat();

const rounded = rounded_base.concat(rounded_corners);
export default rounded
