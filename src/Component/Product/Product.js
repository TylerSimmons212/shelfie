import React from 'react';
import axios from 'axios';

export default function Product(){
       return (
           axios.get('/api/product').then(res => {
            const inventoryItem = res.data;
            return inventoryItem;
        })
       )
}
