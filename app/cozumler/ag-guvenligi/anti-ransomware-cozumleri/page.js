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
            Anti Ransomware Solutions
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Anti-Ransomware solutions are fully-active tools to provide
            real-time threat prevention to your organization's endpoints.
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
              Ransomware attacks have become one of the most dangerous threats
              in the digital world in recent years. In these types of attacks,
              malicious actors lock down the systems or data they target and
              demand ransom. Anti-ransomware solutions developed to deal with
              such dangerous situations are one of the most important tools for
              protecting users' and businesses' data.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Anti-ransomware solutions are software or hardware-based tools
              developed to protect computer systems and data from ransomware
              attacks. These solutions help block or minimize the effects of
              ransomware attacks using a variety of security measures and
              techniques. Here are some of the features that anti-ransomware
              solutions offer:
            </p>
          </div>

          {/* Anti-ransomware features */}
          <div className="flex flex-wrap justify-center mb-8 max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 p-4">
              <ol className="list-decimal space-y-6 text-left pl-4">
                <li>
                  <strong>File Monitoring and Detection :</strong>{" "}
                  Anti-ransomware solutions monitor your system for abnormal
                  activity and detect signs of ransomware attacks. This way,
                  attack attempts are detected at an early stage.
                </li>

                <li>
                  <strong>Behavioral Analysis :</strong> Anti-ransomware
                  solutions analyze the normal behavioral patterns of software
                  or files. They can automatically intervene when anomalous
                  behavior or suspicious processes are detected.
                </li>

                <li>
                  <strong>File Backup and Recovery :</strong> Anti-ransomware
                  solutions allow you to create regular file backups and recover
                  your data post-attack if necessary.
                </li>
              </ol>
            </div>
            <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
              <Image
                src="/assets/çözümler/bulutforceransomware.jpg"
                alt="Ransomware Protection"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full px-4 mb-12 max-w-5xl mx-auto">
            <ol className="list-decimal space-y-6 text-left pl-4" start="4">
              <li>
                <strong>Security Updates :</strong> Solution providers provide
                regular security updates to protect against new threats. This
                makes your solution more resilient to current threats.
              </li>

              <li>
                <strong>Email and Web Security :</strong> Anti-ransomware
                solutions can scan email and web traffic to detect malicious
                files or links. This helps reduce entry points for attacks.
              </li>

              <li>
                <strong>User Education :</strong> Anti-ransomware solutions can
                educate users on what ransomware attacks look like. It helps
                users avoid suspicious files.
              </li>
            </ol>
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
                Real Threat Prevention
              </h3>
              <p className="text-gray-600">
                Continuously monitors for ransomware-specific behavior and
                identifies illegitimate file encryption.
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
                Detect and Quarantine
              </h3>
              <p className="text-gray-600">
                All elements of the ransomware attack are identified and
                quarantined through forensic analysis.
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
                Data Refresh
              </h3>
              <p className="text-gray-600">
                Encrypted files are automatically restored from snapshots to
                ensure full business continuity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
