import React, { useState, useRef } from "react";
import "./components/header/header.css";
import headerNotification from "./components/header/img/notifications.svg";
import Cancel from "./components/header/img/cancel.png";
import { signUp, logOut, useAuth } from "./firebase-config";
import Avatar from "./Avatar.jpg"
import {Link} from "react-router-dom"

export default function AuthPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  async function handleSignUp() {
    try {
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("error");
    }
    setLoading(false);
  }
  async function handleLogOut() {
    setLoading(true);
    try {
      await logOut();
    } catch {
      alert("error");
    }
    setLoading(false);
    window.location.reload();
  }

  return (
    <div className="header">

      <div className="header-reg-panel">
        <button className="header-notification-btn">
          <img
            src={headerNotification}
            className="header-notification"
            alt="notification"
          />
        </button>
        <span className="header-notification-count">1</span>
        {!currentUser && (
          <button className="header-login" onClick={() => setIsOpen(true)}>
            Войти
          </button>
        )}
        <div className="user-profile">
          {currentUser && (
            <button
              className="user-profile__btn"
              onClick={() => setProfileOpen(true)}
            >
              <img
                className="user-profile__img"
                src={Avatar}
                alt="user profile"
              />
            </button>
          )}
          <div className={`user-profile__dash ${profileOpen ? "visible" : ""}`}>
          <Link to="/create-post">
            <button className="user-profile__create">Написать публикацию</button>
          </Link>
          <button className="user-profile__saved">Избранные</button>
            <button className="user-profile__out" onClick={handleLogOut}>
                 Выйти
            </button>
          </div>
        </div>
        {/*Modal */}
        <div className={`modal ${isOpen ? "visible" : ""}`}>
          <button className="modal-close" onClick={() => setIsOpen(false)}>
            <img src={Cancel} alt="cancel svg" width="22px" height="22px" />
          </button>
          <h3 className="modal-title">Вход на udevs news</h3>

          <form className="modal-form" onSubmit={signUp}>
            <input
              className="modal-email"
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              className="modal-password"
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <button
              disabled={loading}
              className="modal-submit"
              type="submit"
              onClick={handleSignUp}
            >
              Войти
            </button>
          </form>
        </div>
        {isOpen && <div className="overlay"></div>}
      </div>
    </div>
  );
}
