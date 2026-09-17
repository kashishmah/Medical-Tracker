// /* =====================================================
//    MEDICAL TRACKER - STAGE 1
// ===================================================== */


// /* =====================================================
//    LOCAL STORAGE DATA
// ===================================================== */

// let medicines =
//     JSON.parse(localStorage.getItem("medicines")) || [];

// let appointments =
//     JSON.parse(localStorage.getItem("appointments")) || [];

// let healthRecords =
//     JSON.parse(localStorage.getItem("healthRecords")) || [];


// /* =====================================================
//    SAVE LOCAL STORAGE
// ===================================================== */

// function saveData() {

//     localStorage.setItem(
//         "medicines",
//         JSON.stringify(medicines)
//     );

//     localStorage.setItem(
//         "appointments",
//         JSON.stringify(appointments)
//     );

//     localStorage.setItem(
//         "healthRecords",
//         JSON.stringify(healthRecords)
//     );
// }
// /* =========================================================
//    GENERIC MODAL FUNCTIONS
//    ========================================================= */

// function openModal(modalId) {

//     const modal = document.getElementById(modalId);

//     if (!modal) {
//         console.error("Modal not found:", modalId);
//         return;
//     }

//     /*
//      * Reset editing mode when opening a new modal.
//      */
//     if (modalId === "medicineModal") {

//         currentEditingMedicineId = null;

//         const form =
//             document.getElementById("medicineForm");

//         if (form) {
//             form.reset();
//         }

//         const title =
//             modal.querySelector(".modal-header h2");

//         if (title) {
//             title.textContent = "Add Medicine";
//         }
//     }


//     if (modalId === "appointmentModal") {

//         currentEditingAppointmentId = null;

//         const form =
//             document.getElementById("appointmentForm");

//         if (form) {
//             form.reset();
//         }

//         const title =
//             modal.querySelector(".modal-header h2");

//         if (title) {
//             title.textContent = "Add Appointment";
//         }
//     }


//     if (modalId === "healthModal") {

//         currentEditingHealthId = null;

//         const form =
//             document.getElementById("healthForm");

//         if (form) {
//             form.reset();
//         }

//         const title =
//             modal.querySelector(".modal-header h2");

//         if (title) {
//             title.textContent =
//                 "Add Health Measurement";
//         }
//     }


//     modal.style.display = "flex";
// }


// function closeModal(modalId) {

//     const modal =
//         document.getElementById(modalId);

//     if (!modal) return;

//     modal.style.display = "none";

//     if (modalId === "medicineModal") {
//         currentEditingMedicineId = null;
//     }

//     if (modalId === "appointmentModal") {
//         currentEditingAppointmentId = null;
//     }

//     if (modalId === "healthModal") {
//         currentEditingHealthId = null;
//     }
// }

// /* =====================================================
//    NAVIGATION
// ===================================================== */

// const navItems =
//     document.querySelectorAll(".nav-item");

// const sections =
//     document.querySelectorAll(".page-section");

// const pageTitle =
//     document.getElementById("pageTitle");

// const pageSubtitle =
//     document.getElementById("pageSubtitle");


// const pageInformation = {

//     dashboard: {
//         title: "Dashboard",
//         subtitle: "Manage your health in one place."
//     },

//     medicines: {
//         title: "Medicine Tracker",
//         subtitle: "Manage your daily medicines and doses."
//     },

//     appointments: {
//         title: "Appointments",
//         subtitle: "Keep track of your doctor appointments."
//     },

//     health: {
//         title: "Health",
//         subtitle: "Track your important health measurements."
//     },

//     reports: {
//         title: "Medical Reports",
//         subtitle: "Upload and view your medical reports."
//     },

//     settings: {
//         title: "Settings",
//         subtitle: "Manage your Medical Tracker preferences."
//     }

// };


// navItems.forEach(item => {

//     item.addEventListener("click", function () {

//         const sectionId =
//             this.dataset.section;

//         navItems.forEach(nav => {
//             nav.classList.remove("active");
//         });

//         this.classList.add("active");

//         sections.forEach(section => {
//             section.classList.remove("active-section");
//         });

//         document
//             .getElementById(sectionId)
//             .classList.add("active-section");


//         pageTitle.textContent =
//             pageInformation[sectionId].title;

//         pageSubtitle.textContent =
//             pageInformation[sectionId].subtitle;

//     });

// });
// /* =====================================================
//    PROFILE DROPDOWN
// ===================================================== */

// const profileButton =
//     document.getElementById("profileButton");

// const profileDropdown =
//     document.getElementById("profileDropdown");


// profileButton.addEventListener(
//     "click",
//     function (event) {

//         event.stopPropagation();

//         profileDropdown.classList.toggle("show");

//     }
// );


// /* Close dropdown when clicking anywhere else */

// document.addEventListener(
//     "click",
//     function (event) {

//         if (
//             !event.target.closest(
//                 ".profile-container"
//             )
//         ) {

//             profileDropdown.classList.remove(
//                 "show"
//             );

//         }

//     }
// );


// /* =====================================================
//    PROFILE
// ===================================================== */

// // function openProfile() {

// //     profileDropdown.classList.remove("show");

// //     alert(
// //         "Profile page will be added in Stage 2."
// //     );

// // }


// function openProfile() {

//     // Close profile dropdown
//     const dropdown = document.getElementById("profileDropdown");

//     if (dropdown) {
//         dropdown.classList.remove("show");
//     }

//     // Hide all content sections
//     document.querySelectorAll(".content-section").forEach(section => {
//         section.style.display = "none";
//     });

//     // Show profile section
//     const profileSection = document.getElementById("profileSection");

//     if (profileSection) {
//         profileSection.style.display = "block";
//     }

//     // Load current user information
//     loadProfileData();
// }

// function loadProfileData() {

//     const currentUser = JSON.parse(
//         sessionStorage.getItem("medicalTrackerCurrentUser")
//     );

//     if (!currentUser) {
//         alert("Please login first.");
//         return;
//     }

//     const name = currentUser.name || "User";
//     const email = currentUser.email || "";

//     // Format name
//     const formattedName = name
//         .toLowerCase()
//         .split(/\s+/)
//         .map(word =>
//             word.charAt(0).toUpperCase() + word.slice(1)
//         )
//         .join(" ");

//     // Header
//     const profilePageName =
//         document.getElementById("profilePageName");

//     const profilePageEmail =
//         document.getElementById("profilePageEmail");

//     const profilePageAvatar =
//         document.getElementById("profilePageAvatar");

//     // Form
//     const profileNameInput =
//         document.getElementById("profileNameInput");

//     const profileEmailInput =
//         document.getElementById("profileEmailInput");

//     if (profilePageName)
//         profilePageName.textContent = formattedName;

//     if (profilePageEmail)
//         profilePageEmail.textContent = email;

//     if (profilePageAvatar)
//         profilePageAvatar.textContent =
//             formattedName.charAt(0).toUpperCase();

//     if (profileNameInput)
//         profileNameInput.value = formattedName;

//     if (profileEmailInput)
//         profileEmailInput.value = email;
// }

// function saveProfile() {

//     const currentUser = JSON.parse(
//         sessionStorage.getItem("medicalTrackerCurrentUser")
//     );

//     if (!currentUser) {
//         alert("Please login first.");
//         return;
//     }

//     const nameInput =
//         document.getElementById("profileNameInput");

//     const newName = nameInput.value.trim();

//     if (!newName) {
//         alert("Please enter your name.");
//         return;
//     }

//     // Format name
//     const formattedName = newName
//         .toLowerCase()
//         .split(/\s+/)
//         .map(word =>
//             word.charAt(0).toUpperCase() + word.slice(1)
//         )
//         .join(" ");

//     // Update current session
//     currentUser.name = formattedName;

//     sessionStorage.setItem(
//         "medicalTrackerCurrentUser",
//         JSON.stringify(currentUser)
//     );

//     // Also update registered users
//     const users =
//         JSON.parse(
//             localStorage.getItem("medicalTrackerUsers")
//         ) || [];

//     const userIndex = users.findIndex(
//         user => user.email === currentUser.email
//     );

//     if (userIndex !== -1) {
//         users[userIndex].name = formattedName;

//         localStorage.setItem(
//             "medicalTrackerUsers",
//             JSON.stringify(users)
//         );
//     }

//     // Update top-right profile
//     updateProfileDisplay();

//     // Reload profile information
//     loadProfileData();

//     alert("Profile updated successfully!");
// }

// // function selectFamilyProfile(profile) {

// //     sessionStorage.setItem(
// //         "medicalTrackerActiveProfile",
// //         profile
// //     );

// //     alert(profile + " profile selected.");
// // }
// function selectFamilyProfile(profile) {

//     /*
//      * Your HTML sends a string:
//      * "Self", "Mother", "Father", "Child"
//      */

//     const profileData = {
//         name: profile,
//         type: profile.toLowerCase()
//     };

//     sessionStorage.setItem(
//         "medicalTrackerActiveProfile",
//         JSON.stringify(profileData)
//     );

//     alert(
//         `${profile} profile selected.`
//     );

//     updateProfileDisplay();
// }
// function changePassword() {

//     const currentUser = JSON.parse(
//         sessionStorage.getItem("medicalTrackerCurrentUser")
//     );

//     if (!currentUser) {
//         alert("Please login first.");
//         return;
//     }

//     const currentPassword = prompt("Enter your current password:");

//     if (currentPassword !== currentUser.password) {
//         alert("Incorrect current password.");
//         return;
//     }

//     const newPassword = prompt(
//         "Enter your new password (minimum 6 characters):"
//     );

//     if (!newPassword || newPassword.length < 6) {
//         alert("Password must contain at least 6 characters.");
//         return;
//     }

//     currentUser.password = newPassword;

//     sessionStorage.setItem(
//         "medicalTrackerCurrentUser",
//         JSON.stringify(currentUser)
//     );

//     const users =
//         JSON.parse(
//             localStorage.getItem("medicalTrackerUsers")
//         ) || [];

//     const userIndex = users.findIndex(
//         user => user.email === currentUser.email
//     );

//     if (userIndex !== -1) {
//         users[userIndex].password = newPassword;

//         localStorage.setItem(
//             "medicalTrackerUsers",
//             JSON.stringify(users)
//         );
//     }

//     alert("Password changed successfully!");
// }

// /* =====================================================
//    SETTINGS
// ===================================================== */

// function openSettings() {

//     profileDropdown.classList.remove("show");

//     const settingsButton =
//         document.querySelector(
//             '[data-section="settings"]'
//         );

//     settingsButton.click();

// }


// /* =====================================================
//    LOGOUT
// ===================================================== */

// // function logout() {

// //     profileDropdown.classList.remove("show");

// //     const confirmed =
// //         confirm(
// //             "Are you sure you want to logout?"
// //         );


// //     if (!confirmed) return;


// //     alert(
// //         "Logout functionality will be added in Stage 2."
// //     );

// // }

// // function logout() {
// //     profileDropdown.classList.remove("show");

// //     const confirmed = confirm("Are you sure you want to logout?");

// //     if (!confirmed) return;

// //     // Mark user as logged out
// //     sessionStorage.removeItem("medicalTrackerLoggedIn");

// //     // Show login screen
// //     document.body.innerHTML = `
// //         <div class="login-page">
// //             <div class="login-card">
// //                 <div class="login-icon">🏥</div>

// //                 <h1>Medical Tracker</h1>
// //                 <p>You have been logged out successfully.</p>

// //                 <button class="btn btn-primary" onclick="loginAgain()">
// //                     Login Again
// //                 </button>
// //             </div>
// //         </div>
// //     `;
// // }

// // function loginAgain() {
// //     sessionStorage.setItem("medicalTrackerLoggedIn", "true");

// //     location.reload();
// // }



// /* =====================================================
//    LOGIN / REGISTRATION
// ===================================================== */

// /* Check whether a user is logged in */
// function isUserLoggedIn() {
//     return sessionStorage.getItem("medicalTrackerLoggedIn") === "true";
// }


// /* Get all registered users */
// function getRegisteredUsers() {
//     return JSON.parse(
//         localStorage.getItem("medicalTrackerUsers")
//     ) || [];
// }


// /* =========================
//    REGISTER
// ========================= */

// function registerUser() {

//     const name =
//         document.getElementById("registerName").value.trim();

//     const email =
//         document.getElementById("registerEmail")
//             .value.trim()
//             .toLowerCase();

//     const password =
//         document.getElementById("registerPassword").value;


//     if (!name || !email || !password) {
//         alert("Please fill in all fields.");
//         return;
//     }


//     /* Basic email validation */
//     // const emailPattern =
//     //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // if (!emailPattern.test(email)) {
//     //     alert("Please enter a valid email address.");
//     //     return;
//     // }

//     if (!isValidComEmail(email)) {

//     alert(
//         "Please enter a valid .com email address.\n\nExample: khushi@gmail.com"
//     );

//     return;
// }


//     /* Password validation */
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters.");
//         return;
//     }


//     const users = getRegisteredUsers();


//     /* Prevent duplicate email */
//     const existingUser =
//         users.find(user => user.email === email);


//     if (existingUser) {
//         alert(
//             "An account with this email already exists. Please login."
//         );

//         showLogin();
//         return;
//     }


//     /* Create user */
//     const newUser = {
//         id: Date.now(),
//         name: name,
//         email: email,
//         password: password,
//         createdAt: new Date().toISOString()
//     };


//     users.push(newUser);


//     localStorage.setItem(
//         "medicalTrackerUsers",
//         JSON.stringify(users)
//     );


//     /* Clear registration form */
//     document.getElementById("registerName").value = "";
//     document.getElementById("registerEmail").value = "";
//     document.getElementById("registerPassword").value = "";


//     alert(
//         "Registration successful! Please login with your email and password."
//     );


//     showLogin();
// }


// /* =========================
//    LOGIN
// ========================= */

// function loginUser() {

//     const email =
//         document.getElementById("loginEmail")
//             .value.trim()
//             .toLowerCase();

//     const password =
//         document.getElementById("loginPassword").value;

//     if (!isValidComEmail(email)) {

//     alert(
//         "Please enter a valid .com email address.\n\nExample: khushi@gmail.com"
//     );

//     return;


// }

// function showLoginScreen() {
//     const dropdown = document.getElementById("profileDropdown");

//     if (dropdown) {
//         dropdown.classList.remove("show");
//     }

//     showLogin();
// }


//     if (!email || !password) {
//         alert(
//             "Please enter your email and password."
//         );
//         return;
//     }


//     const users = getRegisteredUsers();


//     /* Find matching account */
//     const user =
//         users.find(
//             account =>
//                 account.email === email &&
//                 account.password === password
//         );


//     /* Invalid login */
//     if (!user) {

//         alert(
//             "Invalid email or password. Please try again."
//         );

//         return;
//     }


//     /* Save login session */
//     sessionStorage.setItem(
//         "medicalTrackerLoggedIn",
//         "true"
//     );


//     sessionStorage.setItem(
//         "medicalTrackerCurrentUser",
//         JSON.stringify({
//             id: user.id,
//             name: user.name,
//             email: user.email
//         })
//     );


//     /* Open application */
//     location.reload();
// }
// // function updateProfileDisplay() {
// //     const currentUser = JSON.parse(
// //         sessionStorage.getItem("medicalTrackerCurrentUser")
// //     );

// //     const profileName = document.getElementById("profileName");
// //     const profileAvatar = document.getElementById("profileAvatar");

// //     if (!profileName || !profileAvatar) return;

// //     if (currentUser && currentUser.name) {
// //         profileName.textContent = currentUser.name;
// //         profileAvatar.textContent =
// //             currentUser.name.trim().charAt(0).toUpperCase();
// //     } else {
// //         profileName.textContent = "User";
// //         profileAvatar.textContent = "U";
// //     }
// // }


// // function updateProfileDisplay() {
// //     const currentUser = JSON.parse(
// //         sessionStorage.getItem("medicalTrackerCurrentUser")
// //     );

// //     const profileName = document.getElementById("profileName");
// //     const profileAvatar = document.getElementById("profileAvatar");
// //     const loginButton = document.querySelector(".login-button");
// //     const logoutButton = document.querySelector(".logout-button");

// //     if (!profileName || !profileAvatar) return;
// // if (currentUser && currentUser.name) {
// //     profileName.textContent = currentUser.name;

// //     profileAvatar.textContent =
// //         currentUser.name.trim().charAt(0).toUpperCase();


// //         if (loginButton) loginButton.style.display = "none";
// //         if (logoutButton) logoutButton.style.display = "block";

// //     } else {
// //         profileName.textContent = "User";
// //         profileAvatar.textContent = "U";

// //         if (loginButton) loginButton.style.display = "block";
// //         if (logoutButton) logoutButton.style.display = "none";
// //     }

    
// // }

// function updateProfileDisplay() {
//     const currentUser = JSON.parse(
//         sessionStorage.getItem("medicalTrackerCurrentUser")
//     );

//     const profileName = document.getElementById("profileName");
//     const profileAvatar = document.getElementById("profileAvatar");
//     const loginButton = document.querySelector(".login-button");
//     const logoutButton = document.querySelector(".logout-button");

//     if (!profileName || !profileAvatar) return;

//     if (currentUser && currentUser.name) {

//         // Show user's name with first letter capital
//         const formattedName = currentUser.name
//             .toLowerCase()
//             .split(/\s+/)
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(" ");

//         profileName.textContent = formattedName;

//         // Show first letter in profile circle
//         profileAvatar.textContent =
//             formattedName.charAt(0).toUpperCase();

//         // User is logged in
//         if (loginButton) loginButton.style.display = "none";
//         if (logoutButton) logoutButton.style.display = "block";

//     } else {

//         // User is not logged in
//         profileName.textContent = "User";
//         profileAvatar.textContent = "U";

//         if (loginButton) loginButton.style.display = "block";
//         if (logoutButton) logoutButton.style.display = "none";
//     }
// }

// /* =========================
//    LOGOUT
// ========================= */

// function logout() {

//     if (!isUserLoggedIn()) {
//         return;
//     }


//     const confirmed =
//         confirm(
//             "Are you sure you want to logout?"
//         );


//     if (!confirmed) {
//         return;
//     }


//     /* Remove current session */
//     sessionStorage.removeItem(
//         "medicalTrackerLoggedIn"
//     );

//     sessionStorage.removeItem(
//         "medicalTrackerCurrentUser"
//     );


//     /* Show login screen */
//     showLoginScreen();
// }


// /* =========================
//    LOGIN SCREEN
// ========================= */

// function showLoginScreen() {

//     document.body.innerHTML = `

//         <div class="login-page">

//             <div class="login-card">

//                 <div class="login-icon">
//                     🏥
//                 </div>

//                 <h1>
//                     Welcome to Medical Tracker
//                 </h1>

//                 <p>
//                     Login to manage your health records,
//                     medicines and appointments.
//                 </p>


//                 <form
//                     id="loginForm"
//                     onsubmit="event.preventDefault(); loginUser();"
//                 >

//                     <div class="login-input-group">

//                         <label>
//                             Email Address
//                         </label>

                      

//                         <input
//     type="email"
//     id="loginEmail"
//     placeholder="Enter email (example@gmail.com)"
//     autocomplete="email"
//     pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com"
//     title="Please enter a valid .com email address"
//     required
// >

//                     </div>


//                     <div class="login-input-group">

//                         <label>
//                             Password
//                         </label>

//                         <div class="password-wrapper">

//                             <input
//                                 type="password"
//                                 id="loginPassword"
//                                 placeholder="Enter your password"
//                                 autocomplete="current-password"
//                                 required
//                             >


//                             <button
//                                 type="button"
//                                 class="password-toggle"
//                                 onclick="toggleLoginPassword()"
//                             >
//                                 👁
//                             </button>

//                         </div>

//                     </div>


//                     <button
//                         type="submit"
//                         class="login-submit-btn"
//                     >
//                         Login
//                     </button>

//                 </form>


//                 <p class="register-text">

//                     Don't have an account?

//                     <button
//                         type="button"
//                         onclick="showRegister()"
//                         class="register-link"
//                     >
//                         Create Account
//                     </button>

//                 </p>

//             </div>

//         </div>

//     `;
// }


// /* =========================
//    SHOW REGISTER
// ========================= */

// function showRegister() {

//     document.body.innerHTML = `

//         <div class="login-page">

//             <div class="login-card">

//                 <div class="login-icon">
//                     🏥
//                 </div>

//                 <h1>
//                     Create Account
//                 </h1>

//                 <p>
//                     Create your Medical Tracker account.
//                 </p>


//                 <form
//                     id="registerForm"
//                     onsubmit="event.preventDefault(); registerUser();"
//                 >

//                     <div class="login-input-group">

//                         <label>
//                             Full Name
//                         </label>

//                         <input
//                             type="text"
//                             id="registerName"
//                             placeholder="Enter your name"
//                             autocomplete="name"
//                             required
//                         >

//                     </div>


//                     <div class="login-input-group">

//                         <label>
//                             Email Address
//                         </label>

                        

//                                                     <input
//     type="email"
//     id="registerEmail"
//     placeholder="Enter email (example@gmail.com)"
//     autocomplete="email"
//     pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com"
//     title="Please enter a valid .com email address"
//     required
// >

//                     </div>


//                     <div class="login-input-group">

//                         <label>
//                             Password
//                         </label>

//                         <input
//                             type="password"
//                             id="registerPassword"
//                             placeholder="Minimum 6 characters"
//                             autocomplete="new-password"
//                             minlength="6"
//                             required
//                         >

//                     </div>


//                     <button
//                         type="submit"
//                         class="login-submit-btn"
//                     >
//                         Create Account
//                     </button>

//                 </form>


//                 <p class="register-text">

//                     Already have an account?

//                     <button
//                         type="button"
//                         onclick="showLogin()"
//                         class="register-link"
//                     >
//                         Login
//                     </button>

//                 </p>

//             </div>

//         </div>

//     `;
// }


// /* =========================
//    SHOW LOGIN
// ========================= */

// function showLogin() {
//     showLoginScreen();
// }


// /* =========================
//    PASSWORD VISIBILITY
// ========================= */

// function toggleLoginPassword() {

//     const password =
//         document.getElementById("loginPassword");

//     const button =
//         document.querySelector(".password-toggle");


//     if (!password) return;


//     if (password.type === "password") {

//         password.type = "text";

//         if (button) {
//             button.textContent = "🙈";
//         }

//     } else {

//         password.type = "password";

//         if (button) {
//             button.textContent = "👁";
//         }
//     }
// }


// /* =====================================================
//    CHECK LOGIN WHEN APPLICATION STARTS
// ===================================================== */

// (function checkLoginOnStartup() {

//     if (!isUserLoggedIn()) {

//         document.addEventListener(
//             "DOMContentLoaded",
//             function () {
//                 showLoginScreen();
//             },
//             { once: true }
//         );

//     }

// })();

// /* =========================
//    VALIDATE .COM EMAIL
// ========================= */

// function isValidComEmail(email) {

//     const emailPattern =
//         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

//     return emailPattern.test(email);
// }

// /* =====================================================
//    MODALS
// ===================================================== */

// function openModal(id) {

//     document
//         .getElementById(id)
//         .classList.add("active");
// }


// function closeModal(id) {

//     document
//         .getElementById(id)
//         .classList.remove("active");
// }


// /* Close modal when clicking outside */

// document.querySelectorAll(".modal").forEach(modal => {

//     modal.addEventListener("click", function (event) {

//         if (event.target === modal) {
//             modal.classList.remove("active");
//         }

//     });

// });


// /* =====================================================
//    MEDICINES
// ===================================================== */

// const medicineForm =
//     document.getElementById("medicineForm");


// medicineForm.addEventListener(
//     "submit",
//     function (event) {

//         event.preventDefault();


//         const medicine = {

//             id: Date.now(),

//             name:
//                 document
//                     .getElementById("medicineName")
//                     .value,

//             dose:
//                 document
//                     .getElementById("medicineDose")
//                     .value,

//             time:
//                 document
//                     .getElementById("medicineTime")
//                     .value,

//             frequency:
//                 document
//                     .getElementById("medicineFrequency")
//                     .value,

//             instructions:
//                 document
//                     .getElementById("medicineInstructions")
//                     .value,

//             taken: false,

//             createdAt:
//                 new Date().toLocaleDateString()

//         };


//         medicines.push(medicine);

//         saveData();

//         medicineForm.reset();

//         closeModal("medicineModal");

//         renderMedicines();

//         updateDashboard();

//     }
// );


// /* =====================================================
//    RENDER MEDICINES
// ===================================================== */

// function renderMedicines() {

//     const medicinesList =
//         document.getElementById("medicinesList");

//     const dashboardMedicines =
//         document.getElementById(
//             "dashboardMedicines"
//         );


//     medicinesList.innerHTML = "";

//     dashboardMedicines.innerHTML = "";


//     if (medicines.length === 0) {

//         medicinesList.innerHTML = `
//             <div class="empty-state">
//                 <p>No medicines added yet.</p>
//             </div>
//         `;

//         dashboardMedicines.innerHTML = `
//             <div class="empty-state">
//                 <p>No medicines added.</p>
//             </div>
//         `;

//         return;
//     }


//     medicines.forEach(medicine => {


//         /* MAIN MEDICINE CARD */

//         const card =
//             document.createElement("div");

//         card.className =
//             "medicine-card";


//         card.innerHTML = `

//             <div class="medicine-top">

//                 <div>

//                     <h3>
//                         ${escapeHTML(medicine.name)}
//                     </h3>

//                     <p>
//                         ${escapeHTML(medicine.dose)}
//                     </p>

//                 </div>

//                 <span class="badge">
//                     ${escapeHTML(medicine.frequency)}
//                 </span>

//             </div>


//             <p>
//                 🕐 ${escapeHTML(medicine.time)}
//             </p>


//             <p>
//                 📝 ${
//                     escapeHTML(
//                         medicine.instructions ||
//                         "No instructions"
//                     )
//                 }
//             </p>


//             <div class="card-actions">

//                 <button
//                     class="taken-button"
//                     onclick="toggleMedicine(${medicine.id})">

//                     ${
//                         medicine.taken
//                         ? "✓ Taken"
//                         : "Mark as Taken"
//                     }

//                 </button>


//                 <button
//                     class="delete-button"
//                     onclick="deleteMedicine(${medicine.id})">

//                     Delete

//                 </button>

//             </div>

//         `;


//         if (medicine.taken) {
//             card.classList.add("taken");
//         }


//         medicinesList.appendChild(card);


//         /* DASHBOARD ITEM */

//         const dashboardItem =
//             document.createElement("div");

//         dashboardItem.className =
//             "item";


//         dashboardItem.innerHTML = `

//             <div class="item-info">

//                 <div class="item-icon">
//                     💊
//                 </div>

//                 <div>

//                     <div class="item-title">
//                         ${escapeHTML(medicine.name)}
//                     </div>

//                     <div class="item-subtitle">
//                         ${escapeHTML(medicine.dose)}
//                         •
//                         ${escapeHTML(medicine.time)}
//                     </div>

//                 </div>

//             </div>


//             <button
//                 class="taken-button"
//                 onclick="toggleMedicine(${medicine.id})">

//                 ${
//                     medicine.taken
//                     ? "✓ Taken"
//                     : "Take"
//                 }

//             </button>

//         `;


//         dashboardMedicines.appendChild(
//             dashboardItem
//         );

//     });

// }


// /* =====================================================
//    TOGGLE MEDICINE
// ===================================================== */

// function toggleMedicine(id) {

//     const medicine =
//         medicines.find(item => item.id === id);

//     if (!medicine) return;

//     medicine.taken =
//         !medicine.taken;

//     saveData();

//     renderMedicines();

//     updateDashboard();
// }


// /* =====================================================
//    DELETE MEDICINE
// ===================================================== */

// function deleteMedicine(id) {

//     medicines =
//         medicines.filter(
//             medicine => medicine.id !== id
//         );

//     saveData();

//     renderMedicines();

//     updateDashboard();
// }


// /* =====================================================
//    APPOINTMENTS
// ===================================================== */

// const appointmentForm =
//     document.getElementById("appointmentForm");


// appointmentForm.addEventListener(
//     "submit",
//     function (event) {

//         event.preventDefault();


//         const appointment = {

//             id: Date.now(),

//             doctor:
//                 document
//                     .getElementById("doctorName")
//                     .value,

//             specialization:
//                 document
//                     .getElementById(
//                         "doctorSpecialization"
//                     )
//                     .value,

//             date:
//                 document
//                     .getElementById(
//                         "appointmentDate"
//                     )
//                     .value,

//             time:
//                 document
//                     .getElementById(
//                         "appointmentTime"
//                     )
//                     .value,

//             notes:
//                 document
//                     .getElementById(
//                         "appointmentNotes"
//                     )
//                     .value

//         };


//         appointments.push(appointment);

//         saveData();

//         appointmentForm.reset();

//         closeModal("appointmentModal");

//         renderAppointments();

//         updateDashboard();

//     }
// );


// /* =====================================================
//    RENDER APPOINTMENTS
// ===================================================== */

// function renderAppointments() {

//     const appointmentsList =
//         document.getElementById(
//             "appointmentsList"
//         );

//     const dashboardAppointments =
//         document.getElementById(
//             "dashboardAppointments"
//         );


//     appointmentsList.innerHTML = "";

//     dashboardAppointments.innerHTML = "";


//     if (appointments.length === 0) {

//         appointmentsList.innerHTML = `
//             <div class="empty-state">
//                 <p>No appointments added yet.</p>
//             </div>
//         `;

//         dashboardAppointments.innerHTML = `
//             <div class="empty-state">
//                 <p>No upcoming appointments.</p>
//             </div>
//         `;

//         return;
//     }


//     appointments.forEach(appointment => {


//         /* APPOINTMENT CARD */

//         const card =
//             document.createElement("div");

//         card.className =
//             "appointment-card";


//         card.innerHTML = `

//             <div class="appointment-top">

//                 <div>

//                     <h3>
//                         ${escapeHTML(
//                             appointment.doctor
//                         )}
//                     </h3>

//                     <p>
//                         ${escapeHTML(
//                             appointment.specialization ||
//                             "Doctor"
//                         )}
//                     </p>

//                 </div>

//                 <span class="badge">
//                     Appointment
//                 </span>

//             </div>


//             <p>
//                 📅 ${formatDate(
//                     appointment.date
//                 )}
//             </p>


//             <p>
//                 🕐 ${escapeHTML(
//                     appointment.time
//                 )}
//             </p>


//             <p>
//                 📝 ${
//                     escapeHTML(
//                         appointment.notes ||
//                         "No notes"
//                     )
//                 }
//             </p>


//             <div class="card-actions">

//                 <button
//                     class="delete-button"
//                     onclick="deleteAppointment(
//                         ${appointment.id}
//                     )">

//                     Delete

//                 </button>

//             </div>

//         `;


//         appointmentsList.appendChild(card);


//         /* DASHBOARD APPOINTMENT */

//         const item =
//             document.createElement("div");

//         item.className = "item";


//         item.innerHTML = `

//             <div class="item-info">

//                 <div class="item-icon">
//                     📅
//                 </div>

//                 <div>

//                     <div class="item-title">
//                         ${escapeHTML(
//                             appointment.doctor
//                         )}
//                     </div>

//                     <div class="item-subtitle">

//                         ${formatDate(
//                             appointment.date
//                         )}

//                         •

//                         ${escapeHTML(
//                             appointment.time
//                         )}

//                     </div>

//                 </div>

//             </div>

//         `;


//         dashboardAppointments.appendChild(item);

//     });

// }


// /* =====================================================
//    DELETE APPOINTMENT
// ===================================================== */

// function deleteAppointment(id) {

//     appointments =
//         appointments.filter(
//             appointment =>
//                 appointment.id !== id
//         );

//     saveData();

//     renderAppointments();

//     updateDashboard();
// }


// /* =====================================================
//    HEALTH RECORDS
// ===================================================== */

// const healthForm =
//     document.getElementById("healthForm");


// healthForm.addEventListener(
//     "submit",
//     function (event) {

//         event.preventDefault();


//         const record = {

//             id: Date.now(),

//             weight:
//                 document
//                     .getElementById("weight")
//                     .value,

//             heartRate:
//                 document
//                     .getElementById("heartRate")
//                     .value,

//             glucose:
//                 document
//                     .getElementById("glucose")
//                     .value,

//             bloodPressure:
//                 document
//                     .getElementById(
//                         "bloodPressure"
//                     )
//                     .value,

//             date:
//                 new Date().toLocaleDateString()

//         };


//         healthRecords.push(record);

//         saveData();

//         healthForm.reset();

//         closeModal("healthModal");

//         renderHealth();

//         updateDashboard();

//     }
// );


// /* =====================================================
//    RENDER HEALTH
// ===================================================== */

// function renderHealth() {

//     const history =
//         document.getElementById(
//             "healthHistory"
//         );


//     history.innerHTML = "";


//     if (healthRecords.length === 0) {

//         history.innerHTML = `
//             <div class="empty-state">
//                 <p>
//                     No health measurements recorded.
//                 </p>
//             </div>
//         `;

//         document.getElementById(
//             "latestWeight"
//         ).textContent = "--";

//         document.getElementById(
//             "latestHeartRate"
//         ).textContent = "--";

//         document.getElementById(
//             "latestGlucose"
//         ).textContent = "--";

//         document.getElementById(
//             "latestBP"
//         ).textContent = "--";

//         return;
//     }


//     /* Latest record */

//     const latest =
//         healthRecords[
//             healthRecords.length - 1
//         ];


//     document.getElementById(
//         "latestWeight"
//     ).textContent =
//         latest.weight || "--";


//     document.getElementById(
//         "latestHeartRate"
//     ).textContent =
//         latest.heartRate || "--";


//     document.getElementById(
//         "latestGlucose"
//     ).textContent =
//         latest.glucose || "--";


//     document.getElementById(
//         "latestBP"
//     ).textContent =
//         latest.bloodPressure || "--";


//     /* History header */

//     history.innerHTML = `

//         <div class="health-row">

//             <strong>Date</strong>

//             <strong>Weight</strong>

//             <strong>Heart Rate</strong>

//             <strong>Glucose</strong>

//             <strong>BP</strong>

//         </div>

//     `;


//     [...healthRecords]
//         .reverse()
//         .forEach(record => {

//             const row =
//                 document.createElement("div");

//             row.className =
//                 "health-row";


//             row.innerHTML = `

//                 <span>
//                     ${escapeHTML(record.date)}
//                 </span>

//                 <span>
//                     ${escapeHTML(
//                         record.weight || "--"
//                     )} kg
//                 </span>

//                 <span>
//                     ${escapeHTML(
//                         record.heartRate || "--"
//                     )} bpm
//                 </span>

//                 <span>
//                     ${escapeHTML(
//                         record.glucose || "--"
//                     )}
//                 </span>

//                 <span>
//                     ${
//                         escapeHTML(
//                             record.bloodPressure ||
//                             "--"
//                         )
//                     }

//                     <button
//                         class="health-delete"
//                         onclick="deleteHealthRecord(
//                             ${record.id}
//                         )">

//                         Delete

//                     </button>

//                 </span>

//             `;


//             history.appendChild(row);

//         });

// }


// /* =====================================================
//    DELETE HEALTH RECORD
// ===================================================== */

// function deleteHealthRecord(id) {

//     healthRecords =
//         healthRecords.filter(
//             record =>
//                 record.id !== id
//         );

//     saveData();

//     renderHealth();

//     updateDashboard();
// }


// /* =====================================================
//    DASHBOARD
// ===================================================== */

// function updateDashboard() {

//     document.getElementById(
//         "medicineCount"
//     ).textContent =
//         medicines.length;


//     document.getElementById(
//         "appointmentCount"
//     ).textContent =
//         appointments.length;


//     document.getElementById(
//         "healthCount"
//     ).textContent =
//         healthRecords.length;


//     /* Medicine adherence */

//     if (medicines.length === 0) {

//         document.getElementById(
//             "adherence"
//         ).textContent = "0%";

//     } else {

//         const taken =
//             medicines.filter(
//                 medicine =>
//                     medicine.taken
//             ).length;


//         const percentage =
//             Math.round(
//                 (taken / medicines.length) * 100
//             );


//         document.getElementById(
//             "adherence"
//         ).textContent =
//             percentage + "%";
//     }

// }


// /* =====================================================
//    INDEXEDDB FOR MEDICAL REPORTS
// ===================================================== */

// let reportDatabase;


// /*
//     IndexedDB allows us to store the actual uploaded
//     PDF/image file in the browser.

//     Unlike createObjectURL(), the report will still
//     exist after refreshing the page.
// */


// const request =
//     indexedDB.open(
//         "MedicalTrackerDB",
//         1
//     );


// request.onupgradeneeded = function (event) {

//     reportDatabase =
//         event.target.result;


//     if (
//         !reportDatabase.objectStoreNames.contains(
//             "reports"
//         )
//     ) {

//         reportDatabase.createObjectStore(
//             "reports",
//             {
//                 keyPath: "id"
//             }
//         );

//     }

// };


// request.onsuccess = function (event) {

//     reportDatabase =
//         event.target.result;

//     renderReports();

// };


// request.onerror = function () {

//     console.error(
//         "Could not open IndexedDB."
//     );

// };


// /* =====================================================
//    REPORT UPLOAD
// ===================================================== */

// const reportFile =
//     document.getElementById(
//         "reportFile"
//     );


// reportFile.addEventListener(
//     "change",
//     function () {

//         const file =
//             this.files[0];


//         if (!file) return;


//         /* Check file type */

//         const allowedTypes = [

//             "application/pdf",

//             "image/jpeg",

//             "image/png"

//         ];


//         if (
//             !allowedTypes.includes(
//                 file.type
//             )
//         ) {

//             alert(
//                 "Please upload a PDF, JPG or PNG file."
//             );

//             this.value = "";

//             return;
//         }


//         /* Maximum file size: 10 MB */

//         if (
//             file.size >
//             10 * 1024 * 1024
//         ) {

//             alert(
//                 "File size must be less than 10 MB."
//             );

//             this.value = "";

//             return;
//         }


//         const report = {

//             id: Date.now(),

//             name: file.name,

//             type: file.type,

//             size: file.size,

//             date:
//                 new Date().toLocaleDateString(),

//             file: file

//         };


//         const transaction =
//             reportDatabase.transaction(
//                 ["reports"],
//                 "readwrite"
//             );


//         const store =
//             transaction.objectStore(
//                 "reports"
//             );


//         store.add(report);


//         transaction.oncomplete =
//             function () {

//                 alert(
//                     "Report uploaded successfully!"
//                 );

//                 renderReports();

//             };


//         transaction.onerror =
//             function () {

//                 alert(
//                     "Could not save the report."
//                 );

//             };


//         this.value = "";

//     }
// );


// /* =====================================================
//    RENDER REPORTS
// ===================================================== */

// function renderReports() {

//     if (!reportDatabase) return;


//     const reportsList =
//         document.getElementById(
//             "reportsList"
//         );


//     reportsList.innerHTML = "";


//     const transaction =
//         reportDatabase.transaction(
//             ["reports"],
//             "readonly"
//         );


//     const store =
//         transaction.objectStore(
//             "reports"
//         );


//     const request =
//         store.getAll();


//     request.onsuccess =
//         function () {

//             const reports =
//                 request.result;


//             if (
//                 reports.length === 0
//             ) {

//                 reportsList.innerHTML = `

//                     <div class="empty-state">

//                         <div style="font-size:40px;">
//                             📄
//                         </div>

//                         <p>
//                             No medical reports uploaded yet.
//                         </p>

//                         <p style="font-size:13px;margin-top:8px;">
//                             Upload a PDF or image to get started.
//                         </p>

//                     </div>

//                 `;

//                 return;
//             }


//             reports
//                 .sort(
//                     (a, b) =>
//                         b.id - a.id
//                 )
//                 .forEach(
//                     report => {

//                         const card =
//                             document.createElement(
//                                 "div"
//                             );


//                         card.className =
//                             "report-card";


//                         card.innerHTML = `

//                             <div class="report-icon">

//                                 ${
//                                     report.type ===
//                                     "application/pdf"
//                                     ? "📕"
//                                     : "🖼️"
//                                 }

//                             </div>


//                             <div class="report-info">

//                                 <a
//                                     href="#"
//                                     class="report-name"
//                                     data-id="${report.id}">

//                                     ${escapeHTML(
//                                         report.name
//                                     )}

//                                 </a>


//                                 <span class="report-date">

//                                     Uploaded:
//                                     ${escapeHTML(
//                                         report.date
//                                     )}

//                                 </span>


//                                 <span class="report-type">

//                                     ${
//                                         report.type ===
//                                         "application/pdf"
//                                         ? "PDF Document"
//                                         : "Image"
//                                     }

//                                     •

//                                     ${formatFileSize(
//                                         report.size
//                                     )}

//                                 </span>

//                             </div>


//                             <button
//                                 class="delete-report"
//                                 onclick="deleteReport(
//                                     ${report.id}
//                                 )">

//                                 🗑️

//                             </button>

//                         `;


//                         const link =
//                             card.querySelector(
//                                 ".report-name"
//                             );


//                         link.addEventListener(
//                             "click",
//                             function (event) {

//                                 event.preventDefault();

//                                 openReport(
//                                     report.id
//                                 );

//                             }
//                         );


//                         reportsList.appendChild(
//                             card
//                         );

//                     }
//                 );

//         };

// }


// /* =====================================================
//    OPEN REPORT
// ===================================================== */

// function openReport(id) {

//     const transaction =
//         reportDatabase.transaction(
//             ["reports"],
//             "readonly"
//         );


//     const store =
//         transaction.objectStore(
//             "reports"
//         );


//     const request =
//         store.get(id);


//     request.onsuccess =
//         function () {

//             const report =
//                 request.result;


//             if (!report) {

//                 alert(
//                     "Report could not be found."
//                 );

//                 return;
//             }


//             /*
//                 Convert the stored File/Blob into
//                 a temporary URL.
//             */

//             const fileURL =
//                 URL.createObjectURL(
//                     report.file
//                 );


//             /*
//                 Open the report in a new browser tab.
//             */

//             const newWindow =
//                 window.open(
//                     fileURL,
//                     "_blank"
//                 );


//             if (!newWindow) {

//                 alert(
//                     "Please allow pop-ups to open the report."
//                 );

//             }

//         };

// }


// /* =====================================================
//    DELETE REPORT
// ===================================================== */

// function deleteReport(id) {

//     const confirmed =
//         confirm(
//             "Are you sure you want to delete this report?"
//         );


//     if (!confirmed) return;


//     const transaction =
//         reportDatabase.transaction(
//             ["reports"],
//             "readwrite"
//         );


//     const store =
//         transaction.objectStore(
//             "reports"
//         );


//     store.delete(id);


//     transaction.oncomplete =
//         function () {

//             renderReports();

//         };

// }


// /* =====================================================
//    FILE SIZE
// ===================================================== */

// function formatFileSize(bytes) {

//     if (bytes < 1024) {

//         return bytes + " B";

//     }


//     if (bytes < 1024 * 1024) {

//         return (
//             (bytes / 1024).toFixed(1)
//             + " KB"
//         );

//     }


//     return (
//         (bytes / (1024 * 1024)).toFixed(1)
//         + " MB"
//     );

// }


// /* =====================================================
//    FORMAT DATE
// ===================================================== */

// function formatDate(dateString) {

//     if (!dateString) {
//         return "--";
//     }


//     const date =
//         new Date(
//             dateString + "T00:00:00"
//         );


//     if (isNaN(date)) {
//         return dateString;
//     }


//     return date.toLocaleDateString(
//         "en-IN",
//         {
//             day: "numeric",
//             month: "short",
//             year: "numeric"
//         }
//     );

// }


// /* =====================================================
//    HTML SECURITY
// ===================================================== */

// function escapeHTML(value) {

//     if (value === null ||
//         value === undefined) {

//         return "";

//     }


//     return String(value)
//         .replace(
//             /&/g,
//             "&amp;"
//         )
//         .replace(
//             /</g,
//             "&lt;"
//         )
//         .replace(
//             />/g,
//             "&gt;"
//         )
//         .replace(
//             /"/g,
//             "&quot;"
//         )
//         .replace(
//             /'/g,
//             "&#039;"
//         );

// }


// /* =====================================================
//    CLEAR ALL DATA
// ===================================================== */

// function clearAllData() {

//     const confirmed =
//         confirm(
//             "This will delete all medicines, appointments, health records and uploaded reports. Continue?"
//         );


//     if (!confirmed) return;


//     /* Clear localStorage */

//     localStorage.removeItem(
//         "medicines"
//     );

//     localStorage.removeItem(
//         "appointments"
//     );

//     localStorage.removeItem(
//         "healthRecords"
//     );


//     medicines = [];

//     appointments = [];

//     healthRecords = [];


//     /* Clear IndexedDB reports */

//     if (reportDatabase) {

//         const transaction =
//             reportDatabase.transaction(
//                 ["reports"],
//                 "readwrite"
//             );


//         const store =
//             transaction.objectStore(
//                 "reports"
//             );


//         store.clear();

//     }


//     renderMedicines();

//     renderAppointments();

//     renderHealth();

//     renderReports();

//     updateDashboard();


//     alert(
//         "All data has been cleared."
//     );

// }


// /* =====================================================
//    INITIALIZE APPLICATION
// ===================================================== */

// renderMedicines();

// renderAppointments();

// renderHealth();

// updateDashboard();

// function registerUser() {
//     // const name = document.getElementById("registerName").value.trim();

//     const nameInput = document.getElementById("registerName").value.trim();

// const name = nameInput
//     .toLowerCase()
//     .split(/\s+/)
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
//     const email = document.getElementById("registerEmail").value.trim().toLowerCase();
//     const password = document.getElementById("registerPassword").value;

//     if (!name || !email || !password) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     const users =
//         JSON.parse(localStorage.getItem("medicalTrackerUsers")) || [];

//     const existingUser = users.find(user => user.email === email);

//     if (existingUser) {
//         alert("An account with this email already exists.");
//         return;
//     }

//     users.push({
//         name: name,
//         email: email,
//         password: password
//     });

//     localStorage.setItem(
//         "medicalTrackerUsers",
//         JSON.stringify(users)
//     );

//     alert("Registration successful! Please login.");

//     showLogin();
// }


// function loginUser() {
//     const email = document.getElementById("loginEmail")
//         .value.trim()
//         .toLowerCase();

//     const password =
//         document.getElementById("loginPassword").value;

//     if (!email || !password) {
//         alert("Please enter your email and password.");
//         return;
//     }

//     const users =
//         JSON.parse(localStorage.getItem("medicalTrackerUsers")) || [];

//     const user = users.find(
//         user =>
//             user.email === email &&
//             user.password === password
//     );

//     if (!user) {
//         alert("Invalid email or password.");
//         return;
//     }

//     sessionStorage.setItem(
//         "medicalTrackerLoggedIn",
//         "true"
//     );

//     sessionStorage.setItem(
//         "medicalTrackerCurrentUser",
//         JSON.stringify(user)
//     );

//     location.reload();
// }

// function enableNotifications() {

//     if (!("Notification" in window)) {
//         alert("Your browser does not support notifications.");
//         return;
//     }

//     Notification.requestPermission().then(permission => {

//         if (permission === "granted") {

//             new Notification("Medical Tracker", {
//                 body: "Notifications have been enabled successfully."
//             });

//             localStorage.setItem(
//                 "medicalTrackerNotifications",
//                 "enabled"
//             );

//         } else {
//             alert("Notification permission was denied.");
//         }
//     });
// }

// // function checkMedicineReminders() {

// //     const medicines =
// //         JSON.parse(localStorage.getItem("medicines")) || [];

// //     if (Notification.permission !== "granted") {
// //         return;
// //     }

// //     const now = new Date();

// //     const currentTime =
// //         now.getHours().toString().padStart(2, "0") +
// //         ":" +
// //         now.getMinutes().toString().padStart(2, "0");

// //     medicines.forEach(medicine => {

// //         if (medicine.time === currentTime &&
// //             !medicine.taken) {

// //             new Notification("💊 Medicine Reminder", {
// //                 body:
// //                     `Time to take ${medicine.name} - ${medicine.dosage}`
// //             });
// //         }
// //     });
// // }

// // setInterval(checkMedicineReminders, 60000);


// /* =====================================================
//    MEDICATION TIME REMINDERS
// ===================================================== */

// function checkMedicineReminders() {

//     // Get saved medicines
//     const medicines =
//         JSON.parse(localStorage.getItem("medicines")) || [];

//     // Notifications must be allowed
//     if (!("Notification" in window)) {
//         return;
//     }

//     if (Notification.permission !== "granted") {
//         return;
//     }

//     const now = new Date();

//     // Current date
//     const today =
//         now.getFullYear() +
//         "-" +
//         String(now.getMonth() + 1).padStart(2, "0") +
//         "-" +
//         String(now.getDate()).padStart(2, "0");

//     // Current time
//     const currentTime =
//         String(now.getHours()).padStart(2, "0") +
//         ":" +
//         String(now.getMinutes()).padStart(2, "0");

//     medicines.forEach(medicine => {

//         // Check whether medicine time matches current time
//         if (
//             medicine.time === currentTime &&
//             !medicine.taken
//         ) {

//             // Unique key prevents duplicate notification
//             const notificationKey =
//                 `medicineReminder_${medicine.id}_${today}_${currentTime}`;

//             // Don't show the same notification twice
//             if (
//                 localStorage.getItem(notificationKey)
//             ) {
//                 return;
//             }

//             // IMPORTANT:
//             // Your medicine object uses "dose", not "dosage"
//             const message =
//                 `Time to take ${medicine.name} - ${medicine.dose}`;

//             new Notification("💊 Medication Reminder", {
//                 body: message,
//                 icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E💊%3C/text%3E%3C/svg%3E"
//             });

//             // Remember that notification was already shown
//             localStorage.setItem(
//                 notificationKey,
//                 "shown"
//             );
//         }
//     });
// }


// /* Check every 30 seconds */
// setInterval(
//     checkMedicineReminders,
//     30000
// );


// /* Also check immediately when page loads */
// checkMedicineReminders();



// // function updateProfileDisplay() {
// //     const currentUser = JSON.parse(
// //         sessionStorage.getItem("medicalTrackerCurrentUser")
// //     );

// //     const profileName = document.getElementById("profileName");
// //     const profileAvatar = document.getElementById("profileAvatar");

// //     if (!profileName || !profileAvatar) return;

// //     if (currentUser && currentUser.name) {
// //         profileName.textContent = currentUser.name;

// //         // First letter of user's name
// //         profileAvatar.textContent =
// //             currentUser.name.trim().charAt(0).toUpperCase();
// //     } else {
// //         profileName.textContent = "User";
// //         profileAvatar.textContent = "U";
// //     }
// // }


// document.addEventListener("DOMContentLoaded", function () {
//     updateProfileDisplay();
// });




/* =====================================================
   MEDICAL TRACKER - STAGE 1
   PART 1
   LOGIN + REGISTRATION + PROFILE + NAVIGATION + MODALS
===================================================== */


/* =====================================================
   LOCAL STORAGE DATA
===================================================== */

let medicines =
    JSON.parse(localStorage.getItem("medicines")) || [];

let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

let healthRecords =
    JSON.parse(localStorage.getItem("healthRecords")) || [];

/* =====================================================
   EDITING IDs
===================================================== */

let currentEditingMedicineId = null;
let currentEditingAppointmentId = null;
let currentEditingHealthId = null;
/* =====================================================
   SAVE LOCAL STORAGE DATA
===================================================== */

function saveData() {

    localStorage.setItem(
        "medicines",
        JSON.stringify(medicines)
    );

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );

    localStorage.setItem(
        "healthRecords",
        JSON.stringify(healthRecords)
    );
}


/* =====================================================
   NAME FORMAT
   Example:
   khushi maheshwari
   →
   Khushi Maheshwari
===================================================== */

function formatName(name) {

    return String(name || "")
        .trim()
        .split(/\s+/)
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase()
        )
        .join(" ");
}


/* =====================================================
   EMAIL VALIDATION
   ONLY .COM EMAILS ARE ACCEPTED
===================================================== */

function isValidComEmail(email) {

    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

    return emailPattern.test(email);
}


/* =====================================================
   LOGIN STATUS
===================================================== */

function isUserLoggedIn() {

    return (
        localStorage.getItem(
            "medicalTrackerLoggedIn"
        ) === "true"
    );
}


/* =====================================================
   GET REGISTERED USERS
===================================================== */

function getRegisteredUsers() {

    return JSON.parse(
        localStorage.getItem(
            "medicalTrackerUsers"
        )
    ) || [];
}


/* =====================================================
   LOGIN SCREEN
===================================================== */

function showLoginScreen() {

    const dropdown =
        document.getElementById(
            "profileDropdown"
        );

    if (dropdown) {
        dropdown.classList.remove("show");
    }


    document.body.innerHTML = `

        <div class="login-page">

            <div class="login-card">

                <div class="login-icon">
                    🏥
                </div>

                <h1>
                    Welcome to Medical Tracker
                </h1>

                <p>
                    Login to manage your health records,
                    medicines and appointments.
                </p>

                <form
                    id="loginForm"
                    onsubmit="
                        event.preventDefault();
                        loginUser();
                    "
                >

                    <div class="login-input-group">

                        <label>
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="loginEmail"
                            placeholder="Enter email (example@gmail.com)"
                            autocomplete="email"
                            required
                        >

                    </div>


                    <div class="login-input-group">

                        <label>
                            Password
                        </label>

                        <div class="password-wrapper">

                            <input
                                type="password"
                                id="loginPassword"
                                placeholder="Enter your password"
                                autocomplete="current-password"
                                required
                            >

                            <button
                                type="button"
                                class="password-toggle"
                                onclick="toggleLoginPassword()"
                            >
                                👁
                            </button>

                        </div>

                    </div>


                    <button
                        type="submit"
                        class="login-submit-btn"
                    >
                        Login
                    </button>

                </form>


                <p class="register-text">

                    Don't have an account?

                    <button
                        type="button"
                        onclick="showRegister()"
                        class="register-link"
                    >
                        Create Account
                    </button>

                </p>

            </div>

        </div>

    `;
}


/* =====================================================
   REGISTER SCREEN
===================================================== */

function showRegister() {

    document.body.innerHTML = `

        <div class="login-page">

            <div class="login-card">

                <div class="login-icon">
                    🏥
                </div>

                <h1>
                    Create Account
                </h1>

                <p>
                    Create your Medical Tracker account.
                </p>


                <form
                    id="registerForm"
                    onsubmit="
                        event.preventDefault();
                        registerUser();
                    "
                >

                    <div class="login-input-group">

                        <label>
                            Full Name
                        </label>

                        <input
                            type="text"
                            id="registerName"
                            placeholder="Enter your name"
                            autocomplete="name"
                            required
                        >

                    </div>


                    <div class="login-input-group">

                        <label>
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="registerEmail"
                            placeholder="Enter email (example@gmail.com)"
                            autocomplete="email"
                            required
                        >

                    </div>


                    <div class="login-input-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            id="registerPassword"
                            placeholder="Minimum 6 characters"
                            autocomplete="new-password"
                            minlength="6"
                            required
                        >

                    </div>


                    <button
                        type="submit"
                        class="login-submit-btn"
                    >
                        Create Account
                    </button>

                </form>


                <p class="register-text">

                    Already have an account?

                    <button
                        type="button"
                        onclick="showLogin()"
                        class="register-link"
                    >
                        Login
                    </button>

                </p>

            </div>

        </div>

    `;
}


/* =====================================================
   SHOW LOGIN
===================================================== */

function showLogin() {

    showLoginScreen();
}


/* =====================================================
   REGISTER USER
===================================================== */

function registerUser() {

    const nameElement =
        document.getElementById(
            "registerName"
        );

    const emailElement =
        document.getElementById(
            "registerEmail"
        );

    const passwordElement =
        document.getElementById(
            "registerPassword"
        );


    if (
        !nameElement ||
        !emailElement ||
        !passwordElement
    ) {
        return;
    }


    const name =
        formatName(
            nameElement.value
        );

    const email =
        emailElement.value
            .trim()
            .toLowerCase();

    const password =
        passwordElement.value;


    /* Empty fields */

    if (
        !name ||
        !email ||
        !password
    ) {

        alert(
            "Please fill in all fields."
        );

        return;
    }


    /* .COM validation */

    if (
        !isValidComEmail(email)
    ) {

        alert(
            "Please enter a valid .com email address.\n\nExample: khushi@gmail.com"
        );

        return;
    }


    /* Password */

    if (
        password.length < 6
    ) {

        alert(
            "Password must be at least 6 characters."
        );

        return;
    }


    const users =
        getRegisteredUsers();


    /* Duplicate email */

    const existingUser =
        users.find(
            user =>
                user.email === email
        );


    if (existingUser) {

        alert(
            "An account with this email already exists. Please login."
        );

        showLogin();

        return;
    }


    /* Create account */

    const newUser = {

        id: Date.now(),

        name: name,

        email: email,

        password: password,

        createdAt:
            new Date().toISOString()

    };


    users.push(
        newUser
    );


    localStorage.setItem(
        "medicalTrackerUsers",
        JSON.stringify(users)
    );


    alert(
        "Registration successful! Please login with your email and password."
    );


    showLogin();
}


/* =====================================================
   LOGIN USER
===================================================== */

function loginUser() {

    const emailElement =
        document.getElementById(
            "loginEmail"
        );

    const passwordElement =
        document.getElementById(
            "loginPassword"
        );


    if (
        !emailElement ||
        !passwordElement
    ) {
        return;
    }


    const email =
        emailElement.value
            .trim()
            .toLowerCase();

    const password =
        passwordElement.value;


    /* Empty fields */

    if (
        !email ||
        !password
    ) {

        alert(
            "Please enter your email and password."
        );

        return;
    }


    /* .COM validation */

    if (
        !isValidComEmail(email)
    ) {

        alert(
            "Please enter a valid .com email address.\n\nExample: khushi@gmail.com"
        );

        return;
    }


    const users =
        getRegisteredUsers();


    /* Find user */

    const user =
        users.find(
            account =>
                account.email === email &&
                account.password === password
        );


    if (!user) {

        alert(
            "Invalid email or password. Please try again."
        );

        return;
    }


    /* Persistent login */

    localStorage.setItem(
        "medicalTrackerLoggedIn",
        "true"
    );


    /*
     * Save complete user object.
     * Password is needed for the Stage 1
     * change-password functionality.
     */

    localStorage.setItem(
        "medicalTrackerCurrentUser",
        JSON.stringify(user)
    );


    /* Open application */

    location.reload();
}


/* =====================================================
   PASSWORD VISIBILITY
===================================================== */

function toggleLoginPassword() {

    const password =
        document.getElementById(
            "loginPassword"
        );

    const button =
        document.querySelector(
            ".password-toggle"
        );


    if (!password) {
        return;
    }


    if (
        password.type === "password"
    ) {

        password.type = "text";

        if (button) {
            button.textContent = "🙈";
        }

    } else {

        password.type = "password";

        if (button) {
            button.textContent = "👁";
        }
    }
}


/* =====================================================
   NAVIGATION
===================================================== */
/* =====================================================
   NAVIGATION
===================================================== */

const navItems =
    document.querySelectorAll(".nav-item");

const sections =
    document.querySelectorAll(".page-section");

const pageTitle =
    document.getElementById("pageTitle");

const pageSubtitle =
    document.getElementById("pageSubtitle");


const pageInformation = {

    dashboard: {
        title: "Dashboard",
        subtitle: "Manage your health in one place."
    },

    medicines: {
        title: "Medicine Tracker",
        subtitle: "Manage your daily medicines and doses."
    },

    appointments: {
        title: "Appointments",
        subtitle: "Keep track of your doctor appointments."
    },

    health: {
        title: "Health",
        subtitle: "Track your important health measurements."
    },

    reports: {
        title: "Medical Reports",
        subtitle: "Upload and view your medical reports."
    },

    settings: {
        title: "Settings",
        subtitle: "Manage your Medical Tracker preferences."
    }

};


/* =====================================================
   SHOW NORMAL PAGE
===================================================== */

function showPage(sectionId) {

    // Hide profile page
    const profileSection =
        document.getElementById("profileSection");

    if (profileSection) {
        profileSection.style.display = "none";
        profileSection.classList.remove("active-section");
    }


    // Hide all normal sections
    sections.forEach(section => {

        section.style.display = "none";

        section.classList.remove(
            "active-section"
        );

    });


    // Remove active from all sidebar buttons
    navItems.forEach(nav => {

        nav.classList.remove("active");

    });


    // Find requested section
    const selectedSection =
        document.getElementById(sectionId);

    if (!selectedSection) {
        console.error(
            "Section not found:",
            sectionId
        );
        return;
    }


    // Show selected section
    selectedSection.style.display = "block";

    selectedSection.classList.add(
        "active-section"
    );


    // Activate sidebar button
    const selectedNav =
        document.querySelector(
            `.nav-item[data-section="${sectionId}"]`
        );

    if (selectedNav) {
        selectedNav.classList.add("active");
    }


    // Update header
    if (pageInformation[sectionId]) {

        pageTitle.textContent =
            pageInformation[sectionId].title;

        pageSubtitle.textContent =
            pageInformation[sectionId].subtitle;

    }

}


/* =====================================================
   SIDEBAR NAVIGATION
===================================================== */

navItems.forEach(item => {

    item.addEventListener(
        "click",
        function () {

            const sectionId =
                this.dataset.section;

            showPage(sectionId);

        }
    );

});
// const navItems =
//     document.querySelectorAll(
//         ".nav-item"
//     );

// const sections =
//     document.querySelectorAll(
//         ".page-section"
//     );

// const pageTitle =
//     document.getElementById(
//         "pageTitle"
//     );

// const pageSubtitle =
//     document.getElementById(
//         "pageSubtitle"
//     );


// const pageInformation = {

//     dashboard: {
//         title: "Dashboard",
//         subtitle:
//             "Manage your health in one place."
//     },

//     medicines: {
//         title: "Medicine Tracker",
//         subtitle:
//             "Manage your daily medicines and doses."
//     },

//     appointments: {
//         title: "Appointments",
//         subtitle:
//             "Keep track of your doctor appointments."
//     },

//     health: {
//         title: "Health",
//         subtitle:
//             "Track your important health measurements."
//     },

//     reports: {
//         title: "Medical Reports",
//         subtitle:
//             "Upload and view your medical reports."
//     },

//     settings: {
//         title: "Settings",
//         subtitle:
//             "Manage your Medical Tracker preferences."
//     }

// };


// navItems.forEach(
//     item => {

//         item.addEventListener(
//             "click",
//             function () {

//                 const sectionId =
//                     this.dataset.section;


//                 navItems.forEach(
//                     nav => {
//                         nav.classList.remove(
//                             "active"
//                         );
//                     }
//                 );


//                 this.classList.add(
//                     "active"
//                 );


//                 sections.forEach(
//                     section => {
//                         section.classList.remove(
//                             "active-section"
//                         );

//                         section.style.display = "";
//                     }
//                 );


//                 const target =
//                     document.getElementById(
//                         sectionId
//                     );


//                 if (target) {

//                     target.classList.add(
//                         "active-section"
//                     );

//                 }


//                 if (
//                     pageInformation[sectionId]
//                 ) {

//                     if (pageTitle) {

//                         pageTitle.textContent =
//                             pageInformation[
//                                 sectionId
//                             ].title;

//                     }


//                     if (pageSubtitle) {

//                         pageSubtitle.textContent =
//                             pageInformation[
//                                 sectionId
//                             ].subtitle;

//                     }

//                 }

//             }
//         );

//     }
// );


/* =====================================================
   PROFILE DROPDOWN
===================================================== */

function setupProfileDropdown() {

    const profileButton =
        document.getElementById(
            "profileButton"
        );

    const profileDropdown =
        document.getElementById(
            "profileDropdown"
        );


    if (
        !profileButton ||
        !profileDropdown
    ) {
        return;
    }


    profileButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            profileDropdown.classList.toggle(
                "show"
            );

        }
    );


    document.addEventListener(
        "click",
        function (event) {

            if (
                !event.target.closest(
                    ".profile-container"
                )
            ) {

                profileDropdown.classList.remove(
                    "show"
                );

            }

        }
    );
}


/* =====================================================
   UPDATE TOP PROFILE
===================================================== */

// function updateProfileDisplay() {

//     const currentUser =
//         JSON.parse(
//             localStorage.getItem(
//                 "medicalTrackerCurrentUser"
//             )
//         );


//     const profileName =
//         document.getElementById(
//             "profileName"
//         );

//     const profileAvatar =
//         document.getElementById(
//             "profileAvatar"
//         );


//     const loginButton =
//         document.querySelector(
//             ".login-button"
//         );

//     const logoutButton =
//         document.querySelector(
//             ".logout-button"
//         );


//     if (
//         !profileName ||
//         !profileAvatar
//     ) {
//         return;
//     }


//     if (
//         currentUser &&
//         currentUser.name
//     ) {

//         const formattedName =
//             formatName(
//                 currentUser.name
//             );


//         profileName.textContent =
//             formattedName;


//         profileAvatar.textContent =
//             formattedName
//                 .charAt(0)
//                 .toUpperCase();


//         if (loginButton) {
//             loginButton.style.display =
//                 "none";
//         }


//         if (logoutButton) {
//             logoutButton.style.display =
//                 "block";
//         }

//     } else {

//         profileName.textContent =
//             "User";

//         profileAvatar.textContent =
//             "U";


//         if (loginButton) {
//             loginButton.style.display =
//                 "block";
//         }


//         if (logoutButton) {
//             logoutButton.style.display =
//                 "none";
//         }
//     }
// }

/* =====================================================
   UPDATE NAVBAR PROFILE
===================================================== */

function updateProfileDisplay() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "medicalTrackerCurrentUser"
            )
        );


    const profileName =
        document.getElementById(
            "profileName"
        );


    const profileAvatar =
        document.getElementById(
            "profileAvatar"
        );


    if (!profileName ||
        !profileAvatar) {

        return;

    }


    /* User is not logged in */

    if (!currentUser) {

        profileName.textContent =
            "User";

        profileAvatar.textContent =
            "U";

        return;

    }


    /* Format account name */

    const formattedName =
        formatName(
            currentUser.name || "User"
        );


    /* Get selected family profile */

    const activeProfile =
        getActiveFamilyProfile();


    /*
     * Display:
     *
     * Khushi Maheshwari • Self
     * Khushi Maheshwari • Mother
     * Khushi Maheshwari • Father
     * Khushi Maheshwari • Child
     */

    profileName.textContent =
        `${formattedName} • ${activeProfile.name}`;


    /* Avatar uses account user's first letter */

    profileAvatar.textContent =
        formattedName
            .charAt(0)
            .toUpperCase();


    /* Login / Logout buttons */

    const loginButton =
        document.querySelector(
            ".login-button"
        );


    const logoutButton =
        document.querySelector(
            ".logout-button"
        );


    if (loginButton) {

        loginButton.style.display =
            "none";

    }


    if (logoutButton) {

        logoutButton.style.display =
            "block";

    }
}
/* =====================================================
   OPEN PROFILE
===================================================== */

// function openProfile() {

//     const dropdown =
//         document.getElementById(
//             "profileDropdown"
//         );


//     if (dropdown) {
//         dropdown.classList.remove(
//             "show"
//         );
//     }


//     document
//         .querySelectorAll(
//             ".page-section"
//         )
//         .forEach(
//             section => {

//                 section.classList.remove(
//                     "active-section"
//                 );

//                 section.style.display =
//                     "none";

//             }
//         );


//     const profileSection =
//         document.getElementById(
//             "profileSection"
//         );


//     if (profileSection) {

//         profileSection.style.display =
//             "block";

//         profileSection.classList.add(
//             "active-section"
//         );

//     }


//     if (pageTitle) {
//         pageTitle.textContent =
//             "My Profile";
//     }


//     if (pageSubtitle) {
//         pageSubtitle.textContent =
//             "Manage your personal account information";
//     }


//     loadProfileData();
// }

function openProfile() {

    // Close profile dropdown
    const dropdown = document.getElementById("profileDropdown");

    if (dropdown) {
        dropdown.classList.remove("show");
    }

    // Remove active state from sidebar navigation
    navItems.forEach(item => {
        item.classList.remove("active");
    });

    // Hide ALL page sections
    sections.forEach(section => {
        section.classList.remove("active-section");
    });

    // Hide profile section too
    const profileSection =
        document.getElementById("profileSection");

    if (profileSection) {
        profileSection.classList.remove("active-section");
        profileSection.style.display = "block";
    }

    // Hide every other section explicitly
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show profile page
    if (profileSection) {
        profileSection.style.display = "block";
    }

    // Change header title
    pageTitle.textContent = "My Profile";
    pageSubtitle.textContent =
        "Manage your personal account information";

    // Load user information
    loadProfileData();
}
/* =====================================================
   LOAD PROFILE DATA
===================================================== */

function loadProfileData() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "medicalTrackerCurrentUser"
            )
        );


    if (!currentUser) {

        alert(
            "Please login first."
        );

        return;
    }


    const formattedName =
        formatName(
            currentUser.name
        );

    const email =
        currentUser.email || "";


    const profilePageName =
        document.getElementById(
            "profilePageName"
        );

    const profilePageEmail =
        document.getElementById(
            "profilePageEmail"
        );

    const profilePageAvatar =
        document.getElementById(
            "profilePageAvatar"
        );

    const profileNameInput =
        document.getElementById(
            "profileNameInput"
        );

    const profileEmailInput =
        document.getElementById(
            "profileEmailInput"
        );


    if (profilePageName) {

        profilePageName.textContent =
            formattedName;

    }


    if (profilePageEmail) {

        profilePageEmail.textContent =
            email;

    }


    if (profilePageAvatar) {

        profilePageAvatar.textContent =
            formattedName
                .charAt(0)
                .toUpperCase();

    }


    if (profileNameInput) {

        profileNameInput.value =
            formattedName;

    }


    if (profileEmailInput) {

        profileEmailInput.value =
            email;

    }
    const activeProfile =
    getActiveFamilyProfile();


const selectedProfileElement =
    document.getElementById(
        "selectedFamilyProfile"
    );


if (selectedProfileElement) {

    selectedProfileElement.textContent =
        activeProfile.name;

}
}


/* =====================================================
   SAVE PROFILE
===================================================== */

function saveProfile() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "medicalTrackerCurrentUser"
            )
        );


    if (!currentUser) {

        alert(
            "Please login first."
        );

        return;
    }


    const nameInput =
        document.getElementById(
            "profileNameInput"
        );


    if (!nameInput) {
        return;
    }


    const newName =
        formatName(
            nameInput.value
        );


    if (!newName) {

        alert(
            "Please enter your name."
        );

        return;
    }


    currentUser.name =
        newName;


    localStorage.setItem(
        "medicalTrackerCurrentUser",
        JSON.stringify(currentUser)
    );


    const users =
        getRegisteredUsers();


    const userIndex =
        users.findIndex(
            user =>
                user.email ===
                currentUser.email
        );


    if (
        userIndex !== -1
    ) {

        users[userIndex].name =
            newName;


        localStorage.setItem(
            "medicalTrackerUsers",
            JSON.stringify(users)
        );

    }


    updateProfileDisplay();

    loadProfileData();


    alert(
        "Profile updated successfully!"
    );
}


/* =====================================================
   FAMILY PROFILE
===================================================== */

// function selectFamilyProfile(profile) {

//     const profileData = {

//         name: profile,

//         type:
//             String(profile)
//                 .toLowerCase()

//     };


//     sessionStorage.setItem(
//         "medicalTrackerActiveProfile",
//         JSON.stringify(profileData)
//     );


//     alert(
//         `${profile} profile selected.`
//     );
// }

/* =====================================================
   FAMILY PROFILE
===================================================== */

function getActiveFamilyProfile() {

    const saved =
        localStorage.getItem(
            "medicalTrackerActiveProfile"
        );


    if (!saved) {

        return {
            name: "Self",
            type: "self"
        };

    }


    try {

        return JSON.parse(saved);

    } catch (error) {

        return {
            name: "Self",
            type: "self"
        };

    }

}

/* =====================================================
   SELECT FAMILY PROFILE
===================================================== */

function selectFamilyProfile(profile) {

    const profileData = {

        name: profile,

        type:
            profile
                .toLowerCase()

    };


    localStorage.setItem(
        "medicalTrackerActiveProfile",
        JSON.stringify(profileData)
    );


    /* Update navbar immediately */
    updateProfileDisplay();


    /* Close dropdown */
    const dropdown =
        document.getElementById(
            "profileDropdown"
        );

    if (dropdown) {
        dropdown.classList.remove("show");
    }


    /* Update profile page if it is open */
    if (
        document.getElementById(
            "profileSection"
        )
    ) {

        loadProfileData();

    }


    alert(
        `${profile} profile selected.`
    );
}

/* =====================================================
   CHANGE PASSWORD
===================================================== */

function changePassword() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "medicalTrackerCurrentUser"
            )
        );


    if (!currentUser) {

        alert(
            "Please login first."
        );

        return;
    }


    const currentPassword =
        prompt(
            "Enter your current password:"
        );


    if (
        currentPassword === null
    ) {
        return;
    }


    if (
        currentPassword !==
        currentUser.password
    ) {

        alert(
            "Incorrect current password."
        );

        return;
    }


    const newPassword =
        prompt(
            "Enter your new password (minimum 6 characters):"
        );


    if (
        newPassword === null
    ) {
        return;
    }


    if (
        newPassword.length < 6
    ) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }


    currentUser.password =
        newPassword;


    localStorage.setItem(
        "medicalTrackerCurrentUser",
        JSON.stringify(currentUser)
    );


    const users =
        getRegisteredUsers();


    const userIndex =
        users.findIndex(
            user =>
                user.email ===
                currentUser.email
        );


    if (
        userIndex !== -1
    ) {

        users[userIndex].password =
            newPassword;


        localStorage.setItem(
            "medicalTrackerUsers",
            JSON.stringify(users)
        );

    }


    alert(
        "Password changed successfully!"
    );
}


/* =====================================================
   OPEN SETTINGS
===================================================== */

function openSettings() {

    const dropdown =
        document.getElementById(
            "profileDropdown"
        );


    if (dropdown) {
        dropdown.classList.remove(
            "show"
        );
    }


    const settingsButton =
        document.querySelector(
            '[data-section="settings"]'
        );


    if (settingsButton) {
        settingsButton.click();
    }
}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    if (!isUserLoggedIn()) {
        return;
    }


    const confirmed =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmed) {
        return;
    }


    localStorage.removeItem(
        "medicalTrackerLoggedIn"
    );

    localStorage.removeItem(
        "medicalTrackerCurrentUser"
    );


    sessionStorage.removeItem(
        "medicalTrackerActiveProfile"
    );


    showLoginScreen();
}


/* =====================================================
   GENERIC MODAL
===================================================== */

// let currentEditingMedicineId = null;

// let currentEditingAppointmentId = null;

// let currentEditingHealthId = null;


function openModal(modalId) {

    const modal =
        document.getElementById(
            modalId
        );


    if (!modal) {

        console.error(
            "Modal not found:",
            modalId
        );

        return;
    }


    if (
        modalId ===
        "medicineModal"
    ) {

        currentEditingMedicineId =
            null;

        const form =
            document.getElementById(
                "medicineForm"
            );

        if (form) {
            form.reset();
        }

        const title =
            modal.querySelector(
                ".modal-header h2"
            );

        if (title) {
            title.textContent =
                "Add Medicine";
        }
    }


    if (
        modalId ===
        "appointmentModal"
    ) {

        currentEditingAppointmentId =
            null;

        const form =
            document.getElementById(
                "appointmentForm"
            );

        if (form) {
            form.reset();
        }

        const title =
            modal.querySelector(
                ".modal-header h2"
            );

        if (title) {
            title.textContent =
                "Add Appointment";
        }
    }


    if (
        modalId ===
        "healthModal"
    ) {

        currentEditingHealthId =
            null;

        const form =
            document.getElementById(
                "healthForm"
            );

        if (form) {
            form.reset();
        }

        const title =
            modal.querySelector(
                ".modal-header h2"
            );

        if (title) {
            title.textContent =
                "Add Health Measurement";
        }
    }


    modal.classList.add(
        "active"
    );
}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal(modalId) {

    const modal =
        document.getElementById(
            modalId
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    if (
        modalId ===
        "medicineModal"
    ) {
        currentEditingMedicineId =
            null;
    }


    if (
        modalId ===
        "appointmentModal"
    ) {
        currentEditingAppointmentId =
            null;
    }


    if (
        modalId ===
        "healthModal"
    ) {
        currentEditingHealthId =
            null;
    }
}

/* =====================================================
   MODAL FUNCTIONS
===================================================== */

function openModal(modalId) {

    const modal = document.getElementById(modalId);

    if (!modal) {
        console.error("Modal not found:", modalId);
        return;
    }

    /* -----------------------------
       MEDICINE MODAL
    ----------------------------- */

    if (modalId === "medicineModal") {

        currentEditingMedicineId = null;

        const form =
            document.getElementById("medicineForm");

        if (form) {
            form.reset();
        }

        const title =
            modal.querySelector(".modal-header h2");

        if (title) {
            title.textContent = "Add Medicine";
        }
    }


    /* -----------------------------
       APPOINTMENT MODAL
    ----------------------------- */

    if (modalId === "appointmentModal") {

        currentEditingAppointmentId = null;

        const form =
            document.getElementById("appointmentForm");

        if (form) {
            form.reset();
        }

        const title =
            modal.querySelector(".modal-header h2");

        if (title) {
            title.textContent = "Add Appointment";
        }
    }


    /* -----------------------------
       HEALTH MODAL
    ----------------------------- */

    if (modalId === "healthModal") {

        currentEditingHealthId = null;

        const form =
            document.getElementById("healthForm");

        if (form) {
            form.reset();
        }

        const title =
            modal.querySelector(".modal-header h2");

        if (title) {
            title.textContent = "Add Health Measurement";
        }
    }


    modal.classList.add("active");
}


function closeModal(modalId) {

    const modal =
        document.getElementById(modalId);

    if (!modal) return;

    modal.classList.remove("active");

    if (modalId === "medicineModal") {
        currentEditingMedicineId = null;
    }

    if (modalId === "appointmentModal") {
        currentEditingAppointmentId = null;
    }

    if (modalId === "healthModal") {
        currentEditingHealthId = null;
    }
}
/* =====================================================
   CLOSE MODAL BY CLICKING OUTSIDE
===================================================== */

function setupModalClosing() {

    document
        .querySelectorAll(".modal")
        .forEach(
            modal => {

                modal.addEventListener(
                    "click",
                    function (event) {

                        if (
                            event.target ===
                            modal
                        ) {

                            modal.classList.remove(
                                "active"
                            );

                        }

                    }
                );

            }
        );
}



/* =====================================================
   MEDICAL TRACKER - STAGE 1
   PART 2
   MEDICINES + APPOINTMENTS + HEALTH + DASHBOARD
===================================================== */


/* =====================================================
   MEDICINE FORM
===================================================== */

function setupMedicineForm() {
/* =====================================================
   MEDICINES
===================================================== */

const medicineForm =
    document.getElementById("medicineForm");


medicineForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("medicineName").value.trim();

        const dose =
            document.getElementById("medicineDose").value.trim();

        const time =
            document.getElementById("medicineTime").value;

        const frequency =
            document.getElementById("medicineFrequency").value;

        const instructions =
            document
                .getElementById("medicineInstructions")
                .value
                .trim();


        /* =========================
           EDIT EXISTING MEDICINE
        ========================= */

        if (currentEditingMedicineId !== null) {

            const medicine =
                medicines.find(
                    item =>
                        item.id ===
                        currentEditingMedicineId
                );


            if (medicine) {

                medicine.name = name;
                medicine.dose = dose;
                medicine.time = time;
                medicine.frequency = frequency;
                medicine.instructions = instructions;

            }

        }


        /* =========================
           ADD NEW MEDICINE
        ========================= */

        else {

            const medicine = {

                id: Date.now(),

                name: name,

                dose: dose,

                time: time,

                frequency: frequency,

                instructions: instructions,

                taken: false,

                createdAt:
                    new Date().toLocaleDateString()

            };


            medicines.push(medicine);

        }


        saveData();

        medicineForm.reset();

        closeModal("medicineModal");

        renderMedicines();

        updateDashboard();

    }
);
    // const medicineForm =
    //     document.getElementById(
    //         "medicineForm"
    //     );


    // if (!medicineForm) {
    //     return;
    // }


    // medicineForm.addEventListener(
    //     "submit",
    //     function (event) {

    //         event.preventDefault();


    //         const name =
    //             document.getElementById(
    //                 "medicineName"
    //             ).value.trim();


    //         const dose =
    //             document.getElementById(
    //                 "medicineDose"
    //             ).value.trim();


    //         const time =
    //             document.getElementById(
    //                 "medicineTime"
    //             ).value;


    //         const frequency =
    //             document.getElementById(
    //                 "medicineFrequency"
    //             ).value.trim();


    //         const instructions =
    //             document.getElementById(
    //                 "medicineInstructions"
    //             ).value.trim();


    //         if (!name || !dose || !time) {

    //             alert(
    //                 "Please fill in the medicine name, dose and time."
    //             );

    //             return;
    //         }


    //         const medicine = {

    //             id: Date.now(),

    //             name: name,

    //             dose: dose,

    //             time: time,

    //             frequency:
    //                 frequency ||
    //                 "Daily",

    //             instructions:
    //                 instructions,

    //             taken: false,

    //             createdAt:
    //                 new Date().toISOString()

    //         };


    //         medicines.push(
    //             medicine
    //         );


    //         saveData();


    //         medicineForm.reset();


    //         closeModal(
    //             "medicineModal"
    //         );


    //         renderMedicines();

    //         updateDashboard();

    //     }
    // );

}


/* =====================================================
   RENDER MEDICINES
===================================================== */

function renderMedicines() {

    const medicinesList =
        document.getElementById(
            "medicinesList"
        );


    const dashboardMedicines =
        document.getElementById(
            "dashboardMedicines"
        );


    if (!medicinesList) {
        return;
    }


    medicinesList.innerHTML =
        "";


    if (dashboardMedicines) {

        dashboardMedicines.innerHTML =
            "";

    }


    if (
        medicines.length === 0
    ) {

        medicinesList.innerHTML = `

            <div class="empty-state">

                <p>
                    No medicines added yet.
                </p>

            </div>

        `;


        if (dashboardMedicines) {

            dashboardMedicines.innerHTML = `

                <div class="empty-state">

                    <p>
                        No medicines added.
                    </p>

                </div>

            `;

        }


        return;
    }


    medicines.forEach(
        medicine => {


            /* =========================================
               MAIN MEDICINE CARD
            ========================================= */

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "medicine-card";


            if (medicine.taken) {

                card.classList.add(
                    "taken"
                );

            }


            card.innerHTML = `

                <div class="medicine-top">

                    <div>

                        <h3>
                            ${escapeHTML(
                                medicine.name
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                medicine.dose
                            )}
                        </p>

                    </div>

                    <span class="badge">

                        ${escapeHTML(
                            medicine.frequency ||
                            "Daily"
                        )}

                    </span>

                </div>


                <p>
                    🕐
                    ${escapeHTML(
                        medicine.time
                    )}
                </p>


                <p>
                    📝
                    ${escapeHTML(
                        medicine.instructions ||
                        "No instructions"
                    )}
                </p>


                <div class="card-actions">

    <button
        class="taken-button"
        onclick="toggleMedicine(${medicine.id})">

        ${
            medicine.taken
            ? "✓ Taken"
            : "Mark as Taken"
        }

    </button>


    <button
        class="edit-button"
        onclick="editMedicine(${medicine.id})">

        ✏️ Edit

    </button>


    <button
        class="delete-button"
        onclick="deleteMedicine(${medicine.id})">

        🗑️ Delete

    </button>

</div>

            `;


            medicinesList.appendChild(
                card
            );


            /* =========================================
               DASHBOARD MEDICINE
            ========================================= */

            if (dashboardMedicines) {

                const dashboardItem =
                    document.createElement(
                        "div"
                    );


                dashboardItem.className =
                    "item";


                dashboardItem.innerHTML = `

                    <div class="item-info">

                        <div class="item-icon">
                            💊
                        </div>

                        <div>

                            <div class="item-title">
                                ${escapeHTML(
                                    medicine.name
                                )}
                            </div>

                            <div class="item-subtitle">

                                ${escapeHTML(
                                    medicine.dose
                                )}

                                •

                                ${escapeHTML(
                                    medicine.time
                                )}

                            </div>

                        </div>

                    </div>


                    <button
                        class="taken-button"
                        onclick="
                            toggleMedicine(
                                ${medicine.id}
                            )
                        "
                    >

                        ${
                            medicine.taken
                            ? "✓ Taken"
                            : "Take"
                        }

                    </button>

                `;


                dashboardMedicines.appendChild(
                    dashboardItem
                );

            }

        }
    );
}


/* =====================================================
   TOGGLE MEDICINE
===================================================== */

function toggleMedicine(id) {

    const medicine =
        medicines.find(
            item =>
                item.id === id
        );


    if (!medicine) {
        return;
    }


    medicine.taken =
        !medicine.taken;


    saveData();


    renderMedicines();

    updateDashboard();
}
/* =====================================================
   EDIT MEDICINE
===================================================== */

function editMedicine(id) {

    const medicine =
        medicines.find(
            item => item.id === id
        );

    if (!medicine) return;


    currentEditingMedicineId = id;


    document.getElementById(
        "medicineName"
    ).value = medicine.name || "";


    document.getElementById(
        "medicineDose"
    ).value = medicine.dose || "";


    document.getElementById(
        "medicineTime"
    ).value = medicine.time || "";


    document.getElementById(
        "medicineFrequency"
    ).value = medicine.frequency || "";


    document.getElementById(
        "medicineInstructions"
    ).value =
        medicine.instructions || "";


    const modal =
        document.getElementById("medicineModal");


    const title =
        modal.querySelector(".modal-header h2");


    if (title) {
        title.textContent = "Edit Medicine";
    }


    modal.classList.add("active");
}

/* =====================================================
   DELETE MEDICINE
===================================================== */

function deleteMedicine(id) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this medicine?"
        );


    if (!confirmed) {
        return;
    }


    medicines =
        medicines.filter(
            medicine =>
                medicine.id !== id
        );


    saveData();


    renderMedicines();

    updateDashboard();
}


/* =====================================================
   APPOINTMENT FORM
===================================================== */

function setupAppointmentForm() {

    // const appointmentForm =
    //     document.getElementById(
    //         "appointmentForm"
    //     );


    // if (!appointmentForm) {
    //     return;
    // }


    // appointmentForm.addEventListener(
    //     "submit",
    //     function (event) {

    //         event.preventDefault();


    //         const doctor =
    //             document.getElementById(
    //                 "doctorName"
    //             ).value.trim();


    //         const specialization =
    //             document.getElementById(
    //                 "doctorSpecialization"
    //             ).value.trim();


    //         const date =
    //             document.getElementById(
    //                 "appointmentDate"
    //             ).value;


    //         const time =
    //             document.getElementById(
    //                 "appointmentTime"
    //             ).value;


    //         const notes =
    //             document.getElementById(
    //                 "appointmentNotes"
    //             ).value.trim();


    //         if (
    //             !doctor ||
    //             !date ||
    //             !time
    //         ) {

    //             alert(
    //                 "Please enter the doctor name, date and time."
    //             );

    //             return;
    //         }


    //         const appointment = {

    //             id: Date.now(),

    //             doctor: doctor,

    //             specialization:
    //                 specialization,

    //             date: date,

    //             time: time,

    //             notes: notes

    //         };


    //         appointments.push(
    //             appointment
    //         );


    //         saveData();


    //         appointmentForm.reset();


    //         closeModal(
    //             "appointmentModal"
    //         );


    //         renderAppointments();

    //         updateDashboard();

    //     }
    // );

    /* =====================================================
   APPOINTMENTS
===================================================== */

const appointmentForm =
    document.getElementById("appointmentForm");


appointmentForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const doctor =
            document
                .getElementById("doctorName")
                .value
                .trim();


        const specialization =
            document
                .getElementById("doctorSpecialization")
                .value
                .trim();


        const date =
            document
                .getElementById("appointmentDate")
                .value;


        const time =
            document
                .getElementById("appointmentTime")
                .value;


        const notes =
            document
                .getElementById("appointmentNotes")
                .value
                .trim();


        /* =========================
           EDIT
        ========================= */

        if (currentEditingAppointmentId !== null) {

            const appointment =
                appointments.find(
                    item =>
                        item.id ===
                        currentEditingAppointmentId
                );


            if (appointment) {

                appointment.doctor = doctor;

                appointment.specialization =
                    specialization;

                appointment.date = date;

                appointment.time = time;

                appointment.notes = notes;

            }

        }


        /* =========================
           ADD
        ========================= */

        else {

            const appointment = {

                id: Date.now(),

                doctor: doctor,

                specialization:
                    specialization,

                date: date,

                time: time,

                notes: notes

            };


            appointments.push(appointment);

        }


        saveData();

        appointmentForm.reset();

        closeModal("appointmentModal");

        renderAppointments();

        updateDashboard();

    }
);
}


/* =====================================================
   RENDER APPOINTMENTS
===================================================== */

function renderAppointments() {

    const appointmentsList =
        document.getElementById(
            "appointmentsList"
        );


    const dashboardAppointments =
        document.getElementById(
            "dashboardAppointments"
        );


    if (!appointmentsList) {
        return;
    }


    appointmentsList.innerHTML =
        "";


    if (dashboardAppointments) {

        dashboardAppointments.innerHTML =
            "";

    }


    if (
        appointments.length === 0
    ) {

        appointmentsList.innerHTML = `

            <div class="empty-state">

                <p>
                    No appointments added yet.
                </p>

            </div>

        `;


        if (dashboardAppointments) {

            dashboardAppointments.innerHTML = `

                <div class="empty-state">

                    <p>
                        No upcoming appointments.
                    </p>

                </div>

            `;

        }


        return;
    }


    appointments.forEach(
        appointment => {


            /* =========================================
               APPOINTMENT CARD
            ========================================= */

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "appointment-card";


            card.innerHTML = `

                <div class="appointment-top">

                    <div>

                        <h3>

                            ${escapeHTML(
                                appointment.doctor
                            )}

                        </h3>

                        <p>

                            ${escapeHTML(
                                appointment.specialization ||
                                "Doctor"
                            )}

                        </p>

                    </div>


                    <span class="badge">

                        Appointment

                    </span>

                </div>


                <p>

                    📅
                    ${formatDate(
                        appointment.date
                    )}

                </p>


                <p>

                    🕐
                    ${escapeHTML(
                        appointment.time
                    )}

                </p>


                <p>

                    📝
                    ${escapeHTML(
                        appointment.notes ||
                        "No notes"
                    )}

                </p>


                <div class="card-actions">

    <button
        class="edit-button"
        onclick="editAppointment(
            ${appointment.id}
        )">

        ✏️ Edit

    </button>


    <button
        class="delete-button"
        onclick="deleteAppointment(
            ${appointment.id}
        )">

        🗑️ Delete

    </button>

</div>

            `;


            appointmentsList.appendChild(
                card
            );


            /* =========================================
               DASHBOARD APPOINTMENT
            ========================================= */

            if (dashboardAppointments) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "item";


                item.innerHTML = `

                    <div class="item-info">

                        <div class="item-icon">
                            📅
                        </div>

                        <div>

                            <div class="item-title">

                                ${escapeHTML(
                                    appointment.doctor
                                )}

                            </div>

                            <div class="item-subtitle">

                                ${formatDate(
                                    appointment.date
                                )}

                                •

                                ${escapeHTML(
                                    appointment.time
                                )}

                            </div>

                        </div>

                    </div>

                `;


                dashboardAppointments.appendChild(
                    item
                );

            }

        }
    );
}
/* =====================================================
   EDIT APPOINTMENT
===================================================== */

function editAppointment(id) {

    const appointment =
        appointments.find(
            item => item.id === id
        );

    if (!appointment) return;


    currentEditingAppointmentId = id;


    document.getElementById(
        "doctorName"
    ).value =
        appointment.doctor || "";


    document.getElementById(
        "doctorSpecialization"
    ).value =
        appointment.specialization || "";


    document.getElementById(
        "appointmentDate"
    ).value =
        appointment.date || "";


    document.getElementById(
        "appointmentTime"
    ).value =
        appointment.time || "";


    document.getElementById(
        "appointmentNotes"
    ).value =
        appointment.notes || "";


    const modal =
        document.getElementById(
            "appointmentModal"
        );


    const title =
        modal.querySelector(
            ".modal-header h2"
        );


    if (title) {
        title.textContent =
            "Edit Appointment";
    }


    modal.classList.add("active");
}

/* =====================================================
   DELETE APPOINTMENT
===================================================== */

function deleteAppointment(id) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this appointment?"
        );


    if (!confirmed) {
        return;
    }


    appointments =
        appointments.filter(
            appointment =>
                appointment.id !== id
        );


    saveData();


    renderAppointments();

    updateDashboard();
}


/* =====================================================
   HEALTH FORM
===================================================== */

function setupHealthForm() {

    // const healthForm =
    //     document.getElementById(
    //         "healthForm"
    //     );


    // if (!healthForm) {
    //     return;
    // }


    // healthForm.addEventListener(
    //     "submit",
    //     function (event) {

    //         event.preventDefault();


    //         const weight =
    //             document.getElementById(
    //                 "weight"
    //             ).value.trim();


    //         const heartRate =
    //             document.getElementById(
    //                 "heartRate"
    //             ).value.trim();


    //         const glucose =
    //             document.getElementById(
    //                 "glucose"
    //             ).value.trim();


    //         const bloodPressure =
    //             document.getElementById(
    //                 "bloodPressure"
    //             ).value.trim();


    //         if (
    //             !weight &&
    //             !heartRate &&
    //             !glucose &&
    //             !bloodPressure
    //         ) {

    //             alert(
    //                 "Please enter at least one health measurement."
    //             );

    //             return;
    //         }


    //         const record = {

    //             id: Date.now(),

    //             weight: weight,

    //             heartRate: heartRate,

    //             glucose: glucose,

    //             bloodPressure:
    //                 bloodPressure,

    //             date:
    //                 new Date().toLocaleDateString(
    //                     "en-IN"
    //                 )

    //         };


    //         healthRecords.push(
    //             record
    //         );


    //         saveData();


    //         healthForm.reset();


    //         closeModal(
    //             "healthModal"
    //         );


    //         renderHealth();

    //         updateDashboard();

    //     }
    // );

    /* =====================================================
   HEALTH RECORDS
===================================================== */

const healthForm =
    document.getElementById("healthForm");


healthForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const weight =
            document
                .getElementById("weight")
                .value;


        const heartRate =
            document
                .getElementById("heartRate")
                .value;


        const glucose =
            document
                .getElementById("glucose")
                .value;


        const bloodPressure =
            document
                .getElementById("bloodPressure")
                .value;


        /* =========================
           EDIT EXISTING RECORD
        ========================= */

        if (currentEditingHealthId !== null) {

            const record =
                healthRecords.find(
                    item =>
                        item.id ===
                        currentEditingHealthId
                );


            if (record) {

                record.weight = weight;

                record.heartRate =
                    heartRate;

                record.glucose =
                    glucose;

                record.bloodPressure =
                    bloodPressure;

            }

        }


        /* =========================
           ADD NEW RECORD
        ========================= */

        else {

            const record = {

                id: Date.now(),

                weight: weight,

                heartRate: heartRate,

                glucose: glucose,

                bloodPressure:
                    bloodPressure,

                date:
                    new Date()
                        .toLocaleDateString()

            };


            healthRecords.push(record);

        }


        saveData();

        healthForm.reset();

        closeModal("healthModal");

        renderHealth();

        updateDashboard();

    }
);
}


/* =====================================================
   RENDER HEALTH
===================================================== */

function renderHealth() {

    const history =
        document.getElementById(
            "healthHistory"
        );


    if (!history) {
        return;
    }


    history.innerHTML =
        "";


    const latestWeight =
        document.getElementById(
            "latestWeight"
        );

    const latestHeartRate =
        document.getElementById(
            "latestHeartRate"
        );

    const latestGlucose =
        document.getElementById(
            "latestGlucose"
        );

    const latestBP =
        document.getElementById(
            "latestBP"
        );


    if (
        healthRecords.length === 0
    ) {

        history.innerHTML = `

            <div class="empty-state">

                <p>
                    No health measurements recorded.
                </p>

            </div>

        `;


        if (latestWeight)
            latestWeight.textContent =
                "--";

        if (latestHeartRate)
            latestHeartRate.textContent =
                "--";

        if (latestGlucose)
            latestGlucose.textContent =
                "--";

        if (latestBP)
            latestBP.textContent =
                "--";


        return;
    }


    /* =========================================
       LATEST RECORD
    ========================================= */

    const latest =
        healthRecords[
            healthRecords.length - 1
        ];


    if (latestWeight) {

        latestWeight.textContent =
            latest.weight || "--";

    }


    if (latestHeartRate) {

        latestHeartRate.textContent =
            latest.heartRate || "--";

    }


    if (latestGlucose) {

        latestGlucose.textContent =
            latest.glucose || "--";

    }


    if (latestBP) {

        latestBP.textContent =
            latest.bloodPressure || "--";

    }


    /* =========================================
       HISTORY HEADER
    ========================================= */

    history.innerHTML = `

        <div class="health-row">

            <strong>Date</strong>

            <strong>Weight</strong>

            <strong>Heart Rate</strong>

            <strong>Glucose</strong>

            <strong>BP</strong>

        </div>

    `;


    [...healthRecords]
        .reverse()
        .forEach(
            record => {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "health-row";


                row.innerHTML = `

                    <span>

                        ${escapeHTML(
                            record.date
                        )}

                    </span>


                    <span>

                        ${
                            escapeHTML(
                                record.weight ||
                                "--"
                            )
                        }

                        ${
                            record.weight
                            ? " kg"
                            : ""
                        }

                    </span>


                    <span>

                        ${
                            escapeHTML(
                                record.heartRate ||
                                "--"
                            )
                        }

                        ${
                            record.heartRate
                            ? " bpm"
                            : ""
                        }

                    </span>


                    <span>

                        ${escapeHTML(
                            record.glucose ||
                            "--"
                        )}

                    </span>


                    <span>

    ${
        escapeHTML(
            record.bloodPressure ||
            "--"
        )
    }

    <button
        class="health-edit"
        onclick="editHealthRecord(
            ${record.id}
        )">

        ✏️ Edit

    </button>


    <button
        class="health-delete"
        onclick="deleteHealthRecord(
            ${record.id}
        )">

        🗑️ Delete

    </button>

</span>

                `;


                history.appendChild(
                    row
                );

            }
        );
}

/* =====================================================
   EDIT HEALTH RECORD
===================================================== */

function editHealthRecord(id) {

    const record =
        healthRecords.find(
            item => item.id === id
        );

    if (!record) return;


    currentEditingHealthId = id;


    document.getElementById(
        "weight"
    ).value =
        record.weight || "";


    document.getElementById(
        "heartRate"
    ).value =
        record.heartRate || "";


    document.getElementById(
        "glucose"
    ).value =
        record.glucose || "";


    document.getElementById(
        "bloodPressure"
    ).value =
        record.bloodPressure || "";


    const modal =
        document.getElementById(
            "healthModal"
        );


    const title =
        modal.querySelector(
            ".modal-header h2"
        );


    if (title) {
        title.textContent =
            "Edit Health Measurement";
    }


    modal.classList.add("active");
}
/* =====================================================
   DELETE HEALTH RECORD
===================================================== */

function deleteHealthRecord(id) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this health record?"
        );


    if (!confirmed) {
        return;
    }


    healthRecords =
        healthRecords.filter(
            record =>
                record.id !== id
        );


    saveData();


    renderHealth();

    updateDashboard();
}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

    const medicineCount =
        document.getElementById(
            "medicineCount"
        );

    const appointmentCount =
        document.getElementById(
            "appointmentCount"
        );

    const healthCount =
        document.getElementById(
            "healthCount"
        );

    const adherence =
        document.getElementById(
            "adherence"
        );


    if (medicineCount) {

        medicineCount.textContent =
            medicines.length;

    }


    if (appointmentCount) {

        appointmentCount.textContent =
            appointments.length;

    }


    if (healthCount) {

        healthCount.textContent =
            healthRecords.length;

    }


    /* =========================================
       MEDICINE ADHERENCE
    ========================================= */

    if (!adherence) {
        return;
    }


    if (
        medicines.length === 0
    ) {

        adherence.textContent =
            "0%";

        return;
    }


    const taken =
        medicines.filter(
            medicine =>
                medicine.taken
        ).length;


    const percentage =
        Math.round(
            (
                taken /
                medicines.length
            ) * 100
        );


    adherence.textContent =
        percentage + "%";
}


/* =====================================================
   DATE FORMAT
===================================================== */

function formatDate(dateString) {

    if (!dateString) {
        return "--";
    }


    const date =
        new Date(
            dateString +
            "T00:00:00"
        );


    if (
        isNaN(
            date.getTime()
        )
    ) {

        return dateString;
    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );
}


/* =====================================================
   HTML SECURITY
===================================================== */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";
    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}



/* =====================================================
   MEDICAL TRACKER - STAGE 1
   PART 3
   REPORTS + INDEXEDDB + NOTIFICATIONS + INITIALIZATION
===================================================== */


/* =====================================================
   INDEXEDDB
===================================================== */

let reportDatabase = null;


/* =====================================================
   OPEN REPORT DATABASE
===================================================== */

function initializeReportDatabase() {

    if (
        !("indexedDB" in window)
    ) {

        console.error(
            "IndexedDB is not supported by this browser."
        );

        return;
    }


    const request =
        indexedDB.open(
            "MedicalTrackerDB",
            1
        );


    request.onupgradeneeded =
        function (event) {

            const database =
                event.target.result;


            if (
                !database.objectStoreNames.contains(
                    "reports"
                )
            ) {

                database.createObjectStore(
                    "reports",
                    {
                        keyPath: "id"
                    }
                );

            }

        };


    request.onsuccess =
        function (event) {

            reportDatabase =
                event.target.result;


            renderReports();

        };


    request.onerror =
        function () {

            console.error(
                "Could not open IndexedDB."
            );

        };
}


/* =====================================================
   REPORT FILE INPUT
===================================================== */

function setupReportUpload() {

    const reportFile =
        document.getElementById(
            "reportFile"
        );


    if (!reportFile) {
        return;
    }


    reportFile.addEventListener(
        "change",
        function () {

            const file =
                this.files[0];


            if (!file) {
                return;
            }


            /* =========================================
               ALLOWED TYPES
            ========================================= */

            const allowedTypes = [

                "application/pdf",

                "image/jpeg",

                "image/png"

            ];


            if (
                !allowedTypes.includes(
                    file.type
                )
            ) {

                alert(
                    "Please upload a PDF, JPG or PNG file."
                );


                this.value =
                    "";


                return;
            }


            /* =========================================
               MAXIMUM 10 MB
            ========================================= */

            if (
                file.size >
                10 * 1024 * 1024
            ) {

                alert(
                    "File size must be less than 10 MB."
                );


                this.value =
                    "";


                return;
            }


            if (!reportDatabase) {

                alert(
                    "Report storage is not ready. Please try again."
                );


                this.value =
                    "";


                return;
            }


            /* =========================================
               REPORT OBJECT
            ========================================= */

            const report = {

                id: Date.now(),

                name:
                    file.name,

                type:
                    file.type,

                size:
                    file.size,

                date:
                    new Date().toLocaleDateString(
                        "en-IN"
                    ),

                file:
                    file

            };


            try {

                const transaction =
                    reportDatabase.transaction(
                        ["reports"],
                        "readwrite"
                    );


                const store =
                    transaction.objectStore(
                        "reports"
                    );


                store.add(
                    report
                );


                transaction.oncomplete =
                    function () {

                        alert(
                            "Report uploaded successfully!"
                        );


                        renderReports();

                    };


                transaction.onerror =
                    function () {

                        alert(
                            "Could not save the report."
                        );

                    };


            } catch (error) {

                console.error(
                    error
                );


                alert(
                    "Could not save the report."
                );

            }


            this.value =
                "";

        }
    );
}


/* =====================================================
   RENDER REPORTS
===================================================== */

function renderReports() {

    if (!reportDatabase) {
        return;
    }


    const reportsList =
        document.getElementById(
            "reportsList"
        );


    if (!reportsList) {
        return;
    }


    reportsList.innerHTML =
        "";


    let transaction;


    try {

        transaction =
            reportDatabase.transaction(
                ["reports"],
                "readonly"
            );

    } catch (error) {

        console.error(
            error
        );

        return;
    }


    const store =
        transaction.objectStore(
            "reports"
        );


    const request =
        store.getAll();


    request.onsuccess =
        function () {

            const reports =
                request.result || [];


            if (
                reports.length === 0
            ) {

                reportsList.innerHTML = `

                    <div class="empty-state">

                        <div
                            style="
                                font-size:40px;
                            "
                        >
                            📄
                        </div>

                        <p>
                            No medical reports uploaded yet.
                        </p>

                        <p
                            style="
                                font-size:13px;
                                margin-top:8px;
                            "
                        >
                            Upload a PDF or image to get started.
                        </p>

                    </div>

                `;


                return;
            }


            reports
                .sort(
                    (a, b) =>
                        b.id - a.id
                )
                .forEach(
                    report => {


                        const card =
                            document.createElement(
                                "div"
                            );


                        card.className =
                            "report-card";


                        const reportIcon =
                            report.type ===
                            "application/pdf"
                            ? "📕"
                            : "🖼️";


                        const reportType =
                            report.type ===
                            "application/pdf"
                            ? "PDF Document"
                            : "Image";


                        card.innerHTML = `

                            <div class="report-icon">

                                ${reportIcon}

                            </div>


                            <div class="report-info">

                                <a
                                    href="#"
                                    class="report-name"
                                    data-id="${report.id}"
                                >

                                    ${escapeHTML(
                                        report.name
                                    )}

                                </a>


                                <span class="report-date">

                                    Uploaded:

                                    ${escapeHTML(
                                        report.date
                                    )}

                                </span>


                                <span class="report-type">

                                    ${reportType}

                                    •

                                    ${formatFileSize(
                                        report.size
                                    )}

                                </span>

                            </div>


                            <button
                                class="delete-report"
                                onclick="
                                    deleteReport(
                                        ${report.id}
                                    )
                                "
                                title="Delete report"
                            >

                                🗑️

                            </button>

                        `;


                        const link =
                            card.querySelector(
                                ".report-name"
                            );


                        if (link) {

                            link.addEventListener(
                                "click",
                                function (event) {

                                    event.preventDefault();


                                    openReport(
                                        report.id
                                    );

                                }
                            );

                        }


                        reportsList.appendChild(
                            card
                        );

                    }
                );

        };


    request.onerror =
        function () {

            console.error(
                "Could not load reports."
            );

        };
}


/* =====================================================
   OPEN REPORT
===================================================== */

function openReport(id) {

    if (!reportDatabase) {

        alert(
            "Report storage is not ready."
        );

        return;
    }


    const transaction =
        reportDatabase.transaction(
            ["reports"],
            "readonly"
        );


    const store =
        transaction.objectStore(
            "reports"
        );


    const request =
        store.get(id);


    request.onsuccess =
        function () {

            const report =
                request.result;


            if (!report) {

                alert(
                    "Report could not be found."
                );

                return;
            }


            const fileURL =
                URL.createObjectURL(
                    report.file
                );


            const newWindow =
                window.open(
                    fileURL,
                    "_blank"
                );


            if (!newWindow) {

                alert(
                    "Please allow pop-ups to open the report."
                );

            }


            /*
             * Give the browser time to load the file
             * before releasing the temporary URL.
             */

            setTimeout(
                function () {

                    URL.revokeObjectURL(
                        fileURL
                    );

                },
                60000
            );

        };


    request.onerror =
        function () {

            alert(
                "Could not open the report."
            );

        };
}


/* =====================================================
   DELETE REPORT
===================================================== */

function deleteReport(id) {

    if (!reportDatabase) {

        alert(
            "Report storage is not ready."
        );

        return;
    }


    const confirmed =
        confirm(
            "Are you sure you want to delete this report?"
        );


    if (!confirmed) {
        return;
    }


    const transaction =
        reportDatabase.transaction(
            ["reports"],
            "readwrite"
        );


    const store =
        transaction.objectStore(
            "reports"
        );


    store.delete(
        id
    );


    transaction.oncomplete =
        function () {

            renderReports();

        };


    transaction.onerror =
        function () {

            alert(
                "Could not delete the report."
            );

        };
}


/* =====================================================
   FILE SIZE
===================================================== */

function formatFileSize(bytes) {

    if (
        bytes < 1024
    ) {

        return (
            bytes +
            " B"
        );

    }


    if (
        bytes <
        1024 * 1024
    ) {

        return (
            (bytes / 1024)
                .toFixed(1) +
            " KB"
        );

    }


    return (
        (
            bytes /
            (1024 * 1024)
        ).toFixed(1) +
        " MB"
    );
}


/* =====================================================
   ENABLE NOTIFICATIONS
===================================================== */

function enableNotifications() {

    if (
        !("Notification" in window)
    ) {

        alert(
            "Your browser does not support notifications."
        );

        return;
    }


    Notification
        .requestPermission()
        .then(
            permission => {

                if (
                    permission ===
                    "granted"
                ) {

                    localStorage.setItem(
                        "medicalTrackerNotifications",
                        "enabled"
                    );


                    new Notification(
                        "Medical Tracker",
                        {
                            body:
                                "Notifications have been enabled successfully."
                        }
                    );


                    checkMedicineReminders();

                } else {

                    localStorage.removeItem(
                        "medicalTrackerNotifications"
                    );


                    alert(
                        "Notification permission was denied."
                    );

                }

            }
        )
        .catch(
            error => {

                console.error(
                    error
                );

                alert(
                    "Could not enable notifications."
                );

            }
        );
}


/* =====================================================
   MEDICATION REMINDERS
===================================================== */

function checkMedicineReminders() {

    if (
        !("Notification" in window)
    ) {
        return;
    }


    if (
        Notification.permission !==
        "granted"
    ) {
        return;
    }


    const savedMedicines =
        JSON.parse(
            localStorage.getItem(
                "medicines"
            )
        ) || [];


    const now =
        new Date();


    const today =
        now.getFullYear() +
        "-" +
        String(
            now.getMonth() + 1
        ).padStart(
            2,
            "0"
        ) +
        "-" +
        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    const currentTime =
        String(
            now.getHours()
        ).padStart(
            2,
            "0"
        ) +
        ":" +
        String(
            now.getMinutes()
        ).padStart(
            2,
            "0"
        );


    savedMedicines.forEach(
        medicine => {

            if (
                medicine.time ===
                    currentTime &&
                !medicine.taken
            ) {

                const notificationKey =
                    "medicineReminder_" +
                    medicine.id +
                    "_" +
                    today +
                    "_" +
                    currentTime;


                if (
                    localStorage.getItem(
                        notificationKey
                    )
                ) {

                    return;
                }


                const message =
                    `Time to take ${medicine.name} - ${medicine.dose}`;


                new Notification(
                    "💊 Medication Reminder",
                    {
                        body:
                            message
                    }
                );


                localStorage.setItem(
                    notificationKey,
                    "shown"
                );

            }

        }
    );
}


/* =====================================================
   CHECK EVERY 30 SECONDS
===================================================== */

setInterval(
    checkMedicineReminders,
    30000
);


/* =====================================================
   CLEAR ALL HEALTH DATA
   ACCOUNT + LOGIN ARE PRESERVED
===================================================== */

function clearAllData() {

    const confirmed =
        confirm(
            "This will delete all medicines, appointments, health records and uploaded reports. Continue?"
        );


    if (!confirmed) {
        return;
    }


    /* =========================================
       CLEAR MEDICAL DATA ONLY
    ========================================= */

    localStorage.removeItem(
        "medicines"
    );

    localStorage.removeItem(
        "appointments"
    );

    localStorage.removeItem(
        "healthRecords"
    );


    medicines = [];

    appointments = [];

    healthRecords = [];


    /* =========================================
       CLEAR REPORTS
    ========================================= */

    if (reportDatabase) {

        try {

            const transaction =
                reportDatabase.transaction(
                    ["reports"],
                    "readwrite"
                );


            const store =
                transaction.objectStore(
                    "reports"
                );


            store.clear();


            transaction.oncomplete =
                function () {

                    renderReports();

                };

        } catch (error) {

            console.error(
                error
            );

        }

    }


    renderMedicines();

    renderAppointments();

    renderHealth();

    updateDashboard();


    alert(
        "All medical data has been cleared. Your account and login information are still saved."
    );
}


/* =====================================================
   INITIALIZE APPLICATION
===================================================== */

function initializeApplication() {

    setupProfileDropdown();

    setupModalClosing();

    setupMedicineForm();

    setupAppointmentForm();

    setupHealthForm();

    setupReportUpload();


    renderMedicines();

    renderAppointments();

    renderHealth();

    updateDashboard();

    updateProfileDisplay();


    /*
     * Start IndexedDB.
     */

    initializeReportDatabase();


    /*
     * Check medicine reminder immediately.
     */

    checkMedicineReminders();
}


/* =====================================================
   CHECK LOGIN ON STARTUP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * If the user is not logged in,
         * show the login screen.
         */

        if (
            !isUserLoggedIn()
        ) {

            showLoginScreen();

            return;
        }


        /*
         * User is logged in.
         * Start the application.
         */

        initializeApplication();

    }
);