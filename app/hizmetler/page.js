import Link from "next/link";

export default function Hizmetler() {
  const services = [
    {
      title: "Kurulum ve Profesyonel Hizmetler",
      description:
        "Güvenlik çözümlerinizin kurulumu ve yapılandırılması için profesyonel hizmetler.",
      path: "/hizmetler/installation-professional-services",
    },
    {
      title: "Gelişmiş Destek",
      description:
        "Kritik sistemleriniz için gelişmiş destek ve müdahale hizmetleri ile kesintisiz çalışma.",
      path: "/hizmetler/advanced-support",
    },
    {
      title: "Destek Planları",
      description:
        "Kurumunuzun ihtiyaçlarına göre özelleştirilmiş, farklı seviyelerde destek planları sunuyoruz.",
      path: "/hizmetler/support-plans",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-[500px]">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">
        Hizmetlerimiz
      </h1>

      <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
        BulutForce olarak, kurumunuzun siber güvenlik ihtiyaçlarını karşılamak
        için kapsamlı ve profesyonel hizmetler sunuyoruz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              href={service.path}
              className="text-blue-500 hover:text-blue-700 inline-flex items-center"
            >
              Daha fazla bilgi →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
