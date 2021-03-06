import { StateComponent } from "polythene-mithril-base";
import { coreList as core } from "polythene-core-list";
import { ListTile } from "polythene-mithril-list-tile";

export const List = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { ListTile })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { ListTile }))
  }
));

List.displayName = "List";
