import { CircleX } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleClosePrPopup,
  handleAddProject,
  handleAddPrAbove,
  handleChangeAllFlagFalse,
  handleEditPR,
  handleAddPrBelow,
} from "../../redux/action.ts";
import { useAppSelector } from "../../hook/useAppSelector.js";
import { useNavigate, useLocation } from "react-router-dom";

function AddProjectDetailPopup() {
  const [lengthInput, setLengthInput] = useState(0);
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const addBtnRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const isAddAbove = useAppSelector(
    (state) => state.todoReducer.isAddAboveOption
  );

  const isAddBelow = useAppSelector(
    (state) => state.todoReducer.isAddBelowOption
  );

  const isEdit = useAppSelector((state) => state.todoReducer.isEditOption);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e?.target?.value.toString();
    const l = val.length;
    const input = document.querySelector(".input-detail") as HTMLElement;
    if (input) {
      if (l >= 120) {
        input.style.color = "#d0453a";
      } else {
        input.style.color = "white";
      }
      setVal(val);
    }
    setLengthInput(l);
  };

  const handleCloseDetailPopup = () => {
    dispatch(handleClosePrPopup());
    dispatch(handleChangeAllFlagFalse());
  };

  useEffect(() => {
    if (lengthInput >= 120 || !lengthInput) {
      if (addBtnRef) {
        addBtnRef.current?.classList.add("my-disabled");
      }
    } else {
      addBtnRef.current?.classList.remove("my-disabled");
    }
  }, [lengthInput]);

  const pathSegments = location.pathname.split("/"); // ['', 'project', '123']
  const id = pathSegments[3]; // lấy index phù hợp

  const handleAddPr = () => {
    let payload;
    if (isAddAbove) {
      payload = {
        currentId: id,
        data: {
          id: Math.random(),
          projectName: val,
        },
      };
      dispatch(handleAddPrAbove(payload));
    } else if (isAddBelow) {
      payload = {
        currentId: id,
        data: {
          id: Math.random(),
          projectName: val,
        },
      };
      dispatch(handleAddPrBelow(payload));
    } else if (isEdit) {
      payload = {
        currentId: id,
        data: {
          projectName: val,
        },
      };
      dispatch(handleEditPR(payload));
    } else {
      payload = {
        id: Math.random(),
        projectName: val,
      };
      dispatch(handleAddProject(payload));
    }
    dispatch(handleChangeAllFlagFalse());
    dispatch(handleClosePrPopup());
    setTimeout(() => {
      navigate(`home/${val}/${payload.id}`);
    }, 0);
  };

  const getDefaultValue = () => {
    if (isEdit) return pathSegments[2];
    return "";
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 ">
      <div className="bg-[#1E1E1E] rounded-xl shadow-xl w-[400px] text-[white]">
        <div className="flex flex-row justify-between items-center p-3">
          <div className="text-[16px]">{isEdit ? "Edit" : "Add project"}</div>
          <CircleX onClick={handleCloseDetailPopup} />
        </div>
        <div className="border-b border-white/20" />
        <div className="p-3">
          <div className="mb-2">Name</div>
          <input
            defaultValue={getDefaultValue()}
            onChange={handleChange}
            maxLength={120}
            type="text"
            className="rounded-sm w-full border border-[#707070] focus:outline-none pb-1 px-3"
          />
          <div className="flex justify-end text-[13px] mt-1 input-detail">
            {lengthInput}/120
          </div>
        </div>
        <div className="border-b border-white/20" />
        <div className="flex flex-row p-3 space-x-3 justify-end">
          <button
            onClick={handleCloseDetailPopup}
            className="bg-[#3D3D3D] px-4 py-1 w-[80px] rounded-sm"
          >
            Cancel
          </button>
          <button
            ref={addBtnRef}
            onClick={handleAddPr}
            className="bg-[#4C2827] w-[80px] px-4 py-1 rounded-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProjectDetailPopup;
