import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { showNotification } from "../utils/notification";

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      showNotification("success", "Logged Out Successfully");
    } catch (error: any) {
      console.error("Error logging out:", error);
      showNotification("error", "Logout Failed", error.message);
    }
  };
  return (
    <header className="flex justify-between p-6">
      <Title level={4}>MoonCreations</Title>
      <nav>
        <ul className="flex">
          <li>
            <Link to="/">
              <Button type="text">Home</Button>
            </Link>
          </li>
          {!user && (
            <div className="flex">
              <li>
                <Link to="/login">
                  <Button type="text">Login</Button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <Button type="text">Register</Button>
                </Link>
              </li>
            </div>
          )}
          {user && (
            <div className="flex">
              <li>
                <Link to="/profile">
                  <Button type="text">Profile</Button>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>
                  <Button type="text">Logout</Button>
                </button>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
