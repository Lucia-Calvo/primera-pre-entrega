import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCard = () => {
    return (
        <div>
            <ShoppingCartIcon sx={{color:'white'}}/>
            <span style={{color:'white'}}>0</span>
        </div>
    )
}

export default ShoppingCard;