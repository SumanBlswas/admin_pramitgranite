import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AddProducts from "../pages/AddProducts";
import Admins from "../pages/Admins";
import CreateAccount from "../pages/CreateAccount";
import Stuffs from "../pages/Stuffs";
import Account from "../pages/Account";
import Login from "../components/Login";

const AllRoute = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Dashboard />} />
      <Route path={"/add_products"} element={<AddProducts />} />
      <Route path={"/admins"} element={<Admins />} />
      <Route path={"/products"} element={<Dashboard />} />
      <Route
        path={"/create_account_by_pro_admins"}
        element={<CreateAccount />}
      />
      <Route path={"/stuffs"} element={<Stuffs />} />
      <Route path={"/account"} element={<Account />} />
      <Route path={"/sign_up"} element={<Login />} />
    </Routes>
  );
};

export default AllRoute;
