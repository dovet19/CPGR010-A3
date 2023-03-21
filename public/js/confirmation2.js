async function createPackage(packageInfoObj, setResult) {
  console.log(packageInfoObj);
  setResult("Account created");
}

const generateRandom = function () {
  return Math.random().toString(36).slice(6);
};

function MyButton({ onClick, children }) {
  return (
    <>
      <button className="btn btn-primary gap-4 m-3" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

function MyInput({ inputValue, inputLabel, inputType, setValue, readonly }) {
  return (
    <>
      <div className="col">
        <label className="form-lable">{inputLabel}</label>
        <input
          type={inputType}
          className="form-control"
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
          readOnly={readonly}
        />
      </div>
    </>
  );
}

function PackageCreateForm() {
  const [packageInfoObj, setPackageInfoObject] = React.useState({
    id: 0,
    name: "",
    price: "",
    startdate: "",
    enddate: "",
    image: {
      src: "",
      alt: "",
      size: { width: 300, height: 200 },
    },
    link: {
      description: "",
      text: "",
      url: "",
    },
  });
  const [result, setResult] = React.useState("");

  return (
    <>
      <img
        src="../img/complete.jpg"
        alt="Booking complete"
        className="img-fluid"
        style={{ maxWidth: "200%", maxHeight: "400px" }}
      />
      <div>
        <p> Your confirmation number is {generateRandom()} </p>
      </div>
      <div className="col-lg-4 col-md-6 gap-2">
        <MyInput
          inputValue={packageInfoObj.name}
          inputLabel="Enter a password to create an account"
          inputType="password"
          setValue={(value) =>
            setPackageInfoObject({
              ...packageInfoObj,
              name: value,
            })
          }
        />

        <MyButton onClick={() => createPackage(packageInfoObj, setResult)}>
          Submit
        </MyButton>

        <MyInput inputValue={result} readonly={true} />
      </div>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<PackageCreateForm />);
