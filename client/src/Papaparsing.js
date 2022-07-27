// import React, { useState } from "react";
// import Papa from "papaparse";
 
// // Allowed extensions for input file
// const allowedExtensions = ["csv"];
 
// const Papaparsing = () => {
     
//     // This state will store the parsed data
//     const [data, setData] = useState([]);
     
//     // It state will contain the error when
//     // correct file extension is not used
//     const [error, setError] = useState("");
     
//     // It will store the file uploaded by the user
//     const [file, setFile] = useState("");
 
//     // This function will be called when
//     // the file input changes
//     const handleFileChange = (e) => {
//         setError("");
         
//         // Check if user has entered the file
//         if (e.target.files.length) {
//             const inputFile = e.target.files[0];
             
//             // Check the file extensions, if it not
//             // included in the allowed extensions
//             // we show the error
//             const fileExtension = inputFile?.type.split("/")[1];
//             if (!allowedExtensions.includes(fileExtension)) {
//                 setError("Please input a csv file");
//                 return;
//             }
 
//             // If input type is correct set the state
//             setFile(inputFile);
//         }
//     };
//     const handleParse = () => {
         
//         // If user clicks the parse button without
//         // a file we show a error
//         if (!file) return setError("Enter a valid file");
 
//         // Initialize a reader which allows user
//         // to read any file or blob.
//         const reader = new FileReader();
         
//         // Event listener on reader when the file
//         // loads, we parse it and set the data.
//         reader.onload = async ({ target }) => {
//             const csv = Papa.parse(target.result, { header: true });
//             const parsedData = csv?.data;
//             const columns = Object.keys(parsedData[0]);
//             setData(columns);
//         };
//         reader.readAsText(file);
//     };
 
//     return (
//         <div>
//             <label htmlFor="csvInput" style={{ display: "block" }}>
//                 Enter CSV File
//             </label>
//             <input
//                 onChange={handleFileChange}
//                 id="csvInput"
//                 name="file"
//                 type="File"
//             />
//             <div>
//                 <button onClick={handleParse}>Parse</button>
//             </div>
//             <div style={{ marginTop: "3rem" }}>
//                 {error ? error : data.map((col,
//                   idx) => <div key={idx}>{col}</div>)}
//             </div>
//         </div>
//     );
// };
 
// export default Papaparsing;

import { useState } from "react";
import Papa from "papaparse";
import './Papaparsing.css';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';
import axios from "axios";
import { useSelector } from "react-redux";
import { MdOtherHouses } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 1200,
    },
    tableContainer: {
        borderRadius: 15,
        maxWidth: 1200,
        margin: 'auto',
        marginTop: '2rem',
        alignItems: 'center',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));

function Papaparsing() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);
  const {user} = useSelector(state => state.user);
  const {name,_id} = user;

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);
  const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
          
        });

        // Parsed Data Response in array format
        setParsedData(results.data);
        // Filtered Column Names
        setTableRows(rowsArray[0]);
        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  const AddAssignments = (e) => {
    // console.log(parsedData);
    if(parsedData===0) throw new Error("No Data");
    else{
      // axios.post('http://localhost:8000/api/assignments/addassignments', {sapid: User?.sapid, )
    }
  }

  const AddAttendance = (e) => {
    var attendancearr=[];
    if(parsedData===0) throw new Error("No Data");
    else{
      
      parsedData.forEach(element => {
        attendancearr=[];
        attendancearr.push(parseInt(element.day1));
        attendancearr.push(parseInt(element.day2));
        attendancearr.push(parseInt(element.day3));
        attendancearr.push(parseInt(element.day4));
        attendancearr.push(parseInt(element.day5));
        attendancearr.push(1);
        // attendancearr.push(element.day6);
        attendancearr.push(parseInt(1));
        console.log(user._id.toString());
        axios.post('http://localhost:8000/api/teams/addattendance', 
        {
          teamname: element.teamname,
          sapid: "2",
          teacherid: _id,
          attendance: attendancearr
        }).then("Successfully Added").catch(err => console.log(err));
    })
    }
  }

  const AddOfflineMarks = (e) => {
    var assignmentid=[];
    if(parsedData===0) throw new Error("No Data");
    else{
      parsedData.forEach(element => {
        axios.post('http://localhost:8000/api/teams/addassignments', 
        {
          teacherid: _id,
          teachername: "neharam",
          teamname: element.teamname,
          description: element.description,
          typeofassignment: element.typeofassignment,
          totalmarks: element.totalmarks
        }).then("Successfully Added").catch(err => console.log(err));
      })
      axios.post('http://localhost:8000/api/teams/sendassignments',
      {
        teacherid: _id,
        teamname: parsedData[0].teamname,
      }).then("Successfully Added").catch(err => console.log(err));

      
    }
  }

  const MarkRandom = (e) => {
     axios.post('http://localhost:8000/api/evaluation/gradeall',{
        teacherid: _id,
        teamname: parsedData[0].teamname,
        userid: "2",
        marksgiven: Math.floor(Math.random() * 10),
        feedbackgiven: "random",
     })
  }


  const AddUsers = (e) => {
    if(parsedData===0) throw new Error("No Data");
    else{
      parsedData.forEach(row=>{
        console.log(row.sapid)
        
      axios.post('http://localhost:8000/api/auth/signup', 
      {
        sapid: parseInt(row.sapid),
        name: row.name,
        email: row.email,
        password: row.password,
        yearofgraduation: row.yearofgraduation,
        typeofuser: row.typeofuser 
      })
      }
    )}

    }

  return (
    <div className="App">
      {/* File Uploader */}
      
      
      {/* Table */}
      {/* <table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    {/* <TableRow>
                        <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Job Info</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Joining Date</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Status</TableCell>
                        
            
                    </TableRow> */}
                 <TableRow>   {tableRows.map((rows, index) => {
              return <TableCell className={classes.tableHeaderCell} key={index}>{rows}</TableCell>;
            })}</TableRow>
                </TableHead>
                 <TableBody>
                  {/*  {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.name}>
                            <TableCell>
                                <Grid container>
                                    <Grid item lg={2}>
                                        <Avatar alt={row.name} src='.' className={classes.avatar} />
                                    </Grid>
                                    <Grid item lg={10}>
                                        <Typography className={classes.name}>{row.name}</Typography>
                                        <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                                        <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Typography color="primary" variant="subtitle2">{row.jobTitle}</Typography>
                                <Typography color="textSecondary" variant="body2">{row.company}</Typography>
                            </TableCell>
                            <TableCell>{row.joinDate}</TableCell>
                            <TableCell>
                                <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            ((row.status === 'Active' && 'green') ||
                                                (row.status === 'Pending' && 'blue') ||
                                                (row.status === 'Blocked' && 'orange'))
                                    }}
                                >{row.status}</Typography>*/}
                            {values.map((value, index) => {
            return (
              <TableRow key={index}>
                {value.map((val, i) => {
                  return <TableCell key={i}>{val}</TableCell>;
                })}
              </TableRow>
            );
          })}
                            
                    
                </TableBody> 
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        // count={USERS.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
        <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />  
                        <button className="m-2 p-5" onClick={(e)=>AddUsers(e)}>Enter into Users</button>      
                        <button className='m-2 p-5' onClick={(e)=>AddAttendance(e)}>Enter into Attendance</button>
                        {/* <button className='m-2 p-5' >Enter into Set Assignments</button> */}
                        <button className='m-2 p-5' onClick={(e)=>AddOfflineMarks(e)}>Enter Offline Test Marks</button>
                        <button className='m-2 p-5'>Enter to add students in Teams</button>

    </div>
  );
}

export default Papaparsing;
