import { useDispatch } from "react-redux";
import SideBar from "../components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { PanelLeft } from "lucide-react";
import {
  handleOpenSideBar,
  handleHideSideBar,
  handleRemoveBlockSideBar,
} from "../redux/action.js";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hook/useAppSelector";

function Home() {
  const hideSideBar = useAppSelector(
    (state) => state.sideBarreducers.hideSideBar
  );
  const blockSideBar = useAppSelector(
    (state) => state.sideBarreducers.blockSidebarResize
  );
  const dispatch = useDispatch();
  const [showTriggerIcon, setShowTriggerIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (blockSideBar) return;
      if (window.innerWidth < 640) {
        setShowTriggerIcon(true);
        dispatch(handleHideSideBar());
      } else if (window.innerWidth >= 640) {
        setShowTriggerIcon(false);
        dispatch(handleOpenSideBar());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [blockSideBar]);

  useEffect(() => {
    if (hideSideBar) {
      const timeout = setTimeout(() => setShowTriggerIcon(true), 100);
      return () => clearTimeout(timeout);
    } else {
      setShowTriggerIcon(false);
    }
  }, [hideSideBar]);

  const openSidebar = () => {
    dispatch(handleOpenSideBar());
    dispatch(handleRemoveBlockSideBar());
  };
  return (
    <div className="flex flex-row h-screen">
      <div
        className={`
      fixed top-0 left-0 h-full w-[210px] bg-[#262626]
      transform transition-transform duration-300
      ${hideSideBar ? "-translate-x-full" : "translate-x-0"}
    `}
      >
        <SideBar />
      </div>

      <div
        className={`transition-all duration-300 ${
          hideSideBar ? "pl-0" : "pl-[210px]"
        } bg-[#1E1E1E] h-full flex-1`}
      >
        {showTriggerIcon && (
          <div className="p-5">
            <PanelLeft
              className="text-white opacity-50"
              onClick={openSidebar}
            />
          </div>
        )}{" "}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
