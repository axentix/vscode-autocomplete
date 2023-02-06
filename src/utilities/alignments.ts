const horizontal_alignments = [
  "fx-left",
  "fx-center",
  "fx-right",
  "self-left",
  "self-center",
  "self-right",
  "left",
  "center",
  "right",
  "float-left",
  "float-right",
];

const vertical_alignments = [
  "vtop",
  "vcenter",
  "vbottom",
  "vstretch",
  "vself-top",
  "vself-center",
  "vself-bottom",
  "vself-stretch",
];

const text_alignments = ["text-left", "text-center", "text-right"];

const alignments = horizontal_alignments.concat(vertical_alignments).concat(text_alignments);

export default alignments
