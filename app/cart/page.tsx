// 'use client'
// import { provinces } from '../../utils/Provinces';
// import { useState } from 'react';
// import Header from './Header'
// import Footer from './Footer'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// type FormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   province: string; // Add the 'province' field to the FormData type
//   zipCode: string;
// };

// const initialFormData: FormData = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   address: '',
//   province: '', // Add the 'province' field with an initial value of an empty string
//   zipCode: '',
// };

// const MyForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>(initialFormData);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   const [preferredDates, setPreferredDates] = useState<Date | null>(null);
//   const [showForm, setShowForm] = useState(true);

//   type AvailableTimeslots = {
//     [date: string]: string[];
//   };

//   const [paymentMethod, setPaymentMethod] = useState<string>('');

//   const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPaymentMethod(e.target.value);
//   };


//   const availableTimeslots: AvailableTimeslots = {
//     '2023-08-15': ['10:00 AM', '12:00 PM', '3:00 PM'],
//     '2023-08-16': ['9:00 AM', '11:00 AM', '2:00 PM'],
//     // Add more dates and their corresponding timeslots as needed
//   };
//   return (
//     <div>
//       <Header />
//       <div className="flex flex-col md:flex-row">
//         <div className="grow">

//           {/* Image */}
//           <div className="flex items-center flex-col justify-center bg-creamson glass m-10 ">
//             <h2 className="flex items-center text-center lg:text-4xl font-bold text-primary-color font-jakarta pb-10">
//               Delivery Information
//             </h2>
//             <form onSubmit={handleSubmit} className="w-3/4">
//               <div className="mb-4 flex">
//                 <div className="flex flex-col flex-1 mr-4">
//                   <label htmlFor="firstName" className="block mb-2 font-semibold text-gray-500">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     placeholder="Enter your first name"
//                     className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col flex-1">
//                   <label htmlFor="lastName" className="block mb-2 font-semibold text-gray-500">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     placeholder="Enter your last name"
//                     className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>


//               <div className="mb-4 flex pt-4">
//                 <div className="flex flex-col flex-1 mr-4">
//                   <label htmlFor="email" className="block mb-2 font-semibold text-gray-500">
//                     E-mail
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="sushilover@wasabi-bytes.com"
//                     name="email"
//                     className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col flex-1">
//                   <label htmlFor="lastName" className="block mb-2 font-semibold text-gray-500">
//                     Mobile
//                   </label>
//                   <input
//                     type="int"
//                     id="mobile"
//                     name="mobile"
//                     placeholder="236-XXX-XXXX"
//                     className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mb-4 flex pt-4">
//                 <div className="flex flex-col flex-1 mr-4">
//                   <label htmlFor="address" className="block mb-2 font-semibold text-gray-500">
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     placeholder="123 Downtown"
//                     name="address"
//                     className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                     value={formData.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col flex-1">
//                   <label htmlFor="lastName" className="block mb-2 font-semibold text-gray-500">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     placeholder="Vancouver"
//                     className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>



//               <div className="mb-4 flex">
//                 <div className="flex flex-col flex-1 mr-4">
//                   <label htmlFor="province" className="block mb-2 font-semibold text-gray-500 pr-2">
//                     Province
//                   </label>
//                   <select
//                     id="province"
//                     name="province"
//                     className="w-full px-4 py-2 border bg-white text-gray-400 focus:outline-none focus:border-primary-color focus:border-b-4"
//                     value={formData.province}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="" disabled>
//                       <p className="font-jakarta">Select your province</p>
//                     </option>
//                     {provinces.map((province) => (
//                       <option key={province} value={province}>
//                         {province}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="flex flex-col flex-1">
//                   <label htmlFor="lastName" className="block mb-2 font-semibold text-gray-500">
//                     Postal Code
//                   </label>
//                   <input
//                     type="text"
//                     id="zipCode"
//                     placeholder="123 456"
//                     name="zipCode"
//                     className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                     value={formData.zipCode}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//             </form>
//           </div>


//           <div className="flex items-center flex-col justify-center bg-creamson glass m-10">
//             <h2 className="text-center lg:text-4xl font-bold text-primary-color font-jakarta pb-10">
//               Schedule Delivery
//               {/* Toggle Button */}
//               <label className="relative inline-flex items-center mr-5 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   value=""
//                   className="sr-only peer"
//                   checked >
//                   <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
//                   <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Red</span>
//               </label>
//             </h2>


//             {showForm && (
//               <div className="form-content">
//                 <div className="mb-4 flex">
//                   {/* Notes (Allergies, etc.) */}
//                   <div className="flex flex-col flex-1 mr-4">
//                     <label htmlFor="notes" className="block mb-2 font-semibold text-gray-500">
//                       Notes (Allergies, etc.)
//                     </label>
//                     <input
//                       type="text"
//                       id="notes"
//                       name="notes"
//                       placeholder="Enter your notes"
//                       className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                       value={formData.notes}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   {/* Dates */}
//                   <div className="flex flex-col flex-1">
//                     <label htmlFor="dates" className="block mb-2 font-semibold text-gray-500">
//                       Dates
//                     </label>
//                     <DatePicker
//                       selected={preferredDates}
//                       onChange={(date) => setPreferredDates(date)}
//                       placeholderText="Select preferred dates"
//                       className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Timeslots Dropdown */}
//                 {preferredDates && (
//                   <div className="mb-4">
//                     <label htmlFor="timeslot" className="block mb-2 font-semibold text-gray-500">
//                       Timeslot
//                     </label>
//                     <select
//                       id="timeslot"
//                       name="timeslot"
//                       className="w-full px-4 py-2 border focus:outline-none focus:border-primary-color focus:border-b-4"
//                       value={formData.timeslot}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="" disabled>
//                         Select a timeslot
//                       </option>
//                       {availableTimeslots[preferredDates.toISOString().slice(0, 10)].map((time) => (
//                         <option key={time} value={time}>
//                           {time}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}
//               </div>
//             )}

//           </div>



//           <div className="flex items-center flex-col justify-center bg-creamson glass m-10">
//             <div className="flex flex-col">
//               <h2 className="text-center lg:text-4xl font-bold text-primary-color font-jakarta pb-10"> Payment Method </h2>
//               <div className="flex flex-row items-center mt-2">
//                 <div className="flex items-center ml-2">
//                   <input
//                     type="radio"
//                     id="cashOnDelivery"
//                     name="paymentMethod"
//                     value="Cash on Delivery"
//                     checked={paymentMethod === 'Cash on Delivery'}
//                     onChange={handlePaymentChange}
//                     className="mr-2"
//                   />
//                   <label htmlFor="cashOnDelivery">Cash on Delivery</label>
//                 </div>
//                 <div className="flex items-center ml-2">
//                   <input
//                     type="radio"
//                     id="posOnDelivery"
//                     name="paymentMethod"
//                     value="POS on Delivery"
//                     checked={paymentMethod === 'POS on Delivery'}
//                     onChange={handlePaymentChange}
//                     className="mr-2"
//                   />
//                   <label htmlFor="posOnDelivery">POS on Delivery</label>
//                 </div>

//                 <div className="flex items-center ml-2">
//                   <input
//                     type="radio"
//                     id="pOnline Payment"
//                     name="paymentMethod"
//                     value="Online Payment"
//                     checked={paymentMethod === 'POS on Delivery'}
//                     onChange={handlePaymentChange}
//                     className="mr-2"
//                   />
//                   <label htmlFor="posOnDelivery">Online Payment</label>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div className="flex mb-4 justify-around">
//             <button
//               type="submit"
//               className="flex items-center px-10 py-3 text-white bg-primary-color rounded-full hover:bg-opacity-70 focus:outline-none"
//             >
//               Save
//             </button>
//             {/* <button
//               type="submit"
//               className="flex items-center px-10 py-3 text-white bg-primary-color rounded-full hover:bg-opacity-80 focus:outline-none"
//             >
//               Discard
//             </button> */}
//           </div>
//         </div>



//         {/* Order Summary */}
//         <div className="bg-creamson glass m-10 w-1/4 p-6">
//           <h2 className="text-2xl font-bold text-primary-color">Order Summary</h2>
//           <div className="mt-4">
//             <div className="flex justify-between">
//               <p>Subtotal:</p>
//               <p>$100.00</p> {/* Replace this with the actual subtotal value */}
//             </div>
//             <div className="flex justify-between">
//               <p>Taxes:</p>
//               <p>$10.00</p> {/* Replace this with the actual taxes value */}
//             </div>
//             <div className="flex justify-between">
//               <p>Total:</p>
//               <p>$110.00</p> {/* Replace this with the actual total value */}
//             </div>
//           </div>
//         </div>
//       </div >
//       <Footer />
//     </>
//   );
// };

// export default MyForm;
