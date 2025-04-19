import React from "react";
import { useParams } from "react-router-dom";

function ContentDetail() {
  const params = useParams();
  return (
    <div className="flex flex-col">
      <div className="text-[white] p-3 text-[12px] opacity-70">
        My Projects /
      </div>
      <h1 className="flex justify-center text-[white] text-[26px]">
        {params?.projectName}
      </h1>
    </div>
  );
}

export default ContentDetail;
