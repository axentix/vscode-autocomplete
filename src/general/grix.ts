import breakpoints from "../utilities/breakpoints";

const columns = {
  min: 1,
  max: 12,
};

const grix = breakpoints.flatMap((breakpoint) => {
  return Array.from(
    { length: columns.max },
    (_, i) => "grix" + " " + breakpoint + (i + columns.min)
  );
});
export default grix;
