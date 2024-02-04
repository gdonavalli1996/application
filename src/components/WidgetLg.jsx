import '../css/component/widgetLg.css'
import { Link } from "react-router-dom";
import '../css/page/user.css'
import CustomTabs from './CustomTabs';

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <>
    <div className="widgetLg">
      <div className="user">
        <div className="userTitleContainer">
          <CustomTabs />
        </div>
      </div>
    </div></>
  );
}

export default WidgetLg;