export const codefolder_url =
    "https://raw.githubusercontent.com/eyqs/req/master/data/ubc/2017/codes/";

export const rgba = "rgba(";
export const button_plain_alpha = ", 1)";
export const button_shaded_alpha = ", 0.1)";

export const button_plain_border = "inset 0px 0px 0px 1px ";
export const button_highlight_border = "inset 0px 0px 0px 2px ";

export const app_plain_background = "white";
export const app_shaded_background = "rgba(0, 0, 0, 0.7)";

export const app_style = {
  padding: "1rem",
  margin: "0 auto",
  width: "70vw",
  transition: "background-color 1s",
};

export const button_style = {
  textAlign: "center",
  width: "100%",
  height: "2rem",
  lineHeight: "2rem",
  cursor: "default",
  transition: "background-color 1s",
};

export const button_row_style = {
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: "repeat(auto-fill, 6rem)",
  gridGap: "0.7rem",
  paddingTop: "1.5rem",
};

export const button_colours = {
  done: "greenyellow",
  none: "whitesmoke",
  xout: "lavender",
  outs: "wheat",
  creq: "gold",
  preq: "pink",
  excl: "lightsteelblue",
};

export const button_descriptions = {
  done: " is already taken.",
  none: " can be taken.",
  xout: " can be taken"
      + " unless you've taken some credit excluded course outside the tree.",
  outs: " cannot be taken"
      + " unless you've taken some requisite course outside the tree.",
  creq: " cannot be taken, due to a missing corequisite.",
  preq: " cannot be taken, due to a missing prerequisite.",
  excl: " cannot be taken, due to a"
      + " credit excluded course that you've already taken.",
};

export const border_colours = {
  highs: "black",
  preqs: "deeppink",
  creqs: "darkorange",
  excls: "indigo",
  dreqs: "olive",
};

export const border_descriptions = {
  highs: " is the highlighted course.",
  preqs: " is a prerequisite of the highlighted course.",
  creqs: " is a corequisite of the highlighted course.",
  excls: " is credit excluded with the highlighted course.",
  dreqs: " has the highlighted course as a requisite.",
};

export const colours_to_rgba = {
  greenyellow: "173, 255, 47",
  whitesmoke: "245, 245, 245",
  lavender: "230, 230, 250",
  wheat: "245, 222, 179",
  gold: "255, 215, 0",
  pink: "255, 192, 203",
  lightsteelblue: "176, 196, 222",
  black: "0, 0, 0",
  deeppink: "211, 20, 147",
  darkorange: "255, 140, 0",
  indigo: "75, 0, 130",
  olive: "128, 128, 0",
}
