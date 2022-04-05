import CreatePost from "@/client/feed/CreatePost";

const Feed = (props) => {
  return (
    <div className="flex gap-2 flex-1 items-start">
      <CreatePost />
    </div>
  );
};

export default Feed;
