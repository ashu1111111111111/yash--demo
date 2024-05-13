import React from 'react';
import { Grid,} from '@mui/material';
import Item1 from './item1';
import Item2 from './item2';
import Item3 from './item3';


const Grids = () => {
    return (
        <Grid container spacing={2} padding={2}>
            <Grid item xs={12} sm={6} className='item-first'>
                <Item1 />
            </Grid>

            <Grid item xs={12} sm={6} className='item-second' >
                <Item2 />
            </Grid>

            <Grid item xs={12} sm={6} className='item-second' >
                <Item3 />
            </Grid>

        </Grid>
    );
};

export default Grids;
