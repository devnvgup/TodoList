import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from 'react-redux'
import {handleHideSidebar} from "../../redux/action.js"
import { PanelLeft } from "lucide-react";
import { useResponsiveWatcher } from "../../hook/useResponsiveWatcher.js";
// import {}

function SidebarHeader() {
  const { user } = useContext(AuthContext);
const {handleSetAllowToShow, handleSetLeftFlag} = useResponsiveWatcher();


  const dispatch = useDispatch()

  const hideSidebar = () => {
    dispatch(handleHideSidebar());
    handleSetAllowToShow(false)
    handleSetLeftFlag(false)
  }
  return (
    <div className="flex flex-row p-3  space-x-2 items-center justify-between cursor-pointer">
      <button className="flex flex-row items-center space-x-2  rounded-xl px-3 py-1 hover:bg-[#322F2A]">
        <img
          className="rounded-full w-7 h-7"
          src={user?.photoURL ?? undefined}
        />
        <p className="text-[white] text-sm">
          {user?.displayName?.slice(0, 7).trim()}...
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
        />
      </svg>
      
      <PanelLeft className="text-white opacity-50 iconCheck" onClick={hideSidebar} />
     

    </div>
  );
}

export default SidebarHeader;
