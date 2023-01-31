import { Container, Paper } from '@mui/material';
import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar';
import "./CreateTransaction.css";
import FormStepper from './FormStepper';

const CreateTransaction = () => {
    return (
        <div className='compteCustom'>
            <Navbar />
            <div className='compte'>
                <Sidebar />

                <div className='createTransaction'>
                    <Container component="main" sx={{ mb: 4 }} style={{ backgroundColor: "#13203b", color:"silver" }}>
                        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                         style={{ backgroundColor: "#13203b", color:"aliceblue" }}>
                            <FormStepper />
                        </Paper>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default CreateTransaction