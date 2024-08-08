import { useState } from "react";
import "./dashboard.css";
import CreateAccount from "./CreateAccount.jsx";

import { Link } from "react-router-dom";

let data = [
  {
    AccountNo: 1222,
    Name: "Amar",
    Age: 23,
    AccountType: "Saving",
    Balance: 1000,
  },
  {
    AccountNo: 1223,
    Name: "Rishav",
    Age: 21,
    AccountType:"Saving",
    Balance: 2000,
  },
  {
    AccountNo: 1224,
    Name: "Vansh",
    Age: 24,
    AccountType: "Current",
    Balance: 2000,
  },
  {
    AccountNo: 1225,
    Name: "Ajay",
    Age: 26,
    AccountType: "Salary",
    Balance: 1500,
  },
  {
    AccountNo: 1226,
    Name: "Ritik",
    Age: 22,
    AccountType: "Current",
    Balance: 12000,
  },
  {
    AccountNo: 1227,
    Name: "Rajat",
    Age: 24,
    AccountType: "Current",
    Balance: 50000,
  },
  {
    AccountNo: 1228,
    Name: "Vivek",
    Age: 25,
    AccountType: "Saving",
    Balance: 50000,
  },
  {
    AccountNo: 1229,
    Name: "Rahul",
    Age: 27,
    AccountType: "Current",
    Balance: 10000,
  },
  {
    AccountNo: 1230,
    Name: "Manish  ",
    Age: 20,
    AccountType: "Saving",
    Balance: 50000,
  },
  {
    AccountNo: 1231,
    Name: "Hasrsh",
    Age: 21,
    AccountType: "Salary",
    Balance: 20000,
  },
  {
    AccountNo: 1232,
    Name: "Vinay",
    Age: 23,
    AccountType: "Current",
    Balance: 13000,
  },
  {
    AccountNo: 1233,
    Name: "Tarun",
    Age: 21,
    AccountType: "Salary",
    Balance: 28000,
  },

  {
    AccountNo: 1234,
    Name: "shiva",
    Age: 20,
    AccountType: "Saving",
    Balance: 1000,
  },
  {
    AccountNo: 1235,
    Name: "Dev",
    Age: 20,
    AccountType: "Current",
    Balance: 2000,
  },
  {
    AccountNo: 1236,
    Name: "Ravi",
    Age: 18,
    AccountType: "Current",
    Balance: 2500,
  },
  {
    AccountNo: 1237,
    Name: "Vansh",
    Age: 13,
    AccountType: "Saving",
    Balance: 5000,
  },
  {
    AccountNo: 1238,
    Name: "Vinay",
    Age: 45,
    AccountType: "Salary",
    Balance: 1200000,
  },
  {
    AccountNo: 1239,
    Name: "Neetu",
    Age: 40,
    AccountType: "Saving",
    Balance: 250000,
  },
  {
    AccountNo: 1240,
    Name: "Riti",
    Age: 50,
    AccountType: "Saving",
    Balance: 0.75,
  },
  {
    AccountNo: 1241,
    Name: "Mamta",
    Age: 28,
    AccountType: "Salary",
    Balance: 2500000,
  },
];
const Dasboard = () => {
  const [showdata, setshowdata] = useState(data);

  const Account = (val) => {
    let result = data.filter((item) => {
      if (item.AccountType == val) {
        return item;
      }
    });
    setshowdata(result);
  };

  const ResetData = () => {
    setshowdata(data);
  };

  return (
    <div>
      <nav className="nav-section">
        <div className="logo">
          <h1>BOI</h1>
          <span>Bank Of India</span>
        </div>
        <button><Link className="LInkCustom" to="/CreateAccount">Create Account</Link></button>
        <button>Deposite Amount</button>
        <button>Credit Amount</button>
      </nav>
      <div className="screen-wrapper">
        <section className="side-section">
          <div className="side-section-btns">
            <button onClick={ResetData}>All Data</button>
            <button onClick={() => Account("Saving")}>Saving Account</button>
            <br />
            <button onClick={() => Account("Salary")}>Salary Account</button>
            <br />
            <button onClick={() => Account("Current")}>Current Account</button>
          </div>
      
        </section>

        <div className="heading">
          <h3>ACCOUNT No.</h3>
          <h3>NAME</h3>
          <h3>AGE</h3>
          <h3>ACCOUNT TYPE</h3>
          <h3>BALANCE</h3>
        </div>
        <aside className="screen-section">
          {showdata.map((item, index) => (
            <div key={index} className="content">
              <h5>{item.AccountNo}</h5>
              <h5>{item.Name}</h5>
              <h5>{item.Age}</h5>
              <h5>{item.AccountType}</h5>
              <h5>{item.Balance}</h5>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default Dasboard;
