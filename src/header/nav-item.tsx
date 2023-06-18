export interface SubItemData {
  title: string;
  url: string;
}

export interface NavItemData {
  title: string;
  url?: string;
  subItems?: Array<SubItemData>;
}

export interface NavItemProps {
  data: NavItemData;
}

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

function SubItem({ subItem }: { subItem: SubItemData }) {
  return (
    <li className="text-left list-none p-[10px]">
      <a className="no-underline text-white hover:underline" href={subItem.url}>
        {subItem.title}
      </a>
    </li>
  );
}

function ExpandableNavItem(props: NavItemProps) {
  return (
    <section className="relative inline-block text-white p-[10px] group">
      <span className="h-[20px] font-bold text-center rounded-[100px] text-white no-underline">
        {props.data.title}
      </span>
      <ul className="hidden absolute bg-[#24272b] rounded-[10px] mt-[10px] min-w-[110px] group-hover:block">
        {props.data.subItems &&
          props.data.subItems.map((item) => <SubItem subItem={item}></SubItem>)}
      </ul>
    </section>
  );
}

function NavItem(props: NavItemProps) {
  return (
    <>
      {props.data.url && <ClickableNavItem {...props} />}
      {!props.data.url && <ExpandableNavItem {...props} />}
    </>
  );
}

export default NavItem;
