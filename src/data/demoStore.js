const STORAGE_KEY = "swasthyaConnectDemo";

const defaultData = {
  requests: [
    {
      id: "REQ001",
      patient: "Ravi Kumar",
      age: 42,
      village: "Madhavapur",
      type: "Doctor Consultation",
      description:
        "Fever, weakness and mild dizziness for two days.",
      priority: "High",
      status: "Pending",
      createdAt: "25 September 2026",
      assignedTo: "Health Worker",
    },
    {
      id: "REQ002",
      patient: "Lakshmi Devi",
      age: 56,
      village: "Rampur",
      type: "Medicine Request",
      description:
        "Need assistance with monthly diabetes medicines.",
      priority: "Normal",
      status: "Approved",
      createdAt: "24 September 2026",
      assignedTo: "Health Worker",
    },
  ],

  referrals: [
    {
      id: "REF001",
      patient: "Lakshmi Devi",
      from: "Rampur PHC",
      to: "District Hospital",
      reason: "Specialist consultation",
      priority: "High",
      status: "Accepted",
      date: "24 September 2026",
    },
  ],

  appointments: [
    {
      id: "APT001",
      patient: "Ravi Kumar",
      age: 42,
      village: "Madhavapur",
      doctor: "Dr. Ananya Sharma",
      date: "25 Sep 2026",
      time: "09:30 AM",
      type: "Video Consultation",
      status: "Confirmed",
    },
  ],

  triage: [],
};

export function getDemoData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultData)
    );

    return defaultData;
  }

  try {
    return JSON.parse(savedData);
  } catch (error) {
    console.error(
      "Unable to read SwasthyaConnect demo data:",
      error
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultData)
    );

    return defaultData;
  }
}

export function saveDemoData(data) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function updateDemoData(updates) {
  const currentData = getDemoData();

  const updatedData = {
    ...currentData,
    ...updates,
  };

  saveDemoData(updatedData);

  return updatedData;
}

export function addRequest(request) {
  const data = getDemoData();

  const newRequestNumber =
    data.requests.length + 1;

  const newRequest = {
    id: `REQ${String(newRequestNumber).padStart(
      3,
      "0"
    )}`,
    patient: request.patient || "Demo Patient",
    age: request.age || 40,
    village: request.village || "Madhavapur",
    type:
      request.type ||
      "Doctor Consultation",
    description:
      request.description || "",
    priority:
      request.priority || "Normal",
    status: "Pending",
    createdAt: new Date().toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    ),
    assignedTo:
      request.assignedTo ||
      "Health Worker",
  };

  const updatedData = {
    ...data,
    requests: [
      newRequest,
      ...data.requests,
    ],
  };

  saveDemoData(updatedData);

  return newRequest;
}

export function updateRequestStatus(
  requestId,
  status,
  extraData = {}
) {
  const data = getDemoData();

  const updatedRequests =
    data.requests.map((request) => {
      if (request.id !== requestId) {
        return request;
      }

      return {
        ...request,
        status,
        ...extraData,
      };
    });

  const updatedData = {
    ...data,
    requests: updatedRequests,
  };

  saveDemoData(updatedData);

  return updatedData;
}

export function addTriageRecord(record) {
  const data = getDemoData();

  const newTriage = {
    id: `TRI${String(
      data.triage.length + 1
    ).padStart(3, "0")}`,
    date: new Date().toLocaleDateString(
      "en-IN"
    ),
    ...record,
  };

  const updatedData = {
    ...data,
    triage: [
      newTriage,
      ...data.triage,
    ],
  };

  saveDemoData(updatedData);

  return newTriage;
}

export function addReferral(referral) {
  const data = getDemoData();

  const newReferral = {
    id: `REF${String(
      data.referrals.length + 1
    ).padStart(3, "0")}`,
    date: new Date().toLocaleDateString(
      "en-IN"
    ),
    status: "Pending",
    ...referral,
  };

  const updatedData = {
    ...data,
    referrals: [
      newReferral,
      ...data.referrals,
    ],
  };

  saveDemoData(updatedData);

  return newReferral;
}

export function addAppointment(
  appointment
) {
  const data = getDemoData();

  const newAppointment = {
    id: `APT${String(
      data.appointments.length + 1
    ).padStart(3, "0")}`,
    status: "Pending",
    ...appointment,
  };

  const updatedData = {
    ...data,
    appointments: [
      newAppointment,
      ...data.appointments,
    ],
  };

  saveDemoData(updatedData);

  return newAppointment;
}

export function resetDemoData() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(defaultData)
  );

  return defaultData;
}