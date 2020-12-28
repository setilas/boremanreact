import { Home } from "react-feather";
export const MENUITEMS = [
  {
    menutitle: "Table Contents",
    menucontent: "Dashboard",

    Items: [
      {
        title: "Home",
        icon: Home,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/`,
            title: "AddEnquiry",
            type: "link",
          },
          {
            path: "/viewenquiry",
            title: "ViewEnquiry",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
            title: "Status",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
            title: "logout",
            type: "link",
          },
        ],
      },
    ],
  },
  //   {
  //     menutitle: "Starter",
  //     menucontent: "Ready to use Apps",
  //     Items: [
  //       {
  //         title: "Starter kit",
  //         icon: Anchor,
  //         type: "sub",
  //         active: false,
  //         children: [
  //           {
  //             path: `${process.env.PUBLIC_URL}/starter-kits/sample-page`,
  //             title: "Sample Page",
  //             type: "link",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     menutitle: "Support",
  //     menucontent: "",
  //     Items: [
  //       {
  //         title: "Raise Support",
  //         icon: Headphones,
  //         type: "sub",
  //         active: false,
  //         children: [
  //           {
  //             title: "Raise Ticket",
  //             type: "exteral_link",
  //             path: "http://support.pixelstrap.com/help-center",
  //           },
  //         ],
  //       },
  //     ],
  //   },
];
