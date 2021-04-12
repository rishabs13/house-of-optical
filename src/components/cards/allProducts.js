import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react'
import { productDetailsData } from '../../common/constants'
import Product from '../card/product'
import './products.css'
import Pagination from '@material-ui/lab/Pagination';

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
}));

export default function AllProducts({ product }) {
    const classes = useStyles();
    const itemsPerPage = 8;
    const [page, setPage] = React.useState(1);
    const [noOfPages] = React.useState(
        Math.ceil(productDetailsData.length / itemsPerPage)
    );

    const handleChange = (event, value) => {
        setPage(value);
    };


    return (
        <>
        <div className={classes.menuRoot}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            </div>
            <div className="products_container">
                <h1 className="products_container-title">Best Sellers</h1>
                <div className="products_container-cards">
                    {
                        productDetailsData
                            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                            .map(product => {
                                return <Product key={product.id} product={product} />
                            })
                    }
                </div>
                <Divider />
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
        </>
    )
}