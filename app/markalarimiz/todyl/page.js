"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
        "licensing-matrix",
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

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate position accounting for fixed navbar height
      const navbarOffset = 140;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const menuItems = [
    { id: "sgn-sase", label: "_SGN & SASE", icon: "🌐" },
    { id: "ztna", label: "_ZTNA Access", icon: "🛡️" },
    { id: "swg-dns", label: "_SWG & DNS", icon: "🔒" },
    { id: "ngfw-casb", label: "_NGFW & CASB", icon: "🧱" },
    { id: "endpoint-protection", label: "_EDR + NGAV", icon: "💻" },
    { id: "mxdr", label: "_MXDR 24/7", icon: "👁️" },
    { id: "siem-log", label: "_SIEM & Log", icon: "📊" },
    { id: "licensing-matrix", label: "_Licensing Matrix", icon: "📋" },
  ];

  return (
    <div className={`min-h-screen bg-[#f8fafc] text-[#061217] ${dmSans.className} pt-4 pb-20 scroll-smooth`}>
      {/* Hero Section - Todyl Bright, White & Optimistic Aesthetic */}
      <section className="relative overflow-hidden border-b border-[#c8d3d9]/70 bg-gradient-to-b from-[#eef3f6] via-[#f8fafc] to-[#ffffff] py-16 md:py-24">
        {/* Subtle Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c8d3d9_1px,transparent_1px),linear-gradient(to_bottom,#c8d3d9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-60 pointer-events-none"></div>

        {/* Technical Registration Marks (+) */}
        <div className="absolute top-6 left-8 text-slate-400 font-mono text-sm select-none pointer-events-none">+</div>
        <div className="absolute top-6 right-8 text-slate-400 font-mono text-sm select-none pointer-events-none">+</div>
        <div className="absolute bottom-6 left-8 text-slate-400 font-mono text-sm select-none pointer-events-none">+</div>
        <div className="absolute bottom-6 right-8 text-slate-400 font-mono text-sm select-none pointer-events-none">+</div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          
          {/* Brand Lockup Capsule (1.5x Enlarged) */}
          <div className="inline-flex items-center space-x-4 mb-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-[#c8d3d9] shadow-sm hover:border-[#3ba6d0] transition-colors duration-200">
            <Image
              src="/assets/markalar/logos/todyl_logo_black.png"
              alt="Todyl Logo"
              width={225}
              height={62}
              className="h-12 w-auto object-contain"
              priority
            />
            <div className="h-6 w-px bg-slate-300"></div>
            <div className="flex items-center space-x-2 bg-[#061217] text-white px-3 py-1 rounded-md text-xs sm:text-sm font-medium tracking-tight">
              <span>_protect what you build</span>
              <span className="text-[#3ba6d0] font-bold">↗</span>
            </div>
          </div>

          {/* Hero Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#061217] tracking-tight max-w-4xl mx-auto leading-tight mb-6">
            _protection. confidence. <br className="hidden sm:inline" />
            we help you{" "}
            <span className="bg-primary text-white px-3 py-0.5 font-bold inline-block my-1 rounded-sm shadow-sm">
              build them all.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed mb-8">
            A single-agent, cloud-native security platform engineered for modern businesses and the MSPs who safeguard them against ever-changing cyber threats.
          </p>

          {/* Audience Focus Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center space-x-1.5 bg-white border border-[#c8d3d9] text-[#061217] px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#f58634]"></span>
              <span>_small-to-medium business (SMB)</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 bg-white border border-[#c8d3d9] text-[#061217] px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#90b859]"></span>
              <span>_managed service providers (MSP)</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 bg-white border border-[#c8d3d9] text-[#061217] px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#3ba6d0]"></span>
              <span>_single SGN agent</span>
            </span>
          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
          
          {/* Left Column - Content Sections */}
          <div className="xl:col-span-3 space-y-12">
            
            {/* Brand Philosophy & Campaign Statement Card */}
            <div className="relative bg-[#061217] text-white p-8 md:p-10 rounded-2xl overflow-hidden shadow-lg border border-slate-800">
              {/* Technical Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(200,211,217,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,211,217,0.06)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

              {/* Corner crosshairs */}
              <div className="absolute top-4 left-4 text-slate-600 font-mono text-xs select-none">+</div>
              <div className="absolute top-4 right-4 text-slate-600 font-mono text-xs select-none">+</div>
              <div className="absolute bottom-4 left-4 text-slate-600 font-mono text-xs select-none">+</div>
              <div className="absolute bottom-4 right-4 text-slate-600 font-mono text-xs select-none">+</div>

              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#3ba6d0]">
                    <span>[ _PHILOSOPHY ]</span>
                    <span className="text-slate-500">//</span>
                    <span className="text-slate-300">MODULAR SECURITY ARCHITECTURE</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    BULUTFORCE × TODYL PARTNER
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-light leading-snug">
                    _why do we do it? <br />
                    <span className="font-bold text-white">
                      "We believe every business deserves a shield."
                    </span>
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-3xl">
                    Todyl replaces fragmented point products with an all-in-one architecture. Deploy SASE, ZTNA, MXDR, SIEM, and EDR through a{" "}
                    <strong className="text-white font-semibold">single lightweight agent (SGN Agent)</strong> and a{" "}
                    <strong className="text-white font-semibold">unified cloud management console</strong>.
                  </p>
                </div>

                {/* 2 Focus Pillars */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm hover:border-[#f58634]/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#f58634]">
                        _small-to-medium business (SMB)
                      </span>
                      <span className="text-xs font-mono text-slate-500">01</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Straightforward, powerful cybersecurity designed to prevent catastrophic risk without overwhelming limited IT resources.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm hover:border-[#90b859]/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#90b859]">
                        _managed service providers (MSP)
                      </span>
                      <span className="text-xs font-mono text-slate-500">02</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Multi-tenant visibility, automated operations, and co-managed 24/7 MXDR to build customer trust and safeguard margins.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 1. Secure Global Network™ (SGN) */}
            <section id="sgn-sase" className="scroll-mt-28">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#c8d3d9] shadow-sm hover:shadow-md transition-shadow relative">
                {/* Tech Corner Mark */}
                <span className="absolute top-4 right-4 text-slate-400 font-mono text-xs">+</span>

                {/* Module Header */}
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-slate-100 text-[#061217] font-semibold rounded border border-slate-200">
                      _MODULE 01
                    </span>
                    <span className="text-xs font-mono text-[#3ba6d0] font-semibold">SASE & CLOUD NETWORK</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#061217] mb-2 tracking-tight">
                    _1. Secure Global Network™ (SGN) – Cloud Network & SASE
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    The fundamental backbone connecting remote workers, branch offices, cloud resources (AWS/Azure), and on-premise data centers into a single encrypted cloud network.
                  </p>
                </div>

                {/* Architecture Diagram with Frame */}
                <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden mb-8 border border-[#c8d3d9] bg-slate-900 shadow-inner group">
                  <Image
                    src="/assets/markalar/todyl_sgn_sase.jpg"
                    alt="Secure Global Network (SGN) & SASE Architecture Diagram"
                    fill
                    className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>

                {/* Technical Points */}
                <div className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm">
                  <div className="border-l-2 border-[#3ba6d0] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      🔗 1.1. Network Connection and Tunnel Parameters:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">User-to-Cloud Tunnel:</strong> Direct device-based secure connection with SGN Agent.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Site-to-Cloud Tunnel:</strong> IPSec / WireGuard-based branch/office tunnels (connecting without altering physical firewalls).
                      </li>
                      <li>
                        <strong className="text-[#061217]">Cloud-to-Cloud Tunnel:</strong> High-speed BGP / Peering integration with AWS, Azure, Google Cloud, and private VDC infrastructures.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-[#061217] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      ⚡ 1.2. Performance and Architecture:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">Smart Routing:</strong> Low-latency routing to the nearest PoP (Point of Presence) location worldwide.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Bandwidth Management:</strong> Traffic prioritization (QoS) and line backup between branches.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* 2. Zero Trust Network Access (ZTNA) */}
            <section id="ztna" className="scroll-mt-28">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#c8d3d9] shadow-sm hover:shadow-md transition-shadow relative">
                <span className="absolute top-4 right-4 text-slate-400 font-mono text-xs">+</span>

                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-slate-100 text-[#061217] font-semibold rounded border border-slate-200">
                      _MODULE 02
                    </span>
                    <span className="text-xs font-mono text-[#3ba6d0] font-semibold">MICRO-SEGMENTATION</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#061217] mb-2 tracking-tight">
                    _2. Zero Trust Network Access (ZTNA) – Access Management
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Eliminates the vulnerable "whoever enters the network accesses everywhere" concept of legacy VPNs, enforcing strict least-privilege verification.
                  </p>
                </div>

                {/* Architecture Diagram with Frame */}
                <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden mb-8 border border-[#c8d3d9] bg-slate-900 shadow-inner group">
                  <Image
                    src="/assets/markalar/todyl_ztna_access.jpg"
                    alt="Zero Trust Network Access (ZTNA) Architecture Diagram"
                    fill
                    className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm">
                  <div className="border-l-2 border-[#3ba6d0] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      ⚙️ 2.1. Conditional Access Policies:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">Identity-Aware Access:</strong> Azure AD / Okta / Google Workspace integration with role/group-based granular authorization.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Device Posture Check:</strong> Dynamic access grants based on EDR status, OS patch level, and device compliance posture.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-[#061217] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      🛡️ 2.2. Micro-Segmentation Rules:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">IP / Port / Protocol Restriction:</strong> Routing users only to specific authorized ports (e.g. 192.168.1.50:3389) rather than broad subnets.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Lateral Movement Prevention:</strong> Complete endpoint isolation stopping lateral propagation of cyber threats across workstations.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* 3. Secure Web Gateway (SWG) & DNS Security */}
            <section id="swg-dns" className="scroll-mt-28">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#c8d3d9] shadow-sm hover:shadow-md transition-shadow relative">
                <span className="absolute top-4 right-4 text-slate-400 font-mono text-xs">+</span>

                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-slate-100 text-[#061217] font-semibold rounded border border-slate-200">
                      _MODULE 03
                    </span>
                    <span className="text-xs font-mono text-[#3ba6d0] font-semibold">WEB PROTECTION</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#061217] mb-2 tracking-tight">
                    _3. Secure Web Gateway (SWG) & DNS Security
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Real-time inspection of all outbound and inbound web traffic at the cloud edge, regardless of where or how users connect.
                  </p>
                </div>

                {/* Architecture Diagram with Frame */}
                <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden mb-8 border border-[#c8d3d9] bg-slate-900 shadow-inner group">
                  <Image
                    src="/assets/markalar/todyl_swg_dns.jpg"
                    alt="Secure Web Gateway (SWG) & DNS Security Architecture Diagram"
                    fill
                    className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm">
                  <div className="border-l-2 border-[#3ba6d0] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      🌐 3.1. Web & Content Filtering:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">Category-Based Blocking:</strong> Automated blocking of phishing, adult, illegal, malware-hosting, or productivity-reducing sites.
                      </li>
                      <li>
                        <strong className="text-[#061217]">SafeSearch & Restrictions:</strong> Enforce strict corporate usage policies on search engines and streaming services.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-[#061217] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      🔍 3.2. Deep Traffic and Threat Inspection:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">SSL/TLS Decryption (SSL Inspection):</strong> High-performance HTTPS decryption to inspect encrypted payloads without bottlenecks.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Phishing & Malicious URL Defense:</strong> Instant zero-hour protection with global threat intelligence.
                      </li>
                      <li>
                        <strong className="text-[#061217]">DNS Sinkholing:</strong> Redirecting malicious domain queries to secure isolation sinks.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* 4. Cloud Next-Gen Firewall (NGFW) & CASB */}
            <section id="ngfw-casb" className="scroll-mt-28">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#c8d3d9] shadow-sm hover:shadow-md transition-shadow relative">
                <span className="absolute top-4 right-4 text-slate-400 font-mono text-xs">+</span>

                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-slate-100 text-[#061217] font-semibold rounded border border-slate-200">
                      _MODULE 04
                    </span>
                    <span className="text-xs font-mono text-[#3ba6d0] font-semibold">LAYER 7 CONTROL</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#061217] mb-2 tracking-tight">
                    _4. Cloud Next-Gen Firewall (NGFW) & CASB
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Deep Layer 7 application visibility and policy enforcement across enterprise SaaS, cloud workloads, and physical networks.
                  </p>
                </div>

                {/* Architecture Diagram with Frame */}
                <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden mb-8 border border-[#c8d3d9] bg-slate-900 shadow-inner group">
                  <Image
                    src="/assets/markalar/todyl_ngfw_casb.jpg"
                    alt="Cloud Next-Gen Firewall (NGFW) & CASB Architecture Diagram"
                    fill
                    className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-slate-700 text-sm">
                  <div className="border-l-2 border-[#3ba6d0] pl-4 space-y-2">
                    <h3 className="font-bold text-[#061217] text-sm">
                      🎯 4.1. Layer 7 App Detection
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Detecting and controlling non-standard port applications (Tor, BitTorrent, UltraSurf, P2P) regardless of port hopping.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#061217] pl-4 space-y-2">
                    <h3 className="font-bold text-[#061217] text-sm">
                      ☁️ 4.2. Shadow IT & CASB
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Monitoring and restricting unsanctioned SaaS file uploads (Google Drive, WeTransfer, Dropbox) to prevent data exfiltration.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#f58634] pl-4 space-y-2">
                    <h3 className="font-bold text-[#061217] text-sm">
                      🛑 4.3. Cloud IPS Defense
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Blocking network exploits, CVE vulnerability probes, and malicious brute-force scans right at the tunnel level.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* 5. Endpoint Protection (EDR & NGAV) */}
            <section id="endpoint-protection" className="scroll-mt-28">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#c8d3d9] shadow-sm hover:shadow-md transition-shadow relative">
                <span className="absolute top-4 right-4 text-slate-400 font-mono text-xs">+</span>

                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-slate-100 text-[#061217] font-semibold rounded border border-slate-200">
                      _MODULE 05
                    </span>
                    <span className="text-xs font-mono text-[#3ba6d0] font-semibold">AI ENDPOINT DEFENSE</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#061217] mb-2 tracking-tight">
                    _5. Endpoint Protection (EDR & NGAV)
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Advanced behavioral AI protection integrated into the lightweight SGN agent across Windows, macOS, and Linux endpoints.
                  </p>
                </div>

                {/* Architecture Diagram with Frame */}
                <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden mb-8 border border-[#c8d3d9] bg-slate-900 shadow-inner group">
                  <Image
                    src="/assets/markalar/todyl_edr_ngav.jpg"
                    alt="Endpoint Protection (EDR & NGAV) Architecture Diagram"
                    fill
                    className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm">
                  <div className="border-l-2 border-[#3ba6d0] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      🛡️ 5.1. Next-Generation Antivirus (NGAV):
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">Behavioral Engine:</strong> Intercepting zero-day attacks and ransomware variants based on heuristic behavior without waiting for signature updates.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Fileless Malware Defense:</strong> Stopping stealth in-memory attacks executing via PowerShell, WMI, or living-off-the-land binaries.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-[#061217] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      🚨 5.2. EDR and Incident Response:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">Automated Network Isolation:</strong> Instantly quarantining compromised hosts from the local LAN while keeping the Todyl cloud management line open.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Process Tree Telemetry:</strong> Root-cause analysis tracing malicious executions back to original scripts, parent processes, and network sockets.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* 6. Managed eXtended Detection & Response (MXDR) */}
            <section id="mxdr" className="scroll-mt-28">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#c8d3d9] shadow-sm hover:shadow-md transition-shadow relative">
                <span className="absolute top-4 right-4 text-slate-400 font-mono text-xs">+</span>

                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-slate-100 text-[#061217] font-semibold rounded border border-slate-200">
                      _MODULE 06
                    </span>
                    <span className="text-xs font-mono text-[#90b859] font-semibold">24/7 SOC CO-MANAGEMENT</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#061217] mb-2 tracking-tight">
                    _6. Managed Extended Detection & Response (MXDR)
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Expert-led 24/7/365 threat monitoring and rapid response delivered seamlessly by Todyl SOC analysts in coordination with Bulutforce engineers.
                  </p>
                </div>

                {/* Architecture Diagram with Frame */}
                <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden mb-8 border border-[#c8d3d9] bg-slate-900 shadow-inner group">
                  <Image
                    src="/assets/markalar/todyl_mxdr_soc.jpg"
                    alt="Managed Extended Detection & Response (MXDR) Architecture Diagram"
                    fill
                    className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm">
                  <div className="border-l-2 border-[#90b859] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      🏹 6.1. Continuous Threat Hunting:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">Cross-Layer Telemetry:</strong> Correlating SGN Network data + ZTNA Access patterns + EDR Endpoint telemetry into a single correlated XDR engine.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Proactive Investigation:</strong> Uncovering hidden APT persistence before damages occur.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-[#061217] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      🛠️ 6.2. 24/7 Active Incident Mitigation:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">Analyst-Led Remediation:</strong> Todyl SOC experts apply defensive policies and isolate threats directly during off-hours.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Bulutforce L2/L3 Turkish Support:</strong> Local incident coordination, root-cause forensics, and regulatory notifications.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* 7. SIEM & Log Management */}
            <section id="siem-log" className="scroll-mt-28">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#c8d3d9] shadow-sm hover:shadow-md transition-shadow relative">
                <span className="absolute top-4 right-4 text-slate-400 font-mono text-xs">+</span>

                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-slate-100 text-[#061217] font-semibold rounded border border-slate-200">
                      _MODULE 07
                    </span>
                    <span className="text-xs font-mono text-[#3ba6d0] font-semibold">COMPLIANCE & ANALYTICS</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#061217] mb-2 tracking-tight">
                    _7. SIEM & Log Management
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Scalable centralized logging, deep query analytics, and regulatory reporting tailored for stringent compliance frameworks.
                  </p>
                </div>

                {/* Architecture Diagram with Frame */}
                <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden mb-8 border border-[#c8d3d9] bg-slate-900 shadow-inner group">
                  <Image
                    src="/assets/markalar/todyl_siem_log.jpg"
                    alt="SIEM & Log Management Architecture Diagram"
                    fill
                    className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm">
                  <div className="border-l-2 border-[#3ba6d0] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      📦 7.1. Log Aggregation & Storage:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">Flexible Retention:</strong> Secure encrypted cloud retention of all SGN network flows, EDR alerts, and ZTNA access events.
                      </li>
                      <li>
                        <strong className="text-[#061217]">Instant Search:</strong> High-speed log exploration with custom query syntax for security audits.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-[#061217] pl-4 space-y-3">
                    <h3 className="font-bold text-[#061217] flex items-center text-sm md:text-base">
                      📋 7.2. Compliance Frameworks:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>
                        <strong className="text-[#061217]">KVKK / ISO 27001 / BDDK Readiness:</strong> Pre-built reporting templates enabling one-click audit trail exports.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* 8. Licensing and Module Matrix */}
            <section id="licensing-matrix" className="scroll-mt-28">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#c8d3d9] shadow-sm hover:shadow-md transition-shadow relative">
                <span className="absolute top-4 right-4 text-slate-400 font-mono text-xs">+</span>

                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-slate-100 text-[#061217] font-semibold rounded border border-slate-200">
                      _SUMMARY MATRIX
                    </span>
                    <span className="text-xs font-mono text-[#3ba6d0] font-semibold">TRANSPARENT PACKAGING</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#061217] mb-2 tracking-tight">
                    _8. Licensing and Module Matrix
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Modular licensing architecture allowing businesses to start with essential SASE layers and seamlessly add advanced capabilities.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#061217] text-white">
                        <th className="py-3 px-4 font-semibold border-b border-slate-700">_Service Module</th>
                        <th className="py-3 px-4 font-semibold border-b border-slate-700">_Core Function</th>
                        <th className="py-3 px-4 font-semibold border-b border-slate-700">_Metric / Unit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#061217]">SGN / SASE</td>
                        <td className="py-3.5 px-4">Cloud Network & Virtual Firewall</td>
                        <td className="py-3.5 px-4">
                          <span className="bg-[#3ba6d0]/10 text-[#3ba6d0] px-2.5 py-1 rounded text-xs font-bold">
                            Per User / Device
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-slate-50/50 hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#061217]">ZTNA</td>
                        <td className="py-3.5 px-4">Identity-Based Secure Access</td>
                        <td className="py-3.5 px-4">
                          <span className="bg-slate-200 text-[#061217] px-2.5 py-1 rounded text-xs font-semibold">
                            Per User
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#061217]">SWG & DNS</td>
                        <td className="py-3.5 px-4">Web & SSL Filtering</td>
                        <td className="py-3.5 px-4">
                          <span className="bg-[#3ba6d0]/10 text-[#3ba6d0] px-2.5 py-1 rounded text-xs font-bold">
                            Per User / Device
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-slate-50/50 hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#061217]">NGFW & CASB</td>
                        <td className="py-3.5 px-4">Layer 7 & Shadow IT Control</td>
                        <td className="py-3.5 px-4">
                          <span className="bg-slate-200 text-[#061217] px-2.5 py-1 rounded text-xs font-semibold">
                            Per Network / Tunnel
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#061217]">EDR / NGAV</td>
                        <td className="py-3.5 px-4">Behavioral Endpoint Protection</td>
                        <td className="py-3.5 px-4">
                          <span className="bg-[#3ba6d0]/10 text-[#3ba6d0] px-2.5 py-1 rounded text-xs font-bold">
                            Per Device (Agent)
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-slate-50/50 hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#061217]">MXDR</td>
                        <td className="py-3.5 px-4">24/7 SOC & Threat Hunting</td>
                        <td className="py-3.5 px-4">
                          <span className="bg-[#90b859]/15 text-[#638833] px-2.5 py-1 rounded text-xs font-bold">
                            Per User / Device
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#061217]">SIEM & Log</td>
                        <td className="py-3.5 px-4">Log Storage & Compliance Analytics</td>
                        <td className="py-3.5 px-4">
                          <span className="bg-slate-200 text-[#061217] px-2.5 py-1 rounded text-xs font-semibold">
                            GB Volume / Per Device
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </section>

          </div>

          {/* Right Column - Sticky Navigation Sidebar */}
          <div className="xl:col-span-1">
            <div className="xl:sticky xl:top-[185px] space-y-4">
              
              {/* Navigation Menu Card */}
              <div className={`bg-white rounded-2xl p-5 border border-[#c8d3d9] shadow-sm relative overflow-hidden ${inter.className}`}>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#061217]">
                    _navigation
                  </h3>
                  <span className="text-[10px] text-slate-400 font-semibold">8 MODULES</span>
                </div>

                <nav className="flex flex-col space-y-1">
                  {menuItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`text-xs sm:text-sm py-2 px-3 rounded-lg font-medium transition-all duration-150 flex items-center justify-between group ${
                          isActive
                            ? "bg-[#061217] text-white shadow-xs font-semibold"
                            : "text-slate-600 hover:text-[#061217] hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <span className="text-sm">{item.icon}</span>
                          <span className="truncate">{item.label}</span>
                        </div>
                        <span
                          className={`text-xs font-bold transition-transform ${
                            isActive
                              ? "text-[#3ba6d0] translate-x-0"
                              : "text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-slate-500"
                          }`}
                        >
                          ↗
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Contact CTA Card - Todyl Dark Container (#061217) */}
              <div className="bg-[#061217] text-white rounded-2xl p-6 shadow-md border border-slate-800 relative overflow-hidden">
                {/* Subtle blueprint grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(200,211,217,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,211,217,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"></div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <Image
                      src="/assets/markalar/logos/todyl_logo_white.png"
                      alt="Todyl"
                      width={100}
                      height={30}
                      className="h-6 sm:h-[26px] w-auto object-contain"
                    />
                    <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-[#3ba6d0]">
                      _partner
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg sm:text-xl leading-snug">
                      _get started with todyl
                    </h4>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      Contact Bulutforce engineers for custom sizing, demo instances, and special pricing.
                    </p>
                  </div>

                  <Link
                    href="/iletisim"
                    className="block text-center bg-[#3ba6d0] hover:bg-[#2e94bd] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow-md hover:scale-[1.02]"
                  >
                    _request demo & quote ↗
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
