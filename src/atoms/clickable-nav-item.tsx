import { NavItemProps } from "../types";

function ClickableNavItem(props: NavItemProps) {
  return (
    <section className="relative inline-block text-white p-[10px] hover:underline">
      <a href={props.data.url} className="text-white ">
        <span className="h-[20px] font-bold text-center rounded-[100px] text-white no-underline">
          {props.data.title}
        </span>
      </a>
    </section>
  );
}

export default ClickableNavItem;