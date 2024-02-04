import '../css/component/sidebar.css'

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Settings,
  HelpOutline,
  Lightbulb,
  GroupAddOutlined,
  GroupOutlined,
  FolderOpenOutlined,
  FolderOutlined,
  StarOutlineSharp,
  ChatOutlined,
  HomeOutlined,
  ListOutlined,
  LocalOfferOutlined,
  EmojiEmotionsOutlined,
  EmojiObjectsOutlined
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <HomeOutlined className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <ListOutlined className="sidebarIcon" />
                Orders
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <LocalOfferOutlined className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem ">
                <FolderOutlined className="sidebarIcon" />
                Categories
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <GroupOutlined className="sidebarIcon" />
                Customers
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <StarOutlineSharp className="sidebarIcon" />
                Coupons
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
              <ChatOutlined className="sidebarIcon" />
                Inbox
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Other Information</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              Knowledge Base
            </li>
            <li className="sidebarListItem">
              <EmojiObjectsOutlined className="sidebarIcon" />
              Product Updates
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Settingss</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Personal Settings
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Global Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;