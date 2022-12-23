import { useState, useEffect } from 'react';
import { Search } from '@mui/icons-material';
import { Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const StatisticsSearch = () => {
    const { selectedLang } = useSelector(state => state.lang);
    const [days, setDays] = useState([])
    const [formData, setFormData ] = useState({
        phone: '',
        year: null,
        month: null,
        day: null
    });
    useEffect(() => {
        let result = [];
        let currentMonth = globalLocales.stats.months[formData.month];
        if(currentMonth === undefined) {
            return;
        } else {
            for(let i = 0; i <= currentMonth.days; i++) {
                result.push(i);
            }
        }
        setDays(result);
    }, [formData]);
    return (
        <Container maxWidth='xl'>
              <Grid container columns={12}>
                <Grid item xs={8}>
                    <TextField
                        id="outlined-required"
                        //variant='standard'
                        label={globalLocales.stats.phoneLabel[selectedLang]}
                        sx={{
                            width: "100%",
                            margin: "15px 0",
                            borderRadius: "20px",
                            //border: " 1px solid rgba(50, 94, 205, 0.5)",
                            padding: "0",
                            //height:"52px",
                            fontFamily: '"Nunito", sans-serif'
                        }}
                        InputProps={{
                            //disableUnderline: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}

                    />
                </Grid>
                <Grid item xs={4} sx={{ display: "flex", alignItems:"center" }} >
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">{globalLocales.stats.yearLabel[selectedLang]}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.year}
                            label="Yil"
                            onChange={(e) => {
                                setFormData({
                                ...formData,
                                year: e.target.value
                            })
                            }}  
                        >
                            <MenuItem value={10}>{new Date().getFullYear()}</MenuItem>
                            <MenuItem value={20}>{new Date().getFullYear() - 1}</MenuItem>
                            <MenuItem value={30}>{new Date().getFullYear() - 2}</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">{globalLocales.stats.monthLabel[selectedLang]}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.month}
                            label="Oy"
                            onChange={(e) => {
                                setFormData({
                                ...formData,
                                month: e.target.value
                            })}}
                        >
                            { formData.year && globalLocales.stats.months.map((month, key) => (
                                    <MenuItem value={key}>{month.month[selectedLang]}</MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">{globalLocales.stats.dayLabel[selectedLang]}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.day}
                            label="Kun"
                            onChange={(e) => { setFormData({
                                ...formData,
                                day: e.target.value
                            })}}
                        >
                            {days.map((val) => (
                                <MenuItem value={val}>{val}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}

export default StatisticsSearch;
