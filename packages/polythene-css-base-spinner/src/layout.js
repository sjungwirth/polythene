
const sizes = size => ({
  width: size + "px",
  height: size + "px"
});

const raisedSize = (size, componentVars) => {
  const { padding, paddedSize } = componentVars.raisedSize(size);
  return {
    width:   paddedSize + "px",
    height:  paddedSize + "px",
    padding: padding    + "px"
  };
};

export default (selector, componentVars) => [{
  [selector]: {
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    opacity: 0,

    ".pe-spinner--visible, &.pe-spinner--permanent": {
      opacity: 1
    },

    ".pe-spinner--small":   sizes(componentVars.size_small),
    ".pe-spinner--regular": sizes(componentVars.size_regular),
    ".pe-spinner--medium":  sizes(componentVars.size_medium),
    ".pe-spinner--large":   sizes(componentVars.size_large),
    ".pe-spinner--fab":     sizes(componentVars.size_fab),

    ".pe-spinner--raised": {
      position: "relative",
      borderRadius: "50%",

      ".pe-spinner--small":   raisedSize(componentVars.size_small,   componentVars),
      ".pe-spinner--regular": raisedSize(componentVars.size_regular, componentVars),
      ".pe-spinner--medium":  raisedSize(componentVars.size_medium,  componentVars),
      ".pe-spinner--large":   raisedSize(componentVars.size_large,   componentVars),
      ".pe-spinner--fab":     raisedSize(componentVars.size_fab,     componentVars)
    }
  }
}];
