import React, { useState } from "react";
import Modal from "react-modal";
import Logo from "../../assets/logo.png";

Modal.setAppElement("#root"); // Assuming your root element has an ID of 'root'
// ... existing code ...

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 9999, // Increased z-index
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: "relative",
    inset: "auto", // This replaces top, left, right, bottom
    padding: "20px",
    borderRadius: "4px",
    background: "#fff",
    width: "90%",
    maxWidth: "500px",
    margin: "auto",
  },
};

const Navbar = ({ isAuthenticated, setIsAuthenticated, isModalOpen, setIsModalOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [awaiting2FA, setAwaiting2FA] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.text();
      alert(data);
      setAwaiting2FA(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      alert("Registration successful!");
      setIsRegistering(false);
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed");
    }
  };

  const handle2FAVerification = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/verify-2fa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, twoFactorCode }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setIsAuthenticated(true);
        setIsModalOpen(false);
        setAwaiting2FA(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex text-white items-center gap-4 font-bold text-2xl">
              <img src={Logo} alt="" className="w-12" />
              <span className="font-blackopsone">SECORG</span>
            </div>
            <div className="text-white hidden md:block font-montserrat">
              <ul className="flex items-center gap-10 text-l py-4">
                <li>
                  <a href="#about-us">ABOUT US</a>
                </li>
                <li>
                  <a href="#our-mission">OUR MISSION</a>
                </li>
                <li>
                  <a href="#tools">TOOLS</a>
                </li>
                <li>
                  <a href="#contact-us">REACH OUT</a>
                </li>
              </ul>
            </div>
            <div>
              {isAuthenticated ? (
                <button 
                  onClick={() => setIsAuthenticated(false)} 
                  className='text-white border-2 font-montserrat border-indigo-900 text-l px-3 py-1 transition duration-200 ease-in-out hover:bg-gray-800 hover:backdrop-blur-md'
                >
                  Logout
                </button>
              ) : (
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  className='text-white border-2 font-montserrat border-indigo-900 text-l px-3 py-1 transition duration-200 ease-in-out hover:bg-gray-800 hover:backdrop-blur-md'
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
          setIsRegistering(false);
          setAwaiting2FA(false);
        }}
        contentLabel="Login Modal"
        style={customStyles}
      >
        {!awaiting2FA ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">
              {isRegistering ? "Register" : "Login"}
            </h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="p-2 border rounded"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-2 border rounded"
            />
            {isRegistering && (
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="p-2 border rounded"
              />
            )}
            <button
              onClick={isRegistering ? handleRegister : handleLogin}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {isRegistering ? "Register" : "Login"}
            </button>
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-blue-500 hover:underline"
            >
              {isRegistering
                ? "Already have an account? Login"
                : "Need an account? Register"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Enter 2FA Code</h2>
            <p className="text-gray-600">
              Please check your email for the 2FA code
            </p>
            <input
              type="text"
              value={twoFactorCode}
              onChange={(e) => setTwoFactorCode(e.target.value)}
              placeholder="Enter 6-digit code"
              className="p-2 border rounded"
              maxLength="6"
            />
            <button
              onClick={handle2FAVerification}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Verify Code
            </button>
          </div>
        )}
      </Modal>

      {!isAuthenticated && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl mb-4">Please log in to access the site</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
