
const BdayContainer = ({ months, birthdays }) => {
  const bdayMonths = months.map(month => {
    const matchingBirthdaysForThatMonth = birthdays.filter(birthday => birthday.month === month.id);

    return (
      <div key={month.id} className="bday-month-container">
        <h3 className="month-name">{month.name}</h3>
        {matchingBirthdaysForThatMonth.length ? 
          <div>
           {
              matchingBirthdaysForThatMonth.map(matchingBday => {
                return (
                  <p key={matchingBday.id}>{matchingBday.name}: {matchingBday.month}/{matchingBday.day}</p>
                )
              })
           } 
          </div> : <p className="no-birthdays-message">No birthdays this month</p>}
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