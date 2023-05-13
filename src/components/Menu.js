import React from 'react';
import { Typography, FormControlLabel, Checkbox, Box, Paper } from '@mui/material';

const Menu = ({ menuItems, handleCheckboxChange }) => {
  const groupByCategory = (items) => {
    return items.reduce((result, item) => {
      if (!result[item.category]) {
        result[item.category] = [];
      }
      result[item.category].push(item);
      return result;
    }, {});
  };

  const groupedMenuItems = groupByCategory(menuItems);

  return (
    <Box>
      {Object.entries(groupedMenuItems).map(([category, items]) => (
        <Box key={category} mb={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            {category}
          </Typography>
          <Paper elevation={1}>
            <Box p={2}>
              {items.map((item) => (
                <Box key={item.id} display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id={item.id}
                        name={item.name}
                        value={item.name}
                        onChange={() => handleCheckboxChange(item)}
                        color="primary"
                      />
                    }
                    label={item.name}
                  />
                  <Typography variant="body1">${item.price.toFixed(2)}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default Menu;
