import { Ellipsis, Hash } from "lucide-react";
import { useAppSelector } from "../../hook/useAppSelector";
import { useNavigate, useParams } from "react-router-dom";
import OptionProjectPopup from "../Popup/OptionProjectPopup";
import { useEffect, useState } from "react";

interface ProjectItem {
  id: number;
  projectName: string;
}

interface ProjectListProps {
  width: number;
}

function ProjectList({ width }: ProjectListProps) {
  const [isShowOptionProject, setIsShowOptionProject] = useState(false);
  const projectList = useAppSelector((state) => state.todoReducer.projectList);
  const isShowProjectList = useAppSelector(
    (state) => state.todoReducer.isShowProjectList
  );

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, [projectList.length]);

  const param = useParams();

  const handleNavigateDetailPr = (item: ProjectItem) => {
    navigate(`${item.projectName}/${item.id}`);
  };

  const handleEllipsis = () => {
    setIsShowOptionProject(true);
  };

  const getDisplayName = (item: ProjectItem) => {
    const fullName = item?.projectName;
    const visibleChars = Math.floor((width - 100) / 10);
    return fullName && fullName.length > visibleChars
      ? fullName.slice(0, visibleChars) + "..."
      : fullName;
  };
  return (
    <>
      <div
        className={`flex flex-col space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isShowProjectList ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {projectList &&
          projectList.map((item: ProjectItem) => (
            <div
              onClick={() => handleNavigateDetailPr(item)}
              className={`flex flex-row w-[92%] ml-3 ${
                param.id == item.id ? "selected-pr" : ""
              } ${
                !isShowOptionProject ? "hover:bg-[#322E2A]" : ""
              } justify-between items-center group rounded-sm`}
            >
              <div className={`flex pl-8 space-x-2  items-center  py-1`}>
                <Hash className="text-[white] w-4 opacity-55" />
                <div key={item?.id} className="text-[white] text-sm">
                  {getDisplayName(item)}
                </div>
              </div>
              <div className="">
                <Ellipsis
                  onClick={handleEllipsis}
                  className={`mr-1 text-[white] hidden  relative ${
                    !isShowOptionProject ? "group-hover:block" : ""
                  }`}
                />
                {isShowOptionProject && param.id == item.id && (
                  <OptionProjectPopup
                    isShowOptionProject={isShowOptionProject}
                    setIsShowOptionProject={setIsShowOptionProject}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProjectList;
