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
            Firewall IPS/IDS
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            A firewall is a security device or software used to increase network
            security. It controls communication traffic and allows traffic that
            complies with certain security policies to pass or block it.
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
              Its main function is to prevent unauthorized access and limit
              attacks. Firewalls work at the network level and usually examine
              incoming or outgoing traffic, filtering traffic based on specific
              protocols, ports, or IP addresses.
            </p>
          </div>

          {/* IDS/IPS Comparison Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 mb-16">
            {/* IDS Column */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-full max-w-xs mx-auto">
                <Image
                  src="/assets/çözümler/ids.jpg"
                  alt="IDS - Intrusion Detection System"
                  width={300}
                  height={180}
                  className="object-contain w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                IDS (Intrusion Detection System)
              </h3>
              <p className="text-gray-700 text-center px-4">
                IDS is a security mechanism that aims to identify potential
                security threats by monitoring abnormal activities on the
                network. IDS analyzes network traffic and detects certain attack
                signatures or anomalies. However, IDS does not prevent attacks,
                it only detects threats and issues alerts. These alerts are
                forwarded to security teams or administrators so that necessary
                actions can be taken.
              </p>
            </div>

            {/* IPS Column */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-full max-w-xs mx-auto">
                <Image
                  src="/assets/çözümler/ips.jpg"
                  alt="IPS - Intrusion Prevention System"
                  width={300}
                  height={180}
                  className="object-contain w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                IPS (Intrusion Prevention System)
              </h3>
              <p className="text-gray-700 text-center px-4">
                IPS is a security mechanism that detects and blocks malicious
                activity on the network. It can be thought of as an advanced
                firewall. IPS monitors network traffic in real time, detects
                abnormal activity, and intervenes quickly. If a threat or attack
                is detected, IPS can automatically take the necessary steps to
                block the attack. These steps could be blocking traffic,
                blocking the attacker IP address, or detecting a specific attack
                signature.
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
                Firewall
              </h3>
              <p className="text-gray-600">
                A firewall is a security device or software used to increase
                network security.
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
                IPS (Intrusion Prevention System)
              </h3>
              <p className="text-gray-600">
                IPS is a security mechanism that detects and blocks malicious
                activities on the network.
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
                IDS (Intrusion Detection System)
              </h3>
              <p className="text-gray-600">
                IDS is a security mechanism that aims to identify potential
                security threats by monitoring abnormal activities on the
                network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
