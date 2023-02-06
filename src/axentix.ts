//Components
import { default as Buttons } from "./components/buttons";
import { default as Card } from "./components/card";
import { default as Caroulix } from "./components/caroulix";
import { default as Collapsible } from "./components/collapsible";
import { default as Dropdown } from "./components/dropdown";
import { default as Fab } from "./components/fab";
import { default as Footer } from "./components/footer";
import { default as Lightbox } from "./components/lightbox";
import { default as Modal } from "./components/modal";
import { default as Navbar } from "./components/navbar";
import { default as Scrollspy } from "./components/scrollspy";
import { default as Sidenav } from "./components/sidenav";
import { default as Skeleton } from "./components/skeleton";
import { default as Table } from "./components/table";
import { default as Tabs } from "./components/tabs";

//Forms
import { default as Form } from "./forms/forms";

//General
import { default as Colors } from "./general/colors";
import { default as Grix } from "./general/grix";
import { default as Layouts } from "./general/layouts";

//Utilities
import { default as Alignments } from "./utilities/alignments";
import { default as Borders } from "./utilities/borders";
import { default as Breakpoints } from "./utilities/breakpoints";
import { default as Display } from "./utilities/display";
import { default as Flexbox } from "./utilities/flexbox";
import { default as Hover } from "./utilities/hover";
import { default as Hoverable } from "./utilities/hoverable";
import { default as Others } from "./utilities/others";
import { default as Rounded } from "./utilities/rounded";
import { default as Shadows } from "./utilities/shadows";
import { default as Spacing } from "./utilities/spacing";
import { default as Typography } from "./utilities/typography";

const autocomplete = Buttons.concat(Card)
  // Components
  .concat(Caroulix)
  .concat(Collapsible)
  .concat(Dropdown)
  .concat(Fab)
  .concat(Footer)
  .concat(Lightbox)
  .concat(Modal)
  .concat(Navbar)
  .concat(Scrollspy)
  .concat(Sidenav)
  .concat(Skeleton)
  .concat(Table)
  .concat(Tabs)
  //   Forms
  .concat(Form)
  //General
  .concat(Colors)
  .concat(Grix)
  .concat(Layouts)
  //Utilities
  .concat(Alignments)
  .concat(Borders)
  .concat(Breakpoints)
  .concat(Display)
  .concat(Flexbox)
  .concat(Hover)
  .concat(Hoverable)
  .concat(Others)
  .concat(Rounded)
  .concat(Shadows)
  .concat(Spacing)
  .concat(Typography);

export default autocomplete;
