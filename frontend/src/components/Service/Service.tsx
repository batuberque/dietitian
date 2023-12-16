import translation from '../transition';
import { IconType, renderIcon } from '../../lib/ui/IconUtils';

const services = [
  {
    id: 1,
    name: 'İnşaat Yönetimi',
    icon: 'IoConstruct' as IconType,
    description: 'Profesyonel inşaat yönetimi hizmetleri.',
  },
  {
    id: 2,
    name: 'Vinç Kiralama',
    icon: 'IoConstruct' as IconType,
    description: 'Güvenilir ve modern vinç kiralama çözümleri.',
  },
];

const Service = () => {
  return (
    <div className="max-w-md mx-auto mt-20 space-y-4 px-4 md:px-6">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-3 shadow-sm font-serif">
        HİZMETLERİMİZ
      </h2>
      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
          >
            {renderIcon(service.icon)}
            <div>
              <h3 className="font-bold text-lg text-gray-700">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default translation(Service);
