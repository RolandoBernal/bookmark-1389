import React from 'react';

function Copyright() {
  const d = new Date();
  const fullYear = d.getFullYear();
  return (
    <p>
      Copyright © Rolando Bernal <span>{ fullYear }</span>
    </p>
  )
}

export default Copyright;
