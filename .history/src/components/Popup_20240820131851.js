import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

export default function PopperPopupState() {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindToggle(popupState)}>
            Toggle Popper
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography sx={{ p: 2 }}> 

                  <div className="card">
                    <form onSubmit={editingId ? handleUpdateListing : handleAddListing}>
                        <input 
                            type="text" 
                            name="name"
                            className="value" 
                            placeholder="Item Name" 
                            value={formData.name}
                            onChange={handleChange} 
                        />
                        <input 
                            type="text" 
                            name="category"
                            className="category" 
                            placeholder="Category" 
                            value={formData.category}
                            onChange={handleChange} 
                        />
                        <input 
                            type="number" 
                            name="quantity"
                            placeholder="Quantity" 
                            value={formData.quantity}
                            onChange={handleChange}
                            min="0" 
                        />
                        <button type="submit" className="sav">
                            {editingId ? "Update" : "Save"}
                        </button>
                    </form>
                </div>

                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}