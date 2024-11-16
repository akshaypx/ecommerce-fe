import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Landing Page  */}
          <Route path="/" element={<Home />} />
          {/* Login Page  */}
          <Route path="/login" element={<Login />} />
          {/* Register Page  */}
          <Route path="/register" element={<Register />} />
          {/* Protected Profile Page  */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Protected Route component
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default App;
