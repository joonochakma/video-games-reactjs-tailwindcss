interface PageTitleProps {
  title: string;
}

function PageTitle(props: PageTitleProps) {
  return (
    <h1 className="mb-[25px] text-[44.6px] text-center text-black">
      {props.title}
    </h1>
  );
}

export default PageTitle;
