import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";

function Feed() {
  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 sm:ml-[73px] max-w-4xl xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="margin-0 text-xl font-bold">Home</h2>
        <div className="hoverAnimation h-9 w-9 flex items-center justify-center xl:px-0 ml-auto">
          <FontAwesomeIcon icon={faStarOfLife} />
        </div>
      </div>
      <Input />
    </div>
  );
}

export default Feed;
