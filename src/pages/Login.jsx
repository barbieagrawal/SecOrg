import React, { useState } from 'react';
import Modal from 'react-modal';
import bgVideo from '../assets/cybersec-bg.mp4';
import Logo from '../assets/logo.png';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: "relative",
    inset: "auto",
    padding: "20px",
    borderRadius: "4px",
    background: "#fff",
    width: "90%",
    maxWidth: "500px",
    margin: "auto",
  },
};

const Login = ({ onLogin, isModalOpen, setIsModalOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [awaiting2FA, setAwaiting2FA] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
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
      const response = await fetch("/api/auth/register", {
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
      const response = await fetch("/api/auth/verify-2fa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, twoFactorCode }),
      });
      const data = await response.json();
      console.log('2FA Response:', data);
      
      if (data.token) {
        localStorage.setItem('token', data.token);
        onLogin(true);
        setIsModalOpen(false);
        setAwaiting2FA(false);
      } else {
        alert(data.message || 'Invalid 2FA code');
      }
    } catch (error) {
      console.error("Error:", error);
      alert('Failed to verify 2FA code');
    }
  };

  return (
    <div className='h-screen bg-black relative'>
      <video
        autoPlay
        loop 
        muted 
        className='fixed right-0 top-0 h-full w-full object-cover z-0'
      >
        <source src={bgVideo} type='video/mp4'/>
      </video>
      
      <div className="fixed inset-0 bg-black/50 z-10 flex flex-col items-center justify-center">
        <div className="text-white text-center space-y-8">
          <div className="flex flex-col items-center gap-4">
            <img src={Logo} alt="Secorg Logo" className="w-24" />
            <h1 className="text-4xl font-blackopsone">SECORG</h1>
          </div>
          <p className="font-montserrat max-w-md mx-auto">
            Please log in to access the security tools and resources.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-900 text-white px-8 py-3 rounded font-montserrat hover:bg-indigo-800 transition"
          >
            Login to Continue
          </button>
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
    </div>
  );
};

export default Login; 