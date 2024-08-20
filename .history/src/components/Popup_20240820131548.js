import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";



export default function PopperPopupState() {

    const myListing = useSelector((state) => state.listing);


    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        quantity: ''
    });

    const handleEditClick = (listing) => {
        setEditingId(listing.id);
        setFormData({
            name: listing.name,
            category: listing.category,
            quantity: listing.quantity
        });
    };

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