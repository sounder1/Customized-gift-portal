// import React from "react";
// import "./Styles.css";
// // import Star from "./assets/star";

// export default function Card(props) {
//   const CARDSIZE = 150;
//   const CARDWIDTH = CARDSIZE * 2;
//   const CARDBORDERRADIUS = CARDSIZE * 0.1;
//   //TITLE
//   const CARDTITLEPOS = CARDWIDTH * 0.21;
//   //IMG
//   const CARDIMGHEIGHT = CARDSIZE * 0.5;
//   const CARDIMGWIDTH = CARDWIDTH * 0.9;
//   const CARDIMGMARGINTOP = CARDSIZE * 0.02;
//   //TEXT
//   const CARDTXTHEIGHT = CARDSIZE * 0.4;
//   const CARDTXTWIDTH = CARDWIDTH * 0.9;
//   const CARDTXTMARGIN = CARDSIZE * 0.05;

//   const getStars = (number) => {
//     let stars = [];
//     const limit = number ? number : 4;
//     for (let i = 0; i < limit; ++i) {
//       stars.push(<Star />);
//     }
//     return stars;
//   };

//   return (
//     <div
//       className="cardContainer"
//       style={{
//         height: CARDSIZE,
//         width: CARDWIDTH,
//         borderRadius: CARDBORDERRADIUS
//       }}
//     >
//       <div className="titleContainer">
//         <span id="rating">
//           {/*getStars().map((element, index) => {
//             return <span> {element} </span>;
//           })*/}

//           {/*<Star height="20px" />
//           <Star height="20px" />
//           <Star height="20px" />
//           <Star height="20px" />
//         <Star height="20px" />*/}
//         </span>
//         <div id="title" style={{ right: CARDTITLEPOS }}>
//           TITLE
//         </div>
//       </div>
//       <div
//         className="cardImgContainer"
//         style={{
//           height: CARDIMGHEIGHT,
//           width: CARDIMGWIDTH,
//           borderRadius: CARDBORDERRADIUS,
//           marginTop: CARDIMGMARGINTOP
//         }}
//       >
//         <img
//           src="https://picsum.photos/800/200/?random"
//           alt="1"
//           style={{
//             height: CARDIMGHEIGHT,
//             width: CARDIMGWIDTH,
//             borderRadius: CARDBORDERRADIUS
//           }}
//         />
//       </div>

//       <div
//         className="cardTextContainer"
//         style={{
//           height: CARDTXTHEIGHT,
//           width: CARDTXTWIDTH,
//           borderRadius: CARDBORDERRADIUS,
//           marginTop: CARDTXTMARGIN,
//           marginBottom: CARDTXTMARGIN
//         }}
//       ></div>
//     </div>
//   );
// }
