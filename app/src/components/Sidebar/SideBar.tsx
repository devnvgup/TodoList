import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";

function SideBar() {
  return (
    <div className="flex flex-col">
      <div>
        <SidebarHeader />
      </div>
      <div>
        <SidebarContent />
      </div>
    </div>
  );
}

export default SideBar;
