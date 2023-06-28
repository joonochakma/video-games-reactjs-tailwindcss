interface LinkButtonProps {
    href: string;
    label: string;
};

function LinkButton(props: LinkButtonProps) {
  return (
    <a href={props.href}>
      <button className="bg-[#3e78b2] p-[10px] border-none text-white font-bold  min-w-[40px] mt-[5px] hover:bg-[#6fc5ff] hover:shadow-[#50d71e]">
        {props.label}
      </button>
    </a>
  );
}

export default LinkButton;
