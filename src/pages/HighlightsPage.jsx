// import React, { useState } from "react";
// import Navbar from "../components/HomeComps/Navbar";
// import Footer from "../components/HomeComps/Footer";
// import "../styles/HighlightsPage.css";

// // Import all videos
// import abduGoal from "../assets/videos/Abdu Goal Adnan Pass.mp4";
// import abdullahAssist from "../assets/videos/Abdullah crazy assist.mp4";
// import abdullahInterception from "../assets/videos/Abdullah interception goal.mp4";
// import absoluteMissile from "../assets/videos/Absolute MISSLE from net.mp4";
// import adamDeeb from "../assets/videos/Adam Deeb cooks with a goal.mp4";
// import adnanCooks from "../assets/videos/ADNAN COOKS.mp4";
// import adnanTayyan from "../assets/videos/Adnan Tayyan Goal.mp4";
// import anesFinishing from "../assets/videos/Anes 0 Finishing.mp4";
// import angusGoal from "../assets/videos/Angus Goal.mp4";
// import anshasiGoal from "../assets/videos/Anshasi Goal.mp4";
// import goalBlessed from "../assets/videos/Goal blessed by ALLAH.mp4";
// import husseinTurk from "../assets/videos/Hussein Turk Goal.mp4";
// import khalidGoal from "../assets/videos/Khalid Goal.mp4";
// import meshInterception from "../assets/videos/Mesh interception goal.mp4";
// import muneerPenalty from "../assets/videos/Muneer Penalty Shot Save.mp4";
// import rahallAccidental from "../assets/videos/Rahall Accidental Goal.mp4";
// import rahallGoal from "../assets/videos/Rahall Goal.mp4";
// import rahallMissile from "../assets/videos/Rahall MISSLE.mp4";
// import rahallSkill from "../assets/videos/Rahall SUIIII.mp4";
// import rayyanMidAir from "../assets/videos/Rayyan mid air goal.mp4";
// import rayyanMissile from "../assets/videos/Rayyan MISSLE.mp4";
// import rehanGoal from "../assets/videos/Rehan Goal.mp4";
// import shaabanGoal from "../assets/videos/Shaaban Goal.mp4";
// import shaheenDominates from "../assets/videos/Shaheen Domination.mp4";
// import sheikhCook from "../assets/videos/Sheikh Cook.mp4";
// import sheikhGoal from "../assets/videos/Sheikh Goal.mp4";
// import sohaibGoal from "../assets/videos/Sohaib Goal.mp4";
// import wRayyanPass from "../assets/videos/W rayyan pass.mp4";
// import wSaves from "../assets/videos/W saves.mp4";
// import yaqinZayd from "../assets/videos/Yaqin to Zayd tip in.mp4";

// const HighlightsPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const videosPerPage = 6;
//   const highlights = [
//     {
//       id: 1,
//       type: "video",
//       title: "Abdu Goal with Adnan Pass",
//       date: "2024",
//       src: abduGoal,
//     },
//     {
//       id: 2,
//       type: "video",
//       title: "Abdullah Crazy Assist",
//       date: "2024",
//       src: abdullahAssist,
//     },
//     {
//       id: 3,
//       type: "video",
//       title: "Abdullah Interception Goal",
//       date: "2024",
//       src: abdullahInterception,
//     },
//     {
//       id: 4,
//       type: "video",
//       title: "Absolute Missile from Net",
//       date: "2024",
//       src: absoluteMissile,
//     },
//     {
//       id: 5,
//       type: "video",
//       title: "Adam Deeb Goal",
//       date: "2024",
//       src: adamDeeb,
//     },
//     {
//       id: 6,
//       type: "video",
//       title: "ADNAN COOKS",
//       date: "2024",
//       src: adnanCooks,
//     },
//     {
//       id: 7,
//       type: "video",
//       title: "Adnan Tayyan Goal",
//       date: "2024",
//       src: adnanTayyan,
//     },
//     {
//       id: 8,
//       type: "video",
//       title: "Anes Finishing",
//       date: "2024",
//       src: anesFinishing,
//     },
//     {
//       id: 9,
//       type: "video",
//       title: "Angus Goal",
//       date: "2024",
//       src: angusGoal,
//     },
//     {
//       id: 10,
//       type: "video",
//       title: "Anshasi Goal",
//       date: "2024",
//       src: anshasiGoal,
//     },
//     {
//       id: 11,
//       type: "video",
//       title: "Yaqin Goal",
//       date: "2024",
//       src: goalBlessed,
//     },
//     {
//       id: 12,
//       type: "video",
//       title: "Hussein Turk Goal",
//       date: "2024",
//       src: husseinTurk,
//     },
//     {
//       id: 13,
//       type: "video",
//       title: "Khalid Goal",
//       date: "2024",
//       src: khalidGoal,
//     },
//     {
//       id: 14,
//       type: "video",
//       title: "Mesh Interception Goal",
//       date: "2024",
//       src: meshInterception,
//     },
//     {
//       id: 15,
//       type: "video",
//       title: "Muneer Penalty Shot Save",
//       date: "2024",
//       src: muneerPenalty,
//     },
//     {
//       id: 16,
//       type: "video",
//       title: "Rahall Accidental Goal",
//       date: "2024",
//       src: rahallAccidental,
//     },
//     {
//       id: 17,
//       type: "video",
//       title: "Rahall Goal",
//       date: "2024",
//       src: rahallGoal,
//     },
//     {
//       id: 18,
//       type: "video",
//       title: "Rahall MISSILE",
//       date: "2024",
//       src: rahallMissile,
//     },
//     {
//       id: 19,
//       type: "video",
//       title: "Rahall SUIIIIII",
//       date: "2024",
//       src: rahallSkill,
//     },
//     {
//       id: 20,
//       type: "video",
//       title: "Rayyan Mid Air Goal",
//       date: "2024",
//       src: rayyanMidAir,
//     },
//     {
//       id: 21,
//       type: "video",
//       title: "Rayyan MISSILE",
//       date: "2024",
//       src: rayyanMissile,
//     },
//     {
//       id: 22,
//       type: "video",
//       title: "Rehan Goal",
//       date: "2024",
//       src: rehanGoal,
//     },
//     {
//       id: 23,
//       type: "video",
//       title: "Shaaban Goal",
//       date: "2024",
//       src: shaabanGoal,
//     },
//     {
//       id: 24,
//       type: "video",
//       title: "Shaheen Domination",
//       date: "2024",
//       src: shaheenDominates,
//     },
//     {
//       id: 25,
//       type: "video",
//       title: "Sheikh Cook",
//       date: "2024",
//       src: sheikhCook,
//     },
//     {
//       id: 26,
//       type: "video",
//       title: "Sheikh Goal",
//       date: "2024",
//       src: sheikhGoal,
//     },
//     {
//       id: 27,
//       type: "video",
//       title: "Sohaib Goal",
//       date: "2024",
//       src: sohaibGoal,
//     },
//     {
//       id: 28,
//       type: "video",
//       title: "Rayyan Pass",
//       date: "2024",
//       src: wRayyanPass,
//     },
//     {
//       id: 29,
//       type: "video",
//       title: "Great Saves",
//       date: "2024",
//       src: wSaves,
//     },
//     {
//       id: 30,
//       type: "video",
//       title: "Yaqin to Zayd",
//       date: "2024",
//       src: yaqinZayd,
//     },
//   ];

//   // Get current videos
//   const indexOfLastVideo = currentPage * videosPerPage;
//   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
//   const currentVideos = highlights.slice(indexOfFirstVideo, indexOfLastVideo);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="highlights-container">
//       <Navbar />
//       <div className="highlights-main">
//         <h1 className="highlights-header">Season Highlights</h1>
//         <div className="highlights-grid">
//           {currentVideos.map((highlight) => (
//             <div key={highlight.id} className="highlight-card">
//               <div className="highlight-media">
//                 <video
//                   className="highlight-video"
//                   src={highlight.src}
//                   controls
//                   preload="none"
//                   poster="/api/placeholder/400/225"
//                 />
//               </div>
//               <div className="highlight-info">
//                 <h3 className="highlight-title">{highlight.title}</h3>
//                 <span className="highlight-date">{highlight.date}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="pagination">
//           {Array.from({
//             length: Math.ceil(highlights.length / videosPerPage),
//           }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={`pagination-button ${
//                 currentPage === index + 1 ? "active" : ""
//               }`}>
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default HighlightsPage;
