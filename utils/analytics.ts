// import ReactGA from "react-ga";

// //Ya no la usamos
// export const initGA = () => {
//   // console.log("GA init");
//   ReactGA.initialize("UA-148351126-1");
// };

// //Ya no la usamos
// export const logPageView = () => {
//   // console.log(`Logging pageview for ${window.location.pathname}`);
//   ReactGA.set({ page: window.location.pathname });
//   ReactGA.pageview(window.location.pathname);
// };

// //Ya no la usamos
// export const logEvent = (category: string, action: string, label?: string) => {
//   if (label) {
//     console.log(`Logged event for: ${category}, ${action}, ${label}`);
//     ReactGA.event({ category, action, label });
//   } else {
//     console.log(`Logged event for: ${category}, ${action}`);
//     ReactGA.event({ category, action });
//   }
// };
// export const logException = (description = "", fatal = false) => {
//   if (description) {
//     ReactGA.exception({ description, fatal });
//   }
// };

//ReactPixel de Facebook
export const advancedMatching = (email: string) => {
  const am = {
    em: email,
    ct: null,
    country: null,
    db: null,
    fn: null,
    ge: null,
    ln: null,
    ph: null,
    st: null,
    zp: null,
  };
  return am;
};
