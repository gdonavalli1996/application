import '../css/page/home.css'
import WidgetLg from '../components/WidgetLg';
import { Link } from "react-router-dom";
import '../css/page/user.css'

function Home() {
  return (
    <div className="home div-settings">
      <div className="userTitleContainer">
          <h2 className='div-settings-text'><b>Settings</b></h2>
          <Link to="/newUser">
            <button className="userCancelButton">Cancel</button>
            <button className="userAddButton">Save</button>
          </Link>
        </div>
      <div className="homeWidgets">
        <WidgetLg/>
      </div>
      <hr></hr>
      <div className="userTitleContainer">
          <h2 className='div-settings-text'><b>.</b></h2>
          <Link to="/newUser">
            <button className="userCancelButton">Cancel</button>
            <button className="userAddButton">Save</button>
          </Link>
        </div>
    </div>
  );
}

export default Home;