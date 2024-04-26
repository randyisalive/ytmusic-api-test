import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import useUserData from "../function/useUserData";

function Navbar({ channelId, children }) {
  const { user } = useUserData(channelId);
  console.log(user);
  const itemRenderer = (item) => (
    <a className="d-flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          template: itemRenderer,
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          template: itemRenderer,
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          template: itemRenderer,
        },
        {
          separator: true,
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
              template: itemRenderer,
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
              badge: 3,
              template: itemRenderer,
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      badge: 3,
      template: itemRenderer,
    },
  ];
  const end = (
    <div className="d-flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <img
        src="https://yt3.googleusercontent.com/dUU2GhiaRQUtSptc1VAWn0xjtyf4BKmhb4pjb72F-LJKpt5noc0OFT4fO6XyLbzh9TzX_ta4Ag=w226-c-h226-k-c0x00ffffff-no-l90-rj"
        alt=""
        width={50}
        style={{ borderRadius: "30rem" }}
      />
    </div>
  );
  return (
    <>
      <div>
        <div className="card">
          <Menubar model={items} end={end} />
        </div>

        <div className="d-flex mt-5 mx-5 flex-column">{children}</div>
      </div>
    </>
  );
}

export default Navbar;
