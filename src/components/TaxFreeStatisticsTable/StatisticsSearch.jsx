import { Search } from '@mui/icons-material';
import { Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const StatisticsSearch = () => {
    const { selectedLang } = useSelector(state => state.lang)
    return (
        <Container maxWidth='xl'>
              <Grid container columns={12}>
                <Grid item xs={8}>
                    <TextField
                        id="outlined-required"
                        label={globalLocales.stats.phoneLabel[selectedLang]}
                        sx={{
                            width: "100%",
                            margin: "15px 0",
                            borderRadius: "20px",
                            border: " 1px solid rgba(50, 94, 205, 0.2",
                            paddign: "0",
                            height:"52px"
                        }}
                        InputProps={{
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
                            value={null}
                            label="Yil"
                        // onChange={handleChange}  
                        >
                            <MenuItem value={10}>2022</MenuItem>
                            <MenuItem value={20}>2021</MenuItem>
                            <MenuItem value={30}>2019</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">{globalLocales.stats.monthLabel[selectedLang]}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={null}
                            label="Oy"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">{globalLocales.stats.dayLabel[selectedLang]}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={null}
                            label="Kun" 
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}

export default StatisticsSearch;
