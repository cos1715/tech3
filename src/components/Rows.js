import React from 'react';

const Rows = ({ lang }) => {
  const cvElements = lang.info.map(elem =>
    <tr key={elem.title}>
      <td>{elem.title}</td>
      <td>{elem.text}</td>
    </tr>
  );

  return cvElements;
};

export default Rows;