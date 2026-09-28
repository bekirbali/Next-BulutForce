"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Todyl() {
  const [activeSection, setActiveSection] = useState("sgn-sase");

  // Smooth scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "sgn-sase",
        "ztna",
        "swg-dns",
        "ngfw-casb",
        "endpoint-protection",
        "mxdr",
        "siem-log",
        "licensing-matrix"
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "sgn-sase", label: "Secure Global Network (SGN)", icon: "🌐" },
    { id: "ztna", label: "Zero Trust Access (ZTNA)", icon: "🛡️" },
    { id: "swg-dns", label: "Secure Web Gateway (SWG)", icon: "🔒" },
    { id: "ngfw-casb", label: "Next-Gen Firewall (NGFW)", icon: "🧱" },
    { id: "endpoint-protection", label: "Endpoint Protection", icon: "💻" },
    { id: "mxdr", label: "Managed XDR (MXDR)", icon: "👁️" },
    { id: "siem-log", label: "SIEM & Log Management", icon: "📊" },
    { id: "licensing-matrix", label: "Licensing Matrix", icon: "📋" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-[lato] pt-10">
      {/* Hero Section */}
      <div className="relative h-[250px] md:h-[300px] flex flex-col items-center justify-center overflow-hidden bg-[#071933]">
        {/* Background dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020914] via-[#071933] to-[#041c3d] opacity-95 z-0"></div>

        {/* Background cyber pattern overlay */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 opacity-20 z-0">
          <Image
            src="/assets/anasayfa/bulutforceErkenTespitArkaPlan.jpg"
            alt="Background cyber pattern"
            fill
            className="object-cover object-right mix-blend-screen"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide mb-6">
            Todyl Unified Security Platform
          </h1>

          {/* Breadcrumbs Capsule */}
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 text-xs md:text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/markalarimiz" className="hover:text-white transition-colors duration-200">
              Our Brands
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-white font-medium">
              Todyl
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Main Content (All Sections Scrollable) */}
          <div className="lg:col-span-3 space-y-20">
            
            {/* Header intro info */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                MODULAR SECURITY ARCHITECTURE AND LAYER GUIDE
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-4">
                Todyl Unified Security Platform
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Todyl, unlike traditional complex security products, allows you to modularly deploy all solutions through a <strong>single lightweight agent (SGN Agent)</strong> and a <strong>single cloud management console</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mt-2">
                Below are the main modules, sub-parameters, and technical details of the platform:
              </p>
            </div>

            {/* 1. Secure Global Network™ (SGN) */}
            <section id="sgn-sase" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    MODULE 01
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    1. Secure Global Network™ (SGN) – Cloud Network & SASE Architecture
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    It is the fundamental infrastructure that connects all remote workers, branch offices, cloud resources (AWS/Azure), and data centers into a single encrypted cloud network.
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🔗 1.1. Network Connection and Tunnel Parameters:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">User-to-Cloud Tunnel:</strong> Direct device-based secure connection with SGN Agent.
                      </li>
                      <li>
                        <strong className="text-slate-700">Site-to-Cloud Tunnel:</strong> IPSec / WireGuard-based branch/office tunnels (connecting to the cloud without changing the physical firewall).
                      </li>
                      <li>
                        <strong className="text-slate-700">Cloud-to-Cloud Tunnel:</strong> High-speed BGP / Peering integration with AWS, Azure, Google Cloud, and private VDC infrastructures.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      ⚡ 1.2. Performance and Architecture:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Smart Routing:</strong> Low-latency routing to the nearest PoP (Point of Presence) location.
                      </li>
                      <li>
                        <strong className="text-slate-700">Bandwidth Management:</strong> Traffic prioritization (QoS) and line backup between branches.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Zero Trust Network Access (ZTNA) */}
            <section id="ztna" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    MODULE 02
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    2. Zero Trust Network Access (ZTNA) – Micro-Segmentation & Access Management
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    Eliminates the "whoever enters the network accesses everywhere" logic of traditional VPNs, providing full control.
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      ⚙️ 2.1. Conditional Access Policies (Conditional Access):
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Identity-Aware Access:</strong> Azure AD / Okta / Google Workspace integration with user/group-based authorization.
                      </li>
                      <li>
                        <strong className="text-slate-700">Device Posture Check:</strong> Granting/blocking access based on the EDR status, operating system up-to-dateness, and security status of the connecting device.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🛡️ 2.2. Micro-Segmentation Rules:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">IP / Port / Protocol Level Restriction:</strong> Directing the user only to the specific port of the authorized server (such as 192.168.1.50:3389) instead of the entire subnet.
                      </li>
                      <li>
                        <strong className="text-slate-700">Lateral Movement Prevention:</strong> Preventing endpoints from talking to each other without authorization inside the network with complete isolation.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Secure Web Gateway (SWG) & DNS Security */}
            <section id="swg-dns" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    MODULE 03
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    3. Secure Web Gateway (SWG) & DNS Security – Web Security
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    Inspects internet traffic at the cloud level, no matter where users connect from.
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🌐 3.1. Web & Content Filtering:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Category-Based Blocking:</strong> Blocking of gambling, adult, illegal, or productivity-reducing websites.
                      </li>
                      <li>
                        <strong className="text-slate-700">SafeSearch and YouTube Restrictions:</strong> Compliance with corporate usage policies.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🔍 3.2. Deep Traffic and Threat Inspection:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">SSL/TLS Decryption (SSL Inspection):</strong> Decrypting HTTPS traffic without performance loss to scan for malicious content.
                      </li>
                      <li>
                        <strong className="text-slate-700">Phishing & Malicious URL Protection:</strong> Blocking phishing sites with real-time reputation checks.
                      </li>
                      <li>
                        <strong className="text-slate-700">DNS Sinkholing:</strong> Directing DNS requests to weak or malicious domains to a secure IP address to block them.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Cloud Next-Gen Firewall (NGFW) & CASB */}
            <section id="ngfw-casb" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    MODULE 04
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    4. Cloud Next-Gen Firewall (NGFW) & CASB – Layer 7 Application Control
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    Provides visibility and control of all traffic on the network at the application level.
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🎯 4.1. Layer 7 Application Detection:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Port-Agnostic App Control:</strong> Detecting and blocking applications (Tor, BitTorrent, UltraSurf, etc.) running on non-standard ports.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      ☁️ 4.2. Shadow IT and CASB:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">SaaS Application Inspection:</strong> Preventing unauthorized uploads to cloud storage services like Google Drive, WeTransfer, Dropbox.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🛑 4.3. IPS (Intrusion Prevention System):
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Network-Level Exploit Prevention:</strong> Stopping known vulnerability scans and attack signatures at the tunnel level.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Endpoint Protection (EDR & NGAV) */}
            <section id="endpoint-protection" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    MODULE 05
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    5. Endpoint Protection (EDR & NGAV) – Endpoint Security
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    It is an advanced behavioral artificial intelligence agent running on endpoints (Windows, macOS, Linux).
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🛡️ 5.1. Next-Generation Antivirus (NGAV):
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Behavioral Engine:</strong> Catching zero-day threats and ransomware without signatures based on their behavior.
                      </li>
                      <li>
                        <strong className="text-slate-700">Fileless Malware Defense:</strong> Blocking fileless attacks running in memory (RAM) via PowerShell or WMI.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🚨 5.2. EDR and Incident Response (Response):
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Automated Network Isolation:</strong> Instantly isolating the threatened device from the network (only the Todyl management tunnel remains open).
                      </li>
                      <li>
                        <strong className="text-slate-700">Process Tree & Telemetry:</strong> Root Cause Analysis showing from which file and command the attack started.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Managed eXtended Detection & Response (MXDR) */}
            <section id="mxdr" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    MODULE 06
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    6. Managed eXtended Detection & Response (MXDR) – 24/7 SOC Service
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    It is the managed service layer offered jointly by Todyl's own expert SOC analysts and Bulutforce engineers.
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🏹 6.1. Threat Hunting & Correlation:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Cross-Layer Telemetry:</strong> Combining SGN Network data + ZTNA Access data + EDR Endpoint data in a single pot (XDR) to detect complex APT attacks.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      🛠️ 6.2. 24/7 Active Incident Response:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Analyst Response:</strong> Todyl SOC experts directly applying rules and stopping the threat in case of a suspicious event.
                      </li>
                      <li>
                        <strong className="text-slate-700">Bulutforce L2/L3 Support:</strong> Turkish incident notification, crisis management, and root cause reporting.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. SIEM & Log Management */}
            <section id="siem-log" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    MODULE 07
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    7. SIEM & Log Management – Central Analytics & Compliance
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    Ensures all infrastructure logs are stored and analyzed in accordance with regulations.
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      📦 7.1. Log Collection and Storage:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-700">Unlimited/Flexible Log Retention:</strong> Secure cloud storage of all SGN, EDR, and ZTNA logs.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 flex items-center">
                      📋 7.2. Compliance and Reporting (Compliance):
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">KVKK / ISO 27001 / BDDK Templates:</strong> Getting ready-made security and access reports with a single click to present in audits.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. SUMMARY LICENSING AND PACKAGING ARCHITECTURE */}
            <section id="licensing-matrix" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    SUMMARY MATRIX
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    📊 SUMMARY LICENSING AND PACKAGING ARCHITECTURE (Matrix)
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#071933] text-white">
                        <th className="py-3 px-4 font-bold border border-slate-200">Service Module</th>
                        <th className="py-3 px-4 font-bold border border-slate-200">Core Function</th>
                        <th className="py-3 px-4 font-bold border border-slate-200">Licensing / Unit Metric</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr>
                        <td className="py-3 px-4 border border-slate-200 font-semibold">SGN / SASE</td>
                        <td className="py-3 px-4 border border-slate-200">Cloud Network & Virtual Firewall</td>
                        <td className="py-3 px-4 border border-slate-200 font-semibold text-[#071933]">Per User / Device</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 border border-slate-200 font-semibold">ZTNA</td>
                        <td className="py-3 px-4 border border-slate-200">Identity-Based Secure Access</td>
                        <td className="py-3 px-4 border border-slate-200 font-semibold text-[#071933]">Per User</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border border-slate-200 font-semibold">SWG & DNS</td>
                        <td className="py-3 px-4 border border-slate-200">Web & SSL Filtering</td>
                        <td className="py-3 px-4 border border-slate-200 font-semibold text-[#071933]">Per User / Device</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 border border-slate-200 font-semibold">NGFW & CASB</td>
                        <td className="py-3 px-4 border border-slate-200">Layer 7 & Shadow IT Control</td>
                        <td className="py-3 px-4 border border-slate-200 font-semibold text-[#071933]">Per Network / Tunnel</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border border-slate-200 font-semibold">EDR / NGAV</td>
                        <td className="py-3 px-4 border border-slate-200">Behavioral Endpoint Protection</td>
                        <td className="py-3 px-4 border border-slate-200 font-semibold text-[#071933]">Per Device (Agent)</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 border border-slate-200 font-semibold">MXDR</td>
                        <td className="py-3 px-4 border border-slate-200">24/7 SOC & Threat Hunting</td>
                        <td className="py-3 px-4 border border-slate-200 font-semibold text-[#071933]">Per User / Device</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border border-slate-200 font-semibold">SIEM & Log</td>
                        <td className="py-3 px-4 border border-slate-200">Log Storage & Analytics</td>
                        <td className="py-3 px-4 border border-slate-200 font-semibold text-[#071933]">Data Volume (GB) or Per Device</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Dynamic Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              
              {/* Scroll tracking navigation */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                  Page Navigation
                </h3>
                <nav className="flex flex-col space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`text-sm py-2.5 px-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2.5 ${
                        activeSection === item.id
                          ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 pl-4"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 pl-3"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact CTA Card */}
              <div className="bg-gradient-to-br from-[#071933] to-[#12305a] rounded-2xl p-6 text-white shadow-md relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full"></div>

                <div className="relative z-10 space-y-4">
                  <div className="p-3 bg-white/10 rounded-xl inline-block">
                    <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-lg leading-snug">
                    Contact Our Experts for Offers and Pricing
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Contact us to determine the security platform needs of your business, request a special demo, or get a price offer.
                  </p>
                  <Link
                    href="/iletisim"
                    className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-[1.02]"
                  >
                    Contact Now
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
