import AuthGuard from "../../authGuard/authGuard";

const dashboardAdmin = () => {
  return <div>dashboardAdmin</div>;
};

export default AuthGuard(dashboardAdmin) ;
