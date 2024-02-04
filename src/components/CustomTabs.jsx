import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import '../css/page/user.css'

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(19),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Profile" />
          <AntTab label="Notifications" />
          <AntTab label="Account" />
          <AntTab label="Security" />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
      <div >
      <div className="userTitleContainer">
        <div className='div-profile'>
          <h4 className='div-profile-details'><b>Profile Details</b></h4>
          <div className='div-set-lang'>Enter Your Profile Information</div>
          <div class="row">
                <div className='div-profile-img'>
                <label for="fname" >Profile Image</label></div>
                <div className='div-add-file'>
                  <div></div>
                  <button className="userCancelButton">Add File</button>
                  <div className='div-drag-drop'> Or drag and drop files</div>
                </div>
          </div>
          <div class="row">
            <div class="column">
                <label for="fname">First Name</label>
              <input type="text" id="fname" name="fname" />
              <label for="email">Email Address</label>
              <input type="text" id="lname" name="lname" />
            </div>
            <div class="column">
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lname" />
              <label for="phone">Phone Number</label>
              <input type="text" id="lname" name="phone" />
            </div>
            <hr />
          </div>
          <h4 className='div-profile-details'><b>Regional Settings</b></h4>
          <div className='div-set-lang'>Set Your language and timezone</div>
          <div class="row">
            <div class="column">
                <label for="fname">Language</label>
              <input type="text" id="fname" name="fname"  placeholder='English'/>
            </div>
            <div class="column">
              <label for="lname">Timezone</label>
              <input type="text" id="lname" name="lname" placeholder='GMT +02.00' />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}