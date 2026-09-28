"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Acronis() {
  const [activeSection, setActiveSection] = useState("cyber-protect-cloud");

  // Smooth scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "cyber-protect-cloud",
        "cyber-protect-on-premises",
        "cyber-frame",
        "cloud-backup",
        "email-backup",
        "email-security",
        "edr",
        "xdr",
        "dlp",
        "rmm-patch"
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
    { id: "cyber-protect-cloud", label: "Cyber Protect Cloud", icon: "🛡️" },
    { id: "cyber-protect-on-premises", label: "Cyber Protect (On-Prem)", icon: "🏛️" },
    { id: "cyber-frame", label: "Cyber Frame", icon: "📐" },
    { id: "cloud-backup", label: "Cloud Backup", icon: "💾" },
    { id: "email-backup", label: "Email Backup", icon: "✉️" },
    { id: "email-security", label: "Email Security", icon: "🔒" },
    { id: "edr", label: "Acronis EDR", icon: "👁️" },
    { id: "xdr", label: "Acronis XDR", icon: "⚡" },
    { id: "dlp", label: "Acronis DLP", icon: "🛑" },
    { id: "rmm-patch", label: "RMM & Patch", icon: "⚙️" }
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
            Acronis Cyber Protection Solutions
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
              Acronis
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Main Content (All 10 Products Scrollable) */}
          <div className="lg:col-span-3 space-y-20">
            
            {/* 1. Acronis Cyber Protect Cloud */}
            <section id="cyber-protect-cloud" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    ACRONIS CYBER PROTECT
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis Cyber Protect Cloud 🛡️
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    Cyber Security, Data Backup, and System Management in a Single Cloud Console
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    In traditional IT environments, separate software is used for antivirus, separate for backup, and separate for patch management and remote access. This situation both increases costs and creates security gaps due to incompatibility between software. <strong>Acronis Cyber Protect Cloud</strong> integrates all of these processes through a <strong>single agent</strong> and a <strong>single management console</strong>, raising your cyber resilience to the highest level.
                  </p>

                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Key Capabilities</h3>
                    <ul className="space-y-4 text-sm md:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-lg mt-0.5">🔒</span>
                        <div>
                          <strong className="text-slate-800 block mb-1">Integrated Cyber Security (Active Protection):</strong>
                          Thanks to its artificial intelligence and behavioral analysis-driven engine, it instantly detects and blocks ransomware and zero-day threats. It automatically restores damaged files from backup.
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-lg mt-0.5">🌟</span>
                        <div>
                          <strong className="text-slate-800 block mb-1">Uninterrupted Data Backup & Recovery:</strong>
                          Backs up your servers, virtual machines, clients, and databases as full system images or file-based. It gets your systems up and running in seconds in the event of a disaster (Instant Restore).
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-lg mt-0.5">⚙️</span>
                        <div>
                          <strong className="text-slate-800 block mb-1">Vulnerability Assessment and Automated Management:</strong>
                          Detects security vulnerabilities in operating systems and more than 300 third-party software. It automates patch processes, narrowing the attack surface.
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-lg mt-0.5">👁️</span>
                        <div>
                          <strong className="text-slate-800 block mb-1">Central Monitoring and Reporting:</strong>
                          Control your entire company infrastructure, branch offices, and remote-working staff 24/7 from a single web interface.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Why is it the Right Choice for Your Business?</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">Cost Advantage:</strong> Instead of allocating separate budgets for different security and backup licenses, lower your operational costs with a single platform.
                      </li>
                      <li>
                        <strong className="text-slate-800">Zero Performance Loss:</strong> Instead of multiple programs that slow down computers and servers, ensure maximum performance with a <strong>single agent</strong> working lightly in the background.
                      </li>
                      <li>
                        <strong className="text-slate-800">Bulutforce Assurance:</strong> Your data is always safe with Bulutforce's expert architectural consultancy, local data storage options, and 24/7 technical support.
                      </li>
                    </ol>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-6">
                    <h4 className="font-bold text-[#071933] mb-1 flex items-center">
                      <span className="text-lg mr-2">💡</span> Call to Action:
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base italic">
                      Don't waste time with complex security software. Contact our experts to design a tailored Acronis Cyber Protect Cloud architecture for your business and start your 30-day free demo.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Acronis Cyber Protect (On-Premises) */}
            <section id="cyber-protect-on-premises" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    ON-PREMISES SOLUTIONS
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis Cyber Protect (On-Premises)
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    Fully Controlled, Fully Protected Cyber Security and Image Backup on Your Local Network (On-Prem)
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Although cloud architectures are becoming more widespread day by day, there are businesses that <strong>cannot export their data out of the institution</strong> or have to work in <strong>closed-loop (LAN) networks</strong> due to regulations (KVKK, BDDK, Presidency Digital Transformation Office Guide) or internal security policies.
                  </p>
                  <p>
                    <strong>Acronis Cyber Protect (On-Premises)</strong> allows you to install the entire management console and data storage units in your own data center, without the need for an external internet or cloud connection. It combines cyber security, full system backup, and vulnerability management on local servers under your complete control.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">1. Temel Mimarisi ve Öne Çıkan Yetenekleri 🏛️</h3>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🔒</span> A. Internet-Independent (Air-Gapped) Cyber Protection
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Full Protection in Closed-Loop Networks:</strong> Works seamlessly in high-security environments like isolated industrial systems (SCADA/ICS), finance, or public networks without internet access.
                        </li>
                        <li>
                          <strong className="text-slate-700">Active Protection (Local AI Engine):</strong> Instantly detects and stops ransomware and zero-day threats even in offline environments using the behavioral analysis engine running on the device.
                        </li>
                        <li>
                          <strong className="text-slate-700">Self-Healing Data Structure:</strong> Instantly detects files attempted to be encrypted and automatically restores them from backup copies in the local cache.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> B. Bare-Metal Recovery and Local Storage Architecture (Backup & Bare-Metal)
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Bare-Metal Recovery:</strong> Instantly installs a server with a crashed operating system or complete hardware failure onto a blank machine from the image in seconds, <strong>without installing from scratch</strong>, including the operating system, drivers, and applications.
                        </li>
                        <li>
                          <strong className="text-slate-700">Broad Hardware and Storage Support:</strong> Works 100% integrated with your company's existing NAS, SAN, Tape backup units, and local storage areas (DAS).
                        </li>
                        <li>
                          <strong className="text-slate-700">Flexible Platform Support:</strong> Backs up Windows Server, Linux (RHEL, Ubuntu, CentOS, etc.), VMware vSphere, Microsoft Hyper-V, Nutanix AHV, and KVM environments from a single center.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">⚙️</span> C. Local Network Automation and Vulnerability Management
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Local Patch and Update Distribution:</strong> Downloads operating system and 3rd party software patches from the internet to a single main server and distributes them to the entire local network, closing security gaps without consuming bandwidth.
                        </li>
                        <li>
                          <strong className="text-slate-700">Secure Drive Sanitization:</strong> Permanently deletes corporate data from storage units whose lifespan has expired or are no longer in use in accordance with international standards (DoD, NIST), preventing data leaks.
                        </li>
                        <li>
                          <strong className="text-slate-700">HDD/SSD Health Prediction:</strong> Reports the hardware failure risks of your storage units in advance, allowing you to plan disk replacement before data loss occurs.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 2. On-Premises and Bulut Modellerinin Karşılaştırması</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#071933] text-white">
                            <th className="py-3 px-4 font-bold border border-slate-200">Feature</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Acronis Cyber Protect Cloud</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Acronis Cyber Protect (On-Premises)</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Management Console</td>
                            <td className="py-3 px-4 border border-slate-200">Acronis / Bulutforce Cloud</td>
                            <td className="py-3 px-4 border border-slate-200">On-Premises Local Server</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Internet Connection</td>
                            <td className="py-3 px-4 border border-slate-200">Required</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Not Required (Air-Gapped Compatible)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Data Storage Location</td>
                            <td className="py-3 px-4 border border-slate-200">Cloud / Hybrid DC</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Entirely On-Premises (NAS/SAN/Tape)</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Licensing Model</td>
                            <td className="py-3 px-4 border border-slate-200">Subscription (Pay-As-You-Go)</td>
                            <td className="py-3 px-4 border border-slate-200">Perpetual Ownership or Annual Subscription</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Regulatory Compliance</td>
                            <td className="py-3 px-4 border border-slate-200">High (Cloud Flexibility)</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Maximum (Those with Foreign/Cloud Ban)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 3. Hangi İşletme ve Yapılar İçin İdealdir?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">Defense Industry, Public and Financial Institutions:</strong> High-security structures where exporting data to any external cloud server is legally prohibited.
                      </li>
                      <li>
                        <strong className="text-slate-800">Production Facilities and Factories (OT / SCADA):</strong> Industrial systems whose internet connections are cut off, managing production lines and having zero tolerance for downtime.
                      </li>
                      <li>
                        <strong className="text-slate-800">Companies with Broad Local Storage Investment:</strong> Businesses that have already invested in high-capacity SAN/NAS and Tape units and want to keep their data in-house.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100 bg-[#071933]/5 p-6 rounded-xl border border-[#071933]/10">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Bulutforce Mimarisi ve On-Prem Danışmanlığı</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 md:text-base">
                      <li>
                        <strong className="text-slate-800">Correct Hardware and Architecture Sizing:</strong> We size the server and storage architecture where the On-Premises console will be installed in the most optimum way according to your business's data volume.
                      </li>
                      <li>
                        <strong className="text-slate-800">Installation and PoC (Test) Support:</strong> We perform all disaster scenarios and image restore tests together with our expert engineers before taking the product live on your local network.
                      </li>
                      <li>
                        <strong className="text-slate-800">Regulatory Compliance Consultancy:</strong> We offer configuration support in accordance with KVKK and BDDK audits during the processes of storing and encrypting your data locally.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Acronis Cyber Frame */}
            <section id="cyber-frame" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    ARCHITECTURAL SOLUTIONS
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis Cyber Frame
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    Tailored Cyber Resilience Architecture Built on Global Acronis Technology for Your Business
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Ready-made packages and standard security recipes cannot meet the specific needs of every business. Different data sizes, complex network infrastructures, and strict legal regulations (KVKK, BDDK, Presidency Digital Transformation Office Guide) require a holistic cyber security and business continuity framework custom-designed for enterprises.
                  </p>
                  <p>
                    <strong>Acronis Cyber Frame</strong> is a strategic solution architecture that gathers the global cyber protection modules of the world giant Acronis (Backup, EDR/XDR, DLP, Email Security, RMM) under a single roof and is <strong>scaled specifically for your institution with Bulutforce expertise</strong>.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">1. Mimarinin Yapı Taşları ve Esnek Katmanları 🏛️</h3>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> A. Global Acronis Engine & Threat Intelligence
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">World-Class Cyber Protection:</strong> The global threat intelligence (CPOC) and AI-powered protection engine of Singapore and Switzerland-based Acronis, which protects more than 500,000 institutions, forms the sub-architecture.
                        </li>
                        <li>
                          <strong className="text-slate-700">Modular Integration:</strong> Only the security and backup components you need (Cyber Protect, EDR, Email Security, DLP, etc.) are included in the architecture like a jigsaw puzzle; you don't allocate budget to any feature you don't use.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> B. Hybrid and Multi-Layer Storage Architecture
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Flexible Location Design:</strong> The flexibility to store your data either on your company's internal hardware (NAS/SAN/Tape), in Acronis's global data centers, or in the <strong>Bulutforce Data Center (Partner Storage)</strong> infrastructure located within Turkey's borders.
                        </li>
                        <li>
                          <strong className="text-slate-700">Full Compliance with 3-2-1 Rule:</strong> Disaster Recovery scenarios are designed to keep 3 different copies of your data on 2 different media, and at least 1 copy in a different location (Bulutforce DC).
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">⚙️</span> C. Central Management and Policy Design
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Custom Security Policies:</strong> Access restrictions, data loss prevention rules, and backup periods suitable for your company's working model (Office, Hybrid, Field) are designed by Bulutforce engineers.
                        </li>
                        <li>
                          <strong className="text-slate-700">Zero-Trust Compliant Configuration:</strong> A structural framework is offered where all endpoints, servers, and cloud applications in your network are constantly audited, and identity and authorization verification are performed.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 2. Neden Standart Paket Değil de "Cyber Frame"?</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#071933] text-white">
                            <th className="py-3 px-4 font-bold border border-slate-200">Feature</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Standard Box / Package Software</th>
                            <th className="py-3 px-4 font-bold border border-slate-200 text-blue-400">Bulutforce Acronis Cyber Frame</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Configuration</td>
                            <td className="py-3 px-4 border border-slate-200">Fixed, non-flexible ready packages</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Tailor-made design specific to your business's risk profile</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Cost</td>
                            <td className="py-3 px-4 border border-slate-200">Unnecessary budget paid for unused modules</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Optimized cost with only needed components</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Data Location</td>
                            <td className="py-3 px-4 border border-slate-200">Limited storage options</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Hybrid Storage (Local + Bulutforce DC + Global Cloud)</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Technical Role</td>
                            <td className="py-3 px-4 border border-slate-200">Delivery of license key only</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Designing, installing, and 24/7 live monitoring of the architecture</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 3. Hangi İşletme ve Yapılar İçin İdealdir?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">Structures Outside Standard Packages:</strong> Medium and large-scale institutions with complex server, virtual machine, and multi-branch infrastructure.
                      </li>
                      <li>
                        <strong className="text-slate-800">Businesses Subject to Special Regulations:</strong> Companies whose data must remain in Turkey, be protected with special encryption keys, and pass KVKK/BDDK audits.
                      </li>
                      <li>
                        <strong className="text-slate-800">Those Seeking Holistic Security & Business Continuity:</strong> Those who want to gather Backup, EDR, Email Security, and Patch Management under a single architecture with <strong>Master MSP assurance</strong>, instead of managing them from separate companies.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100 bg-[#071933]/5 p-6 rounded-xl border border-[#071933]/10">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Bulutforce Katma Değeri ve Mimari Danışmanlık</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 md:text-base">
                      <li>
                        <strong className="text-slate-800">Phase 1 - Infrastructure Analysis (Assessment):</strong> Your company's current IT inventory, security vulnerabilities, and data volume are analyzed to outline the Cyber Frame.
                      </li>
                      <li>
                        <strong className="text-slate-800">Phase 2 - Tailored Licensing and Storage:</strong> The correct Acronis modules are selected; storage quota integrated with Bulutforce Data Center is defined.
                      </li>
                      <li>
                        <strong className="text-slate-800">Phase 3 - Implementation and 24/7 Uninterrupted Support:</strong> The architecture installation, test processes, and disaster scenarios are simulated and taken live. Direct local support is provided 24/7 with Bulutforce certified experts.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Acronis Cloud Backup */}
            <section id="cloud-backup" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    CLOUD BACKUP
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis Cloud Backup 🛡️
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    Critical Data Under Bulutforce Assurance and Instantly Accessible with World Giant's Cloud Technology
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    For businesses, data loss is not just a loss of information, it means direct reputation, time, and financial loss. The most solid line of defense against hardware failures, natural disasters, user errors, and siber attacks is backing up data in a <strong>secure and uninterrupted cloud infrastructure</strong>.
                  </p>
                  <p>
                    <strong>Acronis Cloud Backup</strong> combines the global Acronis backup engine, preferred by hundreds of thousands of institutions worldwide, with <strong>Bulutforce's high-security local data infrastructure and Master MSP expertise</strong>. It provides full assurance for your servers, virtual machines, and workstations against disasters.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">1. Temel Mimarisi ve Öne Çıkan Yetenekleri 🏛️</h3>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> A. Global Acronis Backup Engine & High Security
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">End-to-End Encryption (AES-256):</strong> Your data is encrypted at the source before it even leaves your device. It is protected with the encryption key you determine during transfer (SSL/TLS) and storage.
                        </li>
                        <li>
                          <strong className="text-slate-700">Smart Deduplication & Compression (Deduplication):</strong> Reduces backup size and bandwidth usage by up to 50% by filtering duplicate data and empty spaces, lowering your storage costs.
                        </li>
                        <li>
                          <strong className="text-slate-700">Advanced Image and File Backup:</strong> Transfer either the full system image (Bare-Metal) of your physical/virtual servers or only your critical data folders to the cloud at flexible intervals.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> B. Hybrid Storage Flexibility and Bulutforce DC
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Data Location Freedom:</strong> Store your data either in Acronis's global data centers (G1/G2) or in the <strong>Bulutforce Data Center (Partner Storage)</strong> infrastructure within Turkey.
                        </li>
                        <li>
                          <strong className="text-slate-700">KVKK and Local Regulation Compliance:</strong> Bulutforce local data center integration provides full compliance for businesses that cannot export their data abroad due to legal regulations in Turkey.
                        </li>
                        <li>
                          <strong className="text-slate-700">Instant Restore:</strong> When a physical server crashes or your disk burns, run the system image from the backup directly as a virtual machine in the cloud within seconds (reducing your RTO time to near zero).
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">⚙️</span> C. Flexible Licensing and Central Management
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Scalable Budget According to Need:</strong> Flexible cost advantage according to the growth rate of your business with either <strong>GB/TB-based</strong> (Pay-as-you-go) or <strong>fixed quota per device/server</strong> models.
                        </li>
                        <li>
                          <strong className="text-slate-700">24/7 Monitoring from Single Web Console:</strong> Monitor all branch, server, and user backups from a single web interface, and receive automatic success/failure reports.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 2. Neden Standart Bulut Yedeklemesi Değil?</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#071933] text-white">
                            <th className="py-3 px-4 font-bold border border-slate-200">Feature</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Traditional Cloud Storage (Drive/Dropbox etc.)</th>
                            <th className="py-3 px-4 font-bold border border-slate-200 text-blue-400">Bulutforce Acronis Cloud Backup</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Backup Scope</td>
                            <td className="py-3 px-4 border border-slate-200">Only simple file/folder synchronization</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Full System Image, Virtual Machine, Database, and File</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Recovery Speed</td>
                            <td className="py-3 px-4 border border-slate-200">Requirement to download files one by one</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Return in seconds with Instant Restore</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Cyber Protection</td>
                            <td className="py-3 px-4 border border-slate-200">Passive storage (Malicious files are also backed up)</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Active backup protected against ransomware</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Local Support</td>
                            <td className="py-3 px-4 border border-slate-200">Foreign ticket systems</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Bulutforce 24/7 Engineering Support & Local DC Option</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 3. Kimler İçin İdealdir?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">Institutions Managing Critical Servers and Databases:</strong> Businesses with zero tolerance for data loss and long-term system downtime.
                      </li>
                      <li>
                        <strong className="text-slate-800">Companies with Dense Branch and Field Staff:</strong> Those who want to transfer backups of devices in different locations to the cloud from a single center, without straining the bandwidth.
                      </li>
                      <li>
                        <strong className="text-slate-800">Structures Subject to Legal Regulations:</strong> Institutions obligated to store their data in Turkey's high-security Tier-III standard data center.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100 bg-[#071933]/5 p-6 rounded-xl border border-[#071933]/10">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Bulutforce Katma Değeri ve Destek Yaklaşımı</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 md:text-base">
                      <li>
                        <strong className="text-slate-800">Data Sizing and Sizing Analysis:</strong> Your business's current data volume and daily change rate are analyzed to determine the most accurate storage quota.
                      </li>
                      <li>
                        <strong className="text-slate-800">Test and Restore Simulations:</strong> We don't just take backups; we test how quickly your data can be restored in the event of a disaster with live simulations.
                      </li>
                      <li>
                        <strong className="text-slate-800">24/7 Technical Consultancy:</strong> You communicate directly with certified Bulutforce experts for installation, policy creation, and emergency interventions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Acronis Email Backup */}
            <section id="email-backup" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    CLOUD EMAIL BACKUP
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis Email Backup 🛡️
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    Your Microsoft 365 and Google Workspace Data Under 100% Protection with Global Acronis Infrastructure and Bulutforce Assurance
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Many institutions assume their data is automatically backed up when they move to cloud platforms like Microsoft 365 or Google Workspace. However, cloud providers guarantee infrastructure continuity; <strong>they do not commit to recovering accidentally deleted emails, malicious employee interventions, or cloud files encrypted by ransomware.</strong>
                  </p>
                  <p>
                    <strong>Acronis Email Backup (Cloud-to-Cloud)</strong> completely eliminates the risk of data loss by backing up your Microsoft 365 and Google Workspace environments directly from cloud to cloud. It combines the world-leading Acronis engine with <strong>Bulutforce's Turkey-based data infrastructure and expert support</strong>.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">1. Temel Mimarisi ve Öne Çıkan Yetenekleri 🏛️</h3>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> A. Complete Cloud-to-Cloud (C2C) Backup Architecture
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Zero Server Cost (Agentless):</strong> You don't need to install any software (agent) on company computers or servers. Backup occurs directly between cloud providers (Microsoft/Google ➔ Acronis/Bulutforce), without straining the company internet.
                        </li>
                        <li>
                          <strong className="text-slate-700">Full Bulut Ecosystem Scope:</strong>
                          <ul className="list-circle pl-5 mt-1 space-y-1">
                            <li><strong>Microsoft 365:</strong> Outlook Mailboxes, OneDrive, SharePoint Online, Teams (Channels, Chats, and Attachments).</li>
                            <li><strong>Google Workspace:</strong> Gmail, Google Drive, Contacts, and Calendar.</li>
                          </ul>
                        </li>
                        <li>
                          <strong className="text-slate-700">Automatic and Periodic Backup:</strong> Your new incoming/outgoing data is protected instantly with the automatic backup mechanism running up to 3 times a day.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> B. Flexible Search, Granular Recovery and Storage Options
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Advanced Granular Recovery (Search-Find-Recover):</strong> Search and find a single email, attachment, or OneDrive file deleted years ago in seconds; download it directly to the user's mailbox or computer.
                        </li>
                        <li>
                          <strong className="text-slate-700">Data Storage Freedom and KVKK Compliance:</strong> You can store your backed-up emails and documents either in Acronis's global cloud or in <strong>Bulutforce's local data center (Partner Storage) in Turkey</strong> in accordance with KVKK requirements.
                        </li>
                        <li>
                          <strong className="text-slate-700">Encrypted Secure Storage (AES-256):</strong> All your cloud data is protected with the highest encryption standards during transfer and storage.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">⚙️</span> C. Business Continuity and Ex-Employee Data Management
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Ex-Employee Archiving:</strong> Even if you cancel the Microsoft 365 / Google license of a person leaving the company, you can continue to store their past emails and files, accessing their data without paying new license fees.
                        </li>
                        <li>
                          <strong className="text-slate-700">Point-in-Time Restore:</strong> When your mailbox is subjected to a cyber attack or encrypted, you can return all your emails to a point in time before the attack in seconds.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 2. Neden Microsoft 365 / Google Kendi Yedeğini Tutmaz?</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#071933] text-white">
                            <th className="py-3 px-4 font-bold border border-slate-200">Scenario / Threat</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Cloud Provider's Standard Structure</th>
                            <th className="py-3 px-4 font-bold border border-slate-200 text-blue-400">Bulutforce Acronis Email Backup</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Accidental Data Deletion by User</td>
                            <td className="py-3 px-4 border border-slate-200">Trash bin permanently deletes data after 30 days</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Instant recovery from backup for unlimited time</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Malicious Employee Intervention</td>
                            <td className="py-3 px-4 border border-slate-200">Gelen/giden kutularını boşaltıp çöpü temizleyebilir</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">All past copies are safe in independent cloud</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">OneDrive / Drive Ransomware Attack</td>
                            <td className="py-3 px-4 border border-slate-200">Senkronize olan zararlı dosyalar buluttaki kopyayı da bozar</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Return to clean backup image before the attack in seconds</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Licensed Cancelled Departed Person</td>
                            <td className="py-3 px-4 border border-slate-200">Lisans kapatılınca 30 gün içinde tüm e-postalar silinir</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Data stored safely in archive without paying for license</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 3. Kimler İçin İdealdir?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">All Companies Using Microsoft 365 and Google Workspace:</strong> Businesses of all sizes managing their corporate communication and critical documents in the cloud.
                      </li>
                      <li>
                        <strong className="text-slate-800">Institutions Obligated to Keep Legal / Financial Archives:</strong> Law, finance, auditing, and production firms obligated to store email correspondence and contracts for years.
                      </li>
                      <li>
                        <strong className="text-slate-800">Businesses Prioritizing KVKK Compliance:</strong> Structures that want to store cloud email data in a local data center within Turkey's borders.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100 bg-[#071933]/5 p-6 rounded-xl border border-[#071933]/10">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Bulutforce Katma Değeri ve Kurulum Kolaylığı</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 md:text-base">
                      <li>
                        <strong className="text-slate-800">Taking Live in Minutes:</strong> We protect your Microsoft 365 or Google Workspace account in minutes via API integration, without requiring company-internal infrastructure investment.
                      </li>
                      <li>
                        <strong className="text-slate-800">Unlimited Storage and Flexible Licensing:</strong> We offer predictable cost management with flexible licensing options per mailbox (user).
                      </li>
                      <li>
                        <strong className="text-slate-800">24/7 Engineering and Recovery Support:</strong> Bulutforce team stands right by you in case of a potential data loss or urgent email search need.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Acronis Email Security */}
            <section id="email-security" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    EMAIL SECURITY
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis Email Security 🛡️
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    Cyber Protection Beyond Email Gateway Standards, Powered by Perception Point Technology
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    More than 90% of cyber attacks start via email. Advanced threats like phishing, malicious attachments, fake invoices, and CEO fraud (BEC) can easily bypass classic antivirus engines and default cloud email security layers (Microsoft 365 / Google Workspace).
                  </p>
                  <p>
                    <strong>Acronis Email Security</strong> integrates <strong>Perception Point</strong> engine, one of the most respected technologies in the cyber security world, into the global Acronis infrastructure. Your emails are analyzed in seconds before they drop into your inbox, blocking even the most complex and zero-day threats instantly.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">1. Temel Mimarisi ve İleri Seviye Koruma Katmanları 🏛️</h3>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> A. Perception Point Powered Instant Analysis Engine
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Advanced Sandbox (Dynamic Scanning):</strong> Analyzes files and URL links in email attachments by running them in a virtual environment (Sandbox) in seconds to check if they exhibit malicious behavior.
                        </li>
                        <li>
                          <strong className="text-slate-700">AI-Powered BEC Detection:</strong> Instantly exposes fake emails masquerading as company executives or suppliers (Impersonation) through natural language processing (NLP) and sender reputation analysis.
                        </li>
                        <li>
                          <strong className="text-slate-700">Zero-Day Protection:</strong> Detects malicious codes and exploit attempts created for the first time, not yet in signature databases, at the hardware level.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> B. Lightning Fast Detection and Workflow
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Scanning in Seconds (1-10 Seconds):</strong> While traditional protection solutions keep emails waiting for minutes, Acronis Email Security completes the scan without causing any latency in the email flow.
                        </li>
                        <li>
                          <strong className="text-slate-700">Full Integration with All Cloud Platforms:</strong> Integrates with Microsoft 365, Google Workspace, and on-premises Exchange servers in minutes via API-based or MX record redirection.
                        </li>
                        <li>
                          <strong className="text-slate-700">Visual Phishing Blocking:</strong> Detects fake login pages takliting well-known brands (banks, cargo firms, Microsoft, etc.) by visually analyzing the page.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">⚙️</span> C. Central Monitoring and Response Architecture
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Automatic Quarantine and Management:</strong> Emails containing threats are directly quarantined; detailed reports are presented to managers and users.
                        </li>
                        <li>
                          <strong className="text-slate-700">User Awareness Warning:</strong> Dynamic warning labels are added to the top of emails that seem suspicious but do not fall into the absolute malicious category, increasing employee awareness.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 2. Neden Varsayılan Güvenlik (M365 / Google) Yeterli Değil?</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#071933] text-white">
                            <th className="py-3 px-4 font-bold border border-slate-200">Threat Type</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Default Cloud Email Security</th>
                            <th className="py-3 px-4 font-bold border border-slate-200 text-blue-400">Bulutforce Acronis Email Security</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Zero-Day Attacks</td>
                            <td className="py-3 px-4 border border-slate-200">Focuses only on known signatures, might miss</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Blocks in seconds with Perception Point Sandbox</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Visual Phishing</td>
                            <td className="py-3 px-4 border border-slate-200">Only checks the URL link</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Detects fake login pages instantly through visual AI analysis</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">BEC / Fake Invoice Attacks</td>
                            <td className="py-3 px-4 border border-slate-200">Does not get caught in text-based simple rules</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Catches sender impersonation with NLP and behavioral analysis</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Scanning Speed & Latency</td>
                            <td className="py-3 px-4 border border-slate-200">Long waits in email delivery</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Zero-latency scanning between 1-10 seconds</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 3. Kimler İçin İdealdir?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">Companies with Dense Email Traffic:</strong> Businesses whose daily operations, bids, and billing processes are conducted entirely via email.
                      </li>
                      <li>
                        <strong className="text-slate-800">Finance, Procurement and Production Sector:</strong> Institutions with a high risk of financial loss due to invoice fraud (BEC) and fake IBAN modifications.
                      </li>
                      <li>
                        <strong className="text-slate-800">Institutions Using Microsoft 365 and Google Workspace:</strong> Structures that want to reinforce the default protection layer with a global cyber security armor.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100 bg-[#071933]/5 p-6 rounded-xl border border-[#071933]/10">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Bulutforce Katma Değeri ve Kurulum Süreci</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 md:text-base">
                      <li>
                        <strong className="text-slate-800">API-Based Installation in Minutes:</strong> We protect your email system in minutes via API integration without changing your MX records.
                      </li>
                      <li>
                        <strong className="text-slate-800">Threat Analysis and Response:</strong> Bulutforce engineers continuously monitor quarantined critical emails and attack trends to develop custom security policies for your institution.
                      </li>
                      <li>
                        <strong className="text-slate-800">24/7 Technical Consultancy:</strong> You receive support directly from our expert team in examining suspicious emails and quarantine processes.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Acronis EDR */}
            <section id="edr" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    ENDPOINT DETECTION & RESPONSE
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis EDR (Endpoint Detection & Response) 🛡️
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    Understand Insidious Threats Automatically, Detect Attacks at the Source and Isolate Your Devices Instantly
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Classic antivirus software only scans for known threat signatures; however, today's complex cyber attacks (APT, Ransomware, Zero-Day Attacks) proceed without leaving any trace on the system or hiding behind legitimate software. Monitoring suspicious movements at the device level instantly and finding the root cause of the attack is an inevitable requirement.
                  </p>
                  <p>
                    <strong>Acronis EDR</strong> combines the AI-powered behavioral analysis power of the global Acronis infrastructure with <strong>Bulutforce's Master MSP expertise and 24/7 monitoring support</strong>. It simplifies complex siber security operations, resolving attacks at the source before they spread.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">1. Temel Mimarisi ve Öne Çıkan Yetenekleri 🏛️</h3>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> A. Automatic Root Cause Analysis (RCA)
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Visualizing the Attack Chain:</strong> Presents from which email, website, or USB flash drive the attack started, and what processes it triggered in the system, through an easy-to-understand graphic diagram.
                        </li>
                        <li>
                          <strong className="text-slate-700">Mapping in MITRE ATT&CK® Standards:</strong> Classifies the tactics and techniques used by attackers according to the international MITRE ATT&CK framework, revealing your cyber security status clearly.
                        </li>
                        <li>
                          <strong className="text-slate-700">GenAI-Powered Incident Summary:</strong> Summarizes complex technical codes and logs in a plain language that anyone can understand with the help of artificial intelligence.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> B. Instant Response, Isolation and Automatic Remediation
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Single-Click Device Isolation:</strong> Instantly isolates a computer or server showing suspicious behavior from the network with a single click, preventing the malicious software from spreading to other company devices.
                        </li>
                        <li>
                          <strong className="text-slate-700">Automatic Rollback:</strong> Restores system files damaged or attempted to be encrypted during the attack to their clean state before the attack in a single move.
                        </li>
                        <li>
                          <strong className="text-slate-700">Remote Response and Investigation:</strong> Allows cyber security experts to connect to the affected device securely from remote to perform detailed forensics.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">⚙️</span> C. Light Agent Architecture and Integrated Structure
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Zero Performance Loss (Single Agent):</strong> Runs Backup, Antivirus, and EDR processes through a single light agent; does not cause stuttering or slowdown in computers.
                        </li>
                        <li>
                          <strong className="text-slate-700">Continuous Behavioral Monitoring:</strong> Analyzes process execution, registry changes, and network connections on devices 24/7 uninterrupted.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 2. Neden Klasik Antivirüs (EPP) Yeterli Değil?</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#071933] text-white">
                            <th className="py-3 px-4 font-bold border border-slate-200">Feature / Scenario</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Traditional Antivirus (EPP)</th>
                            <th className="py-3 px-4 font-bold border border-slate-200 text-blue-400">Bulutforce Acronis EDR</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Threat Detection</td>
                            <td className="py-3 px-4 border border-slate-200">Catches only known signatures and files</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Detects unknown, signatureless and insidious behaviors</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Attack Source</td>
                            <td className="py-3 px-4 border border-slate-200">Only deletes the malicious file, does not show the source</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Maps the attack chain with Root Cause Analysis (RCA)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Response Capability</td>
                            <td className="py-3 px-4 border border-slate-200">Limited to passive quarantine</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Isolates the device from the network and performs automatic Rollback</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">System Load</td>
                            <td className="py-3 px-4 border border-slate-200">Extra EDR software slows down the system</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Minimum resource consumption with Single Agent</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 3. Kimler İçin İdealdir?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">Companies with Critical Data and Server Infrastructure:</strong> Institutions that want to know not only how the attack was blocked but also how it occurred and take precautions.
                      </li>
                      <li>
                        <strong className="text-slate-800">KVKK, BDDK and ISO 27001 Compliant Structures:</strong> Businesses obligated to document cyber incident response processes and submit forensic analysis reports.
                      </li>
                      <li>
                        <strong className="text-slate-800">Institutions with Large Device Fleet:</strong> IT teams that want to monitor the computers of center, branch, and field workers 24/7 from a single center.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100 bg-[#071933]/5 p-6 rounded-xl border border-[#071933]/10">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Bulutforce Katma Değeri ve Analiz Desteği</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 md:text-base">
                      <li>
                        <strong className="text-slate-800">Correct Policy Configuration:</strong> We optimize Acronis EDR rules according to your company's working structure, reducing false-positives to zero.
                      </li>
                      <li>
                        <strong className="text-slate-800">Cyber Incident Investigation Consultancy:</strong> When a threat is detected, Bulutforce cyber security experts analyze the root cause analysis with you and take necessary security precautions.
                      </li>
                      <li>
                        <strong className="text-slate-800">24/7 Engineering Support:</strong> You receive support directly from our authorized engineers during critical device isolation and system recovery processes.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Acronis XDR */}
            <section id="xdr" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    EXTENDED DETECTION & RESPONSE
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis XDR (Extended Detection & Response) 🛡️
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    Cross-Threat Hunting and Holistic Cyber Security Architecture on Device, Email, Identity, and Cloud Layers
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Cyber attacks no longer focus on a single point (just the computer or just the email). Attackers usually penetrate the system with a stolen email password, escalate privileges in cloud applications, and encrypt data on servers in the final stage. Monitoring only a single layer by security solutions makes it impossible to see the attack as a whole.
                  </p>
                  <p>
                    <strong>Acronis XDR</strong> gathers data from devices (Endpoints), emails, user identities (Identity), and cloud workloads in a single center. It combines global Acronis threat intelligence with <strong>Bulutforce's Master MSP power</strong>, neutralizing complex and multi-layered siber attacks at the very beginning.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">1. Temel Mimarisi ve Öne Çıkan Yetenekleri 🏛️</h3>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> A. Cross-Domain Correlation
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Holistic Threat Visibility:</strong> Combines alerts coming from different sources (M365, Email Gateway, Servers, User Computers) under a single incident.
                        </li>
                        <li>
                          <strong className="text-slate-700">Advanced AI & GenAI Analysis:</strong> Interprets hundreds of complex log data and security alerts; maps the route followed by the attacker from end to end.
                        </li>
                        <li>
                          <strong className="text-slate-700">Extended Attack Surface Protection:</strong> Protects your endpoints as well as your cloud storage areas, email traffic, and Active Directory / Entra ID identity structures simultaneously.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> B. Automated Multi-Layer Response (Playbooks)
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Single-Click or Automatic Broad Response:</strong> When an attack is detected; deletes the suspicious email from all users' boxes, suspends the affected user account, and isolates the related device from the network.
                        </li>
                        <li>
                          <strong className="text-slate-700">Central Root Cause Analysis:</strong> Offers the root cause of the attack (with which email it started, through which user identity privilege escalation occurred, and which server was affected) on a single visual diagram.
                        </li>
                        <li>
                          <strong className="text-slate-700">Proactive Threat Hunting:</strong> Exposes hidden threats waiting quietly in the system or infiltrated without leaving a trace by comparing them with the global threat database.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">⚙️</span> C. Holistic Management from Single Panel
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">End of Silo Security Chaos:</strong> Instead of getting lost between different brands' EDR, Email Security, and Cloud Security panels, manage the entire siber security operation from <strong>a single Acronis / Bulutforce panel</strong>.
                        </li>
                        <li>
                          <strong className="text-slate-700">Low Operational Load:</strong> Filters false-positives with artificial intelligence, ensuring your IT teams and security experts focus only on real threats.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 2. EDR ve XDR Arasındaki Fark Nedir?</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#071933] text-white">
                            <th className="py-3 px-4 font-bold border border-slate-200">Feature / Scope</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Acronis EDR</th>
                            <th className="py-3 px-4 font-bold border border-slate-200 text-blue-400">Acronis XDR</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Monitoring Area</td>
                            <td className="py-3 px-4 border border-slate-200">Endpoints Only (PC, Server)</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">PC, Server, Email, Identity, and Cloud Workloads</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Attack Detection</td>
                            <td className="py-3 px-4 border border-slate-200">Suspicious movements on the device</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Multi-layered cross-correlation (Correlation)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Response Power</td>
                            <td className="py-3 px-4 border border-slate-200">Isolating device from network and Rollback</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Suspending accounts, deleting emails, and device isolation</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Target Audience</td>
                            <td className="py-3 px-4 border border-slate-200">Institutions wanting basic device security</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Advanced structures with wide attack surface</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 3. Kimler İçin İdealdir?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">Institutions with Wide and Complex IT Architecture:</strong> Companies with multiple branches, cloud services (M365/Google), and hybrid server infrastructure.
                      </li>
                      <li>
                        <strong className="text-slate-800">Finance, Energy and Retail Sector:</strong> Critical sectors where the siber attack surface is wide and a single security vulnerability can lead to a chain disaster.
                      </li>
                      <li>
                        <strong className="text-slate-800">Those Seeking to Lighten SOC Load:</strong> Businesses aiming for security teams to protect the entire company from a single smart panel instead of looking at hundreds of different screens.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100 bg-[#071933]/5 p-6 rounded-xl border border-[#071933]/10">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Bulutforce Katma Değeri ve SOC Mimarisi</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 md:text-base">
                      <li>
                        <strong className="text-slate-800">XDR Policy and Playbook Configuration:</strong> We configure automatic response scenarios (Playbooks) that will not disrupt your company's workflows together with our expert engineers.
                      </li>
                      <li>
                        <strong className="text-slate-800">24/7 Threat Hunting Support:</strong> Our certified cyber security experts continuously monitor complex incidents falling into your XDR panel and present analysis reports.
                      </li>
                      <li>
                        <strong className="text-slate-800">Integrated Infrastructure Integration:</strong> We integrate your M365, email, and server infrastructures into the Acronis XDR architecture with zero downtime.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Acronis DLP */}
            <section id="dlp" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    DATA LOSS PREVENTION
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis DLP (Data Loss Prevention) 🛡️
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    Protect Your Sensitive Corporate Data and Commercial Secrets from Leaking Outside the Company
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    One of the biggest security risks for businesses is data leaks. Employees exporting sensitive data, financial tables, source codes, or commercial secrets belonging to customers outside the company, either accidentally or maliciously; leads to both serious loss of prestige and high financial penalties under KVKK/GDPR.
                  </p>
                  <p>
                    <strong>Acronis DLP</strong> prevents sensitive information from falling into unauthorized hands by monitoring user behavior and data movements on the device level instantly. It combines global Acronis technology with <strong>Bulutforce's regulatory and architectural consultancy</strong>, taking your corporate memory under full protection.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">1. Temel Mimarisi ve Öne Çıkan Yetenekleri 🏛️</h3>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> A. Automatic Data Classification and Content Analysis
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Sensitive Data Detection (Content Awareness):</strong> Automatically classifies critical data such as Turkish ID Numbers, Credit Card Info (PCI-DSS), Customer Lists, Contracts, and Company-internal special codes.
                        </li>
                        <li>
                          <strong className="text-slate-700">Advanced OCR (Optical Character Recognition):</strong> Detects and prevents the leak of sensitive texts even within scanned documents, PDFs, or screenshots.
                        </li>
                        <li>
                          <strong className="text-slate-700">User Context and Behavior Analysis:</strong> Monitors 24/7 which user accessed which data, and where they tried to move or copy the file.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> B. Channel-Based Output and Transfer Prevention
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Peripherals and USB Control:</strong> Blocks unauthorized USB flash drives, external disks, or portable devices from connecting to company computers and transferring data.
                        </li>
                        <li>
                          <strong className="text-slate-700">Web and Cloud Sharing Restriction:</strong> Blocks uploading files to unapproved cloud services like personal Gmail/Hotmail accounts, WeTransfer, Dropbox, or Google Drive.
                        </li>
                        <li>
                          <strong className="text-slate-700">Application and Network Output Prevention:</strong> Stops data output via instant messaging applications like WhatsApp Web, Telegram, Skype, and email attachments.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">⚙️</span> C. Flexible Policy Management and Transparent Work
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">User-Friendly Protections:</strong> Flexible rules (policies) are defined that block only risky transactions, without locking company-internal legitimate workflows.
                        </li>
                        <li>
                          <strong className="text-slate-700">User Warning and Justification Request:</strong> When a suspicious share is attempted, an instant warning window is displayed to the user to block the transaction or request a justification statement for the action.
                        </li>
                        <li>
                          <strong className="text-slate-700">Forensic Investigation and Reporting (Audit Logs):</strong> Documents potential data breach attempts with detailed logs and screenshots, presenting them as evidence in regulatory audits.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 2. Neden Bütünleşik Acronis DLP?</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#071933] text-white">
                            <th className="py-3 px-4 font-bold border border-slate-200">Feature / Approach</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Traditional Standalone DLP Software</th>
                            <th className="py-3 px-4 font-bold border border-slate-200 text-blue-400">Bulutforce Acronis DLP</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Installation & Integration</td>
                            <td className="py-3 px-4 border border-slate-200">Complex configuration and high cost lasting months</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Fast and integrated structure activated in seconds</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">System Load</td>
                            <td className="py-3 px-4 border border-slate-200">Heavy agents that slow down computers excessively</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Single Agent working with Backup and Security</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Regulatory Compliance</td>
                            <td className="py-3 px-4 border border-slate-200">Offers only technical blocking</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900 font-medium">Policy templates fully compliant with KVKK / GDPR standards</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Cost</td>
                            <td className="py-3 px-4 border border-slate-200">Requirement for separate licensing and server infrastructure</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Optimized budget with integrated platform</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 3. Kimler İçin İdealdir?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">Institutions in KVKK and GDPR Compliance Process:</strong> All businesses legally obligated to protect customer data, employee information, and personal data.
                      </li>
                      <li>
                        <strong className="text-slate-800">R&D, Production and Software Companies:</strong> Structures wanting to protect source codes, product designs, recipes, and patented technologies.
                      </li>
                      <li>
                        <strong className="text-slate-800">Finance, Health and Law Sector:</strong> Institutions preventing critical documents like customer secrets, medical records, and lawsuit files from leaking outside.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100 bg-[#071933]/5 p-6 rounded-xl border border-[#071933]/10">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Bulutforce Katma Değeri ve Mevzuat Danışmanlığı</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 md:text-base">
                      <li>
                        <strong className="text-slate-800">DLP Policy Design:</strong> We design department-based (Finance, HR, R&D, etc.) blocking and permission rules together by mapping your company's data path.
                      </li>
                      <li>
                        <strong className="text-slate-800">Noisy-Free (False-Positive Free) Configuration:</strong> We establish sensitive balances that will not disrupt your workflows, preventing false blocks.
                      </li>
                      <li>
                        <strong className="text-slate-800">24/7 Engineering and Compliance Support:</strong> We stand by you with our certified experts in data breach alerts and regulatory compliance audits.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Acronis RMM & Patch Yönetimi */}
            <section id="rmm-patch" className="scroll-mt-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                    REMOTE MONITORING & MANAGEMENT
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#071933] mb-3">
                    Acronis RMM & Patch Management 🛡️
                  </h2>
                  <p className="text-slate-700 font-semibold italic text-base md:text-lg">
                    All Your Hardware, Software, and Security Patches Under Control from a Single Panel
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    A major portion of cyber attacks stem from known security vulnerabilities not patched in time in operating systems and 3rd party applications used (Chrome, Adobe, Zoom, etc.). However, tracking updates of tens or hundreds of computers and servers manually turns into an impossible operational load for IT teams.
                  </p>
                  <p>
                    <strong>Acronis RMM & Patch Management</strong> combines remote monitoring, management, and automatic patching capabilities in the global Acronis architecture. It automates the maintenance of your IT infrastructure with <strong>Bulutforce's Master MSP expertise</strong>, closing security gaps before attackers do.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-bold text-[#071933]">1. Temel Mimarisi ve Öne Çıkan Yetenekleri 🏛️</h3>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> A. Automated Patch and Vulnerability Management
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">More than 300 Software Support:</strong> Automatically detects security updates for Windows, macOS, and more than 300 of the most commonly used 3rd party applications (Adobe, Chrome, Firefox, Zoom, WinRAR, etc.).
                        </li>
                        <li>
                          <strong className="text-slate-700">Flexible Patch Distribution Policies:</strong> Calendars and priority rules are configured to ensure updates are performed outside working hours or without disturbing the user.
                        </li>
                        <li>
                          <strong className="text-slate-700">Tested Patch Security:</strong> Updates are tested beforehand to prevent system lockups or conflicts, avoiding risk of business interruption on critical servers.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">🌟</span> B. Remote Monitoring and Management (RMM)
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Instant Hardware and Software Inventory:</strong> Monitors CPU, RAM, disk status, license information, and installed software of all servers, PCs, and laptops in the company network 24/7.
                        </li>
                        <li>
                          <strong className="text-slate-700">HDD/SSD Health Prediction (AI):</strong> Reports the risk of disks failing in advance, allowing proactive measures to be taken before data loss occurs.
                        </li>
                        <li>
                          <strong className="text-slate-700">Secure Remote Desktop Connection:</strong> Allows secure remote support to be provided to devices with a single click, without allocating budget to an extra remote connection software (TeamViewer, Anydesk, etc.).
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center">
                        <span className="text-lg mr-2">⚙️</span> C. Automation and Performance Improvement
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                          <strong className="text-slate-700">Automatic Scripts:</strong> Runs routine IT tasks (disk cleaning, service restart, software deployment) in the background with automatic scripts.
                        </li>
                        <li>
                          <strong className="text-slate-700">Performance Warnings and Alarm Management:</strong> Excessive CPU/RAM usage, disk fullness, or stopped critical services are immediately reported to IT managers as alarms.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 2. Neden Bütünleşik RMM ve Patch Yönetimi?</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#071933] text-white">
                            <th className="py-3 px-4 font-bold border border-slate-200">Feature / Approach</th>
                            <th className="py-3 px-4 font-bold border border-slate-200">Traditional Separate IT Management Software</th>
                            <th className="py-3 px-4 font-bold border border-slate-200 text-blue-400">Bulutforce Acronis RMM & Patch</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Software and Agent Clutter</td>
                            <td className="py-3 px-4 border border-slate-200">Separate agent for RMM, separate for Remote Connection</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Single Agent integrated with Backup and Security</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Patch Scope</td>
                            <td className="py-3 px-4 border border-slate-200">Usually updates only the operating system</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">OS + Support for more than 300 3rd Party Software</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border border-slate-200 font-semibold">System Impact</td>
                            <td className="py-3 px-4 border border-slate-200">High bandwidth consumption on the network</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Compressed and optimized local distribution architecture</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="py-3 px-4 border border-slate-200 font-semibold">Maliyet</td>
                            <td className="py-3 px-4 border border-slate-200">Expensive tools licensed separately</td>
                            <td className="py-3 px-4 border border-slate-200 font-semibold text-slate-900">Optimized budget with integrated platform</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 3. Kimler İçin İdealdir?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                      <li>
                        <strong className="text-slate-800">Those Seeking to Lighten IT Team's Operational Load:</strong> All institutions wanting to automate update and inventory tracking that takes hours.
                      </li>
                      <li>
                        <strong className="text-slate-800">Companies with Multiple Branches and Remote Workers:</strong> Structures wanting to control update and security status of field staff and branch computers from the center.
                      </li>
                      <li>
                        <strong className="text-slate-800">Institutions Subject to ISO 27001 and Cyber Security Standards:</strong> Businesses obligated to present that systems are kept up to date, patch history, and vulnerability scan reports to auditors.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-100 bg-[#071933]/5 p-6 rounded-xl border border-[#071933]/10">
                    <h3 className="text-lg font-bold text-[#071933]">🌟 Bulutforce Katma Değeri ve Otomasyon Desteği</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 md:text-base">
                      <li>
                        <strong className="text-slate-800">System-Specific Patch Policies:</strong> We design patch transition scenarios suitable for separate risk levels for servers and user devices.
                      </li>
                      <li>
                        <strong className="text-slate-800">Vulnerability Scanning and Reporting:</strong> We regularly scan security vulnerabilities in your infrastructure and prepare corporate reports to be presented to management boards.
                      </li>
                      <li>
                        <strong className="text-slate-800">24/7 Uninterrupted Support:</strong> You take action instantly with Bulutforce’s certified engineers in critical update processes or system alarms.
                      </li>
                    </ul>
                  </div>
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
                    Contact us to determine the data protection and backup needs of your business, request a special demo, or get a price offer.
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
