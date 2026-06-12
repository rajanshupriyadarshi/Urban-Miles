'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface UserProfile {
  name: string
  email: string
  phone: string
  gender: string
  dob: string
  // Billing
  billingName: string
  address: string
  city: string
  state: string
  pincode: string
  gstNumber: string
}

const defaultProfile: UserProfile = {
  name: '', email: '', phone: '', gender: '', dob: '',
  billingName: '', address: '', city: '', state: '', pincode: '', gstNumber: '',
}

const indianStates = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab',
  'Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh',
  'Uttarakhand','West Bengal','Delhi','Jammu & Kashmir','Ladakh',
]

export default function ProfilePage() {
  const [profile, setProfile]   = useState<UserProfile>(defaultProfile)
  const [activeTab, setTab]     = useState<'personal' | 'billing'>('personal')
  const [saving, setSaving]     = useState(false)
  const [saved, setSaved]       = useState(false)
  const [error, setError]       = useState('')

  // Load from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem('urbanmiles_user')
    if (raw) {
      const user = JSON.parse(raw)
      setProfile(prev => ({ ...prev, ...user }))
    }
    const profileRaw = localStorage.getItem('urbanmiles_profile')
    if (profileRaw) {
      setProfile(JSON.parse(profileRaw))
    }
  }, [])

  function handleChange(field: keyof UserProfile, value: string) {
    setProfile(prev => ({ ...prev, [field]: value }))
    setSaved(false)
  }

  async function handleSave() {
    setError('')
    if (!profile.name.trim()) { setError('Name is required.'); return }
    if (!profile.email.trim() && !profile.phone) { setError('Email or phone is required.'); return }

    setSaving(true)
    await new Promise(r => setTimeout(r, 800))

    // Save to localStorage (replace with API call later)
    localStorage.setItem('urbanmiles_profile', JSON.stringify(profile))
    // Update user object too
    localStorage.setItem('urbanmiles_user', JSON.stringify({
      name: profile.name, email: profile.email, phone: profile.phone
    }))

    setSaving(false)
    setSaved(true)
  }

  const inputCls = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/10 transition-all bg-white"
  const labelCls = "block text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1.5"

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#5B21B6] text-sm mb-6 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B21B6] to-[#4C1D95] flex items-center justify-center text-white text-2xl font-black font-outfit shadow-lg">
            {profile.name ? profile.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) : '?'}
          </div>
          <div>
            <h1 className="font-outfit font-black text-2xl text-slate-900">{profile.name || 'Your Profile'}</h1>
            <p className="text-slate-500 text-sm">{profile.email || profile.phone || 'Complete your profile for faster bookings'}</p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 bg-white border border-slate-200 rounded-2xl p-1.5 mb-6 shadow-sm w-fit">
          {[
            { id: 'personal', label: 'Personal Info',   icon: '👤' },
            { id: 'billing',  label: 'Billing Details', icon: '🧾' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setTab(tab.id as 'personal' | 'billing')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── PERSONAL INFO TAB ── */}
        {activeTab === 'personal' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h2 className="font-outfit font-bold text-slate-900">Personal Information</h2>
              <p className="text-slate-400 text-xs mt-0.5">Update your personal details below</p>
            </div>

            <div className="p-6 space-y-5">
              {/* Name */}
              <div>
                <label className={labelCls}>Full Name *</label>
                <input type="text" placeholder="Enter your full name" value={profile.name}
                  onChange={e => handleChange('name', e.target.value)} className={inputCls} />
              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Email Address</label>
                  <input type="email" placeholder="your@email.com" value={profile.email}
                    onChange={e => handleChange('email', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Phone Number</label>
                  <div className="flex">
                    <span className="flex items-center px-3 bg-slate-50 border border-r-0 border-slate-200 rounded-l-xl text-slate-500 text-sm">+91</span>
                    <input type="tel" placeholder="10-digit number" value={profile.phone}
                      onChange={e => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="flex-1 border border-slate-200 rounded-r-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/10 transition-all" />
                  </div>
                </div>
              </div>

              {/* Gender + DOB */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Gender</label>
                  <div className="flex gap-2">
                    {['Male', 'Female', 'Other'].map(g => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => handleChange('gender', g)}
                        className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                          profile.gender === g
                            ? 'border-[#5B21B6] bg-purple-50 text-[#5B21B6]'
                            : 'border-slate-200 text-slate-500 hover:border-slate-300'
                        }`}
                      >
                        {g === 'Male' ? '♂ ' : g === 'Female' ? '♀ ' : '⚧ '}{g}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Date of Birth</label>
                  <input type="date" value={profile.dob}
                    max={new Date().toISOString().split('T')[0]}
                    onChange={e => handleChange('dob', e.target.value)} className={inputCls} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── BILLING TAB ── */}
        {activeTab === 'billing' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h2 className="font-outfit font-bold text-slate-900">Billing Details</h2>
              <p className="text-slate-400 text-xs mt-0.5">Used for invoices and GST receipts</p>
            </div>

            <div className="p-6 space-y-5">
              {/* Billing Name */}
              <div>
                <label className={labelCls}>Billing Name / Company Name</label>
                <input type="text" placeholder="Name on invoice" value={profile.billingName}
                  onChange={e => handleChange('billingName', e.target.value)} className={inputCls} />
              </div>

              {/* Address */}
              <div>
                <label className={labelCls}>Street Address</label>
                <input type="text" placeholder="House no., Street, Area" value={profile.address}
                  onChange={e => handleChange('address', e.target.value)} className={inputCls} />
              </div>

              {/* City + Pincode */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>City</label>
                  <input type="text" placeholder="Enter city" value={profile.city}
                    onChange={e => handleChange('city', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>PIN Code</label>
                  <input type="text" placeholder="6-digit PIN" maxLength={6}
                    value={profile.pincode}
                    onChange={e => handleChange('pincode', e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className={inputCls} />
                </div>
              </div>

              {/* State */}
              <div>
                <label className={labelCls}>State</label>
                <select value={profile.state}
                  onChange={e => handleChange('state', e.target.value)}
                  className={inputCls}>
                  <option value="">Select State</option>
                  {indianStates.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* GST */}
              <div>
                <label className={labelCls}>GST Number <span className="text-slate-400 font-normal normal-case">(optional, for business invoices)</span></label>
                <input type="text" placeholder="e.g. 27AABCU9603R1ZX"
                  value={profile.gstNumber}
                  onChange={e => handleChange('gstNumber', e.target.value.toUpperCase())}
                  className={inputCls} />
              </div>

              {/* GST note */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex items-start gap-3">
                <span className="text-amber-500 text-lg">💡</span>
                <p className="text-amber-700 text-xs leading-relaxed">
                  Providing your GST number will include it on your invoices, enabling you to claim input tax credit for business travel expenses.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Save Button + status */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white font-bold px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-violet-700/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
          >
            {saving ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                Saving...
              </>
            ) : saved ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                Saved!
              </>
            ) : 'Save Changes'}
          </button>

          {saved && (
            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
              Profile updated successfully!
            </div>
          )}

          {error && (
            <div className="text-red-500 text-sm">⚠️ {error}</div>
          )}
        </div>
      </div>
    </div>
  )
}
