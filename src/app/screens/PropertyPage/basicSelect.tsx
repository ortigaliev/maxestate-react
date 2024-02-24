import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
  const [price, setPrice] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string);
  };

  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Default</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={price}
          label="Default"
          onChange={handleChange}
        >
          <MenuItem value={10}>Default</MenuItem>
          <MenuItem value={100}>Price-High to Low</MenuItem>
          <MenuItem value={1000}>Price-High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
