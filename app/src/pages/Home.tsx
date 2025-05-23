import { useDispatch } from "react-redux";
import SideBar from "../components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { PanelLeft } from "lucide-react";
import {
  handleOpenSideBar,
  handleHideSideBar,
  handleRemoveBlockSideBar,
} from "../redux/action.js";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../hook/useAppSelector";

function Home() {
  const [width, setWidth] = useState(210);
  const contentRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);
  const hideSideBar = useAppSelector(
    (state) => state.sideBarreducers.hideSideBar
  );
  const blockSideBar = useAppSelector(
    (state) => state.sideBarreducers.blockSidebarResize
  );
  const dispatch = useDispatch();
  const [showTriggerIcon, setShowTriggerIcon] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      const newWidth = e.clientX;
      if (newWidth >= 210 && newWidth <= 420) {
        requestAnimationFrame(() => {
          if (contentRef.current) {
            contentRef.current.style.paddingLeft = `${newWidth}px`;
          }
        });

        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.body.style.cursor = "default";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    isResizing.current = true;
    document.body.style.cursor = "col-resize";
  };

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
      requestAnimationFrame(() => {
        if (contentRef.current) {
          contentRef.current.style.paddingLeft = `0px`;
        }
      });
      return () => clearTimeout(timeout);
    } else {
      requestAnimationFrame(() => {
        if (contentRef.current) {
          contentRef.current.style.paddingLeft = `${width}px`;
        }
      });
      setShowTriggerIcon(false);
    }
  }, [hideSideBar]);

  const openSidebar = () => {
    dispatch(handleOpenSideBar());
    dispatch(handleRemoveBlockSideBar());
  };
  return (
    <div className="flex flex-row min-h-screen">
      <div
        style={{ width }}
        className={`
      fixed top-0 left-0 h-full bg-[#262626]
      transform transition-transform duration-300
      ${hideSideBar ? "-translate-x-full" : "translate-x-0"}
    `}
      >
        <SideBar width={width} />
        <div
          onMouseDown={handleMouseDown}
          className="-z-10 absolute top-0 right-0 w-1 h-full cursor-col-resize bg-transparent hover:bg-gray-500 transition-colors"
        ></div>
      </div>

      <div
        ref={contentRef}
        className={` transition-all duration-300 ${
          hideSideBar ? "pl-0" : "pl-[210px]"
        } bg-[#1E1E1E] min-h-screen flex-1`}
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
