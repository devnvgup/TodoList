import { useDispatch } from "react-redux";
import SideBar from "../components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { PanelLeft } from "lucide-react";
import {handleOpenSidebar, handleHideSidebar} from "../redux/action.js"
import { useEffect, useState } from "react";
import { useAppSelector } from "../hook/useAppSelector";
import { useResponsiveWatcher } from "../hook/useResponsiveWatcher.js";

function Home() {
  const hideSideBar = useAppSelector(state => state.sideBarreducers.hideSideBar)
  const dispatch = useDispatch()
  const [showTriggerIcon, setShowTriggerIcon] = useState(false);
  
  const {allowToShow} = useResponsiveWatcher();
  console.log("allowToShow", allowToShow);



  useEffect(() => {

    const handleResize = () => {
  
        if (window.innerWidth < 640) {
          setShowTriggerIcon(true);
          dispatch(handleHideSidebar());
        } else if (allowToShow && window.innerWidth >= 640) {
          setShowTriggerIcon(false);
          dispatch(handleOpenSidebar());
        }
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, [allowToShow]);

  useEffect(() => {
    if (hideSideBar) {
      const timeout = setTimeout(() => setShowTriggerIcon(true), 100); 
      return () => clearTimeout(timeout);
    } else {
      setShowTriggerIcon(false); 
    }
  }, [hideSideBar]);


  const openSidebar =()=>{
    dispatch(handleOpenSidebar())
  }
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
     
      <div className={`transition-all duration-300 ${hideSideBar ? "pl-0" : "pl-[210px]"} bg-[#1E1E1E] h-full flex-1`}>
      {showTriggerIcon &&  <div className="p-5">
        <PanelLeft className="text-white opacity-50" onClick={openSidebar} />
        </div>}
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
