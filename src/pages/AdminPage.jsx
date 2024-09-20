import { useQuery } from "@tanstack/react-query";
import CategoryForm from "components/templates/CategoryForm";
import CategoryList from "components/templates/CategoryList";
import { getCategory } from "services/admin";

function AdminPage() {
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
