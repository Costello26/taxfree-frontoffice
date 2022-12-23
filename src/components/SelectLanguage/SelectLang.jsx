import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useDispatch, useSelector } from 'react-redux';
import { langActions } from '../../store/lang';

const languages = [
  { title: 'RU', idx: 0 },
  { title: "O'ZB", idx: 1 },
  { title: 'ENG', idx: 2 },
];

export default function SelectSmall() {
  const { selectedLang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  //console.log(selectedLang)
  const handleChange = (event) => {
    dispatch(langActions.setLang(event.target.value));
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
        value={languages[selectedLang].title}
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
            <MenuItem value={val.title} key={index}>
              {val.title}
            </MenuItem>
          );
        })}
      </Select>
      
    </FormControl>
  );
}
