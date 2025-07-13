import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({open,handleClose,initialState}) {



  return (
    <div>

   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >

            <Box sx={{display:"flex", flexDirection:"column",gap:2}}>
       <TextField
              label="Firm Name"
              name="name"
              type="text"
              variant="outlined"
            //   onChange={handleChange}
            //   value={info.name}
              required
              fullWidth
            />
       <TextField
              label="Firm Name"
              name="name"
              type="text"
              variant="outlined"
            //   onChange={handleChange}
            //   value={info.name}
              required
              fullWidth
            />
       <TextField
              label="Firm Name"
              name="name"
              type="text"
              variant="outlined"
            //   onChange={handleChange}
            //   value={info.name}
              required
              fullWidth
            />
       <TextField
              label="Firm Name"
              name="name"
              type="text"
              variant="outlined"
            //   onChange={handleChange}
            //   value={info.name}
              required
              fullWidth
            />

            
   <Button type="submit" variant="contained">SUBMIT FIRM</Button>
            </Box>
        </Box>

    
       
      </Modal> 
      
    </div>
  );
}
