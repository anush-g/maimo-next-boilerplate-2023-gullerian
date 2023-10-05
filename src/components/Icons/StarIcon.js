import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarIcon = ({ className }) => (
  <FontAwesomeIcon icon={faStar} className={className} />
);

export default StarIcon;
