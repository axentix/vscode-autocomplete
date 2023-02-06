const resp_breakpoints = [
  "sm-down",
  "md-down",
  "lg-down",
  "sm-up",
  "md-up",
  "lg-up",
];

const hide = [
  "hide",
  "hide-sm-down",
  "hide-md-down",
  "hide-lg-down",
  "hide-sm-up",
  "hide-md-up",
  "hide-lg-up",
];

const display = [
  "d-block",
  "d-flex",
  "d-grid",
  "d-table",
  "d-inline",
  "d-inline-block",
  "d-inline-flex",
  "d-inline-table",
];

const displays = display.concat(hide).concat(resp_breakpoints)

export default displays
