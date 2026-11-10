<div align="center">

<img src="assets/banner.svg" alt="Prescripto — Doctor Appointment & Healthcare Management Platform" width="100%" />

<br/>

**One platform. Three portals. Zero booking chaos.**
A full-stack healthcare platform that connects **patients**, **doctors** and **administrators** through a single appointment-management ecosystem.

<br/>

<a href="https://YOUR-PATIENT-APP.vercel.app"><img src="https://img.shields.io/badge/%F0%9F%A9%BA%20Patient%20Portal-Live%20Demo-5F6FFF?style=for-the-badge" alt="Patient Portal" /></a>
<a href="https://prescripto-admin-navy.vercel.app"><img src="https://img.shields.io/badge/%F0%9F%9B%A1%20Admin%20%26%20Doctor-Live%20Demo-0EA5E9?style=for-the-badge" alt="Admin and Doctor Portal" /></a>
<a href="https://prescripto-backend-o7lj.onrender.com"><img src="https://img.shields.io/badge/%E2%9A%A1%20REST%20API-Live-10B981?style=for-the-badge" alt="Backend API" /></a>

<br/><br/>

<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Express-REST%20API-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/JWT-Auth-D63AFF?style=flat-square&logo=jsonwebtokens&logoColor=white" alt="JWT" />
<img src="https://img.shields.io/badge/Razorpay-Payments-0C2451?style=flat-square&logo=razorpay&logoColor=white" alt="Razorpay" />
<img src="https://img.shields.io/badge/Cloudinary-Media-3448C5?style=flat-square&logo=cloudinary&logoColor=white" alt="Cloudinary" />
<img src="https://img.shields.io/badge/Vercel%20%7C%20Render-Deployed-000000?style=flat-square&logo=vercel&logoColor=white" alt="Deployed on Vercel and Render" />

<br/>

<img src="https://img.shields.io/github/stars/aryankk073/Prescripto?style=social" alt="Stars" />
<img src="https://img.shields.io/github/forks/aryankk073/Prescripto?style=social" alt="Forks" />
<img src="https://img.shields.io/github/last-commit/aryankk073/Prescripto?style=flat-square&color=5F6FFF" alt="Last commit" />
<img src="https://img.shields.io/github/languages/top/aryankk073/Prescripto?style=flat-square&color=F7DF1E" alt="Top language" />

</div>

<br/>

<p align="center">
  <a href="#live-demo">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#api">API</a> •
  <a href="#getting-started">Get Started</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#roadmap">Roadmap</a>
</p>

---

<a id="live-demo"></a>
## 🚀 Live Demo

Everything below is deployed and running in production.

| | Application | What it does | Link |
|:-:|---|---|---|
| 🩺 | **Patient Portal** | Discover doctors, book slots, pay online, manage appointments | [**Open Patient Portal →**](https://prescripto-nu-three.vercel.app/) |
| 🛡️ | **Admin & Doctor Portal** | Admin: manage doctors & appointments. Doctor: run the day's schedule | [**Open Admin / Doctor Portal →**](https://prescripto-admin-navy.vercel.app) |
| ⚡ | **Backend REST API** | Centralised Express + MongoDB API serving all three experiences | [**Open API →**](https://prescripto-backend-o7lj.onrender.com) |
| 💻 | **Source Code** | Full monorepo | [**GitHub →**](https://github.com/aryankk073/Prescripto) |

**Live service status**

<p>
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fprescripto-admin-navy.vercel.app&label=Admin%20Portal&up_message=online&down_message=offline&style=for-the-badge&logo=vercel" alt="Admin portal status" />
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fprescripto-backend-o7lj.onrender.com&label=Backend%20API&up_message=online&down_message=offline&style=for-the-badge&logo=render" alt="Backend status" />
</p>

> [!NOTE]
> The backend root endpoint returns `API WORKING` when the service is up.
> If the backend runs on a free hosting tier, the **first request after a period of inactivity can take a short while** while the server wakes up. Subsequent requests are fast.

<details>
<summary><b>🔑 Demo access (click to expand)</b></summary>

<br/>

| Role | Where to log in | Credentials |
|---|---|---|
| Patient | Patient Portal → *Create account* | Register with any email — takes 10 seconds |
| Doctor | Admin / Doctor Portal → click **"Doctor Login?"** under the form | `<!-- add a demo doctor email -->` / `<!-- add password -->` |
| Admin | Admin / Doctor Portal → default login screen | `<!-- add demo admin email -->` / `<!-- add password -->` |

> Only share **demo** credentials here — never your real admin password.

</details>

---

<a id="features"></a>
## ✨ Features

<table>
<tr>
<td width="33%" valign="top">

### 🩺 Patients
- Browse doctors & filter by **speciality**
- Rich doctor profiles + related doctors
- Pick a date and **30-min time slot**
- Book, view & **cancel** appointments
- Pay securely with **Razorpay**
- Edit profile + upload profile photo

</td>
<td width="33%" valign="top">

### 👨‍⚕️ Doctors
- Dedicated, JWT-secured login
- Personal **dashboard** at a glance
- See all assigned appointments
- **Complete** or **cancel** appointments
- View & update own profile

</td>
<td width="33%" valign="top">

### 🛡️ Admins
- Secure administrator login
- Central **admin dashboard**
- **Add doctors** with image upload
- Browse the full doctor directory
- **Toggle doctor availability** on/off
- View & **cancel** any appointment

</td>
</tr>
</table>

### 🔥 Project highlights

| | |
|---|---|
| 🧑‍🤝‍🧑 **Three role-based experiences** | Patient, Doctor and Admin interfaces over one shared API |
| 🔐 **JWT auth + bcrypt** | Protected routes via middleware, hashed passwords |
| 📅 **Smart slot engine** | 7-day window, 30-minute slots, booked slots hidden automatically |
| 💳 **Razorpay payments** | Orders created server-side; payment confirmed by asking Razorpay directly |
| ☁️ **Cloudinary uploads** | Multer → Cloudinary → secure URL saved in MongoDB |
| 🌍 **Independent deployments** | Two Vercel frontends + Render backend + MongoDB Atlas |

---



<a id="architecture"></a>
## 🧩 Architecture

Prescripto is a **three-tier** system: independent React frontends talk over HTTPS to one Express REST API, which orchestrates MongoDB, Cloudinary and Razorpay.

```mermaid
flowchart TB
    subgraph CLIENT["🖥️ Presentation Layer — Vercel"]
        P["🩺 Patient Portal<br/>React + Vite"]
        A["🛡️ Admin Portal<br/>React + Vite"]
        D["👨‍⚕️ Doctor Portal<br/>React + Vite"]
    end

    subgraph SERVER["⚙️ Application Layer — Render"]
        API["Express.js REST API"]
        AUTH["JWT Middleware"]
        UC["User Controllers"]
        DC["Doctor Controllers"]
        AC["Admin Controllers"]
        API --> AUTH
        AUTH --> UC
        AUTH --> DC
        AUTH --> AC
    end

    subgraph SERVICES["☁️ Data & External Services"]
        DB[("MongoDB Atlas")]
        CL["Cloudinary<br/>Image storage"]
        PAY["Razorpay<br/>Payments"]
    end

    P -->|HTTPS / REST| API
    A -->|HTTPS / REST| API
    D -->|HTTPS / REST| API

    UC --> DB
    DC --> DB
    AC --> DB
    UC --> CL
    AC --> CL
    UC --> PAY

    classDef client fill:#EEF2FF,stroke:#5F6FFF,color:#1E1B4B;
    classDef server fill:#ECFEFF,stroke:#0EA5E9,color:#083344;
    classDef svc fill:#ECFDF5,stroke:#10B981,color:#064E3B;
    class P,A,D client;
    class API,AUTH,UC,DC,AC server;
    class DB,CL,PAY svc;
```

| Layer | Technology | Responsibility |
|---|---|---|
| Patient Frontend | React, Vite, Tailwind CSS | Patient-facing experience |
| Admin / Doctor Frontend | React, Vite, Tailwind CSS | Administrative and doctor interfaces |
| Routing | React Router | Client-side navigation |
| State | React Context API | Shared application state |
| HTTP | Axios | API requests and responses |
| Backend | Node.js, Express.js | Business logic & REST endpoints |
| Database | MongoDB Atlas, Mongoose | Persistent application data |
| Auth | JWT, bcrypt | Authentication & password security |
| File Storage | Multer, Cloudinary | Image uploads and storage |
| Payments | Razorpay | Online payment processing |
| Hosting | Vercel, Render | Production deployment |

---

## 🔄 User Journeys

<details open>
<summary><b>🩺 Patient booking journey</b></summary>

```mermaid
flowchart LR
    A([Visit Prescripto]) --> B[Register / Login]
    B --> C[Browse Doctors]
    C --> D[Pick Speciality]
    D --> E[Open Doctor Profile]
    E --> F[Select Date]
    F --> G[Select Time Slot]
    G --> H[Book Appointment]
    H --> I[Razorpay Payment]
    I --> J([Manage / Cancel])

    style A fill:#5F6FFF,color:#fff,stroke:#5F6FFF
    style J fill:#10B981,color:#fff,stroke:#10B981
```

</details>

<details>
<summary><b>🛡️ Admin workflow</b></summary>

```mermaid
flowchart TD
    A([Admin Login]) --> B[Admin Dashboard]
    B --> C[Doctor Management]
    B --> D[Appointment Management]
    C --> E[Add Doctor]
    E --> F[Upload Image]
    F --> G[Cloudinary Storage]
    G --> H[(Doctor saved in MongoDB)]
    D --> I[View All Appointments]
    I --> J[Manage Status]
```

</details>

<details>
<summary><b>👨‍⚕️ Doctor workflow</b></summary>

```mermaid
flowchart TD
    A([Doctor Login]) --> B[Doctor Dashboard]
    B --> C[View Appointments]
    C --> D[Select Appointment]
    D --> E{Action}
    E -->|Done| F[Complete Appointment]
    E -->|Can't make it| G[Cancel Appointment]
    B --> H[Manage Profile]
```

</details>

---

## 📅 Appointment Scheduling Engine

Scheduling is the heart of Prescripto. The patient app generates slots dynamically and hides anything already booked.

| Parameter | Value |
|---|---|
| 🗓️ Scheduling window | **7 days** |
| ⏱️ Slot duration | **30 minutes** |
| 🌅 Start time | **10:00 AM** |
| 🌙 End time | **9:00 PM** |
| 🚫 Availability | Computed from existing bookings (`slots_booked`) and the doctor's `available` flag |

```mermaid
flowchart LR
    A[Select Doctor] --> B[Generate 7 Dates]
    B --> C[Generate 30-min Slots]
    C --> D[Check slots_booked]
    D --> E[Show Free Slots]
    E --> F[Patient Picks Slot]
    F --> G{Backend Validates<br/>doctor available + slot free}
    G -->|Free| H[Create Appointment]
    H --> I[Update Doctor Booked Slots]
    G -->|Taken| J[Reject Booking]
```

> [!TIP]
> Availability is always validated on the backend. A natural production upgrade is **atomic booking operations** with database-level conflict prevention — see the [roadmap](#roadmap).

---

## 💳 Payments

Razorpay handles checkout, and **the backend confirms the result with Razorpay itself** — it fetches the order and only marks the appointment paid when the order status is `paid`. A client-side "success" is never trusted on its own.

```mermaid
sequenceDiagram
    participant P as 🩺 Patient
    participant F as Frontend
    participant B as Backend
    participant R as Razorpay
    participant DB as MongoDB

    P->>F: Click "Pay Online"
    F->>B: Request payment order
    B->>R: Create order
    R-->>B: Order details
    B-->>F: Return order
    F->>R: Open Razorpay Checkout
    R-->>F: Payment response
    F->>B: Send razorpay_order_id
    B->>R: Fetch order status
    R-->>B: status = paid
    B->>DB: Mark appointment as paid
    B-->>F: Payment result
```

## ☁️ File Uploads

```mermaid
flowchart LR
    A[Select Image] --> B[FormData]
    B --> C[Upload Endpoint]
    C --> D[Multer]
    D --> E[Cloudinary]
    E --> F[Secure URL]
    F --> G[(Saved in MongoDB)]
    G --> H[Rendered in App]
```

Images live in Cloudinary — MongoDB only stores the lightweight URL.

---

## 🔐 Authentication & Security

```mermaid
sequenceDiagram
    participant C as Client
    participant API as Express API
    participant DB as MongoDB

    C->>API: Submit credentials
    API->>DB: Find account
    DB-->>API: Account + hashed password
    API->>API: bcrypt.compare()
    API->>API: Sign JWT
    API-->>C: Return token
    C->>API: Request with token
    API->>API: Middleware validates JWT
    API-->>C: Authorized response
```

| Component | Role |
|---|---|
| **JWT** | Token-based authentication for protected routes |
| **bcrypt** | Password hashing & verification |
| **Auth middleware** | Guards user, doctor and admin endpoints |
| **Environment variables** | Secrets stay out of source control |
| **CORS** | Enables the deployed frontends to call the backend |
| **Role separation** | Separate auth contexts for admin, doctor and patient |

---

## 🗃️ Database Design

MongoDB + Mongoose. Appointments link to patients and doctors by ID and also store a **snapshot** of both (`userData`, `docData`), so appointment lists render without extra lookups.

```mermaid
erDiagram
    USER ||--o{ APPOINTMENT : books
    DOCTOR ||--o{ APPOINTMENT : receives

    USER {
        ObjectId _id PK
        string name
        string email
        string password
        string image
        string phone
        object address
        string dob
        string gender
    }

    DOCTOR {
        ObjectId _id PK
        string name
        string email
        string password
        string image
        string speciality
        string degree
        string experience
        string about
        boolean available
        number fees
        object address
        number date
        object slots_booked
    }

    APPOINTMENT {
        ObjectId _id PK
        string userId FK
        string docId FK
        string slotDate
        string slotTime
        object userData
        object docData
        number amount
        number date
        boolean cancelled
        boolean payment
        boolean isCompleted
    }
```

<details>
<summary><b>📋 Field reference</b></summary>

<br/>

**User** — `name`, `email` (unique), `password` (hashed), `image`, `phone`, `address`, `dob`, `gender` (sensible defaults for optional profile fields)

**Doctor** — `name`, `email`, `password` (hashed), `image`, `speciality`, `degree`, `experience`, `about`, `available`, `fees`, `address`, `date`, `slots_booked`

**Appointment** — `userId`, `docId`, `slotDate`, `slotTime`, `userData`, `docData`, `amount`, `date`, `cancelled`, `payment`, `isCompleted`

> Always treat the model files in [`Backend/models`](Backend/models) as the source of truth for exact field names.

</details>

---

<a id="api"></a>
## 🔌 API Reference

**Base URL**

```text
https://prescripto-backend-o7lj.onrender.com
```

| Route group | Base path | Responsibility |
|---|---|---|
| 🩺 User | `/api/user` | Registration, auth, profile, appointments |
| 👨‍⚕️ Doctor | `/api/doctor` | Doctor listing, auth, doctor operations |
| 🛡️ Admin | `/api/admin` | Admin auth & administrative operations |

<details>
<summary><b>🩺 User endpoints</b> <sub>(protected = JWT required)</sub></summary>

| Endpoint | Method | Auth | Purpose |
|---|:-:|:-:|---|
| `/api/user/register` | `POST` | — | Register patient |
| `/api/user/login` | `POST` | — | Patient login |
| `/api/user/get-profile` | `GET` | 🔒 | Retrieve patient profile |
| `/api/user/update-profile` | `POST` | 🔒 | Update profile (+ image upload) |
| `/api/user/book-appointment` | `POST` | 🔒 | Book an appointment |
| `/api/user/appointments` | `GET` | 🔒 | List the patient's appointments |
| `/api/user/cancel-appointment` | `POST` | 🔒 | Cancel an appointment |
| `/api/user/payment-razorpay` | `POST` | 🔒 | Create a Razorpay order |
| `/api/user/verifyRazorpay` | `POST` | 🔒 | Confirm payment & mark appointment paid |

</details>

<details>
<summary><b>👨‍⚕️ Doctor endpoints</b></summary>

| Endpoint | Method | Auth | Purpose |
|---|:-:|:-:|---|
| `/api/doctor/list` | `GET` | — | Public doctor listing |
| `/api/doctor/login` | `POST` | — | Doctor login |
| `/api/doctor/appointments` | `POST` | 🔒 | Doctor's appointments |
| `/api/doctor/complete-appointment` | `POST` | 🔒 | Mark appointment completed |
| `/api/doctor/cancel-appointment` | `POST` | 🔒 | Cancel appointment |
| `/api/doctor/dashboard` | `GET` | 🔒 | Dashboard data |
| `/api/doctor/profile` | `GET` | 🔒 | Retrieve doctor profile |
| `/api/doctor/update-profile` | `POST` | 🔒 | Update doctor profile |

</details>

<details>
<summary><b>🛡️ Admin endpoints</b></summary>

| Endpoint | Method | Auth | Purpose |
|---|:-:|:-:|---|
| `/api/admin/login` | `POST` | — | Admin login |
| `/api/admin/add-doctor` | `POST` | 🔒 | Add a doctor (+ image upload) |
| `/api/admin/all-doctors` | `POST` | 🔒 | List all doctors |
| `/api/admin/change-availability` | `POST` | 🔒 | Toggle a doctor's availability |
| `/api/admin/all-appointments` | `POST` | 🔒 | List all appointments |
| `/api/admin/cancel-appointment` | `POST` | 🔒 | Cancel any appointment |
| `/api/admin/dashboard` | `GET` | 🔒 | Dashboard data |

</details>

> [!NOTE]
> Source of truth: [`Backend/routes`](Backend/routes).

**Try it:**

```bash
# health check
curl https://prescripto-backend-o7lj.onrender.com
# → API WORKING

# list all doctors
curl https://prescripto-backend-o7lj.onrender.com/api/doctor/list
```

---

## 🛠️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=react,vite,tailwind,nodejs,express,mongodb,js,vercel,git,github,postman,vscode&perline=12" alt="Tech stack icons" />

</div>

<table>
<tr>
<td valign="top" width="33%">

**Frontend**
- React 19
- Vite
- React Router
- Tailwind CSS
- Axios
- Context API

</td>
<td valign="top" width="33%">

**Backend**
- Node.js & Express.js
- Mongoose & MongoDB Atlas
- JSON Web Tokens
- bcrypt
- Multer
- Validator, CORS, dotenv

</td>
<td valign="top" width="33%">

**Integrations & Ops**
- Cloudinary — image storage
- Razorpay — payments
- Vercel — frontend hosting
- Render — backend hosting
- Git & GitHub

</td>
</tr>
</table>

---

<details>
<summary><b>🧭 Frontend routes</b></summary>

<br/>

**Patient app** — `/` · `/doctors` · `/doctors/:speciality` · `/login` · `/about` · `/contact` · `/my-profile` · `/my-appointments` · `/appointment/:docId`

**Admin** — `/admin-dashboard` · `/all-appointments` · `/add-doctor` · `/doctor-list`

**Doctor** — `/doctor-dashboard` · `/doctor-appointments` · `/doctor-profile`

</details>

---

## 📁 Project Structure

```text
Prescripto/
│
├── Frontend/                    # 🩺 Patient application
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│
├── admin/                       # 🛡️ Admin + 👨‍⚕️ Doctor application
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       │   ├── Admin/
│       │   └── Doctor/
│       ├── App.jsx
│       └── main.jsx
│
├── Backend/                     # ⚡ Centralised REST API
│   ├── config/                  #    mongodb.js, cloudinary.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── assets/                      # README banner
├── docs/screenshots/            # README screenshots
└── README.md
```

---

<a id="getting-started"></a>
## ⚡ Getting Started

### Prerequisites

Node.js · npm · Git · a MongoDB Atlas account · a Cloudinary account · a Razorpay account (test mode is fine)

### 1 · Clone

```bash
git clone https://github.com/aryankk073/Prescripto.git
cd Prescripto
```

### 2 · Backend

```bash
cd Backend
npm install
```

Create `Backend/.env`:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR
```

```bash
npm run server        # dev (nodemon) → http://localhost:4000
npm start             # production (what Render runs)
```

### 3 · Patient frontend

```bash
cd ../Frontend
npm install
cat > .env << 'EOF'
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
EOF
npm run dev
```

> Use only the **Key ID** (public) in the frontend — never the Key Secret.

### 4 · Admin / Doctor frontend

```bash
cd ../admin
npm install
echo "VITE_BACKEND_URL=http://localhost:4000" > .env
npm run dev
```

> [!IMPORTANT]
> Run the backend and both frontends in **separate terminals**, and make sure the env variable names match your actual app configuration. Never commit `.env` files.

---

<a id="deployment"></a>
## 🌍 Deployment

Three independent deployments, one shared database.

```mermaid
flowchart LR
    G[("🐙 GitHub<br/>Repository")]
    G --> V1["▲ Vercel<br/>Patient Frontend<br/><sub>root: Frontend</sub>"]
    G --> V2["▲ Vercel<br/>Admin / Doctor<br/><sub>root: admin</sub>"]
    G --> R["🟣 Render<br/>Backend API<br/><sub>root: Backend</sub>"]

    V1 --> R
    V2 --> R
    R --> DB[("🍃 MongoDB Atlas")]
    R --> CL["☁️ Cloudinary"]
    R --> RP["💳 Razorpay"]
```

| Component | Platform | Root directory |
|---|---|---|
| Patient Frontend | Vercel | `Frontend` |
| Admin / Doctor App | Vercel | `admin` |
| Backend API | Render | `Backend` |
| Database | MongoDB Atlas | Managed |
| Image storage | Cloudinary | Managed |
| Payments | Razorpay | Managed |

<details>
<summary><b>🔧 Production environment variables</b></summary>

<br/>

**Backend (Render)** — set in the Render dashboard

`MONGODB_URI` · `JWT_SECRET` · `ADMIN_EMAIL` · `ADMIN_PASSWORD` · `CLOUDINARY_NAME` · `CLOUDINARY_API_KEY` · `CLOUDINARY_SECRET_KEY` · `RAZORPAY_KEY_ID` · `RAZORPAY_KEY_SECRET` · `CURRENCY`
*(Render supplies `PORT` automatically.)*

**Patient frontend (Vercel)**

```env
VITE_BACKEND_URL=https://prescripto-backend-o7lj.onrender.com
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

**Admin / Doctor frontend (Vercel)**

```env
VITE_BACKEND_URL=https://prescripto-backend-o7lj.onrender.com
```

</details>

---

## 🧠 Engineering Decisions

| Decision | Why it matters |
|---|---|
| **Separation of concerns** | Routes, controllers, middleware, models and config are split — easier to test, read and extend |
| **Independent frontends** | Patient and admin/doctor apps deploy separately with role-specific routing & context |
| **Centralised API** | Business rules live server-side once, not duplicated across three UIs |
| **Secrets stay on the server** | Cloudinary & Razorpay are integrated through the backend, not the browser |
| **Snapshot + reference** | Appointments store patient/doctor IDs plus a data snapshot, keeping list views fast |

---

<a id="roadmap"></a>
## 🗺️ Roadmap

- [ ] 📧 Email & SMS appointment notifications
- [ ] ⏰ Automated appointment reminders
- [ ] 🗓️ Doctor availability calendar with recurring schedules
- [ ] 🔴 Real-time appointment status updates
- [ ] 🔒 Stronger concurrency control for simultaneous slot booking
- [ ] 🔁 Razorpay signature verification & webhook-based payment reconciliation
- [ ] 🌐 Restrict CORS to the known frontend origins
- [ ] 💸 Refund processing & payment history
- [ ] 🔎 Advanced doctor search & filtering
- [ ] 📊 Patient history & doctor performance analytics
- [ ] 🧪 Automated tests (Jest / Vitest) + API integration tests
- [ ] 📚 Swagger / OpenAPI documentation
- [ ] 🪵 Centralised logging & monitoring
- [ ] 🚦 Rate limiting & hardened API security
- [ ] 🐳 Docker-based dev & deployment
- [ ] ⚙️ CI/CD with GitHub Actions

---

## 🎓 What I Learned

- Structuring a multi-application full-stack repository
- Building RESTful APIs with Express.js
- Designing MongoDB schemas and document relationships
- JWT authentication and protected routes
- Shared React state with the Context API
- Implementing appointment scheduling & booking workflows
- Integrating third-party payments (Razorpay)
- Handling image uploads with Multer + Cloudinary
- Debugging frontend ↔ backend integration (CORS, env, deployment)
- Managing environment variables across local and production
- Deploying separate frontends and a central backend

---

## 👤 Author

<table>
<tr>
<td>

**Aryan Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-aryankk073-181717?style=for-the-badge&logo=github)](https://github.com/aryankk073)


</td>
</tr>
</table>

---

<div align="center">

### ⭐ If you like Prescripto, give it a star — it really helps!

**Prescripto — Bringing Patients, Doctors, and Healthcare Management Together.**


</div>