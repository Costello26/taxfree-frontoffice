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
            return <Button
                sx={{
                    background: "rgba(50, 94, 205, 0.25)",
                    borderRadius: "26px",
                    padding: "5px 20px",
                    color: "#325ECD"
                }}
            >Yangi</Button>
        } else if (prams.params.event == "doing") {
            return <Button
                sx={{
                    background: "rgba(253, 151, 23, 0.25)",
                    borderRadius: "26px",
                    padding: "5px 20px",
                    color: "#FD9717"
                }}
            >Jarayonda</Button>
        }
        else if (prams.params.event == 'success') {
            return <Button
                sx={{
                    background: "rgba(18, 185, 3, 0.25)",
                    borderRadius: "26px",
                    padding: "5px 20px",
                    color: "#12B903",
                }}
            >Tastiqlangan</Button>
        }
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Container maxWidth="xl">

            <Grid container columns={12}>
                <Grid item xs={8}>
                    <TextField
                        id="outlined-required"
                        label="Telefon raqam"
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
                        <InputLabel id="demo-simple-select-label">Yil</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={null}
                            label="Yil"
                        // onChange={handleChange}  
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Oy</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={null}
                            label="Oy"
                        // onChange={handleChange}  
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Kun</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={null}
                            label="Kun"
                        // onChange={handleChange}  
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItem
                    sx={{
                        width: "100%",
                        border: "1px solid #D3E0FF",
                        margin: "10px 0",
                        padding: "5px 10px",
                        borderRadius: "18px",
                        bgColor: "#F1F1F1"
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
    );
}

export default ListCheck;
