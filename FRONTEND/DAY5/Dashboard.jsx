// import React, { useState } from 'react';
// import './Dashboard.css';

// const UserDashboard = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     mobileNumber: '',
//     address: '',
//     dateOfBirth: ''
//     // Add more fields as needed
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here, e.g., send data to the server
//     console.log('Submitted data:', userData);
//   };

//   return (
//     <div className="user-dashboard">
//       <form onSubmit={handleSubmit}>
//         <div className="input-wrapper">
//           <label className="confirmPassword-label unique-label" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={userData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-wrapper">
//           <label className="confirmPassword-label unique-label" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={userData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-wrapper">
//           <label className="confirmPassword-label unique-label" htmlFor="password">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={userData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-wrapper">
//           <label className="confirmPassword-label unique-label" htmlFor="confirmPassword">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={userData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-wrapper">
//           <label className="confirmPassword-label unique-label" htmlFor="mobileNumber">
//             Mobile Number
//           </label>
//           <input
//             type="tel"
//             id="mobileNumber"
//             name="mobileNumber"
//             value={userData.mobileNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-wrapper">
//           <label className="confirmPassword-label unique-label" htmlFor="address">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={userData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-wrapper">
//           <label className="confirmPassword-label unique-label" htmlFor="dateOfBirth">
//             Date of Birth
//           </label>
//           <input
//             type="date"
//             id="dateOfBirth"
//             name="dateOfBirth"
//             value={userData.dateOfBirth}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UserDashboard;
