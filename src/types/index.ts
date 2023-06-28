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
