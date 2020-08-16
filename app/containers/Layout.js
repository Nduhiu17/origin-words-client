import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavMenu from './NavMenu';

export default function Layout(props) {
  return (
    <div>
      <NavMenu />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
