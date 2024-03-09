import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { TextField } from '@mui/material';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TaskList({ allTask,setSearchTask,totalPages,page,setPage }) {
    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleSearch =(e)=>{
        setSearchTask(e.target.value)
    }

    return (
        <>
            <TextField
                fullWidth
                id="task"
                name="task"
                label="Search task"
                margin="normal"
                variant="outlined"
                sx={{ mb: 5 }}
            // value={task}
            onChange={handleSearch}
            />
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '20px' }}>Task</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allTask && allTask.length>0 ? allTask?.map((row,index) => (
                            <TableRow
                                key={"allTask"+index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.task}
                                </TableCell>

                            </TableRow>
                        )):"No Task Found"}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination sx={{ mx: 10, my: 5 }} count={totalPages} page={page} onChange={handleChange} />
        </>
    );
}
