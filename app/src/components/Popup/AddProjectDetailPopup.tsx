import { CircleX } from "lucide-react";
import { ChangeEvent, useState } from "react";

function AddProjectDetailPopup() {
  const [lengthInput, setLengthInput] = useState(0);

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
    }
    setLengthInput(l);
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 ">
      <div className="bg-[#1E1E1E] rounded-xl shadow-xl w-[400px] text-[white]">
        <div className="flex flex-row justify-between items-center p-3">
          <div className="text-[16px]">Add project</div>
          <CircleX className="[line-height:48px]" />
        </div>
        <div className="border-b border-white/20" />
        <div className="p-3">
          <div className="mb-2">Name</div>
          <input
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
          <button className="bg-[#3D3D3D] px-4 py-1 w-[80px] rounded-sm">
            Cancel
          </button>
          <button
            disabled={true}
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
