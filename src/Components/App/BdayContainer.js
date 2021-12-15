
const BdayContainer = ({ months }) => {
  const bdayMonths = months.map(month => {
    return (
      <div key={month.id} className="bday-month-container">
        <h3 className="month-name">{month.name}</h3>
      </div>
    )
  });

  return (
    <div className="BdayContainer"> 
      {bdayMonths}
    </div>
  );
}

export default BdayContainer;