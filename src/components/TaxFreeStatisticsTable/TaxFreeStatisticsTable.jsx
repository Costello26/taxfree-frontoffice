import React, { useState } from 'react';
import cls from './TaxFreeStatisticsTable.module.scss';
import {
  Container,
  Grid,
  List,
  ListItem,
  Checkbox,
  Stack,
  Pagination,
  Select,
  MenuItem,
  TextField,
  Button
} from '@mui/material';
import DownloadIcon from '../../assets/svg/download.svg'
import Card from './Card';
import StatisticsSearch from './StatisticsSearch';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const ListCheck = () => {
  const { selectedLang } = useSelector(state => state.lang)
  let head = {
    id: '№ ',
    name: globalLocales.stats.table.fio[selectedLang],
    MXIK: globalLocales.stats.table.phone[selectedLang],
    price: globalLocales.stats.table.card[selectedLang],
    taxFreeSumma: globalLocales.stats.table.productPrice[selectedLang],
    productCount: globalLocales.stats.table.count[selectedLang],
    event: globalLocales.stats.table.status[selectedLang],
  };
  const headCells = [
    {
      id: '1',
      name: 'Hellen Mirren',
      MXIK: '+44-7871234567',
      price: '4000 1234 5678 9010',
      taxFreeSumma: 1256300,
      productCount: 126,
      event: 'new',
      selected: false,
    },
    {
      id: '2',
      name: 'Olimov Asqarali Turg‘unovich',
      MXIK: '8 800 444 55 55',
      price: '4000 1234 5678 9010',
      taxFreeSumma: 1654789,
      productCount: 126,
      event: 'success',
      selected: false,
    },
    {
      id: '2',
      name: 'Olimov Asqarali Turg‘unovich',
      MXIK: '8 800 444 55 55',
      price: '4000 1234 5678 9010',
      taxFreeSumma: 1654789,
      productCount: 126,
      event: 'doing',
      selected: false,
    },
    {
      id: '3',
      name: 'Hellen Mirren',
      MXIK: '+44-7871234567',
      price: '4000 1234 5678 9010',
      taxFreeSumma: 1256300,
      productCount: 126,
      event: 'new',
      selected: false,
    },
    {
      id: '4',
      name: 'Olimov Asqarali Turg‘unovich',
      MXIK: '8 800 444 55 55',
      price: '4000 1234 5678 9010',
      taxFreeSumma: 1654789,
      productCount: 126,
      event: 'success',
      selected: false,
    },
    {
      id: '5',
      name: 'Olimov Asqarali Turg‘unovich',
      MXIK: '8 800 444 55 55',
      price: '4000 1234 5678 9010',
      taxFreeSumma: 1654789,
      productCount: 126,
      event: 'doing',
      selected: false,
    },
  ];

  const selectAll = (value) => {
    const newState = tableItems.map(item => {
      return {
        ...item,
        selected: value ? true : false,
      }
    })
    setTableItems(newState)
  }

  const changeItem = (key, val) => {
    const items = [ ...tableItems ];
    items[key].selected = val;
    return setTableItems(items);
  }


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [ tableItems, setTableItems ] = useState(headCells);
  
  return (
    <>
      {/* <Bar /> */}
      <Card />
      <StatisticsSearch />
      <Container maxWidth="xl">
        <List
          sx={{ width: '100%', bgcolor: '' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem
            sx={{
              width: '100%',
              border: '1px solid #D3E0FF',
              margin: '5px 0',
              padding: '5px 10px',
              borderRadius: '18px',
              background: '#F1F1F1',
              boxShadow: '0px 0px 15px rgba(160, 160, 160, 0.1)',
            }}
          >
            <Grid spacing={2} container columns={20}>
              <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox {...label} onChange={(e) => selectAll(e.target.checked)} /> {head.id}
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {head.name}
              </Grid>
              <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {head.MXIK}
              </Grid>
              <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {head.price}
              </Grid>
              <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {head.taxFreeSumma}
              </Grid>
              <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {head.productCount}
              </Grid>
              <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {head.event}
              </Grid>
            </Grid>
          </ListItem>
          {tableItems.map((vl, key) => {
            console.log('rerendered')
            return (
              <ListItem
                sx={{
                  width: '100%',
                  border: '1px solid #D3E0FF',
                  margin: '10px 0',
                  padding: '5px 10px',
                  borderRadius: '18px',
                  bgcolor: '#fff'
                }}
              >
                <Grid spacing={2} container columns={20}>
                  <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Checkbox checked={ vl.selected } {...label} onChange={(e) => changeItem(key, e.target.checked)} /> {vl.id}
                  </Grid>
                  <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {vl.name}
                  </Grid>
                  <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {vl.MXIK}
                  </Grid>
                  <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {vl.price}
                  </Grid>
                  <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {vl.taxFreeSumma}
                  </Grid>
                  <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {vl.productCount}
                  </Grid>
                  <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href='##' onClick={e => e.preventDefault()} className={cls['batafsil']}>Batafsil</a>
                  </Grid>
                </Grid>
              </ListItem>
            );
          })}
        </List>
        <div className={cls['interactive']}>
          <div className={cls['pagination__wrap']}>
            <Stack sx={{mt:"5px", mb:"15px"}}>
              <Pagination count={100} variant="outlined" shape="rounded" size='large'/>
            </Stack> 
          </div>
          <div className={cls['controls__wrap']}>
              <span>
                <img src={DownloadIcon} alt="download-icon"/>
                <span style={{ padding: '0px 7px', fontSize: '17px'}}>{globalLocales.stats.interactive.download[selectedLang]}: </span>
              </span>
              <TextField
                sx={{width: '220px'}}
                select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={`${globalLocales.stats.interactive.selectFormat[selectedLang]}...`}>
                  <MenuItem value={10}>PDF</MenuItem>
                  <MenuItem value={20}>XLS</MenuItem>
                  <MenuItem value={30}>CSV</MenuItem>
              </TextField>
              <Button sx={{marginLeft: '10px'}} variant="outlined">{globalLocales.stats.interactive.download[selectedLang]}</Button>
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default ListCheck;
