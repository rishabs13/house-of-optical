import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, FormControl, FormControlLabel, FormLabel, List, ListItem, ListItemIcon, ListItemText, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react'
import { productDetailsData } from '../../common/constants'
import Product from '../card/product'
import './products.css'
import Pagination from '@material-ui/lab/Pagination';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SnackBarComponent from '../snackbar/snackbar';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    item: {
        padding: theme.spacing(1.2)
    },
    avatar: { marginRight: theme.spacing(5) },
    paginator: {
        justifyContent: "center",
        padding: "10px"
    },
    menuRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    accordionRoot: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function AllProducts({ product, show }) {
    const classes = useStyles();
    const itemsPerPage = 8;
    const [page, setPage] = React.useState(1);
    const [radioValue, setRadioValue] = React.useState('all');
    const [data, setData] = React.useState(productDetailsData);
    const [noOfPages] = React.useState(
        Math.ceil(productDetailsData.length / itemsPerPage)
    );
    const [snackOpen, setSnackOpen] = React.useState(false);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleRadioChange = (event, value) => {
        if (value === 'all') {
            setData(productDetailsData);
        } else {
            const fields = [...productDetailsData].filter(values => Number(values.price) < Number(value));
            setData(fields);
        }
        setRadioValue(value);
    }


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div className={classes.menuRoot}>
                    <h2 style={{
                        height: '5vh',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#3f51b5',
                        justifyContent: 'center'
                    }}>Filters</h2>
                    <Divider />
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <div className={classes.accordionRoot}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>By Price</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Filter by price</FormLabel>
                                            <RadioGroup aria-label="gFilter by pricer" name="Filter by price" value={radioValue} onChange={handleRadioChange}>
                                                <FormControlLabel value={"100"} control={<Radio />} label="Less than 100" />
                                                <FormControlLabel value={"300"} control={<Radio />} label="Less than 300" />
                                                <FormControlLabel value={"500"} control={<Radio />} label="Less than 500" />
                                                <FormControlLabel value="all" control={<Radio />} label="Show All" />
                                            </RadioGroup>
                                        </FormControl>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </ListItem>
                    </List>
                </div>
                <div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        padding: '20px 0px'
                    }}>
                        {
                            data
                                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                                .map(product => {
                                    return <Product showSnackBar={() => setSnackOpen(true)} key={product.id} product={product} />
                                })
                        }
                    </div>
                    <Divider />
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Box component="span">
                            <Pagination
                                count={noOfPages}
                                page={page}
                                onChange={handleChange}
                                defaultPage={1}
                                color="primary"
                                size="large"
                                showFirstButton
                                showLastButton
                                classes={{ ul: classes.paginator }}
                            />
                        </Box>
                    </div>
                </div>
                <SnackBarComponent
                    open={snackOpen}
                    onClose={() => setSnackOpen(false)}
                    message="Item added to cart"
                />
            </div>
        </>
    )
}