import React from "react";

export default function Cv({ articles }) {
  const cvElements = articles.map(elem =>
    <tr key={elem.id}>
      <td>{elem.title}</td>
      <td>{elem.text}</td>
    </tr>
  );

  return cvElements;
}

