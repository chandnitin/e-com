import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';
import './main.css';
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent : "left",
    background: '#90caf9',
    height:"100%"
  },
  drawer : {
    paddingTop : "0px",
    width: "250px",
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,    
    background: '#407baa',
    margin:1,
    color:"#fff",
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  },
  btnRoot : {
    paddingLeft : "25px",
    justifyContent : "left !important"
  },
  subMenu : {
    paddingLeft : "50px !important",
  }
  
}));

export default useStyles;
