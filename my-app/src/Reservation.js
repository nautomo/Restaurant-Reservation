import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button, TextField, Select, InputLabel,  MenuItem } from '@mui/material';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';

function Reservation() {
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(dayjs());
    const [numPeople, setNumPeople] = React.useState('');
    const [time, setTime] = React.useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    /* const handleDateChange = (event) => {
        setDate(event.target.value);
    }; */
    const handleNumPeopleChange = (event) => {
        setNumPeople(event.target.value);
    };
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <form action="/submit">
            <div>
                <TextField id="name-for-reservation" label="Full Name" variant="standard" onChange={handleNameChange}/>
            </div>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar id="select-date" label="Date" value={date} onChange={(newValue) => setDate(newValue)} />
                </LocalizationProvider>
            </div>
            <div>
                <InputLabel id="select-num-people-label">Number of People</InputLabel>
                <Select 
                    labelId="select-num-people-label" 
                    id="select-num-people"
                    value={numPeople}
                    label="Number of People"
                    onChange={handleNumPeopleChange}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
                <InputLabel id="select-time-label">Time</InputLabel>
                <Select 
                    labelId="select-time-label" 
                    id="select-time"
                    value={time}
                    label="Time"
                    onChange={handleTimeChange}>
                    <MenuItem value={11}>11:00</MenuItem>
                    <MenuItem value={12}>12:00</MenuItem>
                    <MenuItem value={13}>1:00</MenuItem>
                    <MenuItem value={14}>2:00</MenuItem>
                </Select>
            </div>
            <div>
                <Button 
                variant="contained" 
                type="submit"
                onClick={() => {
                    alert(`Reservation confirmed for ${numPeople} under ${name} on ${date} at ${time}!`);
                    }}
                >Reserve</Button>
            </div>
        </form>
    );
}

export default Reservation;