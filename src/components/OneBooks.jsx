import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const OneBooks = () => {

    const [value, setValue] = React.useState(2);
  return (
    <div>
        <img src="2978981.jpg" alt="" />
        <div className="">
            <span>500$</span>
            <p></p>
            <p></p>
        </div>
        <div className="">
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                    >
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />

                </Box>
        </div>
        <div className="">
            <Button variant="contained">КУПИТЬ</Button>
        </div>
    </div>
  )
}

export default OneBooks