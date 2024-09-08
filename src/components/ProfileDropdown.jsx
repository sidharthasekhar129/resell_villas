import { useEffect, useRef, useState } from "react";
import { CiUser } from "react-icons/ci";

// Avatar with dropdown menu
const AvatarMenue = () => {
  const [state, setState] = useState(false);
  const profileRef = useRef(null);

  const navigation = [
    { title: "My Account", path: "/user/my-account" },
    { title: "Wishlist", path: "/user/wish-list" },
    { title: "Chat", path: "/user/chat" },
  ];

  useEffect(() => {
    const handleDropDown = (e) => {
      // Add a null check for profileRef.current
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setState(false);
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleDropDown);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleDropDown);
    };
  }, []);

  return (
    <div className="relative border-t lg:border-none">
      <div className="">
        <button
          ref={profileRef}
          className="hidden w-[35px] outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
          onClick={() => setState(!state)}
        >
          <img
            className="w-full h-full rounded-full"
            src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
            alt="Not okay"
          />
        </button>
      </div>
      <ul
        style={{ width: "12rem" }}
        className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-55 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden sm:hidden md:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
        <a
          href="/logout"
          className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3"
        >
          Logout
        </a>
      </ul>
    </div>
  );
};

const UserDropDown = () => {
  return (
    <div>
      <AvatarMenue />
    </div>
  );
};

export default UserDropDown;
