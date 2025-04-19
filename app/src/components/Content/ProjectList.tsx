import { Ellipsis, Hash } from "lucide-react";
import { useAppSelector } from "../../hook/useAppSelector";
import { useNavigate, useParams } from "react-router-dom";

interface ProjectItem {
  id: number;
  projectName: string;
}

interface ProjectListProps {
  width: number;
}

function ProjectList({ width }: ProjectListProps) {
  const projectList = useAppSelector((state) => state.todoReducer.projectList);

  const navigate = useNavigate();
  const param = useParams();

  const handleNavigateDetailPr = (item: ProjectItem) => {
    navigate(`${item.projectName}/${item.id}`);
  };

  const handleEllipsis = () => {};

  const getDisplayName = (item: ProjectItem) => {
    const fullName = item?.projectName;
    const visibleChars = Math.floor(width / 10);
    return fullName && fullName.length > visibleChars
      ? fullName.slice(0, visibleChars) + "..."
      : fullName;
  };
  return (
    <div className="flex flex-col space-y-2">
      {projectList &&
        projectList.map((item: ProjectItem) => (
          <div
            onClick={() => handleNavigateDetailPr(item)}
            className={`flex flex-row w-[92%] ml-3 ${
              param.id == item.id ? "selected-pr" : ""
            } hover:bg-[#322E2A] justify-between items-center group rounded-sm`}
          >
            <div className={`flex pl-8 space-x-2  items-center  py-1 `}>
              <Hash className="text-[white] w-4 opacity-55" />
              <div key={item?.id} className="text-[white] text-sm">
                {getDisplayName(item)}
              </div>
            </div>
            <Ellipsis
              onClick={handleEllipsis}
              className="mr-1 text-[white] hidden group-hover:block"
            />
          </div>
        ))}
    </div>
  );
}

export default ProjectList;
