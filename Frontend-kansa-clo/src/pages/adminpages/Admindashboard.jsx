import { useNavigate } from "react-router-dom";

function Admindashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <button onClick={handleLogout} className="primary-btn">
        Logout
      </button>
    </div>
  );
}

export default Admindashboard;