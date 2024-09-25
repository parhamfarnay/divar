import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import { getAllPosts } from "/services/user";
import { LoaderIcon } from "react-hot-toast";

function HomePage() {
  const { data: posts, isloading: postLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isloading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );
  const style = { display: "flex" };
  return (
    <>
      {postLoading || categoryLoading ? (
        <LoaderIcon />
      ) : (
        <div style={style}>
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
