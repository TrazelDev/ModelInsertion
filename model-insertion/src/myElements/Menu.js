import React from 'react';
import './Menu.css';
import './mainStyles.css';
import { Paper, Button, ButtonGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});


function Menu() {
  const mainBackgroundColor = "var(--background-primary-color)";
  const secondaryBackgroundColor = "var(--background-secondary-color)";
  const [currentPage, setCurrentPage] = React.useState(true); // true - insertion page, false - display page
  const classes = useStyles();


  const handleButtonClick = (page) => {
    // changing the value of currentPage to know what kind of page the main App will display
    if (page === "inputPage")
      setCurrentPage(true);
    else
      setCurrentPage(false);
  };

  const menuDisplay = (
    <Paper elevation={0} className="menu">
      <Button
        className={`${classes.root} ${'menu-button'}`}
        onClick={() => handleButtonClick('inputPage')}
      >
        Input Page
      </Button>
      <Button
        className={`${classes.root} ${'menu-button'}`}
        onClick={() => handleButtonClick('displayPage')}
      >
        Display Page
      </Button>
    </Paper>
  );

  return {
    menu: menuDisplay,
    currPageIndex: currentPage,
  };
}

export default Menu;
