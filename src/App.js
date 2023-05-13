import React, { useState } from 'react';
import Menu from './components/Menu';
import UserForm from './components/UserForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63', // Pink for Mother's Day theme
    },
    secondary: {
      main: '#ff5722', // A contrasting color
    },
    background: {
      default: '#ffebee', // Light pink background color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Great Vibes, cursive',
      fontSize: '3rem',
    },
    h2: {
      fontFamily: 'Great Vibes, cursive',
      fontSize: '2rem',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: '#e91e63',
          },
          '& .MuiInputBase-root': {
            color: '#e91e63',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e91e63',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff5722',
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff5722',
          },
        },
      },
    },
  },
});

const App = () => {
  const menuItems = [
    { id: 1, name: 'Pancakes', price: 0.00, category: 'Breakfast' },
    { id: 2, name: 'Cereal', price: 0.00, category: 'Breakfast' },
    { id: 3, name: 'Greek Yogurt & Granola', price: 0.00, category: 'Breakfast' },
    { id: 4, name: 'Cuban Toast', price: 0.00, category: 'Breakfast' },
    { id: 5, name: 'Publix Salad', price: 0.00, category: 'Lunch' },
    { id: 6, name: 'Ham & Cheese Sandwich', price: 0.00, category: 'Lunch' },
    { id: 7, name: 'Chicken Pita', price: 0.00, category: 'Lunch' },
    { id: 8, name: 'McDonald\'s', price: 0.00, category: 'Lunch' },
    { id: 9, name: 'Hibachi', price: 0.00, category: 'Dinner' },
    { id: 10, name: 'Manicotti', price: 0.00, category: 'Dinner' },
    { id: 11, name: 'Salmon', price: 0.00, category: 'Dinner' },
    { id: 11, name: 'Chef\'s Choice', price: 0.00, category: 'Dinner' },
    { id: 12, name: 'Tart Tray', price: 0.00, category: 'Dessert' },
    { id: 13, name: 'Ice Cream', price: 0.00, category: 'Dessert' },
    { id: 14, name: 'Mango Sorbet', price: 0.00, category: 'Dessert' },
    { id: 15, name: 'Reese\'s Peanut Butter Cups', price: 0.00, category: 'Dessert' },
  ];
  
  // Add state for selected menu items
  const [selectedItems, setSelectedItems] = useState([]);

  // Handler for checkbox change in Menu component
  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box mt={4}>
          <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
            <Typography variant="h1" component="h1" align="center" gutterBottom>
              Mother's Day
            </Typography>
            <Box mx={1}>
              <FavoriteIcon fontSize="large" color="primary" />
            </Box>
            <Typography variant="h1" component="h1" align="center" gutterBottom>
              Menu Order Form
            </Typography>
          </Box>          <Paper elevation={3}>
            <Box p={2}>
            <Menu menuItems={menuItems} handleCheckboxChange={handleCheckboxChange} />
            </Box>
          </Paper>
          <Box mt={2}>
            <Paper elevation={3}>
              <Box p={2}>
                <UserForm selectedItems={selectedItems} />
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
