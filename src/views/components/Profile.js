import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png';

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <img src={Logo} />
        </div>
        <h2>Hello, I'm Nhan </h2>
      </div>
    )
  }
}
export default Profile;