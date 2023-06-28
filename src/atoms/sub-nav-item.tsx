import { SubItemData } from "../types";

function SubNavItem({ subItem }: { subItem: SubItemData }) {
  return (
    <li className="text-left list-none p-[10px]">
      <a className="no-underline text-white hover:underline" href={subItem.url}>
        {subItem.title}
      </a>
    </li>
  );
}

export default SubNavItem;