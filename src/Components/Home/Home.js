import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Mind from '../Mind/Mind';
import Productivity from '../Productivity/Productivity';
import './Home.css';
import { textAlign } from '@mui/system';

export default function Home() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleTabChange = () => {};

  return (
    <div className="home-main">
      <Header />
      <Productivity />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={'value'} onChange={handleTabChange} aria-label="basic tabs example" centered>
            <Tab label="Mind" />
            <Tab label="Body" />
          </Tabs>
        </Box>
      </Box>
      <Switch>
        <Route exact path="/home" component={Landing} />
        <Route path="/home/mind" component={Mind} />
        <Route path="/home/body" component={Body} />
      </Switch>
    </div>
  );
}
