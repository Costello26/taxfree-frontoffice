import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Grid, List, ListItem, ListSubheader, Checkbox, TableSortLabel, Button, TextField, FormControl, InputAdornment, Select, MenuItem, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import { pink } from '@mui/material/colors';
import { AccountCircle, Search } from '@mui/icons-material';
import Card from './Card';
import StatisticsSearch from './StatisticsSearch';
import Bar from './Bar';

const ListCheck = () => {
    let head = {
        id: '№ ',
        name: " FIO",
        MXIK: "Telefon raqami",
        price: "Karat raqami",
        taxFreeSumma: "Mahsulot narxi",
        productCount: "Tovarlar soni",
        event: "Holati"
    }
    const headCells = [
        {
            id: '1',
            name: "Hellen Mirren",
            MXIK: "+44-7871234567",
            price: "4000 1234 5678 9010",
            taxFreeSumma: 1256300,
            productCount: 126,
            event: "new"
        },
        {
            id: '2',
            name: "Olimov Asqarali Turg‘unovich",
            MXIK: "8 800 444 55 55",
            price: "4000 1234 5678 9010",
            taxFreeSumma: 1654789,
            productCount: 126,
            event: "success"
        },
        {
            id: '2',
            name: "Olimov Asqarali Turg‘unovich",
            MXIK: "8 800 444 55 55",
            price: "4000 1234 5678 9010",
            taxFreeSumma: 1654789,
            productCount: 126,
            event: "doing"
        },
    ];

    function Event(prams) {
        if (prams.params.event == "new") {
            return <Box
                sx={{
                    background: "rgba(50, 94, 205, 0.25)",
                    borderRadius: "26px",
                    width:'100px',
                    height:"28px",
                    color: "#325ECD",
                    fontSize:"14px",
                    fontWeight:600,
                    textAlign:"center",
                    padding:"5px 15px"
                }}
            >Yangi</Box>
        } else if (prams.params.event == "doing") {
            return <Box
                sx={{
                    background: "rgba(253, 151, 23, 0.25)",
                    borderRadius: "26px",
                    width:'100px',
                    height:"28px",
                    color: "#FD9717",
                    fontSize:"14px",
                    fontWeight:600,
                    textAlign:"center",
                    padding:"5px 15px"
                }}
            >Jarayonda</Box>
        }
        else if (prams.params.event == 'success') {
            return <Box
                sx={{
                    background: "rgba(18, 185, 3, 0.25)",
                    borderRadius: "26px",
                    width:'100px',
                    height:"28px",
                    color: "#12B903",
                    fontSize:"14px",
                    fontWeight:600,
                    textAlign:"center",
                    padding:"5px 15px"
                }}
            >Tastiqlangan</Box>
        }
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
        <Bar/>
          <Card/>
          <StatisticsSearch/>
        <Container maxWidth="xl">
            <List
                sx={{ width: '100%', bgcolor: '' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItem
                    sx={{
                        width: "100%",
                        border: "1px solid #D3E0FF",
                        margin: "5px 0",
                        padding: "5px 10px",
                        borderRadius: "18px",
                        background:"#FFFFFF",
                        boxShadow:"0px 0px 15px rgba(160, 160, 160, 0.1)"
                    }}
                >
                    <Grid spacing={2} container columns={20}>
                        <Grid item xs={1} sx={{ display: "flex", alignItems: "center" }}><Checkbox {...label} /> {head.id}
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>{head.name}</Grid>
                        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>{head.MXIK}</Grid>
                        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>{head.price}</Grid>
                        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>{head.taxFreeSumma}</Grid>
                        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>{head.productCount}</Grid>
                        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>{head.event}</Grid>
                    </Grid>
                </ListItem>
                {
                    headCells.map((vl, ky) => {
                        return (
                            <ListItem
                                sx={{
                                    width: "100%",
                                    border: "1px solid #D3E0FF",
                                    margin: "10px 0",
                                    padding: "5px 10px",
                                    borderRadius: "18px",
                                }}
                            >
                                <Grid spacing={2} container columns={20} >
                                    <Grid item xs={1} sx={{ display: "flex", alignItems: "center" }}><Checkbox {...label} /> {vl.id}
                                    </Grid>
                                    <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>{vl.name}</Grid>
                                    <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>{vl.MXIK}</Grid>
                                    <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>{vl.price}</Grid>
                                    <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>{vl.taxFreeSumma}</Grid>
                                    <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>{vl.productCount}</Grid>
                                    <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
                                        <Event params={{ event: vl.event }} />
                                    </Grid>
                                </Grid>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Container>
 
        </>
       );      
}

export default ListCheck;
