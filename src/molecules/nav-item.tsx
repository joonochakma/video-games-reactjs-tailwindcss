import { NavItemProps } from "../types";
import ClickableNavItem from "../atoms/clickable-nav-item";
import ExpandableNavItem from "./expandable-nav-item";

function NavItem(props: NavItemProps) {
  return (
    <>
      {props.data.url && <ClickableNavItem {...props} />}
      {!props.data.url && <ExpandableNavItem {...props} />}
    </>
  );
}

export default NavItem;
