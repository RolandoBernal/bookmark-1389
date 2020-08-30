import React from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

function Header() {
  return (
    <header className="app-header">
      <h3 className="current-time">
        {<CurrentDate />} <span className="divider"> | </span> {<CurrentTime />}
      </h3>
      <p className="app-link">
        ~ ★ ~ ★ ~ ★ ~ ★ ~ ★ ~
      </p>
    </header>
  )
}

export default Header;

