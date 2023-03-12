import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
// import "../components/Styles/Media-Queries.css";
// import Typography from "@mui/material";
import "../Header/Header.css";
// import { createTheme, ThemeProvider } from "@mui/material";

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       variants: [
//         {
//           props: {
//             variant: "headerTabs",
//           },
//           style: {
//             fontSize: 50,
//           },
//         },
//       ],
//     },
//   },
// });

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{}}>
        {/* <ThemeProvider theme={theme}> */}
        <Tabs
        className="header"
          value={value}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab sx={{  fontSize: "16px"  }} className="header" Variant="headerTabs" value="one" label="Projects" />
          <Tab sx={{ fontSize: "16px" }} value="two" label="Packages" />
          <Tab sx={{ fontSize: "16px" }} value="three" label="Contact" />
          <Tab sx={{ fontSize: "16px" }} value="four" label="CV/Resume" />
          <Tab sx={{ fontSize: "16px" }} value="five" label="About me" />
        </Tabs>
        {/* </ThemeProvider> */}
      </Box>
    </>
  );
}

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// export default function NavTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Header className="Header">
//       <Box sx={{ width: "100%" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="nav tabs example"
//         >
//           <LinkTab value="one" label="Projects" />
//           <LinkTab value="two" label="Packages" />
//           <LinkTab value="three" label="Contact" />
//           <LinkTab value="two" label="CV/Resume" />
//           <LinkTab value="three" label="About me" />
//         </Tabs>
//       </Box>
//     </Header>
//   );
// }
