'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Employee {
  id: string
  name: string
  email: string
  phone: string
  department: string
  status: 'active' | 'inactive'
  addedOn: string
}

interface Booking {
  id: string
  employeeName: string
  from: string
  to: string
  date: string
  vehicle: string
  amount: number
  status: 'completed' | 'upcoming' | 'cancelled'
}

interface Corporate {
  companyName: string
  adminName: string
  email: string
  gstNumber: string
  industry: string
}

const DEMO_EMPLOYEES: Employee[] = [
  { id: 'e1', name: 'Priya Sharma',    email: 'priya@company.com',   phone: '9876543210', department: 'Engineering',  status: 'active',   addedOn: '2026-05-10' },
  { id: 'e2', name: 'Rahul Mehta',     email: 'rahul@company.com',   phone: '9876543211', department: 'Sales',        status: 'active',   addedOn: '2026-05-15' },
  { id: 'e3', name: 'Anjali Desai',    email: 'anjali@company.com',  phone: '9876543212', department: 'HR',           status: 'active',   addedOn: '2026-05-20' },
  { id: 'e4', name: 'Vikram Singh',    email: 'vikram@company.com',  phone: '9876543213', department: 'Operations',   status: 'inactive', addedOn: '2026-04-01' },
]

const DEMO_BOOKINGS: Booking[] = [
  { id: 'B001', employeeName: 'Priya Sharma',  from: 'Lohegaon Office',   to: 'Pune Airport',      date: '2026-06-10', vehicle: 'Sedan',  amount: 850,  status: 'completed' },
  { id: 'B002', employeeName: 'Rahul Mehta',   from: 'Hinjewadi',         to: 'Nashik',            date: '2026-06-08', vehicle: 'SUV',    amount: 2400, status: 'completed' },
  { id: 'B003', employeeName: 'Anjali Desai',  from: 'Viman Nagar',       to: 'Mumbai Airport',    date: '2026-06-15', vehicle: 'Sedan',  amount: 3200, status: 'upcoming'  },
  { id: 'B004', employeeName: 'Priya Sharma',  from: 'Kharadi',           to: 'Baner',             date: '2026-06-05', vehicle: 'Sedan',  amount: 420,  status: 'completed' },
  { id: 'B005', employeeName: 'Rahul Mehta',   from: 'Wakad',             to: 'Pune Airport',      date: '2026-06-18', vehicle: 'SUV',    amount: 950,  status: 'upcoming'  },
  { id: 'B006', employeeName: 'Vikram Singh',  from: 'Hadapsar',          to: 'Shirdi',            date: '2026-05-28', vehicle: 'Luxury', amount: 5800, status: 'cancelled' },
]

const deptOptions = ['Engineering', 'Sales', 'HR', 'Operations', 'Finance', 'Marketing', 'Management', 'Other']

export default function CorporateDashboard() {
  const router = useRouter()
  const [corporate, setCorporate]     = useState<Corporate | null>(null)
  const [employees, setEmployees]     = useState<Employee[]>([])
  const [bookings]                    = useState<Booking[]>(DEMO_BOOKINGS)
  const [activeTab, setTab]           = useState<'overview' | 'employees' | 'bookings' | 'invoices'>('overview')
  const [showAddEmp, setShowAddEmp]   = useState(false)
  const [empFilter, setEmpFilter]     = useState<'all' | 'active' | 'inactive'>('all')
  const [bookFilter, setBookFilter]   = useState<'all' | 'completed' | 'upcoming' | 'cancelled'>('all')
  const [invoiceMonth, setInvMonth]   = useState('2026-06')

  // New employee form
  const [newEmp, setNewEmp] = useState({ name: '', email: '', phone: '', department: 'Engineering' })
  const [addingEmp, setAddingEmp] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem('urbanmiles_corporate')
    if (!raw) { router.push('/'); return }
    setCorporate(JSON.parse(raw))

    const empRaw = localStorage.getItem('urbanmiles_employees')
    const saved: Employee[] = empRaw ? JSON.parse(empRaw) : []
    setEmployees(saved.length ? saved : DEMO_EMPLOYEES)
  }, [router])

  function handleLogout() {
    localStorage.removeItem('urbanmiles_user')
    localStorage.removeItem('urbanmiles_corporate')
    router.push('/')
  }

  async function addEmployee() {
    if (!newEmp.name || !newEmp.email) return
    setAddingEmp(true)
    await new Promise(r => setTimeout(r, 600))
    const emp: Employee = {
      id: `e${Date.now()}`, ...newEmp, status: 'active',
      addedOn: new Date().toISOString().split('T')[0],
    }
    const updated = [...employees, emp]
    setEmployees(updated)
    localStorage.setItem('urbanmiles_employees', JSON.stringify(updated))
    setNewEmp({ name: '', email: '', phone: '', department: 'Engineering' })
    setAddingEmp(false); setShowAddEmp(false)
  }

  function toggleStatus(id: string) {
    const updated = employees.map(e => e.id === id
      ? { ...e, status: e.status === 'active' ? 'inactive' as const : 'active' as const } : e)
    setEmployees(updated)
    localStorage.setItem('urbanmiles_employees', JSON.stringify(updated))
  }

  function removeEmployee(id: string) {
    const updated = employees.filter(e => e.id !== id)
    setEmployees(updated)
    localStorage.setItem('urbanmiles_employees', JSON.stringify(updated))
  }

  // Stats
  const totalSpend    = bookings.filter(b => b.status === 'completed').reduce((s, b) => s + b.amount, 0)
  const monthSpend    = bookings.filter(b => b.status === 'completed' && b.date.startsWith('2026-06')).reduce((s, b) => s + b.amount, 0)
  const activeEmps    = employees.filter(e => e.status === 'active').length
  const upcomingTrips = bookings.filter(b => b.status === 'upcoming').length

  const filteredEmps = empFilter === 'all' ? employees : employees.filter(e => e.status === empFilter)
  const filteredBook = bookFilter === 'all' ? bookings : bookings.filter(b => b.status === bookFilter)
  const monthBookings = bookings.filter(b => b.date.startsWith(invoiceMonth))

  const statusBadge = (s: string) => {
    const map: Record<string, string> = {
      completed: 'bg-green-100 text-green-700',
      upcoming: 'bg-blue-100 text-blue-700',
      cancelled: 'bg-red-100 text-red-600',
      active: 'bg-green-100 text-green-700',
      inactive: 'bg-slate-100 text-slate-500',
    }
    return `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${map[s] || ''}`
  }

  if (!corporate) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-[#5B21B6] border-t-transparent animate-spin" />
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Corporate Top Bar ── */}
      <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-lg">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white/60 hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </Link>
          <div className="w-px h-5 bg-white/20" />
          <div className="w-8 h-8 rounded-lg bg-[#F59E0B] flex items-center justify-center text-slate-900 font-black text-sm">
            {corporate.companyName?.[0] || 'C'}
          </div>
          <div>
            <div className="font-outfit font-bold text-sm leading-none">{corporate.companyName}</div>
            <div className="text-white/50 text-[10px] uppercase tracking-widest">Corporate Account</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-white/60 text-xs">{corporate.adminName}</span>
          <button onClick={handleLogout}
            className="flex items-center gap-1.5 text-white/70 hover:text-red-400 text-xs transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Employees', value: activeEmps,                           icon: '👥', color: 'text-[#5B21B6]', bg: 'bg-purple-50' },
            { label: 'Upcoming Trips',   value: upcomingTrips,                        icon: '🗓️', color: 'text-blue-600',  bg: 'bg-blue-50'   },
            { label: 'This Month Spend', value: `₹${monthSpend.toLocaleString()}`,    icon: '📅', color: 'text-amber-600', bg: 'bg-amber-50'  },
            { label: 'Total Spend',      value: `₹${totalSpend.toLocaleString()}`,    icon: '💰', color: 'text-green-600', bg: 'bg-green-50'  },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center text-xl mb-3`}>{stat.icon}</div>
              <div className={`font-outfit font-black text-2xl ${stat.color}`}>{stat.value}</div>
              <div className="text-slate-400 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── Tab Navigation ── */}
        <div className="flex gap-1 bg-white border border-slate-200 rounded-2xl p-1.5 mb-6 shadow-sm w-fit overflow-x-auto">
          {[
            { id: 'overview',   label: 'Overview',   icon: '📊' },
            { id: 'employees',  label: 'Employees',  icon: '👥' },
            { id: 'bookings',   label: 'Bookings',   icon: '🚗' },
            { id: 'invoices',   label: 'Invoices',   icon: '🧾' },
          ].map(tab => (
            <button key={tab.id} onClick={() => setTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#1e293b] to-[#334155] text-white shadow'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* ══════════════════════════════ OVERVIEW ══════════════════════════════ */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-outfit font-bold text-slate-900">Recent Bookings</h3>
                <button onClick={() => setTab('bookings')} className="text-[#5B21B6] text-xs font-medium hover:underline">View all</button>
              </div>
              <div className="divide-y divide-slate-50">
                {bookings.slice(0, 4).map(b => (
                  <div key={b.id} className="px-5 py-3.5 flex items-center justify-between">
                    <div>
                      <div className="text-slate-900 text-sm font-semibold">{b.employeeName}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{b.from} → {b.to}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900 text-sm">₹{b.amount}</div>
                      <span className={statusBadge(b.status)}>{b.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee Summary */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-outfit font-bold text-slate-900">Employees</h3>
                <button onClick={() => setTab('employees')} className="text-[#5B21B6] text-xs font-medium hover:underline">Manage</button>
              </div>
              <div className="divide-y divide-slate-50">
                {employees.slice(0, 4).map(e => (
                  <div key={e.id} className="px-5 py-3.5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B21B6] to-[#4C1D95] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {e.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-900 text-sm font-semibold truncate">{e.name}</div>
                      <div className="text-slate-400 text-xs">{e.department}</div>
                    </div>
                    <span className={statusBadge(e.status)}>{e.status}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 border-t border-slate-100">
                <button onClick={() => { setShowAddEmp(true); setTab('employees') }}
                  className="w-full text-center text-[#5B21B6] text-sm font-semibold hover:underline">
                  + Add Employee
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 lg:col-span-2">
              <h3 className="font-outfit font-bold text-slate-900 mb-4">Quick Actions</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link href="/book"
                  className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#5B21B6]/20 bg-purple-50 hover:border-[#5B21B6] transition-all group">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm group-hover:text-[#5B21B6]">Book a Ride</div>
                    <div className="text-slate-400 text-xs">For an employee</div>
                  </div>
                </Link>
                <button onClick={() => { setShowAddEmp(true); setTab('employees') }}
                  className="flex items-center gap-3 p-4 rounded-xl border-2 border-amber-200 bg-amber-50 hover:border-[#F59E0B] transition-all group text-left">
                  <span className="text-2xl">👤</span>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm group-hover:text-[#F59E0B]">Add Employee</div>
                    <div className="text-slate-400 text-xs">Manage team access</div>
                  </div>
                </button>
                <button onClick={() => setTab('invoices')}
                  className="flex items-center gap-3 p-4 rounded-xl border-2 border-green-200 bg-green-50 hover:border-green-500 transition-all group text-left">
                  <span className="text-2xl">🧾</span>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm group-hover:text-green-600">Get Invoice</div>
                    <div className="text-slate-400 text-xs">Monthly PDF report</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════ EMPLOYEES ══════════════════════════════ */}
        {activeTab === 'employees' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-outfit font-bold text-slate-900">Employee Management</h3>
                <p className="text-slate-400 text-xs">{employees.length} employees · {activeEmps} active</p>
              </div>
              <div className="flex items-center gap-2">
                {/* Filter */}
                <div className="flex gap-1 bg-slate-100 rounded-xl p-1">
                  {(['all','active','inactive'] as const).map(f => (
                    <button key={f} onClick={() => setEmpFilter(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${empFilter === f ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>
                      {f}
                    </button>
                  ))}
                </div>
                <button onClick={() => setShowAddEmp(true)}
                  className="flex items-center gap-1.5 bg-[#5B21B6] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#4C1D95] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                  Add Employee
                </button>
              </div>
            </div>

            {/* Add Employee inline form */}
            {showAddEmp && (
              <div className="px-5 py-4 bg-purple-50 border-b border-purple-100">
                <h4 className="font-semibold text-slate-900 text-sm mb-3">Add New Employee</h4>
                <div className="grid sm:grid-cols-4 gap-3">
                  <input type="text" placeholder="Full Name *" value={newEmp.name}
                    onChange={e => setNewEmp(p => ({...p, name: e.target.value}))}
                    className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-[#5B21B6] bg-white" />
                  <input type="email" placeholder="Email *" value={newEmp.email}
                    onChange={e => setNewEmp(p => ({...p, email: e.target.value}))}
                    className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-[#5B21B6] bg-white" />
                  <input type="tel" placeholder="Phone" value={newEmp.phone}
                    onChange={e => setNewEmp(p => ({...p, phone: e.target.value.replace(/\D/g,'').slice(0,10)}))}
                    className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-[#5B21B6] bg-white" />
                  <select value={newEmp.department} onChange={e => setNewEmp(p => ({...p, department: e.target.value}))}
                    className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-[#5B21B6] bg-white">
                    {deptOptions.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div className="flex gap-2 mt-3">
                  <button onClick={addEmployee} disabled={addingEmp}
                    className="bg-[#5B21B6] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#4C1D95] transition-colors disabled:opacity-60 flex items-center gap-2">
                    {addingEmp ? <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> : null}
                    {addingEmp ? 'Adding...' : 'Add Employee'}
                  </button>
                  <button onClick={() => setShowAddEmp(false)} className="px-5 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-200 transition-colors">Cancel</button>
                </div>
              </div>
            )}

            {/* Employee Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    {['Employee', 'Email', 'Phone', 'Department', 'Status', 'Added On', 'Actions'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredEmps.map(e => (
                    <tr key={e.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B21B6] to-[#4C1D95] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {e.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                          </div>
                          <span className="text-sm font-semibold text-slate-900 whitespace-nowrap">{e.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-sm text-slate-600 whitespace-nowrap">{e.email}</td>
                      <td className="px-4 py-3.5 text-sm text-slate-600 whitespace-nowrap">{e.phone || '—'}</td>
                      <td className="px-4 py-3.5 text-sm text-slate-600 whitespace-nowrap">{e.department}</td>
                      <td className="px-4 py-3.5"><span className={statusBadge(e.status)}>{e.status}</span></td>
                      <td className="px-4 py-3.5 text-sm text-slate-400 whitespace-nowrap">{e.addedOn}</td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <button onClick={() => toggleStatus(e.id)}
                            className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${e.status === 'active' ? 'bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-500' : 'bg-green-50 text-green-600 hover:bg-green-100'}`}>
                            {e.status === 'active' ? 'Deactivate' : 'Activate'}
                          </button>
                          <button onClick={() => removeEmployee(e.id)}
                            className="text-xs px-2.5 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium transition-colors">
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredEmps.length === 0 && (
                    <tr><td colSpan={7} className="text-center py-10 text-slate-400 text-sm">No employees found.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ══════════════════════════════ BOOKINGS ══════════════════════════════ */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-outfit font-bold text-slate-900">All Bookings</h3>
                <p className="text-slate-400 text-xs">{bookings.length} total · ₹{totalSpend.toLocaleString()} spend</p>
              </div>
              <div className="flex gap-1 bg-slate-100 rounded-xl p-1">
                {(['all','completed','upcoming','cancelled'] as const).map(f => (
                  <button key={f} onClick={() => setBookFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${bookFilter === f ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    {['Booking ID', 'Employee', 'Route', 'Date', 'Vehicle', 'Amount', 'Status'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredBook.map(b => (
                    <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3.5 text-sm font-mono text-[#5B21B6] font-semibold">#{b.id}</td>
                      <td className="px-4 py-3.5 text-sm font-semibold text-slate-900 whitespace-nowrap">{b.employeeName}</td>
                      <td className="px-4 py-3.5 text-sm text-slate-600 whitespace-nowrap">{b.from} → {b.to}</td>
                      <td className="px-4 py-3.5 text-sm text-slate-500 whitespace-nowrap">{b.date}</td>
                      <td className="px-4 py-3.5 text-sm text-slate-500 whitespace-nowrap">{b.vehicle}</td>
                      <td className="px-4 py-3.5 text-sm font-bold text-slate-900">₹{b.amount.toLocaleString()}</td>
                      <td className="px-4 py-3.5"><span className={statusBadge(b.status)}>{b.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ══════════════════════════════ INVOICES ══════════════════════════════ */}
        {activeTab === 'invoices' && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-outfit font-bold text-slate-900">Monthly Invoice</h3>
                <input type="month" value={invoiceMonth} onChange={e => setInvMonth(e.target.value)}
                  className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#5B21B6]" />
              </div>

              {/* Invoice Preview */}
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6 pb-5 border-b border-slate-100">
                  <div>
                    <div className="font-outfit font-black text-2xl text-[#5B21B6]">Urban<span className="text-[#F59E0B]">Miles</span></div>
                    <div className="text-slate-400 text-xs">Lohegaon, Pune · +91 7857870449</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900">CORPORATE INVOICE</div>
                    <div className="text-slate-400 text-sm">{invoiceMonth}</div>
                    {corporate.gstNumber && <div className="text-slate-500 text-xs mt-1">GST: {corporate.gstNumber}</div>}
                  </div>
                </div>

                {/* Billed To */}
                <div className="bg-slate-50 rounded-xl p-4 mb-5">
                  <div className="text-slate-400 text-xs uppercase tracking-wide mb-1">Billed To</div>
                  <div className="font-bold text-slate-900">{corporate.companyName}</div>
                  <div className="text-slate-500 text-sm">{corporate.email}</div>
                </div>

                {/* Trips table */}
                {monthBookings.length > 0 ? (
                  <table className="w-full mb-5">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left text-xs text-slate-400 pb-2">Employee</th>
                        <th className="text-left text-xs text-slate-400 pb-2">Route</th>
                        <th className="text-left text-xs text-slate-400 pb-2">Date</th>
                        <th className="text-right text-xs text-slate-400 pb-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthBookings.map(b => (
                        <tr key={b.id} className="border-b border-slate-50">
                          <td className="py-2.5 text-sm text-slate-900">{b.employeeName}</td>
                          <td className="py-2.5 text-sm text-slate-500">{b.from} → {b.to}</td>
                          <td className="py-2.5 text-sm text-slate-500">{b.date}</td>
                          <td className="py-2.5 text-sm font-semibold text-slate-900 text-right">₹{b.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 text-sm mb-5">No bookings found for {invoiceMonth}</div>
                )}

                {/* Totals */}
                {monthBookings.length > 0 && (
                  <div className="space-y-2 border-t border-slate-200 pt-3">
                    {[
                      { label: 'Subtotal', val: monthBookings.reduce((s,b) => s + b.amount, 0) },
                      { label: 'GST (5%)', val: Math.round(monthBookings.reduce((s,b) => s + b.amount, 0) * 0.05) },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between text-sm text-slate-600">
                        <span>{row.label}</span><span>₹{row.val.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-black text-base text-slate-900 pt-1 border-t border-slate-200">
                      <span>Total Due</span>
                      <span className="text-[#5B21B6]">₹{Math.round(monthBookings.reduce((s,b) => s + b.amount, 0) * 1.05).toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar actions */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h4 className="font-outfit font-bold text-slate-900 mb-4">Invoice Actions</h4>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 p-3.5 rounded-xl border-2 border-[#5B21B6]/20 bg-purple-50 hover:border-[#5B21B6] transition-all text-left">
                    <span className="text-xl">📥</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">Download PDF</div>
                      <div className="text-slate-400 text-xs">Full invoice with GST</div>
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3.5 rounded-xl border-2 border-green-200 bg-green-50 hover:border-green-400 transition-all text-left">
                    <span className="text-xl">📧</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">Email Invoice</div>
                      <div className="text-slate-400 text-xs">Send to {corporate.email}</div>
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3.5 rounded-xl border-2 border-blue-200 bg-blue-50 hover:border-blue-400 transition-all text-left">
                    <span className="text-xl">📊</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">Export CSV</div>
                      <div className="text-slate-400 text-xs">For accounting software</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <div className="text-amber-700 font-semibold text-sm mb-1">💡 Corporate Benefit</div>
                <p className="text-amber-600 text-xs leading-relaxed">
                  All invoices include GSTIN details for easy input tax credit claims. Contact us to set up monthly credit billing.
                </p>
                <a href="tel:7857870449" className="mt-2 flex items-center gap-1 text-[#5B21B6] font-semibold text-sm hover:underline">
                  📞 7857870449
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
