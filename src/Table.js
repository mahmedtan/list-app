import React from "react";

const Head = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};
const Body = (props) => {
  const rows = props.charactersData.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.job}</td>
        <td>
          <button onClick={()=>props.removeCharacter(index)} >Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = props => {
    return (
      <div>
        <table>
          <Head />
          <Body charactersData={props.charactersData} removeCharacter={props.removeCharacter}/>
        </table>
      </div>
    );

}
export default Table;
