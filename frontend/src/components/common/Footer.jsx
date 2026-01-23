import React from 'react'
import logo from '../../assets/Long_logo.png' 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="CyberThana Logo" className="h-10" />
            <span className="text-white font-semibold text-lg">
              CyberThana
            </span>
          </div>
          <p className="text-sm">
            A secure rural cybercrime reporting portal developed under the
            CivoraX Internship Program to bridge the gap between citizens
            and cyber law enforcement.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Citizen Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Report Cybercrime</li>
            <li className="hover:text-white cursor-pointer">Track Complaint</li>
            <li className="hover:text-white cursor-pointer">Cyber Safety Tips</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Official Access</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Officer Login</li>
            <li className="hover:text-white cursor-pointer">Case Dashboard</li>
            <li className="hover:text-white cursor-pointer">Audit Logs</li>
            <li className="hover:text-white cursor-pointer">Admin Panel</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Security & Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>🔒 End-to-End Encrypted Reporting</li>
            <li>📜 Data Privacy Compliant</li>
            <li>🛡️ Role-Based Access Control</li>
            <li>🕵️ All actions are audit logged</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer
