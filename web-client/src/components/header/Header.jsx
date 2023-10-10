// import React from "react";
// import {
//   faCalendarDays,
//   faPerson,
//   faSailboat,
//   faPlane,
//   faTruckMonster
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./header.css";
// import { DateRange } from "react-date-range";
// import { useState, useRef, useEffect } from "react";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";

// const Header = ({ type }) => {
//   const dateRangeRef = useRef();
//   const [recreationType, setRecreactionType] = useState("");
//   const [openDate, setOpenDate] = useState(false);
//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);
//   const [openOptions, setOpenOptions] = useState(false);
//   const [options, setOptions] = useState({
//     adult: 1,
//     children: 0,
//     room: 1,
//   });

//   const navigate = useNavigate();

//   const handleOption = (name, operation) => {
//     setOptions((prev) => {
//       return {
//         ...prev,
//         [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
//       };
//     });
//   };

//   const handleSearch = () => {
//     document.body.style.backgroundImage = 'none';
//     document.body.style.backgroundColor = 'white';
//     navigate("/postings", { state: { recreationType, date, options } });
//   };

//   useEffect(() => {
//     const checkIfClickedOutside = e => {
//       // If the menu is open and the clicked target is not within the menu, then close it
//       if (openDate && dateRangeRef.current && !dateRangeRef.current.contains(e.target)) {
//         setOpenDate(false);
//       }
//     }

//     // Attach the listeners to the document
//     document.addEventListener("mousedown", checkIfClickedOutside);

//     // Clean up the listeners when the component unmounts
//     return () => {
//       document.removeEventListener("mousedown", checkIfClickedOutside);
//     };
//   }, [openDate]);

//   return (
//     <div className="header">
//       <div
//         className={
//           type === "list" ? "headerContainer listMode" : "headerContainer"
//         }
//       >
//         {type !== "list" && (
//           <>
//             {/* <p className="headerDesc">
//               Description Goes Here or maybe not
//             </p> */}
//             <div className="headerSearch">
//               <div className="headerSearchItem">
//                 {/* <FontAwesomeIcon icon={faTruckMonster} className="headerIcon" /> */}
//                 <input
//                   type="text"
//                   placeholder="Where to?"
//                   className="headerSearchInput"
//                   onChange={(e) => setRecreactionType(e.target.value)}
//                 />
//               </div>
//               <div className="headerSearchItem">
//                 {/* <FontAwesomeIcon icon={faTruckMonster} className="headerIcon" /> */}
//                 <input
//                   type="text"
//                   placeholder="What do you want to do?"
//                   className="headerSearchInput"
//                   onChange={(e) => setRecreactionType(e.target.value)}
//                 />
//               </div>
//               <div className="headerSearchItem">
//                 <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
//                 <span
//                   onClick={() => setOpenDate(!openDate)}
//                   className="headerSearchText"
//                 >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
//                   date[0].endDate,
//                   "MM/dd/yyyy"
//                 )}`}</span>
//                 <div ref={dateRangeRef}>
//                 {openDate && (
//                   <DateRange
//                     editableDateInputs={true}
//                     onChange={(item) => setDate([item.selection])}
//                     moveRangeOnFirstSelection={false}
//                     ranges={date}
//                     className="date"
//                   />
//                 )}
//               </div>
//               </div>
//               <div className="headerSearchItem">
//                 <button className="headerBtn" onClick={handleSearch}>
//                   Search
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;