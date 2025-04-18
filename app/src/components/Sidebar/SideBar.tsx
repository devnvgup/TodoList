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
        <SidebarContent />
      </div>
    </div>
  );
}

export default SideBar;
