import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";

interface SidebarProps {
  width: number;
}

function SideBar({ width }: SidebarProps) {
  return (
    <div className="flex flex-col">
      <div>
        <SidebarHeader width={width} />
      </div>
      <div>
        <SidebarContent width={width} />
      </div>
    </div>
  );
}

export default SideBar;
