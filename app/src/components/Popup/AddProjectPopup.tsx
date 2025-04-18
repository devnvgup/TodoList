import { Hash } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { handleOpenPrPopup } from "../../redux/action.js";
import { useDispatch } from "react-redux";

interface AddProjectPopupProps {
  openPopup: boolean;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

function AddProjectPopup({ openPopup, setOpenPopup }: AddProjectPopupProps) {
  const popupRef = useRef(null);
  const dispatch = useDispatch();

  const handleOpenDetailPrPopup = () => {
    dispatch(handleOpenPrPopup());
    setOpenPopup(false);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpenPopup(false);
      }
    }

    if (openPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPopup, setOpenPopup]);

  if (!openPopup) return null;
  return (
    openPopup && (
      <div
        onClick={handleOpenDetailPrPopup}
        ref={popupRef}
        className="z-1 flex items-center space-x-3 flex-row px-5 py-2 bg-[#363636] rounded-sm w-[250px] border border-white/10 hover:opacity-55"
      >
        <Hash className="text-[white] w-4 opacity-55" />
        <div className="text-[white] text-sm">Add project</div>
      </div>
    )
  );
}

export default AddProjectPopup;
