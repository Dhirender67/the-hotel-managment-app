function TodayItem({ todayActiviy }) {
  const { numNight, status, fullName } = todayActiviy;

  return (
    <>
      <h4>User Name {fullName}</h4>

      <p>{status === "Unconfirmed" && <strong> Arviving</strong>}</p>
      <p>{status === "checked-in" && <strong> Departing</strong>}</p>
      <h6>{numNight}</h6>
    </>
  );
}

export default TodayItem;
