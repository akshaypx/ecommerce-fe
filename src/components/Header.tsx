import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button, Drawer } from "antd";
import Title from "antd/es/typography/Title";
import { showNotification } from "../utils/notification";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      showNotification("success", "Logged Out Successfully");
    } catch (error: any) {
      console.error("Error logging out:", error);
      showNotification("error", "Logout Failed", error.message);
    }
    onClose();
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="h-[10vh]">
      <div className="max-w-[900px] flex justify-between m-auto p-6">
        <Drawer
          placement={"left"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"left"}
        >
          <nav className="w-full text-center">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" onClick={() => onClose()}>
                  <Button className="w-full" type="text">
                    Home
                  </Button>
                </Link>
              </li>
              {!user && (
                <div className="flex flex-col gap-4">
                  <li>
                    <Link to="/login" onClick={() => onClose()}>
                      <Button className="w-full" type="text">
                        Login
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" onClick={() => onClose()}>
                      <Button className="w-full" type="text">
                        Register
                      </Button>
                    </Link>
                  </li>
                </div>
              )}
              {user && (
                <div className="flex flex-col gap-4">
                  <li>
                    <Link to="/profile" onClick={() => onClose()}>
                      <Button className="w-full" type="text">
                        Profile
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Button
                      className="w-full"
                      type="text"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </li>
                </div>
              )}
            </ul>
          </nav>
        </Drawer>
        <Title level={4}>MoonCreations</Title>
        <Button className="md:hidden" type="default" onClick={showDrawer}>
          <Menu />
        </Button>
        <nav className="hidden md:flex">
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
      </div>
    </header>
  );
};

export default Header;
