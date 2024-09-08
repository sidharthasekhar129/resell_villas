import React, { useState, useEffect } from "react";

const PriceList = ({name,type,floorPlans}) => {
   const [tableItems, setTableItems] = useState([]);
 
 

  const groupByBHK = (Plans) => {
    return Plans.reduce(
      (acc, plan) => {
        const { type } = plan;
        if (!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(plan);
        if (!acc.list.includes(type)) {
          acc.list.push(type);
        }
        return acc;
      },
      { list: [] }
    );
  };

  useEffect(() => {
    const groupedFloorPlans = groupByBHK(floorPlans);
     if (groupedFloorPlans.list.length > 0) {
    //  setSelectedTab(groupedFloorPlans.list[0]);

    for(let i=0;i<groupedFloorPlans.list.length;i++){
      setTableItems((prevList) => [...prevList, ...groupedFloorPlans[groupedFloorPlans.list[i]]]);

    }

     }
  }, [floorPlans]);
  // const tableItems = [
  //   {
  //     unit: "2 BHK 986 Sq. Ft.",
  //     area: "986 Sq. Ft.",
  //     price: "1.2 Cr",
  //    },
  //   {
  //     unit: "2 BHK 1012 Sq. Ft.",
  //     area: "1012 Sq. Ft.",
  //     price: "1.5 Cr",
  //    },
  //   {
  //     unit: "3 BHK 1400 Sq. Ft.",
  //     area: "1400 Sq. Ft.",
  //     price: "1.6 Cr",
  //    },
  //   {
  //     unit: "3 BHK 1400 Sq. Ft.",
  //     area: "1400 Sq. Ft.",
  //     price: "1.65 Cr",
  //    },
  //   {
  //     unit: "4 BHK 1550 Sq. Ft.",
  //     area: "1550 Sq. Ft.",
  //     price: "1.8 Cr",
  //    },
 
  // ];

  return (
    <div className=" mt-10 py-14 sm:py-22 px-8 relative w-full max-w-7xl  bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4">
      <div className="mb-6 flex max-w-7xl flex-row justify-between sm:items-center sm:flex-colum">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-2xl text-gray-800 font-semibold">
            {name} Price List
          </h1>
          <div
            style={{
              width: "5vw",
              backgroundColor: "purple",
              height: 3,
              marginTop: 10,
            }}
          ></div>
        </div>
      </div>
      <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr className="divide-x">
              <th className="py-3 px-2">SL.</th>
              <th className="py-3 px-6">Unit Type</th>
              <th className="py-3 px-6">Area</th>
              <th className="py-3 px-6">Price</th>
             </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx} className="divide-x">
                <td className="px-2 py-4 whitespace-nowrap ">
                   
                  0{idx+1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">
                   
                  {item.type} , {type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.size}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.price}Cr.</td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceList;
