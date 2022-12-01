/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import Addproduct from "../../pages/Addproduct";
import Products from "../../pages/Products";

// import logo from "../../assets/images/logo.png";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill={color}
      ></path>
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill={color}
      ></path>
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const tables = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const billing = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
        fill={color}
      ></path>
    </svg>,
  ];

  // const rtl = [
  //   <svg
  //     width="20"
  //     height="20"
  //     viewBox="0 0 20 20"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     key={0}
  //   >
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M3 6C3 4.34315 4.34315 3 6 3H16C16.3788 3 16.725 3.214 16.8944 3.55279C17.0638 3.89157 17.0273 4.29698 16.8 4.6L14.25 8L16.8 11.4C17.0273 11.703 17.0638 12.1084 16.8944 12.4472C16.725 12.786 16.3788 13 16 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V6Z"
  //       fill={color}
  //     ></path>
  //   </svg>,
  // ];

  const profile = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
        fill={color}
      ></path>
    </svg>,
  ];


  // const signin = [
  //   <svg
  //     width="20"
  //     height="20"
  //     viewBox="0 0 20 20"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     key={0}
  //   >
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
  //       fill={color}
  //     ></path>
  //   </svg>,
  // ];

  // const signup = [
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="14"
  //     height="14"
  //     viewBox="0 0 14 14"
  //     key={0}
  //   >
  //     <path
  //       d="M0,2A2,2,0,0,1,2,0H8a2,2,0,0,1,2,2V8a2,2,0,0,1-2,2H2A2,2,0,0,1,0,8Z"
  //       transform="translate(4 4)"
  //       fill={color}
  //     />
  //     <path
  //       d="M2,0A2,2,0,0,0,0,2V8a2,2,0,0,0,2,2V4A2,2,0,0,1,4,2h6A2,2,0,0,0,8,0Z"
  //       fill={color}
  //     />
  //   </svg>,
  // ];

  return (
    <>
      <div className="brand">
        {/* <img src={logo} alt="" /> */}
        {/* <span>Muse Dashboard</span> */}
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span
              className="icon"
              style={{
                background: page === "dashboard" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/tables">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {tables}
            </span>
            <span className="label">Transactions</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/billing">
            <span
              className="icon"
              style={{
                background: page === "billing" ? color : "",
              }}
            >
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAB+ElEQVQ4je2UsWpUURCG/3/u3V2RQExcJTGIhaVgXsNKsPEBJIVcjhuzbyHCJsJNipDOzkYRIVr5ChHRziIqRnDdZDWE7O6981t4ld31xjR25m/mnJk5HzMDc4ATFeK4I03Ts5E0L8ncbCeE8KbsYZqmV8x9lqRXBoOthWazMxy34ctGqzVN6Y6iqIs43gWw/5ei9hHHu4qi7mG1urjRak0PB+PhS69WmwfwJEmSrWM6RQhhG8A2AKyurubF25elYElmZl60ekPSAcmrJF8DuEX3p07SpLbIewLuhxAeknR3H+l+BBy77/TdvwGAAecEdAlckPt7ABedrJOkAyBwmWQdALIs61SB7Ejw7Ubj7XEjKFOj0fg47rOyxH+hE/BvjWze8vLymVqlchMAHDhNSQBqIvskJyl9BwBJOcnzAL6iWKLeYPBoaWlpr7TiOI5nRG4mIawbcADgM8lZSjtwv+aAi5TIjoC7IpWEsJ5LzyqVytwwawRMco7kVFHxFwf2HPgEsy7MPpjUltQ2qQ3gnX5aRFFUBzAzUuQY2CUZAIQQHhfuF4V9PjbGzV8HSVbsTTm41uu9OqxWF9fW1iIAcPd28Sf8oTRNL5lZvci7bmYrR45iodnsnOr3HzDPJ5FlUwAmyqCFJpBlU8zzSTNbSZJk9y+5/7N+AKr42KQFYtlaAAAAAElFTkSuQmCC" />
            </span>
            <span className="label">Barcode Pay</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="9">
          <NavLink to="/Addproduct">
            <span
              className="icon"
              style={{
                background: page === "Addproduct" ? color : "",
              }}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAACvElEQVQ4jcWUT4hNURzHP7/z7pjRvJ6dZqVkgY2ZKAspGUUmLGRu71xTlmZBNtRE8kIMRTYSS8279zgLNZNu/kXC7MifBVOUhYWX1bwFkbk/C/fpmZmXJ8p3dTr3+/2c87vn/A78bznnep1zve36g7bJqnfy0eJ27KZt8B/qF7D3fnmapp1/CknTtNN7v7x5TgB8HK9XkUMK2xC5WSqVdg4MDHzx1WrfjDFbcuNRAIUTAIUsuxXu3v0sTdPOer1+HdWtiNwwWXY2jKJHxjk3kYk8VNgBvAXGa7WaANDR8VJU+wRGgW6gW2BUVPvo6HgJUKvVhCybAN6guj0TeeicmzBABZgGQPVcuVy+0tXVtdLF8clisRiYIBhC1f2sUdWZIBgqFotBkiQnuhcsWFGOossC53PHNFARgCRJ1gncBhYqTAqsz01Xytbu9d4Xsm/fxgBMEAyFYTiTJMklgWFAFR4LrAM+K2y21k4aAGvtpKgOAyaHqsLIdL2+DyAMwxkTBEMNKEBPT89+hUOA5hkjqsPW2slfbkUm8r75UAWOLyqVqr5aXduAN6DOud7ahw8XBY63YsxpEAUPvMrLHMyMGXRxfF9FLuQ7OaCq/bm9pnAWWCkQNnPmNIiBj9baiikUliCyB3iByEaBcYFxhX7gOSJ7TaGw1FpbMfBxNqdlS4dh+BW4ClyN47jfiEwAZKo7oii61yrXcsfzKQd9Aj61A50XrNB/rVrd0k5YVcU5t1Vh0+xvzb/iHSJPUF2jxtx0SfJU4fTU1NT1SqWSNYe894UsywavOTcC/HhKf2TfNTwyeyXn3GZVPSywIZ96rXBG4FweOKJwEFiWV/hARE6Vy+XbzZw54KYFVqM6Auya16d6V0WONRpitlqCG4rjeJWIjAgMAqLgVXU0iqIXv8u2pbGxsZL3ftE/gf2NvgN6pBsx/sQcogAAAABJRU5ErkJggg==" />
            </span>
            <span className="label">Add Product</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="10">
          <NavLink to="/Products">
            <span
              className="icon"
              style={{
                background: page === "Products" ? color : "",
              }}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACFklEQVQ4jcWSP2gUURCHv3lviXK5nFioIEgiYiNpxCaFFgpilSbonpvEQhCbNGLAoE0ujSEoKURSWK572c2iNtFgmmhnISJIuN5CUPyHkpjC3R2L3IXNmcNECf6qmXnz+94M78H/UBAEpSAISpvpNZuBOdbOO46zUK1Wd28ZODc3tyMPs9Y+BXpQPWaMeZKf1Pf99ma/NIJ4evp4JjKC6uGfaXpSRJYda+eBnvUOeZWm6WmgZI15DrwT1QnX8x6LiEoYhmcFbgBH10yqtQxO9ff3fwCIwnAR4LzndQNEUXQI1WfAgdxVrxVuGqBrHWx1iiMGFnzf39u8UhzHBzeAUWd0Gc/zbgtMNB2+wZiJlZWVr83AWq32VlSHgJf5usJ4nQWqKjNR9ADoAx61F4sXent7fzSaZ6rVMwDlgYH5Rm12drawvLR0H+hD5GG5XD4nIrr2KGEYVgRG6+lHhSlr7R3Xdb/kJwmCoOQ4zkVUrwH769ONeZ5XAXCaV6prj8BoliRXoyi6Z4ypAGRZViHLLqPa0cL3h48t0oHqcJIknUmSdKI6jEhL2J+Bf6HtAxrQf4BoLl5VoVi8hcgV4P0WWJ8UxnYWCpONgjR3+L7f3tbWdgnV68A+gEy1G8CILAIofAbupmk6OTg4+D3v/w3YUBzHxTRNhwRGMtUT9XVeiMiUWDvuuu63jXwtgTnwLiCtp7YVaNv0C+DHw6IdMeL8AAAAAElFTkSuQmCC"></img>
               </span>
            <span className="label">Products</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="11">
          <NavLink to="/deposit">
            <span
              className="icon"
              style={{
                background: page === "deposit" ? color : "",
              }}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAACpElEQVQ4jbWUQWhUVxSGv3PfzDRGSDZCWnDRBER3XQnu2p2SjaGLNy+vhKBB304QKSjYkJU1GzfSWgpNSph57/rsRgey6KJk4aLduFRXRqKgGITkJUrGmfuOCwcZon2TRPyX95z/P/85954LnwmykyRVFWvtQYAgCJ6KiH6y8M0kOQNMKxzsHD0RmKmOj88V8UxRMEmSGYXfVfUfhZMKJ4ElhT+stdN7Ek7T9LDAZYXpIAwngUEDB9azbEpgBtWf6vX6oULhNE0HG41Gf3fAOTcGNLMsu1qv10cEbuRwvFKpeGtZdgVoeZ431s1pNBr9CwsL+wFMkiTnc+fWXm1ubtg4nuuqOASsRFHUKpfLTYU7Akf7+vq+iaKoheqKqH7VNbY/X21ublTK5Q1r7THjeV4NEV9hFpFTcRwPAeTwGBip1WoDqvq1wHCnQ5em6SAiIyryqNPxlwKTCrOi+r0x5l7J9/1V4FaSJKvAJRHZB9But2+VS6WfS8ZcF5HTKnLaGLMFrOTOzQNNY8xfnbH1dZ7X39UwXCq8vImJiWeInEXkh9y5fyXPx5xz43me/weMi+pZ3/efF17e/yEIgrpR/Q7VlwqXRPWiqK4qfFsNw6SIWyoKAvhheBc40StvOwodA8RxfGAnZ7sSTtN02Ii86Kw18G7FjciLNE2Hi7iFo/B9f9lae01Vb1hr11S1qfAr8Ivv+8t7dgxQrVZ/BGJUFwRuAkk1CM714vUUFhFdz7Ip4DZwez3Lpnbybb4fhafazkUQEW97UhRFLSAoKO6hiqfa/kC41Go9eFOpbKF6wVo7b5zLe7kCyD3PAFPAFqXS/ffFupOSJJkQ+A3oZ3d4LapRNQxrHxUGWFxc/CLLsiPGuZ7L03HcHhgYeDg6OtrcpZm94S1WDyRqU0BWgwAAAABJRU5ErkJggg=="></img>
              </span>
            <span className="label">Deposit</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="4">
          {/* <NavLink to="/rtl">
            <span
              className="icon"
              style={{
                background: page === "rtl" ? color : "",
              }}
            >
              {rtl}
            </span>
            <span className="label">RTL</span>
          </NavLink> */}
        </Menu.Item>
        <Menu.Item className="menu-item-header" key="5">
          Account Pages
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/profile">
            <span
              className="icon"
              style={{
                background: page === "profile" ? color : "",
              }}
            >
              {profile}
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to="/sign-in">
            {/* <span className="icon">{signin}</span>
            <span className="label">Sign In</span> */}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          {/* <NavLink to="/sign-up">
            <span className="icon">{signup}</span>
            <span className="label">Sign Up</span>
          </NavLink> */}
        </Menu.Item>
      </Menu>

    </>
  );
}

export default Sidenav;
