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
  {
    id: 3,
    name: 'Proje Yönetimi',
    icon: 'IoConstruct' as IconType,
    description:
      'Karmaşık inşaat projelerinizde etkin ve verimli proje yönetimi hizmetleri.',
  },
  {
    id: 4,
    name: 'Arazi Geliştirme ve Araştırma',
    icon: 'IoConstruct' as IconType,
    description:
      'Potansiyel inşaat alanları için arazi analizi ve geliştirme danışmanlığı.',
  },
  {
    id: 5,
    name: 'Sürdürülebilir İnşaat Çözümleri',
    icon: 'IoConstruct' as IconType,
    description: 'Çevre dostu ve enerji verimli inşaat yöntemleri.',
  },
  {
    id: 6,
    name: 'Güvenlik ve Denetim Hizmetleri',
    icon: 'IoConstruct' as IconType,
    description: 'İnşaat alanları için güvenlik denetimi ve risk yönetimi.',
  },
  {
    id: 7,
    name: 'Ekipman ve Malzeme Tedariki',
    icon: 'IoConstruct' as IconType,
    description: 'Kaliteli inşaat malzemeleri ve ekipmanları tedariki.',
  },
];

const Service = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 md:px-6 pb-5">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-6 shadow-sm font-serif">
        HİZMETLERİMİZ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
          >
            {renderIcon({ iconType: service.icon, sizeClass: 'text-2xl' })}
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

export default Service;
