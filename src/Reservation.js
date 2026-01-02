import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button, TextField, Select, InputLabel,  MenuItem, Box, FormHelperText } from '@mui/material';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import './Reservation.css'

function Reservation() {
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(dayjs());
    const [numPeople, setNumPeople] = React.useState('');
    const [time, setTime] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)

        // manual validation check
        if (!name || !date || !numPeople || !time) {
            return;
        }

        alert(
            `Reservation confirmed for ${numPeople} under ${name} on ${date.format(
                'MM/DD/YYYY'
            )} at ${time}:00!`
        );

        // send to database

        // reset variables
        setName('')
        setDate(dayjs())
        setNumPeople('')
        setTime('')
        setSubmitted(false)
    };

    return (
        <Box component="form" id="reserve-form" onSubmit={handleSubmit} noValidate>
            <div className="inputlabel-pair" id="name-section">
                <InputLabel id="name-for-reservation-label">Full Name*</InputLabel>
                <TextField 
                    labelId="name-for-reservation-label"
                    id="name-for-reservation" 
                    variant="standard" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    helperText={submitted && !name ? "Missing required" : ""}
                    error={submitted && !name}
                    required
                />
            </div>
            <div className="inputlabel-pair" id="date-section">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar 
                        value={date} 
                        onChange={(newValue) => setDate(newValue)}
                    />
                </LocalizationProvider>
            </div>
            <div id="select-section">
                <div className="inputlabel-pair">
                <InputLabel id="select-num-people-label">Number of People*</InputLabel>
                <Select 
                    labelId="select-num-people-label" 
                    id="select-num-people"
                    value={numPeople}
                    label="Number of People"
                    onChange={(e) => setNumPeople(e.target.value)}
                    error={submitted && !numPeople}
                    required
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
                {submitted && !numPeople && (<FormHelperText error>Missing required</FormHelperText>)}
                </div>
                
                <div className="inputlabel-pair">
                <InputLabel id="select-time-label">Time*</InputLabel>
                <Select 
                    labelId="select-time-label" 
                    id="select-time"
                    value={time}
                    label="Time"
                    onChange={(e) => setTime(e.target.value)}
                    error={submitted && !time}
                    required
                >
                    <MenuItem value={11}>11:00</MenuItem>
                    <MenuItem value={12}>12:00</MenuItem>
                    <MenuItem value={13}>1:00</MenuItem>
                    <MenuItem value={14}>2:00</MenuItem>
                </Select>
                {submitted && !time && (<FormHelperText error>Missing required</FormHelperText>)}
                </div>
            </div>
            
            <div id="submit-section">
                <Button 
                variant="contained" 
                type="submit"
                form="reserve-form"
                >Reserve</Button>
            </div>
        </Box>
    );
}

export default Reservation;