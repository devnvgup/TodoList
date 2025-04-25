import MyProject from "../Content/MyProject";
import ProjectList from "../Content/ProjectList";

interface SidebarContentProps {
  width: number;
}

function SidebarContent({ width }: SidebarContentProps) {
  return (
    <>
      <MyProject />
      <ProjectList width={width} />
    </>
  );
}

export default SidebarContent;
