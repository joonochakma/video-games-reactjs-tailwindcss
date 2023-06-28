import { NavItemProps } from "../types";
import SubNavItem from "../atoms/sub-nav-item";

function ExpandableNavItem(props: NavItemProps) {
  return (
    <section className="relative inline-block text-white p-[10px] group">
      <span className="h-[20px] font-bold text-center rounded-[100px] text-white no-underline">
        {props.data.title}
      </span>
      <ul className="hidden absolute bg-[#24272b] rounded-[10px] mt-[10px] min-w-[110px] group-hover:block">
        {props.data.subItems &&
          props.data.subItems.map((item) => (
            <SubNavItem subItem={item}></SubNavItem>
          ))}
      </ul>
    </section>
  );
}

export default ExpandableNavItem;
