import stream from "mithril/stream";

export default ({ h, k, Checkbox }) => ({
  oninit: vnode => {
    const checked = stream(false);
    vnode.state = {
      checked,
      redrawOnUpdate: stream.merge([checked]) // for React
    };
  },
  view: vnode => {
    const state = vnode.state;
    const checked = state.checked();
    return h("div", [
      h("div", {
        style: {
          marginBottom: "1rem"
        }
      },`Checked: ${checked}`),
      h(Checkbox, {
        events: {
          [k.onclick]: () => state.checked(!checked)
        },
        checked
      })
    ]);
  }
});
