import Image from "next/image";
import Link from "next/link";

export default function GuvenlikOtomasyonu() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/anasayfa/bulutforcedetaylıbilgiarkaplan.jpg"
          alt="Security Automation Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            DNS and DHCP Management
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            DNS and DHCP security and address management are the cornerstones of
            maintaining the security and order of network infrastructure. By
            taking the right security measures, businesses can optimize data
            integrity and network performance while minimizing cyber threats.
          </p>
          <div className="mt-8">
            <Link href="/hizmetler/support-plans">
              <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors hover:cursor-pointer">
                SUPPORT PLANS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Security Automation Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-4xl mx-auto">
              In today's world where information technologies are rapidly
              developing, network security and address management are critical
              to protecting data integrity and the robustness of network
              infrastructure for businesses. DNS (Domain Name System) and DHCP
              (Dynamic Host Configuration Protocol) ensure the efficient
              operation of the network infrastructure, but they can carry
              potential risks without the right security measures.
            </p>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              DNS Security: Protecting Domain Name Management
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              DNS provides translation between domain names and IP addresses and
              is one of the fundamental building blocks of the Internet. DNS
              security is necessary to prevent domain names from being
              redirected to fraudulent or malicious sites.
            </p>
          </div>

          {/* DNS Security Content */}
          <div className="flex flex-wrap justify-center mb-8 max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 p-4">
              <ol className="list-decimal space-y-6 text-left pl-4">
                <li>
                  <strong>Monitoring DNS Logs:</strong> DNS logs are used to
                  detect anomalous activity and anticipate potential attacks.
                  These logs should be monitored regularly.
                </li>

                <li>
                  <strong>DNSSEC (DNS Security Extensions):</strong> DNSSEC
                  ensures the integrity of DNS responses by encrypting DNS
                  responses and securing them with digital signatures.
                </li>

                <li>
                  <strong>Well-Defined Permissions:</strong> Ensure that only
                  authorized users can update or change DNS records. It is
                  important for businesses to open DNS records only to those who
                  are required to do so.
                </li>
              </ol>
            </div>
            <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
              <Image
                src="/assets/çözümler/bulutforceDnsvedhcp.webp"
                alt="DNS Security"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-12 mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              DHCP Security and Address Management: Control of Network Resources
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              DHCP is used for IP address allocation and configuration. DHCP
              security and address management ensure efficient and secure use of
              network resources.
            </p>
          </div>

          {/* DHCP Security Content */}
          <div className="w-full px-4 mb-12 max-w-5xl mx-auto">
            <ol className="list-decimal space-y-6 text-left pl-4">
              <li>
                <strong>Enabling DHCP Security:</strong> It is important to
                enable DHCP security protocols (DHCP Snooping, IP Source Guard,
                Dynamic ARP Inspection) to secure communication between DHCP
                servers and clients.
              </li>

              <li>
                <strong>Address Management and Monitoring:</strong> Effective
                allocation and monitoring of IP addresses prevents address
                conflicts and unnecessary IP allocation.
              </li>

              <li>
                <strong>Stable Monitoring and Training:</strong> Continuous
                monitoring of DHCP servers and network resources helps detect
                anomalies early. Additionally, training employees on DHCP
                security and address management reduces human errors.
              </li>
            </ol>
            <div className="text-center mb-12 mt-10">
              <p className="text-gray-600 mx-auto">
                DNS and DHCP security and address management are the
                cornerstones of maintaining the security and order of network
                infrastructure. By taking the right security measures,
                businesses can optimize data integrity and network performance
                while minimizing cyber threats.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/çözümler/bulutforce3cizgi.jpg"
                  alt="Advanced Threat Detection"
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Protect Cloud Applications
              </h3>
              <p className="text-gray-600">
                It accelerates and protects your cloud applications both in
                process and at the point of origin.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/çözümler/bulutforce3cizgi.jpg"
                  alt="Effective Response Process"
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Protect Cloud Access
              </h3>
              <p className="text-gray-600">
                Authentication and identity management keep your data accurate
                without a VPN.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/çözümler/bulutforce3cizgi.jpg"
                  alt="Identifies Potential Problems"
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Protect Cloud Connections
              </h3>
              <p className="text-gray-600">
                Protect not only HTTP protocols but also TCP/UDP services
                including SSH, SMTP and SFTP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
