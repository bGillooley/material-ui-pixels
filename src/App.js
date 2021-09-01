import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    background: 'maroon',
    height: 64,
    borderRadius: 0,
    color:'white',
    boxShadow: 'inset -4px -4px 0 #990000',
    '&:hover': {
      background: '#660000',
      boxShadow: 'inset -5px -5px 0 #990000',
    } ,
    '&:before': {
      content:'""',
      width:'100%',
      height:'100%',
      position: 'absolute',
      boxSizing: 'content-box',
      top:'-4px',
      left:0,
      borderTop: '4px solid black',
      borderBottom: '4px solid black'
    },
    '&:after': {
      content:'""',
      width:'100%',
      height:'100%',
      position: 'absolute',
      boxSizing: 'content-box',
      top:0,
      left:'-4px',
      borderLeft: '4px solid black',
      borderRight: '4px solid black'
    }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload. And something like
          that. And something else
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <br/><br />
      <Button variant="contained"  className={classes.root}>Launch the motherfucker</Button>
    </div>
  );
}

export default App;
