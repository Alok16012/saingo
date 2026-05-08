"use client";
import { useState } from "react";
import Link from "next/link";
import { FileText, Upload, CheckCircle, Clock, AlertCircle, Bell, LogOut, User, Home, ChevronRight } from "lucide-react";

const MOCK_ORDERS = [
  {
    id: "ORD-2024-001",
    service: "NGO Registration (Trust)",
    status: "in_progress",
    stage: 2,
    stages: ["Applied", "Docs Verified", "Filing", "Approved"],
    date: "2024-12-10",
    amount: 4999,
    consultant: "dlegaltech Expert",
  },
  {
    id: "ORD-2024-002",
    service: "12A & 80G Registration",
    status: "documents_pending",
    stage: 1,
    stages: ["Applied", "Docs Verified", "Filing", "Approved"],
    date: "2024-12-08",
    amount: 3999,
    consultant: "Adv. Meera Sharma",
  },
  {
    id: "ORD-2023-031",
    service: "GST Registration",
    status: "completed",
    stage: 4,
    stages: ["Applied", "Docs Verified", "Filing", "Approved"],
    date: "2023-11-15",
    amount: 1499,
    consultant: "CA Rajesh Gupta",
  },
];

const STATUS_STYLES: Record<string, { color: string; label: string; icon: React.ReactNode }> = {
  new: { color: "badge-primary", label: "New", icon: <Clock size={12} /> },
  documents_pending: { color: "badge-red", label: "Documents Pending", icon: <AlertCircle size={12} /> },
  in_progress: { color: "badge-accent", label: "In Progress", icon: <Clock size={12} /> },
  filing: { color: "badge-accent", label: "Filing", icon: <Clock size={12} /> },
  completed: { color: "badge-green", label: "Completed", icon: <CheckCircle size={12} /> },
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("orders");
  const [loggedIn] = useState(true); // mock auth

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-black text-gray-900 mb-6">Client Login</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
              <div className="flex">
                <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-sm">+91</span>
                <input type="tel" placeholder="10-digit number" className="flex-1 px-3 py-2.5 border border-gray-300 rounded-r-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <button className="btn-primary w-full justify-center">Send OTP</button>
            <p className="text-xs text-center text-gray-400">New client? <Link href="/contact" className="text-blue-600">Contact us</Link> to create an account.</p>
          </div>
        </div>
      </div>
    );
  }

  const activeOrders = MOCK_ORDERS.filter((o) => o.status !== "completed");
  const completedOrders = MOCK_ORDERS.filter((o) => o.status === "completed");

  return (
    <main className="pb-20 md:pb-8 bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="hero-gradient text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-blue-200 text-sm">Good day,</p>
            <h1 className="text-xl font-black">Welcome back, Rajesh Kumar</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-xs flex items-center justify-center">2</span>
            </button>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">RK</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Active Orders", value: activeOrders.length.toString(), icon: <Clock size={18} />, color: "var(--primary)" },
            { label: "Completed", value: completedOrders.length.toString(), icon: <CheckCircle size={18} />, color: "#059669" },
            { label: "Docs Pending", value: "1", icon: <AlertCircle size={18} />, color: "#dc2626" },
            { label: "Total Services", value: MOCK_ORDERS.length.toString(), icon: <FileText size={18} />, color: "var(--accent)" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: s.color }}>
                  {s.icon}
                </div>
                <span className="text-xs text-gray-500">{s.label}</span>
              </div>
              <p className="text-2xl font-black" style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-100 mb-6 w-fit">
          {[
            { id: "orders", label: "My Orders" },
            { id: "documents", label: "Documents" },
            { id: "profile", label: "Profile" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === tab.id ? "text-white" : "text-gray-600 hover:bg-gray-50"}`}
              style={activeTab === tab.id ? { background: "var(--primary)" } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            {MOCK_ORDERS.map((order) => {
              const status = STATUS_STYLES[order.status];
              return (
                <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{order.id} · {order.date}</p>
                      <h3 className="font-bold text-gray-900">{order.service}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">Consultant: {order.consultant}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className={`badge ${status.color} flex items-center gap-1`}>
                        {status.icon} {status.label}
                      </span>
                      <p className="text-sm font-bold mt-1" style={{ color: "var(--primary)" }}>₹{order.amount.toLocaleString("en-IN")}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      {order.stages.map((stage, i) => (
                        <div key={stage} className="flex items-center flex-1 last:flex-none">
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i < order.stage ? "text-white" : i === order.stage ? "text-white ring-2 ring-offset-2" : "text-gray-400 bg-gray-100"}`}
                              style={i < order.stage ? { background: "#059669" } : i === order.stage ? { background: "var(--accent)" } : {}}
                            >
                              {i < order.stage ? "✓" : i + 1}
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-center hidden sm:block">{stage}</p>
                          </div>
                          {i < order.stages.length - 1 && (
                            <div className={`flex-1 h-0.5 mx-1 ${i < order.stage - 1 ? "bg-green-400" : "bg-gray-200"}`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {order.status === "documents_pending" && (
                      <button className="btn-primary text-xs py-2 px-4">
                        <Upload size={13} /> Upload Documents
                      </button>
                    )}
                    <button className="btn-outline text-xs py-2 px-4">
                      <FileText size={13} /> View Details
                    </button>
                    <a href={`https://wa.me/918603456708?text=Hi%20I%20need%20update%20on%20order%20${order.id}`} target="_blank" rel="noreferrer" className="text-xs py-2 px-4 rounded-lg font-semibold border-2 flex items-center gap-1" style={{ borderColor: "#25d366", color: "#25d366" }}>
                      💬 Chat
                    </a>
                  </div>
                </div>
              );
            })}

            <Link href="/services" className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-xl text-sm text-gray-500 hover:border-blue-300 hover:text-blue-700 transition-colors">
              + Start a New Service
            </Link>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === "documents" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-black text-gray-900 mb-4">My Documents</h2>
            <div className="space-y-3">
              {[
                { name: "Aadhar Card", type: "KYC", status: "verified", order: "ORD-2024-001" },
                { name: "PAN Card", type: "KYC", status: "verified", order: "ORD-2024-001" },
                { name: "Address Proof", type: "Office", status: "pending", order: "ORD-2024-002" },
                { name: "Passport Photo", type: "Photo", status: "rejected", order: "ORD-2024-001" },
              ].map((doc) => (
                <div key={doc.name} className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <FileText size={18} className="text-blue-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.type} · {doc.order}</p>
                  </div>
                  <span className={`badge ${doc.status === "verified" ? "badge-green" : doc.status === "pending" ? "badge-accent" : "badge-red"}`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-4 text-sm">
              <Upload size={15} /> Upload New Document
            </button>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-lg">
            <h2 className="font-black text-gray-900 mb-6">My Profile</h2>
            <div className="flex items-center gap-4 mb-6 p-4 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-2xl" style={{ background: "var(--primary)" }}>RK</div>
              <div>
                <p className="font-black text-gray-900 text-lg">Rajesh Kumar</p>
                <p className="text-sm text-gray-500">Customer · Since Dec 2024</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Full Name", value: "Rajesh Kumar" },
                { label: "Mobile", value: "+91-98XXXXXXXX" },
                { label: "Email", value: "rajesh@example.com" },
                { label: "Location", value: "Ranchi, Jharkhand" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">{field.label}</label>
                  <input type="text" defaultValue={field.value} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              ))}
            </div>
            <button className="btn-primary mt-5 text-sm">Save Changes</button>
          </div>
        )}
      </div>
    </main>
  );
}
