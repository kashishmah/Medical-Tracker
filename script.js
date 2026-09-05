/* =====================================================
   MEDICAL TRACKER - STAGE 1
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
   SAVE LOCAL STORAGE
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


navItems.forEach(item => {

    item.addEventListener("click", function () {

        const sectionId =
            this.dataset.section;

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

        sections.forEach(section => {
            section.classList.remove("active-section");
        });

        document
            .getElementById(sectionId)
            .classList.add("active-section");


        pageTitle.textContent =
            pageInformation[sectionId].title;

        pageSubtitle.textContent =
            pageInformation[sectionId].subtitle;

    });

});
/* =====================================================
   PROFILE DROPDOWN
===================================================== */

const profileButton =
    document.getElementById("profileButton");

const profileDropdown =
    document.getElementById("profileDropdown");


profileButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        profileDropdown.classList.toggle("show");

    }
);


/* Close dropdown when clicking anywhere else */

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


/* =====================================================
   PROFILE
===================================================== */

function openProfile() {

    profileDropdown.classList.remove("show");

    alert(
        "Profile page will be added in Stage 2."
    );

}


/* =====================================================
   SETTINGS
===================================================== */

function openSettings() {

    profileDropdown.classList.remove("show");

    const settingsButton =
        document.querySelector(
            '[data-section="settings"]'
        );

    settingsButton.click();

}


/* =====================================================
   LOGOUT
===================================================== */

// function logout() {

//     profileDropdown.classList.remove("show");

//     const confirmed =
//         confirm(
//             "Are you sure you want to logout?"
//         );


//     if (!confirmed) return;


//     alert(
//         "Logout functionality will be added in Stage 2."
//     );

// }

function logout() {
    profileDropdown.classList.remove("show");

    const confirmed = confirm("Are you sure you want to logout?");

    if (!confirmed) return;

    // Mark user as logged out
    sessionStorage.removeItem("medicalTrackerLoggedIn");

    // Show login screen
    document.body.innerHTML = `
        <div class="login-page">
            <div class="login-card">
                <div class="login-icon">🏥</div>

                <h1>Medical Tracker</h1>
                <p>You have been logged out successfully.</p>

                <button class="btn btn-primary" onclick="loginAgain()">
                    Login Again
                </button>
            </div>
        </div>
    `;
}

function loginAgain() {
    sessionStorage.setItem("medicalTrackerLoggedIn", "true");

    location.reload();
}

/* =====================================================
   MODALS
===================================================== */

function openModal(id) {

    document
        .getElementById(id)
        .classList.add("active");
}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("active");
}


/* Close modal when clicking outside */

document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            modal.classList.remove("active");
        }

    });

});


/* =====================================================
   MEDICINES
===================================================== */

const medicineForm =
    document.getElementById("medicineForm");


medicineForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const medicine = {

            id: Date.now(),

            name:
                document
                    .getElementById("medicineName")
                    .value,

            dose:
                document
                    .getElementById("medicineDose")
                    .value,

            time:
                document
                    .getElementById("medicineTime")
                    .value,

            frequency:
                document
                    .getElementById("medicineFrequency")
                    .value,

            instructions:
                document
                    .getElementById("medicineInstructions")
                    .value,

            taken: false,

            createdAt:
                new Date().toLocaleDateString()

        };


        medicines.push(medicine);

        saveData();

        medicineForm.reset();

        closeModal("medicineModal");

        renderMedicines();

        updateDashboard();

    }
);


/* =====================================================
   RENDER MEDICINES
===================================================== */

function renderMedicines() {

    const medicinesList =
        document.getElementById("medicinesList");

    const dashboardMedicines =
        document.getElementById(
            "dashboardMedicines"
        );


    medicinesList.innerHTML = "";

    dashboardMedicines.innerHTML = "";


    if (medicines.length === 0) {

        medicinesList.innerHTML = `
            <div class="empty-state">
                <p>No medicines added yet.</p>
            </div>
        `;

        dashboardMedicines.innerHTML = `
            <div class="empty-state">
                <p>No medicines added.</p>
            </div>
        `;

        return;
    }


    medicines.forEach(medicine => {


        /* MAIN MEDICINE CARD */

        const card =
            document.createElement("div");

        card.className =
            "medicine-card";


        card.innerHTML = `

            <div class="medicine-top">

                <div>

                    <h3>
                        ${escapeHTML(medicine.name)}
                    </h3>

                    <p>
                        ${escapeHTML(medicine.dose)}
                    </p>

                </div>

                <span class="badge">
                    ${escapeHTML(medicine.frequency)}
                </span>

            </div>


            <p>
                🕐 ${escapeHTML(medicine.time)}
            </p>


            <p>
                📝 ${
                    escapeHTML(
                        medicine.instructions ||
                        "No instructions"
                    )
                }
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
                    class="delete-button"
                    onclick="deleteMedicine(${medicine.id})">

                    Delete

                </button>

            </div>

        `;


        if (medicine.taken) {
            card.classList.add("taken");
        }


        medicinesList.appendChild(card);


        /* DASHBOARD ITEM */

        const dashboardItem =
            document.createElement("div");

        dashboardItem.className =
            "item";


        dashboardItem.innerHTML = `

            <div class="item-info">

                <div class="item-icon">
                    💊
                </div>

                <div>

                    <div class="item-title">
                        ${escapeHTML(medicine.name)}
                    </div>

                    <div class="item-subtitle">
                        ${escapeHTML(medicine.dose)}
                        •
                        ${escapeHTML(medicine.time)}
                    </div>

                </div>

            </div>


            <button
                class="taken-button"
                onclick="toggleMedicine(${medicine.id})">

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

    });

}


/* =====================================================
   TOGGLE MEDICINE
===================================================== */

function toggleMedicine(id) {

    const medicine =
        medicines.find(item => item.id === id);

    if (!medicine) return;

    medicine.taken =
        !medicine.taken;

    saveData();

    renderMedicines();

    updateDashboard();
}


/* =====================================================
   DELETE MEDICINE
===================================================== */

function deleteMedicine(id) {

    medicines =
        medicines.filter(
            medicine => medicine.id !== id
        );

    saveData();

    renderMedicines();

    updateDashboard();
}


/* =====================================================
   APPOINTMENTS
===================================================== */

const appointmentForm =
    document.getElementById("appointmentForm");


appointmentForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const appointment = {

            id: Date.now(),

            doctor:
                document
                    .getElementById("doctorName")
                    .value,

            specialization:
                document
                    .getElementById(
                        "doctorSpecialization"
                    )
                    .value,

            date:
                document
                    .getElementById(
                        "appointmentDate"
                    )
                    .value,

            time:
                document
                    .getElementById(
                        "appointmentTime"
                    )
                    .value,

            notes:
                document
                    .getElementById(
                        "appointmentNotes"
                    )
                    .value

        };


        appointments.push(appointment);

        saveData();

        appointmentForm.reset();

        closeModal("appointmentModal");

        renderAppointments();

        updateDashboard();

    }
);


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


    appointmentsList.innerHTML = "";

    dashboardAppointments.innerHTML = "";


    if (appointments.length === 0) {

        appointmentsList.innerHTML = `
            <div class="empty-state">
                <p>No appointments added yet.</p>
            </div>
        `;

        dashboardAppointments.innerHTML = `
            <div class="empty-state">
                <p>No upcoming appointments.</p>
            </div>
        `;

        return;
    }


    appointments.forEach(appointment => {


        /* APPOINTMENT CARD */

        const card =
            document.createElement("div");

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
                📅 ${formatDate(
                    appointment.date
                )}
            </p>


            <p>
                🕐 ${escapeHTML(
                    appointment.time
                )}
            </p>


            <p>
                📝 ${
                    escapeHTML(
                        appointment.notes ||
                        "No notes"
                    )
                }
            </p>


            <div class="card-actions">

                <button
                    class="delete-button"
                    onclick="deleteAppointment(
                        ${appointment.id}
                    )">

                    Delete

                </button>

            </div>

        `;


        appointmentsList.appendChild(card);


        /* DASHBOARD APPOINTMENT */

        const item =
            document.createElement("div");

        item.className = "item";


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


        dashboardAppointments.appendChild(item);

    });

}


/* =====================================================
   DELETE APPOINTMENT
===================================================== */

function deleteAppointment(id) {

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
   HEALTH RECORDS
===================================================== */

const healthForm =
    document.getElementById("healthForm");


healthForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const record = {

            id: Date.now(),

            weight:
                document
                    .getElementById("weight")
                    .value,

            heartRate:
                document
                    .getElementById("heartRate")
                    .value,

            glucose:
                document
                    .getElementById("glucose")
                    .value,

            bloodPressure:
                document
                    .getElementById(
                        "bloodPressure"
                    )
                    .value,

            date:
                new Date().toLocaleDateString()

        };


        healthRecords.push(record);

        saveData();

        healthForm.reset();

        closeModal("healthModal");

        renderHealth();

        updateDashboard();

    }
);


/* =====================================================
   RENDER HEALTH
===================================================== */

function renderHealth() {

    const history =
        document.getElementById(
            "healthHistory"
        );


    history.innerHTML = "";


    if (healthRecords.length === 0) {

        history.innerHTML = `
            <div class="empty-state">
                <p>
                    No health measurements recorded.
                </p>
            </div>
        `;

        document.getElementById(
            "latestWeight"
        ).textContent = "--";

        document.getElementById(
            "latestHeartRate"
        ).textContent = "--";

        document.getElementById(
            "latestGlucose"
        ).textContent = "--";

        document.getElementById(
            "latestBP"
        ).textContent = "--";

        return;
    }


    /* Latest record */

    const latest =
        healthRecords[
            healthRecords.length - 1
        ];


    document.getElementById(
        "latestWeight"
    ).textContent =
        latest.weight || "--";


    document.getElementById(
        "latestHeartRate"
    ).textContent =
        latest.heartRate || "--";


    document.getElementById(
        "latestGlucose"
    ).textContent =
        latest.glucose || "--";


    document.getElementById(
        "latestBP"
    ).textContent =
        latest.bloodPressure || "--";


    /* History header */

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
        .forEach(record => {

            const row =
                document.createElement("div");

            row.className =
                "health-row";


            row.innerHTML = `

                <span>
                    ${escapeHTML(record.date)}
                </span>

                <span>
                    ${escapeHTML(
                        record.weight || "--"
                    )} kg
                </span>

                <span>
                    ${escapeHTML(
                        record.heartRate || "--"
                    )} bpm
                </span>

                <span>
                    ${escapeHTML(
                        record.glucose || "--"
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
                        class="health-delete"
                        onclick="deleteHealthRecord(
                            ${record.id}
                        )">

                        Delete

                    </button>

                </span>

            `;


            history.appendChild(row);

        });

}


/* =====================================================
   DELETE HEALTH RECORD
===================================================== */

function deleteHealthRecord(id) {

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

    document.getElementById(
        "medicineCount"
    ).textContent =
        medicines.length;


    document.getElementById(
        "appointmentCount"
    ).textContent =
        appointments.length;


    document.getElementById(
        "healthCount"
    ).textContent =
        healthRecords.length;


    /* Medicine adherence */

    if (medicines.length === 0) {

        document.getElementById(
            "adherence"
        ).textContent = "0%";

    } else {

        const taken =
            medicines.filter(
                medicine =>
                    medicine.taken
            ).length;


        const percentage =
            Math.round(
                (taken / medicines.length) * 100
            );


        document.getElementById(
            "adherence"
        ).textContent =
            percentage + "%";
    }

}


/* =====================================================
   INDEXEDDB FOR MEDICAL REPORTS
===================================================== */

let reportDatabase;


/*
    IndexedDB allows us to store the actual uploaded
    PDF/image file in the browser.

    Unlike createObjectURL(), the report will still
    exist after refreshing the page.
*/


const request =
    indexedDB.open(
        "MedicalTrackerDB",
        1
    );


request.onupgradeneeded = function (event) {

    reportDatabase =
        event.target.result;


    if (
        !reportDatabase.objectStoreNames.contains(
            "reports"
        )
    ) {

        reportDatabase.createObjectStore(
            "reports",
            {
                keyPath: "id"
            }
        );

    }

};


request.onsuccess = function (event) {

    reportDatabase =
        event.target.result;

    renderReports();

};


request.onerror = function () {

    console.error(
        "Could not open IndexedDB."
    );

};


/* =====================================================
   REPORT UPLOAD
===================================================== */

const reportFile =
    document.getElementById(
        "reportFile"
    );


reportFile.addEventListener(
    "change",
    function () {

        const file =
            this.files[0];


        if (!file) return;


        /* Check file type */

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

            this.value = "";

            return;
        }


        /* Maximum file size: 10 MB */

        if (
            file.size >
            10 * 1024 * 1024
        ) {

            alert(
                "File size must be less than 10 MB."
            );

            this.value = "";

            return;
        }


        const report = {

            id: Date.now(),

            name: file.name,

            type: file.type,

            size: file.size,

            date:
                new Date().toLocaleDateString(),

            file: file

        };


        const transaction =
            reportDatabase.transaction(
                ["reports"],
                "readwrite"
            );


        const store =
            transaction.objectStore(
                "reports"
            );


        store.add(report);


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


        this.value = "";

    }
);


/* =====================================================
   RENDER REPORTS
===================================================== */

function renderReports() {

    if (!reportDatabase) return;


    const reportsList =
        document.getElementById(
            "reportsList"
        );


    reportsList.innerHTML = "";


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
        store.getAll();


    request.onsuccess =
        function () {

            const reports =
                request.result;


            if (
                reports.length === 0
            ) {

                reportsList.innerHTML = `

                    <div class="empty-state">

                        <div style="font-size:40px;">
                            📄
                        </div>

                        <p>
                            No medical reports uploaded yet.
                        </p>

                        <p style="font-size:13px;margin-top:8px;">
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


                        card.innerHTML = `

                            <div class="report-icon">

                                ${
                                    report.type ===
                                    "application/pdf"
                                    ? "📕"
                                    : "🖼️"
                                }

                            </div>


                            <div class="report-info">

                                <a
                                    href="#"
                                    class="report-name"
                                    data-id="${report.id}">

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

                                    ${
                                        report.type ===
                                        "application/pdf"
                                        ? "PDF Document"
                                        : "Image"
                                    }

                                    •

                                    ${formatFileSize(
                                        report.size
                                    )}

                                </span>

                            </div>


                            <button
                                class="delete-report"
                                onclick="deleteReport(
                                    ${report.id}
                                )">

                                🗑️

                            </button>

                        `;


                        const link =
                            card.querySelector(
                                ".report-name"
                            );


                        link.addEventListener(
                            "click",
                            function (event) {

                                event.preventDefault();

                                openReport(
                                    report.id
                                );

                            }
                        );


                        reportsList.appendChild(
                            card
                        );

                    }
                );

        };

}


/* =====================================================
   OPEN REPORT
===================================================== */

function openReport(id) {

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


            /*
                Convert the stored File/Blob into
                a temporary URL.
            */

            const fileURL =
                URL.createObjectURL(
                    report.file
                );


            /*
                Open the report in a new browser tab.
            */

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

        };

}


/* =====================================================
   DELETE REPORT
===================================================== */

function deleteReport(id) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this report?"
        );


    if (!confirmed) return;


    const transaction =
        reportDatabase.transaction(
            ["reports"],
            "readwrite"
        );


    const store =
        transaction.objectStore(
            "reports"
        );


    store.delete(id);


    transaction.oncomplete =
        function () {

            renderReports();

        };

}


/* =====================================================
   FILE SIZE
===================================================== */

function formatFileSize(bytes) {

    if (bytes < 1024) {

        return bytes + " B";

    }


    if (bytes < 1024 * 1024) {

        return (
            (bytes / 1024).toFixed(1)
            + " KB"
        );

    }


    return (
        (bytes / (1024 * 1024)).toFixed(1)
        + " MB"
    );

}


/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(dateString) {

    if (!dateString) {
        return "--";
    }


    const date =
        new Date(
            dateString + "T00:00:00"
        );


    if (isNaN(date)) {
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

    if (value === null ||
        value === undefined) {

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
   CLEAR ALL DATA
===================================================== */

function clearAllData() {

    const confirmed =
        confirm(
            "This will delete all medicines, appointments, health records and uploaded reports. Continue?"
        );


    if (!confirmed) return;


    /* Clear localStorage */

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


    /* Clear IndexedDB reports */

    if (reportDatabase) {

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

    }


    renderMedicines();

    renderAppointments();

    renderHealth();

    renderReports();

    updateDashboard();


    alert(
        "All data has been cleared."
    );

}


/* =====================================================
   INITIALIZE APPLICATION
===================================================== */

renderMedicines();

renderAppointments();

renderHealth();

updateDashboard();

function registerUser() {
    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim().toLowerCase();
    const password = document.getElementById("registerPassword").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const users =
        JSON.parse(localStorage.getItem("medicalTrackerUsers")) || [];

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert("An account with this email already exists.");
        return;
    }

    users.push({
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem(
        "medicalTrackerUsers",
        JSON.stringify(users)
    );

    alert("Registration successful! Please login.");

    showLogin();
}


function loginUser() {
    const email = document.getElementById("loginEmail")
        .value.trim()
        .toLowerCase();

    const password =
        document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    const users =
        JSON.parse(localStorage.getItem("medicalTrackerUsers")) || [];

    const user = users.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if (!user) {
        alert("Invalid email or password.");
        return;
    }

    sessionStorage.setItem(
        "medicalTrackerLoggedIn",
        "true"
    );

    sessionStorage.setItem(
        "medicalTrackerCurrentUser",
        JSON.stringify(user)
    );

    location.reload();
}

function enableNotifications() {

    if (!("Notification" in window)) {
        alert("Your browser does not support notifications.");
        return;
    }

    Notification.requestPermission().then(permission => {

        if (permission === "granted") {

            new Notification("Medical Tracker", {
                body: "Notifications have been enabled successfully."
            });

            localStorage.setItem(
                "medicalTrackerNotifications",
                "enabled"
            );

        } else {
            alert("Notification permission was denied.");
        }
    });
}

function checkMedicineReminders() {

    const medicines =
        JSON.parse(localStorage.getItem("medicines")) || [];

    if (Notification.permission !== "granted") {
        return;
    }

    const now = new Date();

    const currentTime =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0");

    medicines.forEach(medicine => {

        if (medicine.time === currentTime &&
            !medicine.taken) {

            new Notification("💊 Medicine Reminder", {
                body:
                    `Time to take ${medicine.name} - ${medicine.dosage}`
            });
        }
    });
}

setInterval(checkMedicineReminders, 60000);