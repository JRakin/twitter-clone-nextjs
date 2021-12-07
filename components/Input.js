import {
  faCalendar,
  faChartBar,
  faImage,
  faSmile,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { db, storage } from "../utils/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";

function Input() {
  const [valueInput, setValueInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePicker = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setValueInput(valueInput + emoji);
  };

  const addPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      text: valueInput,
      timestamp: serverTimestamp(),
    });
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  return (
    <div className="overflow-y-scroll scrollbar-hide border-gray-700 flex space-x-3 border-b">
      <div className="w-full divide-y divide-gray-700">
        <div
          className={`${selectedFile && "pb-7"} ${valueInput && "space-y-3"}`}
        >
          <textarea
            value={valueInput}
            className="w-full bg-transparent scrollbar-hide outline-none text-[#d9d9d9] text-lg tracking-wide p-2 min-h-[50px]"
            rows="3"
            onChange={(e) => setValueInput(e.target.value)}
            placeholder="what's happening?"
          />
          {selectedFile && (
            <div className="relative p-2">
              <div
                onClick={() => {
                  return setSelectedFile(null);
                  //   filePicker.current = null;
                }}
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex justify-center items-center top-2 left-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} className="text-white" />
              </div>
              <img
                src={selectedFile}
                alt="hello"
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <div className="icon">
              <FontAwesomeIcon
                onClick={() => filePicker.current.click()}
                icon={faImage}
                className="text-[22px] text-[#1d9bf0] cursor-pointer"
              />
              <input
                type="file"
                hidden
                onChange={(e) => addImageToPost(e)}
                ref={filePicker}
              />
            </div>
            <div className="icon -rotate-90">
              <FontAwesomeIcon
                icon={faChartBar}
                className="text-[22px] text-[#1d9bf0] cursor-pointer"
              />
            </div>
            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <FontAwesomeIcon
                icon={faSmile}
                className="text-[22px] text-[#1d9bf0] cursor-pointer"
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-[22px] text-[#1d9bf0] cursor-pointer"
              />
            </div>

            {showEmojis && (
              <Picker
                showSkinTones={false}
                showPreview={false}
                set="twitter"
                onSelect={addEmoji}
                style={{
                  position: "absolute",
                  marginTop: "465px",
                  marginLeft: "-40",
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
              />
            )}
          </div>
          <button
            disabled={!valueInput.trim() && !selectedFile}
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
