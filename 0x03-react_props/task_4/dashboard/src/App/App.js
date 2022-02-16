import PropTypes from 'prop-types';
import React from "react";
import "./App.css";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";

function App({ isLoggedIn }) {
  return (
    <div className="App_">
      <Notifications />
      <div className='App-container'>
        <div className='App'>
          <Header />
        </div>
        <div className='App-body'>
          {!isLoggedIn ? <Login /> : <CourseList />}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
