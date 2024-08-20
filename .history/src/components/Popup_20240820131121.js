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
                  <Typography sx={{ p: 2 }}> {myListing.map((listing) => (
                <div key={listing.id} className="listing-item">
                    <h2>{listing.name}</h2>
                    <p>Category: {listing.category}</p>
                    <p>Quantity: {listing.quantity}</p>
                    <button onClick={() => handleEditClick(listing)}>Edit</button>
                </div>
            ))} </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}