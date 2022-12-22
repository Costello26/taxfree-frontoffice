import React from 'react';
import {
  Container,
  Grid,
  List,
  ListItem,
  Checkbox,
  Button,
  TextField,
  FormControlLabel,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';
import { pink } from '@mui/material/colors';
import { useState } from 'react';

const ListCheck = (props) => {
  const { selectedLang } = useSelector((state) => state.lang);
  const [isChecked, setIsChecked] = useState(false);
  let head = {
    id: '№',
    name: globalLocales.infoPage.table.productName[selectedLang],
    MXIK: globalLocales.infoPage.table.fiscalNum[selectedLang],
    price: globalLocales.infoPage.table.price[selectedLang],
    taxFreeSumma: globalLocales.infoPage.table.tfSum[selectedLang],
    event: globalLocales.infoPage.table.available[selectedLang],
  };
  const headCells = [...props.state];
  let btns = [
    {
      label: globalLocales.infoPage.controls.all[selectedLang],
      event: 'all',
    },
    {
      label: globalLocales.infoPage.controls.approved[selectedLang],
      event: 'success',
    },
    {
      label: globalLocales.infoPage.controls.declined[selectedLang],
      event: 'failed',
    },
  ];

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Container maxWidth={false} disableGutters={true}>
      <TextField
        defaultValue=""
        id="outlined"
        label={globalLocales.infoPage.formLabel[selectedLang]}
        sx={{
          width: '100%',
          margin: '15px 0',
          borderRadius: '20px',
          backgroundColor: '#FFF',
          '& fieldset': {
            borderRadius: '20px',
          },
        }}
      />
      {btns.map((vl, ky) => {
        return (
          <Button
            key={ky}
            variant="outlined"
            sx={{
              background: '#F8F8F8',
              border: '1px solid #B6BCCD',
              borderRadius: '20px',
              mr: '8px',
            }}
          >
            {vl.label}
          </Button>
        );
      })}
      <List
        sx={{ width: '100%' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem
          sx={{
            width: '100%',
            margin: '10px 0',
            padding: '5px 10px',
            borderRadius: '18px',
            fontWeight: 700,
            backgroundColor: '#F1F1F1',
          }}
        >
          <Grid spacing={2} container columns={24}>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox {...label} /> {head.id}
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {head.name}
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {head.MXIK}
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {head.price}
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {head.taxFreeSumma}
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {head.event}
            </Grid>
          </Grid>
        </ListItem>
        {headCells.map((vl, ky) => {
          return (
            <ListItem
              key={vl.id}
              sx={{
                width: '100%',
                border: '1px solid #D3E0FF',
                backgroundColor: '#FFF',
                margin: '10px 0',
                padding: '5px 10px',
                borderRadius: '18px',
              }}
            >
              <Grid
                spacing={2}
                container
                columns={24}
                style={
                  vl.event
                    ? {
                        color: 'red',
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                      }
                    : {}
                }
              >
                <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox {...label} /> {ky + 1}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {vl.name}
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {vl.productCode}
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {vl.price}
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {vl.taxFreeSumma}
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {
                    <>
                      <FormControlLabel
                        value="bottom"
                        control={
                          <Checkbox
                            sx={{
                              color: '#233259',
                              padding: '2px',
                              borderRadius: '4px',
                              '&.Mui-checked': {
                                color: '#233259',
                              },
                            }}
                          />
                        }
                        label={
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: 300,
                              lineHeight: '14px',
                            }}
                          >
                            {'Bor'}
                          </span>
                        }
                        labelPlacement="bottom"
                        sx={{
                          fontSize: '10px',
                        }}
                      />
                      <FormControlLabel
                        value="bottom"
                        control={
                          <Checkbox
                            sx={{
                              color: '#CA0218',
                              padding: '2px',
                              borderRadius: '4px',
                              '&.Mui-checked': {
                                color: '#CA0218',
                              },
                            }}
                          />
                        }
                        label={
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: 300,
                              lineHeight: '14px',
                              fontFamily: 'Nunito',
                            }}
                          >
                            {"Yo'q"}
                          </span>
                        }
                        labelPlacement="bottom"
                        sx={{
                          fontSize: '10px',
                        }}
                      />
                    </>
                  }
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default ListCheck;
