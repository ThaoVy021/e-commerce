import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Collapse, Menu, Anchor } from "antd";
import { CloseSquareOutlined, MenuOutlined } from "@ant-design/icons";
import "./Menu.scss";
import SubMenu from "antd/es/menu/SubMenu";
// import { Link } from "react-router-dom";

const { Panel } = Collapse;
// const { Item: MenuItem } = Menu;

const menuItems = [
  {
    key: "1",
    href: "#home",
    title: "Home",
  },
  {
    key: "2",
    href: "#newArrival",
    title: "New Arrival",
  },
  {
    key: "3",
    href: "#features",
    title: "Features",
  },
  {
    key: "4",
    href: "#blog",
    title: "Blog",
  },
  {
    key: "5",
    href: "#contact",
    title: "Contact",
  },
];

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "slide",
  },
  {
    label: "New Arrival",
    key: "newArrival",
  },
  {
    label: "Features",
    key: "features",
  },
  {
    label: "Blog",
    key: "blog",
  },
  {
    label: "Contact",
    key: "contact",
  },
];

function NavBar() {
  const [current, setCurrent] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  const [headerBgColor, setHeaderBgColor] = useState("#f1f5f9");

  const listenScrollEvent = () => {
    window.scrollY > 50
      ? setHeaderBgColor("white")
      : setHeaderBgColor("#f1f5f9");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  const clickShowMenu: MenuProps["onClick"] = (e) => {
    setShowMenu(!showMenu)
  };
  const onChange = (key: string | string[]) => {
    // console.log(key);
  };

  return (
    <div className="flex flex-row border-0 border-white">
      {/* <Menu
        onClick={onClick}
        selectedKeys={[current]}
        // items={items}
        style={{ backgroundColor: headerBgColor }}
        className="flex w-full bg-slate-100 text-base font-bold text-gray-500 menuDesktop"
      >
        {items?.map(({ label, key }: any) => (
          <MenuItem key={key}>
            <a href={`#${key}`}>{label}</a>
          </MenuItem>
        ))}
      </Menu> */}

      <Anchor affix={false} offsetTop={0} 
        items={menuItems}
        style={{backgroundColor: headerBgColor}} className='flex w-full bg-slate-100 text-base font-bold text-gray-500 menuDesktop'/>

      <Collapse 
        onChange={onChange} 
        expandIcon={({ isActive }) => (
          isActive ? <CloseSquareOutlined /> : <MenuOutlined />
        )}
        className="border-transparent rounded-lg dropdownMenu"
      >
      
        <Panel header="" key="1" className="absolute panelCollapse">
          {/* <Menu
            onClick={onClick}
            selectedKeys={[current]}
            items={items}  mode="horizontal"
            className="menuMobile"
          /> */}
          <Anchor affix={false} offsetTop={0} 
            items={menuItems} onClick={() => {
              window.location.href = "javascript:void(0)";
          }}
            style={{backgroundColor: headerBgColor}} className='menuMobile'/>
        </Panel>
      </Collapse> 
    </div>
  );
}

export default NavBar;
