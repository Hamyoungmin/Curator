'use client';

import { useState, useEffect } from 'react';
import { MapPin, ChevronUp } from 'lucide-react';
import { Header } from './Header';
import Link from 'next/link';

type Creature = {
  id: number;
  name: string;
  description: string;
  zone: string;
  image: string;
};

const creatures: Creature[] = [
  {
    id: 1,
    name: '알파카',
    description: '부드러운 털을 가진 친구입니다. 알파카는 온순한 성격과 사랑스러운 외모로 많은 사람들의 사랑을 받고 있습니다. 남미 안데스 산맥 고원지대가 원산지이며, 추운 날씨에도 잘 적응하는 동물입니다.',
    zone: '육지 동물 존',
    image: 'https://images.unsplash.com/photo-1663074973171-f6b3bd82d39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBhY2ElMjBmYXJtfGVufDF8fHx8MTc2MjQ5NTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: '양',
    description: '온순한 성격의 친구입니다. 양은 인류와 오랜 시간 함께해온 가축으로, 부드러운 털과 순한 성격이 특징입니다. 무리 생활을 하며 풀을 뜯어 먹으며 평화롭게 지냅니다.',
    zone: '육지 동물 존',
    image: 'https://images.unsplash.com/photo-1597131579191-79c83f1a8b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNoZWVwfGVufDF8fHx8MTc2MjQ5NTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: '사슴',
    description: '우아한 자태의 친구입니다. 사슴은 날렵한 몸매와 우아한 움직임으로 숲의 귀족이라 불립니다. 큰 눈과 긴 다리가 특징이며, 민첩하게 움직이는 모습이 아름답습니다.',
    zone: '육지 동물 존',
    image: 'https://images.unsplash.com/photo-1599456671475-da8c5b91e52c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVyJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzYyNDk1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: '토끼',
    description: '깡충깡충 뛰는 친구입니다. 토끼는 긴 귀와 짧은 꼬리, 강한 뒷다리가 특징입니다. 깡충깡충 뛰어다니는 모습이 귀엽고 사랑스러우며, 채소와 풀을 좋아합니다.',
    zone: '육지 동물 존',
    image: 'https://images.unsplash.com/photo-1552757277-4f85016fa20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBidW5ueXxlbnwxfHx8fDE3NjI0Njg1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    name: '프레리도그',
    description: '귀여운 설치류 친구입니다. 프레리도그는 북미 초원지대에 사는 다람쥐과 동물로, 땅굴을 파고 무리 생활을 합니다. 뒷다리로 서서 주변을 살피는 모습이 매우 귀엽습니다.',
    zone: '육지 동물 존',
    image: 'https://images.unsplash.com/photo-1571488839518-864e5b7447e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFpcmllJTIwZG9nfGVufDF8fHx8MTc2MjQ5NTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    name: '샌드타이거샤크',
    description: '샌드타이거샤크의 이빨은 여러 겹으로 겹쳐 나있고 끊임없이 재생합니다. 대부분의 시간을 유영하고 유영할 때는 입을 벌리고 있습니다. 샌드타이거샤크는 3m가 넘게 자랄 수 있는 대형 상어이고 무겁게 생겼지만 사실은 온순한 성격을 가지고 있습니다. 뾰족한 콧등과 작은 눈, 체표의 반점도 샌드타이거샤크의 큰 특징입니다.',
    zone: '디 오션',
    image: '/images/sand-tiger-shark.png'
  },
  {
    id: 7,
    name: '캘리포니아 바다사자',
    description: '똘망똘망한 눈과 뛰어난 균형감각을 자랑하는 날렵한 캘리포니아 바다사자! 캘리포니아 바다사자는 물범과 함께 발이 지느러미로 된 기각류에 속합니다. 앞지느러미와 뒷지느러미가 길어 몸을 지탱하며 걷는데 유리해, 물 속 뿐 아니라 물 위에서도 빠르고 멀리 이동할 수 있습니다.',
    zone: '바다사자 존',
    image: '/images/sea-lion.png'
  },
  {
    id: 8,
    name: '참물범',
    description: '온대부터 한대까지 먼 바다를 오가며 사는 참물범은 추운 환경에 적응 진화되었습니다. 귓바퀴가 퇴화된 작은 구멍의 귀와, 피부 아래 두꺼운 지방층도 있어 체온 유지에 유리합니다. 이 넉넉한 지방 덕분에 통통하고 귀여운 모습을 가지게 되었습니다.',
    zone: '바다사자 존',
    image: '/images/seal.png'
  },
  {
    id: 9,
    name: '훔볼트 펭귄',
    description: '훔볼트 펭귄은 따뜻한 지역인 페루해류가 흐르는 연안의 작은 섬에서 물고기를 잡아먹으며 삽니다. 가슴 위쪽에는 굵고 검은 띠가 있는 것이 특징이고, 어린 개체는 전체적으로 어두운 색이며 가슴에 띠가 없습니다. 바위틈이나 동굴에 간단한 둥지를 틀고 2개의 알을 낳으며, 깃털은 마치 잠수복을 입은 듯 물이 스며드는 것을 막아 줍니다.',
    zone: '극지방 존',
    image: '/images/penguin.png'
  },
  {
    id: 10,
    name: '피라냐',
    description: '민물 육식성 물고기로, 원주민말로 이빨이 있는 물고기라는 뜻입니다. 피라냐의 아래턱이 매우 발달하였고, 삼각형의 예리한 이빨로 질긴 먹잇감도 순식간에 먹이를 먹는답니다. 이들은 동족 또한 포식하는데 무리 중에 병들거나 약한 개체가 있을 경우 본능적으로 공격하기도 합니다.',
    zone: '열대우림의 강',
    image: '/images/piranha.png'
  },
  {
    id: 11,
    name: '매부리 바다거북',
    description: '매부리바다거북은 따뜻한 열대바다에 서식하는 멸종위기종입니다. 생김새는 다른 바다거북과 비슷하지만 부리 끝이 휜 모양이 매를 닮았고 등껍질 가장자리가 톱니모양인 것이 특징이에요. 롯데월드 아쿠아리움에서는 종보전을 위해 성장과 번식에 관한 연구를 하고 있습니다.',
    zone: '바다거북존',
    image: '/images/sea-turtle.png'
  },
  {
    id: 12,
    name: '돌고래',
    description: '돌고래는 높은 지능을 가진 해양 포유류로, 사회성이 뛰어나며 무리 생활을 합니다. 초음파를 이용한 반향정위로 먹이를 찾고 의사소통을 하며, 놀이를 즐기고 인간에게 친근한 동물입니다.',
    zone: '바다 생물 존',
    image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=800'
  },
  {
    id: 13,
    name: '상어',
    description: '상어는 수백만 년 동안 진화해온 완벽한 포식자입니다. 예리한 감각과 유선형 몸체, 강력한 턱을 가지고 있으며, 해양 생태계의 균형을 유지하는 중요한 역할을 합니다.',
    zone: '바다 생물 존',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800'
  },
  {
    id: 14,
    name: '쥐가오리',
    description: '쥐가오리는 납작한 몸과 긴 꼬리가 특징인 연골어류입니다. 우아하게 헤엄치는 모습이 마치 물속을 나는 것 같으며, 해저 바닥에서 조개와 작은 물고기를 먹고 삽니다. 마치 날개를 펄럭이듯 유영하는 모습이 아름답습니다.',
    zone: '바다 생물 존',
    image: '/images/stingray.png'
  },
  {
    id: 15,
    name: '해파리',
    description: '해파리는 95% 이상이 물로 이루어진 신비로운 생물입니다. 투명한 몸체와 촉수를 가지고 있으며, 물결을 타듯 우아하게 움직입니다. 일부 종은 아름다운 빛을 내기도 합니다.',
    zone: '바다 생물 존',
    image: '/images/jellyfish.png'
  },
  {
    id: 16,
    name: '물개',
    description: '물개는 기각류에 속하는 해양 포유류로, 민첩하게 헤엄치며 물고기를 사냥합니다. 귀여운 외모와 뛰어난 수영 실력을 가지고 있으며, 무리 생활을 하며 바위나 해변에서 쉽니다.',
    zone: '바다 생물 존',
    image: '/images/fur-seal.png'
  },
  {
    id: 17,
    name: '심해 게',
    description: '심해 게는 깊은 바다 밑바닥에 서식하며, 강한 집게와 단단한 껍질로 보호받습니다. 극한의 수압과 추운 환경에 적응하여 살아가는 놀라운 생물입니다.',
    zone: '심해 생물 존',
    image: '/images/deep-sea-crab.png'
  },
  {
    id: 18,
    name: '대왕 오징어',
    description: '대왕 오징어는 세계에서 가장 큰 무척추동물로, 길이가 13미터 이상까지 자랍니다. 심해에 살며 거대한 눈과 강력한 촉수를 가지고 있어 신비로운 생물로 알려져 있습니다.',
    zone: '심해 생물 존',
    image: '/images/giant-squid.png'
  },
  {
    id: 19,
    name: '심해 새우',
    description: '심해 새우는 깊은 바다에서 서식하는 작은 갑각류로, 투명하거나 붉은 색을 띱니다. 열수 분출구 주변에서도 생존할 수 있는 놀라운 적응력을 가지고 있습니다.',
    zone: '심해 생물 존',
    image: '/images/deep-sea-shrimp.png'
  },
  {
    id: 20,
    name: '심해 물고기',
    description: '심해 물고기는 빛이 거의 없는 깊은 바다에 살며, 발광 기관이나 특이한 형태를 가지고 있습니다. 극한 환경에 적응하여 독특하게 진화한 신비로운 생물들입니다.',
    zone: '심해 생물 존',
    image: '/images/deep-sea-fish.png'
  }
];

const zones = ['전체', '육지 동물 존', '열대우림의 강', '바다사자 존', '디 오션', '극지방 존', '바다거북존', '바다 생물 존', '심해 생물 존'];

export function CreaturesPage() {
  const [selectedZone, setSelectedZone] = useState('전체');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const filteredCreatures = selectedZone === '전체' 
    ? creatures 
    : creatures.filter(creature => creature.zone === selectedZone);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative h-[300px] overflow-hidden mt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=1600)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white z-10">전시생물</h1>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-3 overflow-x-auto pb-4">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`
                px-6 py-3 rounded-full whitespace-nowrap transition-all
                ${selectedZone === zone 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400'
                }
              `}
            >
              {zone}
            </button>
          ))}
        </div>
      </div>

      {/* Creatures Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCreatures.map((creature) => (
            <div 
              key={creature.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={creature.image} 
                  alt={creature.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">{creature.name}</h3>
                <p className="text-gray-600 leading-relaxed line-clamp-4">
                  {creature.description}
                </p>
                
                {/* Zone Tag */}
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{creature.zone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-40">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition ${
            showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronUp className="w-6 h-6 text-gray-700" />
        </button>

        {/* Ticket Button */}
        <Link
          href="/ticketing"
          className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition font-medium text-lg"
        >
          예매하기
        </Link>
      </div>
    </div>
  );
}

