import React, { StrictMode, Component } from 'react';
import { connect } from "react-redux";
import { Button, IconButton } from 'react-toolbox/lib/button/Button';

const MenuBar = () => (
  <div>
    <Button icon='' label='Add Data' raised primary />
    <Button icon='' label='Cluster Data' raised primary />
  </div>
);

export default MenuBar;

// import './assets/toolbox/theme.css';
// import theme from './toolbox/theme';

// const actions = [
//   { label: 'Alarm', raised: true, icon: 'access_alarm'},
//   { label: 'Location', raised: true, accent: true, icon: 'room'}
// ];

// <div>
//     <Navigation type='horizontal' actions={actions} />
//     <Navigation type='vertical'>
//       <Link href='http://' label='Inbox' icon='inbox' />
//       <Link href='http://' active label='Profile' icon='person' />
//     </Navigation>
//   </div>


// <Button href='http://github.com/javivelasco' target='_blank' raised>
//       Github
//     </Button>
//     <Button icon='bookmark' label='Bookmark' accent />
//     <IconButton icon='favorite' accent />
    // <Button icon='inbox' label='Inbox' flat />
    // <Button icon='add' floating />
    // <Button icon='add' floating accent mini />
    // <Button icon='add' label='Add this' flat primary />
    // <Button icon='add' label='Add this' flat disabled />