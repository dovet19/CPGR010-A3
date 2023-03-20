async function createBooking(
  firstName,
  lastName,
  email,
  startDate,
  endDate,
  destination,
  payment,
  setResult
) {
  console.log(
    firstName,
    lastName,
    email,
    startDate,
    endDate,
    destination,
    payment.cardNumber,
    payment.expiryDate,
    payment.CVC
  );
  setResult("Booking Confirmed!");
}

function FormInput({
  label,
  inputType,
  placeholder,
  inputValue,
  handleChange,
  width,
}) {
  return (
    <>
      <div className={`col-sm-${width} mb-2`}>
        <label for={label} className="form-label">
          {placeholder}
        </label>
        <input
          type={inputType}
          id={label}
          className="form-control"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}

function BookingForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [payment, setPayment] = React.useState({
    cardNumber: "",
    expiryDate: "",
    CVC: "",
  });
  const [result, setResult] = React.useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and payment processing
  };

  return (
    <>
      {/* Add Navbar */}

      {/* Booking form */}
      <form onSubmit={handleSubmit} className="was-validated">
        {/* Booking information should come from the package detail page for the integrated final project */}
        <h3 className="mt-4">Booking Details</h3>
        <div className="row">
          <FormInput
            label="startDate"
            inputType="date"
            placeholder="Start Date"
            inputValue={startDate}
            handleChange={handleStartDateChange}
            width="4"
          />
          <FormInput
            label="endDate"
            inputType="date"
            placeholder="End Date"
            inputValue={endDate}
            handleChange={handleEndDateChange}
            width="4"
          />
        </div>
        <div className="row">
          <div className="col-sm-4 mb-2">
            <label for="destination" className="form-label">
              Destination:
            </label>
            <select
              value={destination}
              onChange={handleDestinationChange}
              id="destination"
              className="form-select">
              <option value="japan">Japan</option>
              <option value="mexico">Mexico</option>
              <option value="turkey">Turkey</option>
            </select>
          </div>
        </div>
        <div className="row">
          <FormInput
            label="firstName"
            inputType="text"
            placeholder="First Name"
            inputValue={firstName}
            handleChange={handleFirstNameChange}
            width="4"
          />
          <FormInput
            label="lastName"
            inputType="text"
            placeholder="Last Name"
            inputValue={lastName}
            handleChange={handleLastNameChange}
            width="4"
          />
        </div>
        <div className="row">
          <FormInput
            label="email"
            inputType="email"
            placeholder="Email Address"
            inputValue={email}
            handleChange={handleEmailChange}
            width="4"
          />
        </div>
        <hr />
        <h4>Payment Information</h4>
        <div className="row">
          <div className="col-sm-4 mb-2">
            <label for="cardNumber" className="form-label">
              Card Number:
            </label>
            <input
              className="form-control"
              type="number"
              id="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              value={payment.cardNumber}
              onChange={(e) =>
                setPayment({ ...payment, cardNumber: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 mb2">
            <label for="expiryDate" className="form-label">
              Expiry Date:
            </label>
            <input
              className="form-control"
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              value={payment.expiryDate}
              onChange={(e) =>
                setPayment({ ...payment, expiryDate: e.target.value })
              }
              required
            />
          </div>
          <div className="col-sm-2 mb2">
            <label for="cvc" className="form-label">
              CVC:
            </label>
            <input
              className="form-control"
              type="number"
              id="cvc"
              placeholder="CVC"
              value={payment.CVC}
              onChange={(e) => setPayment({ ...payment, CVC: e.target.value })}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-4"
          onClick={() =>
            createBooking(
              firstName,
              lastName,
              email,
              startDate,
              endDate,
              destination,
              payment,
              setResult
            )
          }>
          Book Now
        </button>
        <input
          className="form-control my-3"
          value={result}
          disabled
          readonly></input>
      </form>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<BookingForm />);
