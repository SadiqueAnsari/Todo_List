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
                sx={{ my: 8 }}
            // value={task}
            onChange={handleSearch}
            />
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '20px' }}>Task List</TableCell>
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
            <Pagination sx={{ mx: 10, mt: 3 }} count={totalPages} page={page} onChange={handleChange} />
        </>
    );
}
