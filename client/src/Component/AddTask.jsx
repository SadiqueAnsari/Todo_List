// RegistrationForm.js
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Paper, Typography, Container, Grid, Box } from '@mui/material';
import TaskList from './TaskList';
import client from '../Interceptor/Interceptor';
import { userApi } from '../Api/api';

const AddTask = () => {
    const [task, setTask] = useState("")
    const [allTask, setAlltask] = useState([])
    const [searchTask, setSearchTask] = useState('')
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)

// search


const handleAllTask = async (no) => {
    try {
        let result = await userApi.getTask(searchTask,no??page)  
        // client.get(`/user/getTask?searchTask=${searchTask}&page=${no??page}&limit=${5}`) 
        setAlltask(result.data.data)
        setTotalPages(result.data.totalPages)
    } catch (err) {
        console.log(err)
    }
}

useEffect(() => {
    const timer = setTimeout(() => {
      handleAllTask(1)
    }, 500); 
    return () => clearTimeout(timer);
  }, [searchTask]);


  

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleAdd = async () => {
        try {
            let result = await userApi.addTask(task) 
            // console.log("res", result)
            if (result.status === 200) {
                alert(result.data.message)
                handleAllTask()
            }

        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }

    }
    useEffect(() => {
        handleAllTask()
    }, [page])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6}>
                <Grid item xs={4}>
                    <Typography variant="h5">Add Task</Typography>
                    <form style={{ width: '100%', marginTop: 15 }}>

                        <TextField
                            fullWidth
                            id="task"
                            name="task"
                            label="Enter task"
                            margin="normal"
                            variant="outlined"
                            value={task}
                            onChange={handleChange}
                        />

                        <Button onClick={handleAdd} variant="contained" color="primary" sx={{}}>
                            Add
                        </Button>

                    </form>
                </Grid>
                <Grid item xs={8}>
                    <TaskList allTask={allTask} setSearchTask={setSearchTask} totalPages={totalPages} page={page} setPage={setPage} />
                </Grid>

            </Grid>
        </Box>

    );
};

export default AddTask;
