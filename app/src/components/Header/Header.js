import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import s from "./Header.module.css"
import React from 'react'
import {useSelector} from "react-redux";
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function Header(){
    const {orderProducts,price} = useSelector(state => state.productReducer);

    const count = Object.values(orderProducts).length

    return(
        <div className={s.container}>
                <div className={s.nav}>
                    <button className={s.btn}>
                        <Link to={"/list"}  style={{ textDecoration: 'none' }}>
                            <p className={s.btnInfo}>Cart</p>
                        </Link>
                    </button>
                    <button className={s.btn} >
                        <Link to={"/orderedList"}  style={{ textDecoration: 'none' }}>
                            <p className={s.btnInfo}>Ordered List</p>
                        </Link>
                    </button>
                </div>
                <div>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={count} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                    <div>
                        TOTAL: {price}$
                    </div>
                </div>
        </div>
    )
}