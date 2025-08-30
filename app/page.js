'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const flights = [
  {
    id:"0",
    from: "Cluj",
    to: "Vienna",
    price: "200",
    date: '2025-08-10'
  },
  {
    id:"1",
    from: "Cluj",
    to: "London",
    price: "250",
    date: '2025-08-11'
  },
  {
    id:"2",
    from: "Cluj",
    to: "London",
    price: "300",
    date: '2025-08-11'
  },
  {
    id:"3",
    from: "Vienna",
    to: "Cluj",
    price: "150",
    date: '2025-08-15'
  },
  {
    id:"4",
    from: "London",
    to:"Cluj",
    price: "200",
    date: '2025-08-16'
  }
];

export default function Home() {
  const [ from, setFrom ] = useState("");
  const [ results, setResults ] = useState([]);
  const [ status, setStatus ] = useState(false);
  const [ to, setTo ] = useState("");
  const [ selected, setSelected ] = useState(null);

  useEffect(() => {
    const filtered = flights.filter(flight => 
      ( flight.from.includes(from) && ( from || to ) ) &&
      ( flight.to.includes(to) && ( from || to ) )
    )
    .sort((a, b) => a.price - b.price);
    setResults(filtered);
    setStatus(true);
    setSelected(null);
  }, [from, to]);

  return (
    <section className="content-center flex justify-center w-screen h-full sm:h-screen bg-white">
    <div className="content-center">
      <h2 className="text-7xl mt-15 text-black text-center">Easy Plight</h2>
      <p className="text-sm text-gray-800 text-center pt-5"> Note that this website is in beta.</p>
      <div className="hidden sm:block sm:flex sm:justify-center px-[20%] w-screen py-10 text-base">
        <input 
          type="text"
          onChange={(e) => setFrom(e.target.value)} 
          className="w-auto p-2 text-center focus:outline-none bg-white shadow-md/10 rounded-full text-gray-900 text-lg" placeholder="Take off"/>

        <input 
          type="text"
          onChange={(e) => setTo(e.target.value)} 
          className="w-auto p-2 mt-5 sm:ml-5 sm:mt-0 text-center focus:outline-none bg-white  shadow-md/10 rounded-full text-gray-900 text-lg" placeholder="Destination"/>
      
      </div>

      <div className="block sm:hidden sm:flex sm:justify-center px-[15%] w-full text-base">
      <div className="w-auto px-0 py-10">
        <input 
          type="text"
          onChange={(e) => setFrom(e.target.value)} 
          className="w-full p-2 text-center focus:outline-none bg-white shadow-md/10 rounded-full text-gray-900 text-lg" placeholder="Take off"/>

        <input 
          type="text"
          onChange={(e) => setTo(e.target.value)} 
          className="w-full p-2 mt-5 sm:mt-0 text-center focus:outline-none bg-white  shadow-md/10 rounded-full text-gray-900 text-lg" placeholder="Destination"/>
      </div>
      </div>
      <div className="flex justify-center px-[15%] w-screen pb-10 text-black">
        {selected ? (
                  from || to ? ( <div className="sm:flex justify-center w-full">
                 <div className="w-full sm:flex sm:w-2xl bg-white"><div class="relative w-full sm:w-2xl overflow-x-auto shadow-md sm:rounded-lg"> <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-base text-gray-700 text-center uppercase text-gray-400">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                  From - To
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Price
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                        {results.map((flight, idx) => (
                              <tr class="text-base bg-white border-b text-center dark:bg-white dark:border-gray-200 border-gray-200 hover:bg-gray-100">
                                  <th scope="row" key={idx} class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-gray-900">
                                     <button onClick={() => setSelected(flight.id)}>
                                        {flight.from} - {flight.to}</button>
                                  </th>
                                  <td class="px-6 py-4 text-gray-900">
                                      {flight.price}
                                  </td>
                            </tr>
                          ))}
                        
                      </tbody>
                  </table>
                  
                  </div>
                  <div className="w-auto sm:w-4xl sm:mx-5 my-5 sm:my-0 py-10 px-10 rounded-lg shadow-md border border-solid border-black/[.02]">
                      <h1 className="text-2xl"> {results[selected].from} - {results[selected].to}</h1>
                      <div className="flex justify-center">
                            <span class="bg-blue-100 text-blue-800 shadow-xl/10 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 p-5 m-5 pb-0">{results[selected].date}</span>
                      </div>
                  </div>
                    </div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-lg">Unfortunately this is an error.</h2>
                    </div>
                  ) 
                  
              ) : (
                from || to ? ( <div className="sm:flex justify-center w-full">
                 <div class="relative w-full sm:w-md overflow-x-auto shadow-md sm:rounded-lg"> <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-base text-gray-700 text-center uppercase text-gray-400">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                  From - To
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Price
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                        {results.map((flight, idx) => (
                              <tr class="text-base bg-white border-b text-center dark:bg-white dark:border-gray-200 border-gray-200 hover:bg-gray-100">
                                  <th scope="row" key={idx} class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-gray-900">
                                     <button onClick={() => setSelected(flight.id)}>
                                        {flight.from} - {flight.to}</button>
                                  </th>
                                  <td class="px-6 py-4 text-gray-900">
                                      {flight.price}
                                  </td>
                            </tr>
                          ))}
                        
                      </tbody>
                  </table>
                  
                  </div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-lg">Welcome, Type your trip details above to continue</h2>
                    </div>
                  ) 
              )}
           {}
      </div>
    </div>
    </section>
  );
}
