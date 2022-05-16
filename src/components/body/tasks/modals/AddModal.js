import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

const AddModal = (props) => {
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [priority, setPriority] = React.useState(3);
  const titleController = (event) => {
    setTitle(event.target.value);
  };
  const descriptionController = (event) => {
    setDescription(event.target.value);
  };
  const changePriority = (event) => {
    setPriority(event.target.value);
  };
  const handleSubmit = () => {
    // Make axios request
    axios.post(process.env.REACT_APP_BACKEND_LINK + "/tasks/", {
      title: title,
      description: description,
      priority: priority,
      done: false,
      user: 1,
    });
    props.handleClose();
  };
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h6"
          style={{ textAlign: "center" }}
        >
          Add task
        </Typography>

        <Box
          component="form"
          // onSubmit={}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            required
            id="outlined-required"
            margin="normal"
            fullWidth
            label="Title"
            onChange={titleController}
          />
          <TextField
            required
            id="outlined-required"
            margin="normal"
            fullWidth
            label="Description"
            onChange={descriptionController}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={priority}
              label="Priority"
              onChange={changePriority}
            >
              <MenuItem value={1}>High</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>Low</MenuItem>
            </Select>
          </FormControl>
          <div style={{ textAlign: "right", marginTop: "10px" }}>
            <Button variant="contained" margin="normal" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddModal;
