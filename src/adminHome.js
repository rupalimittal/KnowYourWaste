import React,{useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import {styled, withStyles} from "@material-ui/core";
import './index.css';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Society Name', 159, 6.0, 24, 4.0),
    createData('Flat No', 237, 9.0, 37, 4.3),
    createData('Rewards', 262, 16.0, 24, 6.0),
];

export default function adminHome() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        var apiBaseUrl = "http://localhost:4000/api/fetch-data";
        axios.get(apiBaseUrl).then(res=>{
            console.log(res)
            let response = res.data.data;
            const modifiedResponse = response.map(value => {
                return {...value, editState : false};
            });
            setData(modifiedResponse)
            setLoader(false)
        }).catch(error => {
            console.log(error)
            setData([])
            setLoader(false)
        });

    }, []);
    const StyledButton = withStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
            textTransform: 'capitalize',
        },
    })(Button);
    const clickHandler =()=>
    {
               axios.post("http://localhost:4000/api/update-data",{data:data}).then(res=>{
                   console.log(res)
               }).catch(error => {
                   console.log(error)
               });

    }

   const updateTagName = (tag, tagIndex , editState = false) => {

        let updatedData = JSON.parse(JSON.stringify(data));
        let annObj = {...updatedData[tagIndex]};
        annObj.editState = editState;
       updatedData[tagIndex] = annObj;
       setData(updatedData);
    }
   const handleInputChange = (event, tag, tagIndex, flag = false) => {
       let updatedData = JSON.parse(JSON.stringify(data));
       let annObj = {...updatedData[tagIndex]};
       annObj[event.target.name] = event.target.value;
       updatedData[tagIndex] = annObj;
       setData(updatedData);
   }


    return (

        loader?<div>
            loading data
            </div>:<React.Fragment>
            <h1>Welcome Earth Saviour!!</h1>
            <h2>Give points to users :</h2>
            <img  src="https://www.bitgab.com/uploads/1590710846-waste-management-1590710846.jpg"
                  />
            <br/>
            <br/>
        <TableContainer component={Paper}>
            <Table table border="5" text="bold" className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Society Name</b> </TableCell>
                        <TableCell><b>Flat_No</b></TableCell>
                        <TableCell ><b>Rewards</b></TableCell>
                        <TableCell><b>Edit</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.length>0?data.map((row,index) => (
                        <TableRow key={row.society_name}>
                            <TableCell  boldscope="row">
                                {row.society_name}
                            </TableCell>
                            <TableCell >{row.FLAT_NO}</TableCell>
                            <TableCell>{
                                  !row.editState ? row.points? row.points:0
                                    : <input type="number" name="points" min="0" max="100" value={row.points} onChange={(e)=> handleInputChange(e, row, index)}/>
                            } </TableCell>
                            <TableCell>{ !row.editState ? <i className=" fas fa-edit" onClick={() => updateTagName(row, index, true)}></i>
                                : <i className=" fas fa-save" onClick={() => updateTagName(row, index)}></i>
                            }</TableCell>
                        </TableRow>
                    )):<div>
                    no rows to show
                </div>
                    }
                </TableBody>
            </Table>
        </TableContainer>
            <br/>
            <br/>
            <Button class="button1" onClick={clickHandler}>Save Data</Button>
            <br/>
            <br/>
            </React.Fragment>

    );

}

