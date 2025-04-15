// import { useEffect, useRef, useState } from "react";

// export const useResponsiveWatcher = () => {
//   const previousWidth = useRef(window.innerWidth);
//   const [leftFlag, setLeftFlag] = useState(false);
//   const [allowToShow, setAllowToShow] = useState(false);

//   console.log("allowToShow", allowToShow);
//   console.log("leftFlag", leftFlag);

//   //   useEffect(() => {
//   //     const handleIconClick = () => {
//   //       setAllowToShow(false);
//   //       setLeftFlag(false);
//   //     };

//   //     const icon = document.querySelector(".iconCheck");
//   //     icon?.addEventListener("click", handleIconClick);

//   //     return () => {
//   //       icon?.removeEventListener("click", handleIconClick);
//   //     };
//   //   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       const currentWidth = window.innerWidth;
//       if (leftFlag && currentWidth > previousWidth.current) {
//         setAllowToShow(true);
//         setLeftFlag(false);
//       }
//       if (currentWidth < previousWidth.current) {
//         setLeftFlag(true);
//         setAllowToShow(false);
//       }

//       previousWidth.current = currentWidth;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [leftFlag, allowToShow]);
//   const handleSetAllowToShow = (value: boolean) => setAllowToShow(value);
//   const handleSetLeftFlag = (value: boolean) => setLeftFlag(value);
//   return { allowToShow, handleSetAllowToShow, handleSetLeftFlag, leftFlag };
// };

// // TH1 : click hide icon in side bar => close side bar, show trigger icon  (OK)
// // TH2:  click trigger icon =>  show sidebar (OK)
// // TH3 : resize < sm => show trigger icon, close side bar (OK)
// // TH4:   resize > sm => show side bar, close trigger icon (OK)
// // TH5 : click trigger icon and resize > sm || resize < sm => do nothing  (OK)
// // TH6 : click trigger icon and  resize < sm then resize > sm => show sidebar and close trigger icon (OK)
// // TH7 : do step 6 and  resize > sm => do nothing (not OK)
