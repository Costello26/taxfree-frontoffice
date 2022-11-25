import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const languages = ["Uzb" , "Eng" , "Ru"]
export default function SelectSmall() {
  const [age, setAge] = React.useState('Uzb');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ mr: 3, minWidth: 120 , borderColor:"white"}} size="small">
      {/* <InputLabel id="demo-select-small">Age</InputLabel> */}
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        onChange={handleChange}
        sx={{borderRadius:"20px" ,boxShadow:"0 0 10px rgba(128, 128, 128, 0.567)" , borderColor:"white"}}
      >
        {
        languages.map((vl , i)=>{
        return(
            <MenuItem value={vl}>{vl}</MenuItem>
            )
    })
        }
      </Select>
    </FormControl>
  );
}