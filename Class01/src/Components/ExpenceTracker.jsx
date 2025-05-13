import React from 'react'

const ExpenceTracker = ({
    setAmount,
    setType,
    handleUpdateAddTransaction ,
    transaction ,
    amount,
    type,
    totalIncome,
    totalExpence,
    totalBalance,


}) => {

{
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
}

return (
<div className="text:sm flex justify-center items-center h-full bg-slate-200">
<div className="flex flex-col h-screen   bg-indigo-900 border-indigo-100 rounded-2xl px-5 py-30 gap-5 text-white">
<div className="flex gap-5">
<div className="border border-indigo-100 bg-indigo-600 px-10 py-2 p-4 rounded-sm">
    <h1>Total Income</h1>
    <h1>{totalIncome}</h1>
</div>

<div className="border border-indigo-100 bg-indigo-600 px-10 py-2 p-4 rounded-sm">
    <h1>Total Expence</h1>
    <h1>{totalExpence}</h1>
</div>

<div className={`border border-indigo-100 bg-indigo-600 px-10 py-2 p-4 rounded-sm ${totalBalance > 0 ? "text-green-500" : "text-red-500"}`}>
    <h1>Available Balance</h1>
    <h1>{totalBalance}</h1>
</div>
</div>

<input
value={amount}
onChange={(e) => setAmount(e.target.value)}
className="border border-indigo-100 px-10 py-2 rounded-xl bg-indigo-600 "
placeholder="Add Amount"
type="number"
/>
<select
onChange={(e) => setType(e.target.value)}
value={type}
className="border border-indigo-100 bg-indigo-600 px-10 py-2 rounded-xl"
>
<option value="Income">Income</option>
<option value="Expence">Expence</option>
</select>
<button
onClick={handleUpdateAddTransaction}
className="border border-indigo-100 bg-indigo-600 px-10 py-2 rounded-xl"
>
Submit
</button>
<div>
{transaction.map((data, index) => {
    return (
    <div key={index} className="flex gap-5">
        <h1 className="font-bold underline text-md h-full W-60">
        {index + 1}
        {")"} {data.amount}
        </h1>
        <h1
        className={`font-bold underline text-md 
${data.type === "Income" ? "text-green-500" : "text-red-500"}`}
        >
        {data.type}
        </h1>
    </div>
    );
})}
</div>
</div>
</div>
)
}

export default ExpenceTracker
