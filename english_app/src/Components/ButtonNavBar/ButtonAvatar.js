/** @format */
import { DropDownButton } from "@progress/kendo-react-buttons";
import { Popup } from "@progress/kendo-react-popup";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLogout } from "../../Creators/UserCreator";
import Apis, { endpoints } from "../../config/Apis";
import cookies from "react-cookies";
import { useNavigate } from "react-router-dom";
import DropDownCustom from "../DropDown/DropDownCustom";
export default function ButtonAvatar() {
  const navigate = useNavigate();
  const anchor = useRef(null);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const image = user !== null && user !== undefined ? user.avatar : "";
  const items = [
    { action: () => profileHandle(), displayName: "Profile", icon: "k-i-info" },
    { action: () => logoutHandle(), displayName: "Logout", icon: "k-i-logout" },
  ];

  const onClick = () => {
    setShow(!show);
  };
  const logoutHandle = async () => {
    try {
      await Apis.get(endpoints["logout"], {
        headers: {
          Authorization: `Bearer ${cookies.load("access-token")}`,
        },
      });
      dispatch(UserLogout());
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch(UserLogout());
      navigate("/");
    }
  };
  const profileHandle = () => {
    navigate("/profile");
  };
  return (
    <div
      className="SiteAvatar TopNavigationItem RightNavigationItem"
      onClick={onClick}
    >
      <div>
        <div id="react-aria6806590017-26" className="Avatar" ref={anchor}>
          <img
            alt="Ảnh hồ sơ"
            className="AssemblyAvatar"
            src={image}
            style={{
              backgroundImage: `url(${image})`,
              height: "40px",
              width: "40px",
            }}
          />
          {show ? (
            <DropDownCustom show={show} items={items} marginLeft="-150px" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
