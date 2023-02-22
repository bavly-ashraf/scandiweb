import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PDP() {

  const location = useLocation();

  return <h1>This is PDP Page {location.state.prod}</h1>;
}