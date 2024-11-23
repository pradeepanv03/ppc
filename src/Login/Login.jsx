
import React, { useState, useEffect } from 'react';
import './style.css';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  
import { useNavigate } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import "../Login/style.css"
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);  // Set countdown time (30 seconds)
  const [timerActive, setTimerActive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const defaultOtp = '1234';
  const defaultCaptcha = 'ABcd'; 

  useEffect(() => {
    if (timerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timer === 0) {
      toast.error('Session expired. Please resend the OTP.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: resetForm 
      });
      setOtpSent(false); 
      setTimerActive(false); 
    }
  }, [timer, timerActive]);

  const sendOtp = () => {
    if (phoneNumber.length === 10) {
      setLoading(true);
      setErrorMessage('');
      setOtpSent(true);
      setTimer(30);  // Reset timer when OTP is sent
      setTimerActive(true);
      toast.success('OTP sent successfully.', {
        position: "top-right",
        autoClose: 3000,  
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else {
      setErrorMessage('Please enter a valid 10-digit phone number.');
    }
  };

  const verifyOtp = () => {
    if (otp === defaultOtp && captcha === defaultCaptcha) {
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      
      setShowPopup(true);
    } else {
      toast.error('Invalid OTP or CAPTCHA. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  const handleAddProduct = () => {
    toast.info('Redirecting to Add Product page...', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
    setShowPopup(false); 
    navigate('/propertyform');
  };

  const handleDismiss = () => {
    setShowPopup(false);
    resetForm();
  };

  const resetForm = () => {
    setPhoneNumber('');
    setOtp('');
    setCaptcha('');
    setErrorMessage('');
    setOtpSent(false);
    setTimer(30);
    setTimerActive(false);
  };

  return (
    <>
    <Header />
    <div className='login'>
    <div className="background-container">
      <div style={{ position: 'relative', zIndex: 1, padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}>
        <h2> <strong> Login</strong></h2>
        {!otpSent ? (
          <>
            <div className="form-group">
              <label  htmlFor="phoneNumber"> <strong>  Phone Number </strong></label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength="10"
                placeholder="Enter your phone number"
              />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button className="btn-primary" onClick={sendOtp}>SEND OTP</button>
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="4"
                placeholder="Enter OTP"
              />
            </div>
            <div className="form-group">
              <label  htmlFor="captcha">CAPTCHA: </label>
              <div className='mt-4'>
                <strong className='text-success p-3 bg-light'>{defaultCaptcha}</strong>
              </div>
              <input
                type="text"
                id="captcha"
                className='mt-4'
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                placeholder="Enter CAPTCHA"
              />
            </div>
            <div className="timer-display">
              {timerActive ? `Time left: ${timer}s` : 'OTP expired, please resend.'}
            </div>
            <button className="btn-primary" onClick={verifyOtp}>Verify OTP</button>
            <button className="reset-btn" onClick={resetForm}>Reset</button>
          </>
        )}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Login Successful!</h3>
            <p>What would you like to do next?</p>
            <div className="popup-buttons">
              <button className="btn btn-warning" onClick={handleAddProduct}>Add Property</button>
              <button className="btn btn-danger" onClick={handleDismiss}>Dismiss</button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;












