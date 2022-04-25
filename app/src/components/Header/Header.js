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
    const {count} = useSelector(state => state["productReducer"]);

    return(
        <div className={s.container}>
                <div className={s.nav}>
                    <button className={s.btn}>
                        <Link to={"/list"}>
                            Cart
                        </Link>
                    </button>
                    <button className={s.btn}>
                        <Link to={"/orderedList"}>
                            Ordered List
                        </Link>
                    </button>
                </div>
                <div>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={count} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </div>
        </div>
    )
}