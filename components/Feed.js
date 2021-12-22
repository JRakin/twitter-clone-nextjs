import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../utils/firebaseConfig";
import Input from "./Input";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 sm:ml-[73px] max-w-4xl xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="margin-0 text-xl font-bold">Home</h2>
        <div className="hoverAnimation h-9 w-9 flex items-center justify-center xl:px-0 ml-auto">
          <FontAwesomeIcon icon={faStarOfLife} />
        </div>
      </div>
      <Input />
      <div className="pb-72">
        {posts && posts.length > 0
          ? posts.map((post) => (
              <Post key={post.id} id={post.id} post={post.data()} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Feed;
