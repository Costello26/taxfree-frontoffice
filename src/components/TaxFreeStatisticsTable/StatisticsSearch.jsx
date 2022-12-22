import { Search } from '@mui/icons-material';
import {
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const StatisticsSearch = () => {
  const { selectedLang } = useSelector((state) => state.lang);
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Grid container columns={12} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid xs={8}>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder={globalLocales.stats.phoneLabel[selectedLang]}
            sx={{
              borderRadius: '20px',
              border: '1px solid rgba(50, 94, 205, 0.5)',
              backgroundColor: '#fff',
              height: '52px',
              display: 'flex',
              justifyContent: 'center',
              padding: '0 1rem',
            }}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <FormControl fullWidth sx={{ margin: '6px', maxWidth: 115 }}>
            <InputLabel id="year-label">
              {globalLocales.stats.yearLabel[selectedLang]}
            </InputLabel>
            <Select
              labelId="year-label"
              id="demo-simple-select-standard"
              value={null}
              label="Yil"
            >
              <MenuItem value={10}>2022</MenuItem>
              <MenuItem value={20}>2021</MenuItem>
              <MenuItem value={30}>2019</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ margin: '6px', maxWidth: 115 }}>
            <InputLabel id="demo-simple-select-label">
              {globalLocales.stats.monthLabel[selectedLang]}
            </InputLabel>
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
          <FormControl fullWidth sx={{ margin: '6px', maxWidth: 95 }}>
            <InputLabel id="demo-simple-select-label">
              {globalLocales.stats.dayLabel[selectedLang]}
            </InputLabel>
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
};

export default StatisticsSearch;
