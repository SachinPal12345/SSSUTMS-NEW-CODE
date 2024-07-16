// import React, { useEffect, useState } from "react";

// import axios from "axios";

// // import edit1 from "../Images/edit1.png";
// import {
//   Switch,
//   TableCell,
//   Box,
//   Card,
//   Button,
//   TextField,
//   FormControl,
//   MenuItem,
// } from "@mui/material";

// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// // import moment from "moment";
// // import add1 from "../../images/";
// // import trash from "../Images/trash.png";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CardContent from "@mui/material/CardContent";
// import AdminDashboard from "./AdminDashboard";

// const theme = createTheme({
//   typography: {
//     fontWeightBold: 700,
//   },
// });

// const Coursechange = () => {
//   // //////////////////main table/////////////////////////////
//   const [page, setPage] = React.useState(0);
//   const [rows, setRows] = React.useState([]);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [value, setValue] = useState("");

//   const baseURL = "http://localhost:8000/api/admin/categorylist";

//   //   useEffect(() => {
//   //     axios.get(baseURL).then((response) => {
//   //       setRows(response.data);
//   //     });
//   //   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <>
//       <Box
//         component="form"
//         sx={{
//           "& > :not(style)": { m: 1, width: "25ch" },
//         }}
//         noValidate
//         autoComplete="off"
//       ></Box>

//       <AdminDashboard />
//       <ThemeProvider theme={theme}>
//         <Box sx={{ width: "90%", marginLeft: "100px" }}>
//           <Card sx={{ minWidth: 900, p: 4, marginTop: "70px" }}>
//             <div style={{ align: "left" }}>
//               <TextField
//                 id="outlined-basic"
//                 label="Search here......"
//                 variant="outlined"
//                 style={{
//                   width: "300px",
//                   height: "30px",
//                   marginLeft: "20px",
//                 }}
//               />
//             </div>{" "}
//             <br></br>
//             <CardContent>
//               <Paper sx={{ width: "100%", overflow: "hidden" }}>
//                 <TableContainer
//                   sx={{ maxHeight: 440 }}
//                   style={{ BoxShadow: "60px" }}
//                 >
//                   <Table stickyHeader aria-label="sticky table">
//                     <TableHead>
//                       <TableRow>
//                         {/* <TableCell align="left">Owner Id</TableCell> */}
//                         <TableCell
//                           align="left"
//                           style={{ backgroundColor: "#264653" }}
//                         >
//                           <h1
//                             style={{
//                               fontSize: "20px",
//                               fontWeight: "bolder",
//                               color: "white",
//                               fontFamily: "-moz-initial",
//                             }}
//                           >
//                             {" "}
//                             Menu Name
//                           </h1>
//                         </TableCell>
//                         <TableCell
//                           align="left"
//                           style={{ backgroundColor: "#264653" }}
//                         >
//                           <h1
//                             style={{
//                               fontSize: "20px",
//                               fontWeight: "bolder",
//                               color: "white",
//                               fontFamily: "-moz-initial",
//                             }}
//                           >
//                             {" "}
//                             Name{" "}
//                           </h1>
//                         </TableCell>
//                         <TableCell
//                           align="left"
//                           style={{ backgroundColor: "#264653" }}
//                         >
//                           <h1
//                             style={{
//                               fontSize: "20px",
//                               fontWeight: "bolder",
//                               color: "white",
//                               fontFamily: "-moz-initial",
//                             }}
//                           >
//                             {" "}
//                             Display Order
//                           </h1>
//                         </TableCell>

//                         <TableCell
//                           align="left"
//                           style={{ backgroundColor: "#264653" }}
//                         >
//                           <h1
//                             style={{
//                               fontSize: "20px",
//                               fontWeight: "bolder",
//                               color: "white",
//                               fontFamily: "-moz-initial",
//                             }}
//                           >
//                             {" "}
//                             CreatedOn
//                           </h1>
//                         </TableCell>

//                         <TableCell
//                           align="left"
//                           style={{ backgroundColor: "#264653" }}
//                         >
//                           <h1
//                             style={{
//                               fontSize: "20px",
//                               fontWeight: "bolder",
//                               color: "white",
//                               fontFamily: "-moz-initial",
//                             }}
//                           >
//                             {" "}
//                             Action
//                           </h1>
//                         </TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {rows
//                         .slice(
//                           page * rowsPerPage,
//                           page * rowsPerPage + rowsPerPage
//                         )

//                         .map((row) => {
//                           return (
//                             <TableRow
//                               hover
//                               role="checkbox"
//                               tabIndex={-1}
//                               key={row.role_id}
//                             >
//                               <TableCell align="left">{}</TableCell>
//                               <TableCell align="left">{}</TableCell>

//                               <TableCell align="left">{}</TableCell>
//                               <TableCell align="left">{}</TableCell>
//                               <TableCell>
//                                 {/* <img src={edit1}  style={{ width: "30px" }}></img>{" "} */}
//                                 {/* <img src={trash} style={{ width: "30px" }}></img> */}
//                               </TableCell>
//                             </TableRow>
//                           );
//                         })}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//                 <TablePagination
//                   rowsPerPageOptions={[2, 25, 100]}
//                   component="div"
//                   count={rows.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//               </Paper>
//             </CardContent>
//           </Card>
//           <br></br>
//         </Box>
//       </ThemeProvider>
//     </>
//   );
// };

// export default Coursechange;


import React, { useState } from "react";
// import add1 from "../../../images/Adddd.png";
import edit1 from "../../../images/edit1.png";
import delete1 from "../../../images/trash.png";
import {useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {
  Box,
  Card,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  CardContent,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import AdminDashboard from "./AdminDashboard";
import { Button } from "react-bootstrap";
import Addfees from "./Addfees";
import Updatefees from "./Updatefees";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const FeesChange = () => {
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const navigate = useNavigate();
  // Static data for the table
  const staticRows = [
    {
      role_id: 1,
      menuName: "Menu 1",
      name: "Name 1",
      fees: 2300,
      createdOn: "2024-07-01",
    },
    {
      role_id: 2,
      menuName: "Menu 2",
      name: "Name 2",
      fees: 3455,
      createdOn: "2024-07-02",
    },
    {
      role_id: 3,
      menuName: "Menu 3",
      name: "Name 3",
      fees: 3877,
      createdOn: "2024-07-03",
    },
    {
      role_id: 4,
      menuName: "Menu 4",
      name: "Name 4",
      fees: 4348,
      createdOn: "2024-07-04",
    },
    {
      role_id: 5,
      menuName: "Menu 5",
      name: "Name 5",
      fees: 5567,
      createdOn: "2024-07-05",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
   
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>

      <AdminDashboard />
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "90%", marginLeft: "100px" }}>
          <Card sx={{ minWidth: 900, p: 4, marginTop: "70px" }}>
          <div style={{ textAlign: "left" }}>
  <TextField
    id="outlined-basic"
    label="Search here......"
    variant="outlined"
    style={{
      width: "250px",
      height: "10px",
      marginLeft: "20px",
    }}
  />
</div>

{/* <div style={{ textAlign: "center", marginTop: "10px" }}>
  <h3><b>Fees Change</b></h3>
</div> */}


            <br></br>
  <Button  onClick={handleShow} variant="primary" style={{marginLeft:"85%"}} >Add Fees</Button>{' '}


{/* ==============================Add_Fees (Model=============================) */}

<Modal show={show} onHide={handleClose}  style={{marginTop:"40px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Add_Fees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Addfees />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
     

   

            <CardContent>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer
                  sx={{ maxHeight: 440 }}
                  style={{ BoxShadow: "60px" }}
                >
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Course Type
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Course Name
                          </h1>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Branch
                          </h1>
                        </TableCell>

                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Fees
                          </h1>
                        </TableCell>
                       
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#264653" }}
                        >
                          <h1
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "white",
                              fontFamily: "-moz-initial",
                            }}
                          >
                            Action
                          </h1>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {staticRows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.role_id}>
                            <TableCell align="left">{row.menuName}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.createdOn}</TableCell>
                            <TableCell align="left">{row.fees}</TableCell>
                            <TableCell>
                              <div style={{ display: 'flex', gap: '10px' }}>
                              
                                <img  onClick={() =>
                  navigate("/Updatefees")
                  }
                    src={edit1} alt="edit" style={{ width: "30px" }} />
                                
                                <img
  onClick={() => {
    if (window.confirm('Are you sure to Delete Data')) {
      // Add your deletion logic here
    }
  }}
  src={delete1}
  alt="delete"
  style={{ width: "30px" }}
/>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[2, 25, 100]}
                  component="div"
                  count={staticRows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </CardContent>
          </Card>
          <br></br>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default FeesChange;

