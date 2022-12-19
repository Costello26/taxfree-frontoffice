import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const languages = ["O'ZB", 'ENG', 'RU'];
export default function SelectSmall() {
  const [lang, setLang] = React.useState("O'ZB");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <FormControl
      sx={{
        mr: 3,
        minWidth: 94,
        boxShadow: '0px -1px 11px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#FFF',
        borderRadius: '20px',
        height: '42px',
      }}
    >
      <Select
        value={lang}
        onChange={handleChange}
        sx={{
          borderRadius: '20px',
          border: 'none',
          height: '42px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        {languages.map((val, index) => {
          return (
            <MenuItem value={val} key={index}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
