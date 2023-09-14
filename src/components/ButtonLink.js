import React from 'react';
import Link from 'next/link';

const ButtonLink = ({ id }) => {
  return <Link className=' bg-pink-600 text-white max-w-[120px] border border-white border-solid py-2 px-3 rounded-3xl hover:bg-lime-400' href={`/show/${id}`}>View Show</Link>;
};

export default ButtonLink;
