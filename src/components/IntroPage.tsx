'use client';

import { useState } from 'react';
import { Header } from './Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    id: 1,
    title: '바다를 담은 수조 설계',
    description: '25m 넓이의 국내 최대 서식 수조 집이 되어 살아갈 친구들을 위해 바다처럼 여유로운 수조를 만듭니다.',
    image: '/images/intro-tank.png'
  },
  {
    id: 2,
    title: '자연을 담은 환경 속 바다 친구들',
    description: '다양한 해양생물들이 더불어 사는 자연 그와 동일한 서식환경을 만듭니다.',
    image: '/images/intro-environment.png'
  },
  {
    id: 3,
    title: '365 청정수질',
    description: '국내 최고 수준의 생명유지장치를 통해 청정지역 바닷물을 그대로 구현합니다.',
    image: '/images/intro-water.png'
  },
  {
    id: 4,
    title: '전세계 5대양 13개 테마',
    description: '전세계 바다를 그대로 옮겨놓은 다양한 테마존에서 해양생물과의 특별한 만남을 가질 수 있습니다.',
    image: '/images/intro-theme.png'
  },
  {
    id: 5,
    title: '생태계 따라걷기',
    description: '강에서 연안으로, 연안에서 바다로 생태계의 흐름을 따라 걸으며 자연의 경이로움을 경험해보세요.',
    image: '/images/intro-ecosystem.png'
  },
  {
    id: 6,
    title: '생생한 배움의 장',
    description: '국내 최다 14종의 체험 교육 프로그램을 통해 해양생물과 더불어 사는 즐거움을 전합니다.',
    image: '/images/intro-education.png'
  }
];

const themeZones = [
  {
    id: 1,
    title: '디 오션',
    subtitle: 'The Ocean',
    description: '롯데월드 아쿠아리움의 심장인 메인 수조! 이곳에서는 여러분이 한 번도 본 적 없는 거대한 가오리들이 여유롭게 헤엄 치는 모습을 볼 수 있어요. 카우노즈레이의 날갯짓을 보면서 잠시나마 바닷속에서 함께 춤추는 기분을 느껴보세요.',
    image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800'
  },
  {
    id: 2,
    title: '산호초 가든',
    subtitle: 'Coral Garden',
    description: '형형색색의 산호초와 열대어들이 어우러진 화려한 바다 정원입니다. 마치 무지개 속을 거니는 듯한 특별한 경험을 선사합니다.',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800'
  },
  {
    id: 3,
    title: '바다거북 존',
    subtitle: 'Sea Turtle Zone',
    description: '유유자적 헤엄치는 바다거북들의 우아한 모습을 가까이에서 만나보세요. 느리지만 꾸준한 그들의 움직임에서 삶의 지혜를 배웁니다.',
    image: '/images/sea-turtle.png'
  },
  {
    id: 4,
    title: '극지방 존',
    subtitle: 'Polar Zone',
    description: '펭귄들의 귀여운 뒤뚱거림과 민첩한 수영 실력을 동시에 즐길 수 있는 공간입니다. 추운 지역의 생태계를 그대로 재현했습니다.',
    image: '/images/penguin.png'
  },
  {
    id: 5,
    title: '바다사자 존',
    subtitle: 'Sea Lion Zone',
    description: '활기차고 똑똑한 바다사자들의 수중 쇼를 감상하세요. 그들의 뛰어난 지능과 재주에 감탄하게 될 것입니다.',
    image: '/images/sea-lion.png'
  }
];

export function IntroPage() {
  const [currentZone, setCurrentZone] = useState(0);

  const nextZone = () => {
    setCurrentZone((prev) => (prev + 1) % themeZones.length);
  };

  const prevZone = () => {
    setCurrentZone((prev) => (prev - 1 + themeZones.length) % themeZones.length);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] mt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=1600)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white z-10">소개</h1>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-600 text-xl mb-4">사람과 자연이 함께 꿈꾸는 바다</p>
          <h2 className="text-5xl font-bold mb-8">롯데월드 아쿠아리움</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
            사람과 자연이 더불어 사는 즐거운 세상을 꿈꾸는 롯데월드 아쿠아리움<br />
            깊고 넓은 해양 생태계 그대로 재현하겠다는 신념과 고집으로 지금까지의 아쿠아리움에 대한 모든 기준을 버리고<br />
            해양생물의 입장이 되어, 당신의 입장이 되어 원점에서부터 시작합니다.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Zones Slider */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-xl mb-4">해양 세계로 떠나는 시간 여행</p>
            <h2 className="text-5xl font-bold mb-4">바닷속 환상의 세계</h2>
            <p className="text-2xl text-gray-700">아쿠아리움 테마존</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Image */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
              <img 
                src={themeZones[currentZone].image} 
                alt={themeZones[currentZone].title}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevZone}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextZone}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Zone Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-500 mb-2">{themeZones[currentZone].subtitle}</p>
              <h3 className="text-3xl font-bold mb-4">{themeZones[currentZone].title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {themeZones[currentZone].description}
              </p>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 justify-center mt-8 overflow-x-auto pb-4">
              {themeZones.map((zone, index) => (
                <button
                  key={zone.id}
                  onClick={() => setCurrentZone(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 transition ${
                    currentZone === index ? 'border-blue-600 scale-110' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={zone.image} 
                    alt={zone.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Character Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">아쿠아리움 캐릭터 소개</h2>
          <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-teal-300 via-blue-300 to-blue-400 bg-clip-text text-transparent mb-16 text-center">
            AQUARIUM FRIENDS
          </div>

          {/* Story Section */}
          <div className="space-y-16 mb-20">
            {/* Story 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="mb-6">
                  <img 
                    src="/images/story-hope.png" 
                    alt="아쿠아 타운의 희망"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-teal-600 mb-3">빛의 산호와 함께 발견한</h3>
                <h2 className="text-4xl font-bold mb-6">아쿠아 타운의 희망</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  평화로웠던 서쪽바다 샤크베이, 어느 날 차가운 물이 솟아나는 어둠의 바위가 나타났어요. 
                  더 맑고 따뜻한 바다를 찾아 많은 상어들이 떠났고, 결국 끝까지 샤크베이가 괜찮아질 거라 믿었던 샌더만이 혼자 남았어요.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  샌더가 홀로 외로이 추위에 떨고 있던 그때, 지금껏 한 번도 본 적이 없는 빛의 산호가 나타났어요. 
                  산호의 따스한 빛을 따라간 샌더의 눈앞에 신비의 바다, 아쿠아 타운이 펼쳐졌습니다. 
                  매일 새로운 일들이 일어나 활기 넘치고 아름다운 아쿠아 타운의 모습에 샌더는 한눈에 반했어요.
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-teal-600 mb-3">함께라면 가능해! 샌더와 친구들의</h3>
                <h2 className="text-4xl font-bold mb-6">샤크베이 구출 작전</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  처음 만난 친구 수달 오띠를 시작으로 이웃 주민 가오리 가비, 수다쟁이 펭귄 핑핑, 그리고 소중한 반려 산호가 된 코로로까지 
                  새로운 친구도 많이 생겼습니다. 샌더는 샤크베이도 다시 이렇게 따뜻한 모습으로 되돌리고 싶었어요.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  샌더는 새로운 친구들과 함께 마음을 모아 고향 샤크베이를 되살릴 계획을 세우기 시작합니다. 
                  샌더와 친구들에게 오늘은 또 어떤 일이 벌어질까요?
                </p>
              </div>
              <div className="order-1 md:order-2 bg-white rounded-3xl p-8 shadow-lg">
                <div className="mb-6">
                  <img 
                    src="/images/story-rescue.png" 
                    alt="샤크베이 구출 작전"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Characters */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">샤크베이를 되살릴</h3>
            <h2 className="text-4xl font-bold text-teal-600">아쿠아리움 친구들</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 샌더 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/images/character-sander.png" 
                  alt="샌더"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">샌더</h3>
              <p className="text-teal-600 text-center mb-4 font-semibold">SANDER</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                큰 몸집 때문에 의도치 않게 여기저기 사고를 치곤 하지만 누구보다 긍정적이고 친구들을 좋아하는 샌더예요. 
                아름다운 아쿠아 타운의 모습처럼 고향 샤크베이도 다시 따뜻해지길 원하고 있어요.
              </p>
              <div className="flex gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">#느릿느릿</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">#프로참석러</span>
              </div>
            </div>

            {/* 코로로 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/images/character-cororo.png" 
                  alt="코로로"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">코로로</h3>
              <p className="text-teal-600 text-center mb-4 font-semibold">CORORO</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                늘 샌더와 함께하는 코로로는 겉보기엔 조용하고 덤덤해 보이지만 당황하거나 마음에 들지 않는 것이 있으면 
                조용히 하얗게 굳어버리곤 해 섬세한 관심이 필요해요. 사실은 엄청난 힘을 숨기고 있을 수도?
              </p>
              <div className="flex gap-2 justify-center">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">#조용한</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">#숨겨진에너지</span>
              </div>
            </div>

            {/* 가비 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/images/character-gabi.png" 
                  alt="가비"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">가비</h3>
              <p className="text-teal-600 text-center mb-4 font-semibold">GABI</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                늘 웃는 얼굴의 가비는 속을 알 수 없는 이웃주민이에요. 샌더의 가장 가까운 이웃으로 크고 작은 사건들에도 
                우선은 웃어주는 친절한 모습이지만, 사실 어딘지 모를 포스에 쉽게 친해지긴 어려울 것 같아요.
              </p>
              <div className="flex gap-2 justify-center">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">#항상미소짓는</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">#입이커지는</span>
              </div>
            </div>

            {/* 레오 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/images/character-leo.png" 
                  alt="레오"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">레오</h3>
              <p className="text-teal-600 text-center mb-4 font-semibold">LEO</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                아쿠아타운의 다재다능한 능력자로 친구들에게 늘 생각치 못한 아이디어를 선물해요. 
                못하는 게 없는 데다 애교도 많아 모두에게 사랑 받는 친구로 큰 목소리에도 시끄럽기는 커녕 모두를 즐겁게 해줘요!
              </p>
              <div className="flex gap-2 justify-center">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">#다재다능</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">#아이디어뱅크</span>
              </div>
            </div>

            {/* 오띠 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/images/character-ottie.png" 
                  alt="오띠"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">오띠</h3>
              <p className="text-teal-600 text-center mb-4 font-semibold">OTTIE</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                우선 공감부터 하고 보는 발랄하고 다정한 성격과 에너지 넘치는 빠른 발로 새로 온 샌더를 가장 먼저 반겨준 친구예요. 
                밤새 친구들과 게임하기를 좋아해서 매일 친구들과 뭘 하고 놀지 고민하는 엉뚱 발랄한 개구쟁이랍니다!
              </p>
              <div className="flex gap-2 justify-center">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">#민첩한</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">#장난스러운</span>
              </div>
            </div>

            {/* 핑핑 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/images/character-pingping.png" 
                  alt="핑핑"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">핑핑</h3>
              <p className="text-teal-600 text-center mb-4 font-semibold">PING PING</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                호기심 많고 말도 많은 펭귄 핑핑이는 아는 척 설명해주기를 좋아해요. 
                늘 메고 다니는 가방에는 언젠가 필요할지 모르는 물건들을 잔뜩 넣고 다니는 프로 보부상이기도 합니다. 
                물건을 빌리려면, 잔소리는 덤이에요!
              </p>
              <div className="flex gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">#호기심</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">#아는척</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/creatures"
              className="inline-block bg-teal-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-teal-700 transition shadow-lg"
            >
              친구들 만나러 가기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

