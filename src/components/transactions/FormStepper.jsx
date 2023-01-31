import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import { UserContext } from '../../AppContext';
import Form4 from './Forms/Form4';

const steps = ['', '', ''];

const labels = ["First", "Second", "Confirmation"];

const handleSteps = (step) => {
    switch (step) {
        case 0:
            return <Form1 />
        case 1:
            return <Form2 />
        case 2:
            return <Form3 />
        default:
            throw new Error("Etape non connue")
    }
}

export default function FormStepper() {

    const { activeStep, setActiveStep } = React.useContext(UserContext);
    
    return (
        <>
            {
                activeStep === labels.length ?
                    (
                        <Form4 />
                    ) : (
                        <>
                            <Box sx={{ my: 5 }}>
                                <Typography variant='h5' align='center'>
                                    Transfert d'argent
                                </Typography>
                            </Box>

                            <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
                                {
                                    labels.map((label, i) => {
                                        return (
                                            <Step key={i}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        )
                                    })
                                }
                            </Stepper>

                            {handleSteps(activeStep)}
                        </>
                    )
            }
        </>
    );
}