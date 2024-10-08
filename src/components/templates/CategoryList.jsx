import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import styles from "./CategoryList.module.css";
import { LoaderIcon } from "react-hot-toast";

function CategoryList() {
  const { data, isloading } = useQuery(["get-categories"], getCategory);

  return (
    <div className={styles.list}>
      {isloading ? (
        <LoaderIcon />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>slug:{i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
