import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import landingPageData from "./Content/WebData";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ExpenceTracker from "./Components/ExpenceTracker";

function App() {
// console.log("Landingpage", landingPageData);
// const { header, hero, features, testimonials } = landingPageData;

// useNumber with number
// const user = {
//   isLoggedIn: false,
// };

const [userName, setUserName] = useState(" ");
// const [counter, setCounter] = useState(0);

// const handleUpdateCounter = () => setCounter(counter + 1);

const [count, setCount] = useState(0);
const [text, setText] = useState("");
const [isRemebered, setRemebered] = useState(false);

// function handleClick() {
// setCount(count + 1);
// }

// const handleOnChangeInput = (e)=> setUserName(e.target.value)

// console.log(userName);

// const clickOnChange = (e)=> setText(e.target.value);

// const changeCheckbox = (e)=> setRemebered(e.target.checked);

const [amount, setAmount] = useState(0);
const [type, setType] = useState("Income");
const [transaction, setTransaction] = useState([]);
const handleUpdateAddTransaction = () => {
  console.log("Add Transaction", amount);
  console.log("Add Transaction", type);
  setTransaction([
    ...transaction,
    {
      amount: amount,
      type: type,
    },
  ]);
  setAmount("");
  setType("Income");
  console.log("Transaction", transaction);
};

const totalIncome = transaction.reduce(
  (acc, transaction) =>
    transaction.type == "Income" ? acc + Number(transaction.amount) : acc,
  0
);
const totalExpence = transaction.reduce(
  (acc, transaction) =>
    transaction.type == "Expence" ? acc + Number(transaction.amount) : acc,
  0
);
const totalBalance = totalIncome-totalExpence;
console.log("Total Income", totalIncome);
console.log("Total Expence", totalExpence);
console.log("Total Balance", totalBalance);


return (
  <>
  <ExpenceTracker 
  amount={amount}
  type={type}
    setAmount={setAmount}
    setType={setType}
    transaction={transaction}
    handleUpdateAddTransaction={handleUpdateAddTransaction}
    totalIncome={totalIncome}
    totalExpence={totalExpence}
    totalBalance={totalBalance}
  setTransaction={setTransaction}

  />

    {/* <div className="flex flex-col justify-center items-center h-screen bg-slate-100">

<input
  onChange={handleOnChangeInput}
  className="border border-purple-500 px-10 py-4 mb-5 text-white rounded-2xl bg-purple-800"
  value={userName}
  placeholder="Add Your Name"
/>

<input 
placeholder="Add Your Text"
value={text}
onChange={clickOnChange}
className="border border-purple-500 px-10 py-4 mb-5 text-white rounded-2xl bg-purple-800"
  />

<label>
  <input
  type="checkbox"
  checked={isRemebered}
  onChange={changeCheckbox}
  />
i Like to be remembered
<p> You {isRemebered ? 'liked' : 'did not like'} this.</p>


</label>
  <button className="text-xl text-white px-10 py-2 mb-5 rounded-3xl bg-purple-700 border border-purple-600" 
  onClick={() => setText('')}>
    Reset </button>

<button
  className=" flex justify-center items-center text-4xl px-5 py-4 bg-purple-700 border border-purple-600 rounded-2xl text-white uppercase hover:bg-purple-500"
  onClick={handleClick}
>
  You pressed me {count} times
</button>
</div> */}
    {/* use with input

<div className="flex flex-col justify-center items-center text-2xl">
<h2>{counter}</h2>
<input
  className="border border-purple-500"
  onChange={(e)=> console.log(e.target.value)}
  value={userName}
  placeholder="Add "
/>
<button onClick={handleUpdateCounter}>Update Counter{userName}</button>
</div>

<Header header={header} user={user} />
{/* Hero Section */}

    {/* <Hero hero={hero} /> */}
  </>
);
}

export default App;
