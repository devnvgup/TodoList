import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import AddProjectPopup from "../Popup/AddProjectPopup";
import { useAppSelector } from "../../hook/useAppSelector";
import { useDispatch } from "react-redux";
import {
  handleHideProjectList,
  handleShowProjectList,
} from "../../redux/action.ts";

function MyProject() {
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();

  const isShowProjectList = useAppSelector(
    (state) => state.todoReducer.isShowProjectList
  );
  const handleShowHidePr = () => {
    if (isShowProjectList) {
      dispatch(handleHideProjectList());
    } else {
      dispatch(handleShowProjectList());
    }
  };

  return (
    <>
      <div className="relative group pl-6 p-2 flex flex-row justify-between items-center hover:bg-[rgb(49,47,42)]">
        <div className="text-[#CCCCCC] text-sm font-system ">My Projects</div>
        <div className="flex flex-row gap-x-1">
          <Plus
            className="text-[white] opacity-50 w-5 block"
            onClick={() => setOpenPopup(!openPopup)}
          />
          <div className="absolute top-10">
            <AddProjectPopup
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            />
          </div>
          <ChevronDown
            onClick={handleShowHidePr}
            className={`text-[white] opacity-50 w-5 transition-transform duration-300 ${
              isShowProjectList ? "rotate-0" : "-rotate-90"
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default MyProject;
