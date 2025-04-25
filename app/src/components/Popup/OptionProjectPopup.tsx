import {
  ArrowDownFromLine,
  ArrowUpFromLine,
  CopyPlus,
  Edit,
  Trash2,
} from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  handleOpenPrPopup,
  handleChangeOneFlagTrue,
  handleDuplicatePR,
  handleDeleteProject,
} from "../../redux/action.js";

interface OptionProjectPopupProps {
  isShowOptionProject: boolean;
  setIsShowOptionProject: Dispatch<SetStateAction<boolean>>;
}

function OptionProjectPopup({
  isShowOptionProject,
  setIsShowOptionProject,
}: OptionProjectPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsShowOptionProject(false);
      }
    }

    if (isShowOptionProject) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowOptionProject, setIsShowOptionProject]);

  if (!isShowOptionProject) return null;

  const handleAddProjectAbove = () => {
    setIsShowOptionProject(false);
    const payload = "isAddAboveOption";
    dispatch(handleOpenPrPopup());
    dispatch(handleChangeOneFlagTrue(payload));
  };

  const handleAddProjectBelow = () => {
    setIsShowOptionProject(false);
    const payload = "isAddBelowOption";
    dispatch(handleOpenPrPopup());
    dispatch(handleChangeOneFlagTrue(payload));
  };

  const handleEdit = () => {
    setIsShowOptionProject(false);
    dispatch(handleOpenPrPopup());
    const payload = "isEditOption";
    dispatch(handleChangeOneFlagTrue(payload));
  };

  const handleDuplicateProject = () => {
    setIsShowOptionProject(false);
    const payload = {
      currentId: params.id,
      data: {
        id: Math.random(),
        projectName: `Copy of ${params.projectName}`,
      },
    };
    dispatch(handleDuplicatePR(payload));
    dispatch(handleChangeOneFlagTrue(payload));
  };

  const handleDeleted = () => {
    setIsShowOptionProject(false);
    dispatch(handleDeleteProject(params.id));
  };
  return (
    <div
      ref={popupRef}
      className="flex flex-col w-[250px] bg-[#363636] absolute rounded-xl p-3 text-[white] space-y-3 text-[12px] left-50"
    >
      <div
        onClick={handleAddProjectAbove}
        className="flex flex-row space-y-1 space-x-2 items-center hover:opacity-20"
      >
        <ArrowUpFromLine width={17} />
        <div>Add project above</div>
      </div>

      <div
        onClick={handleAddProjectBelow}
        className="flex flex-row space-y-1 space-x-2 items-center hover:opacity-20"
      >
        <ArrowDownFromLine width={17} />
        <div>Add project below</div>
      </div>
      <div className="border-b border-white/20" />
      <div
        onClick={handleEdit}
        className="flex flex-row space-y-1 space-x-2 items-center hover:opacity-20"
      >
        <Edit width={17} />
        <div>Edit</div>
      </div>
      <div
        onClick={handleDuplicateProject}
        className="flex flex-row space-y-1 space-x-2 items-center hover:opacity-20"
      >
        <CopyPlus width={17} />
        <div>Duplicate</div>
      </div>
      <div
        onClick={handleDeleted}
        className="flex flex-row space-y-1 space-x-2 items-center text-[#D35D52] hover:opacity-20"
      >
        <Trash2 width={17} />
        <div>Delete</div>
      </div>
    </div>
  );
}

export default OptionProjectPopup;
