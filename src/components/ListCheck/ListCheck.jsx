import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Grid, List, ListItem, ListSubheader, Checkbox, TableSortLabel, Button, TextField, FormControl } from '@mui/material';
import { Box } from '@mui/system';
import { pink } from '@mui/material/colors';

const ListCheck = () => {
    let head = {
        id: '№',
        name: "Mahsulot nomi",
        MXIK: "MXIK",
        price: "Mahsulot narxi",
        taxFreeSumma: "Tax Free summasi",
        event: "Mavjudligi"
    }
    const headCells = [
        {
            id: '1',
            name: "Shim",
            MXIK: 12345678912345678,
            price: 250000,
            taxFreeSumma: 150756,
            event: true
        },
        {
            id: '2',
            name: "Palto",
            MXIK: 12345678912345678,
            price: 250000,
            taxFreeSumma: 150756,
            event: false
        },
        {
            id: '1',
            name: "Shim",
            MXIK: 12345678912345678,
            price: 250000,
            taxFreeSumma: 150756,
            event: true
        },
        {
            id: '2',
            name: "Palto",
            MXIK: 12345678912345678,
            price: 250000,
            taxFreeSumma: 150756,
            event: false
        }, {
            id: '1',
            name: "Shim",
            MXIK: 12345678912345678,
            price: 250000,
            taxFreeSumma: 150756,
            event: true
        },
        {
            id: '2',
            name: "Palto",
            MXIK: 12345678912345678,
            price: 250000,
            taxFreeSumma: 150756,
            event: false
        }
    ];

    let btns = [
        {
            label: "Hammasi",
            event: "all"
        },
        {
            label: "Tasdiqlangan",
            event: "success"
        },
        {
            label: "Rad etilgan",
            event: "failed"
        }
    ]

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Container maxWidth="xl">
            <TextField
                id="outlined-required"
                label="Mahsulot nomi / MXIK kodi"
                sx={{
                    width: "100%", 
                        margin: "15px 0",
                    borderRadius: "20px",
                    border: " 1px solid rgba(50, 94, 205, 0.2"
                }}
            />
            {
                btns.map((vl, ky) => {
                    return (
                        <Button variant='outlined'
                            sx={{
                                background: "#F8F8F8",
                                border: "1px solid #B6BCCD",
                                borderRadius: "20px",
                                mr: "8px"
                            }}
                        >{vl.label}</Button>
                    )
                })
            }
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
                    <Grid spacing={2} container columns={24}>
                        <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}><Checkbox {...label} /> {head.id}
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>{head.name}</Grid>
                        <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>{head.MXIK}</Grid>
                        <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>{head.price}</Grid>
                        <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>{head.taxFreeSumma}</Grid>
                        <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>{head.event}</Grid>
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
                                <Grid spacing={2} container columns={24} style={vl.event ? {} : { color: "red", textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} >
                                    <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}><Checkbox {...label} /> {vl.id}
                                    </Grid>
                                    <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>{vl.name}</Grid>
                                    <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>{vl.MXIK}</Grid>
                                    <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>{vl.price}</Grid>
                                    <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>{vl.taxFreeSumma}</Grid>
                                    <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                        {
                                            vl.event ?
                                                <>
                                                    <Checkbox defaultChecked />
                                                    <Checkbox
                                                        sx={{
                                                            color: pink[800],
                                                            '&.Mui-checked': {
                                                                color: pink[600],
                                                            },
                                                        }}
                                                    />
                                                </>
                                                :
                                                <>
                                                    <Checkbox />
                                                    <Checkbox
                                                        defaultChecked
                                                        sx={{
                                                            color: pink[800],
                                                            '&.Mui-checked': {
                                                                color: pink[600],
                                                            },
                                                        }}
                                                    />
                                                </>
                                        }

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
