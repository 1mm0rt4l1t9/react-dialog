import React from 'react';
import UserInfo from "./UserInfo";
import Theme from "./Theme";

import "./styles.css";

const index = () => {
  return (
    <div className="header">
      <UserInfo />
      <Theme />
    </div>
  )
}

export default index
