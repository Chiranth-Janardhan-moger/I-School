
import React from "react";

const Announcements = () => {
  const notices = [
    { id: 1, title: "Holiday Notice", date: "21 Sept 2025", desc: "School will remain closed on 25th Sept for a festival." },
    { id: 2, title: "PTM", date: "22 Sept 2025", desc: "Parent Teacher Meeting scheduled for 28th Sept." },
    { id: 3, title: "New Admissions", date: "23 Sept 2025", desc: "Admissions open for Playgroup, Nursery, LKG, UKG." },
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-purple-50 to-blue-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">📢 Announcements</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {notices.map((note) => (
          <div key={note.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p className="text-sm text-gray-500">{note.date}</p>
            <p className="mt-2 text-gray-700">{note.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
