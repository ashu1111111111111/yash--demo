// give particular children as prop
import React from 'react';
// import './ContentArea.css'
const ContentArea = ({ content }) => {
  return <div className="content-area">{content}</div>;
};
export default ContentArea;