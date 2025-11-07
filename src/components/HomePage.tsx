'use client';

import { useState, useEffect } from 'react';
import { Instagram, Facebook, Youtube, X } from 'lucide-react';
import Link from 'next/link';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Header } from './Header';
import { Sheet, SheetContent, SheetTitle } from './ui/sheet';
import { newsItems } from '@/data/newsItems';

type Animal = {
  id: number;
  name: string;
  image: string;
  description: string;
  detailDescription?: string;
  zone?: string;
};

const landAnimals: Animal[] = [
  {
    id: 1,
    name: '알파카',
    image: 'https://images.unsplash.com/photo-1663074973171-f6b3bd82d39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBhY2ElMjBmYXJtfGVufDF8fHx8MTc2MjQ5NTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: '부드러운 털을 가진 친구',
    detailDescription: '부드러운 털을 가진 친구입니다. 알파카는 온순한 성격과 사랑스러운 외모로 많은 사람들의 사랑을 받고 있습니다. 남미 안데스 산맥 고원지대가 원산지이며, 추운 날씨에도 잘 적응하는 동물입니다.',
    zone: '육지 동물 존'
  },
  {
    id: 2,
    name: '양',
    image: 'https://images.unsplash.com/photo-1597131579191-79c83f1a8b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNoZWVwfGVufDF8fHx8MTc2MjQ5NTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: '온순한 성격의 친구',
    detailDescription: '온순한 성격의 친구입니다. 양은 인류와 오랜 시간 함께해온 가축으로, 부드러운 털과 순한 성격이 특징입니다. 무리 생활을 하며 풀을 뜯어 먹으며 평화롭게 지냅니다.',
    zone: '육지 동물 존'
  },
  {
    id: 3,
    name: '사슴',
    image: 'https://images.unsplash.com/photo-1599456671475-da8c5b91e52c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVyJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzYyNDk1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '우아한 자태의 친구',
    detailDescription: '우아한 자태의 친구입니다. 사슴은 날렵한 몸매와 우아한 움직임으로 숲의 귀족이라 불립니다. 큰 눈과 긴 다리가 특징이며, 민첩하게 움직이는 모습이 아름답습니다.',
    zone: '육지 동물 존'
  },
  {
    id: 4,
    name: '토끼',
    image: 'https://images.unsplash.com/photo-1552757277-4f85016fa20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBidW5ueXxlbnwxfHx8fDE3NjI0Njg1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '깡충깡충 뛰는 친구',
    detailDescription: '깡충깡충 뛰는 친구입니다. 토끼는 긴 귀와 짧은 꼬리, 강한 뒷다리가 특징입니다. 깡충깡충 뛰어다니는 모습이 귀엽고 사랑스러우며, 채소와 풀을 좋아합니다.',
    zone: '육지 동물 존'
  },
  {
    id: 5,
    name: '프레리도그',
    image: 'https://images.unsplash.com/photo-1571488839518-864e5b7447e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFpcmllJTIwZG9nfGVufDF8fHx8MTc2MjQ5NTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: '귀여운 설치류 친구',
    detailDescription: '귀여운 설치류 친구입니다. 프레리도그는 북미 초원지대에 사는 다람쥐과 동물로, 땅굴을 파고 무리 생활을 합니다. 뒷다리로 서서 주변을 살피는 모습이 매우 귀엽습니다.',
    zone: '육지 동물 존'
  }
];

const seaAnimals: Animal[] = [
  {
    id: 6,
    name: '돌고래',
    image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=800',
    description: '지능이 높은 해양 포유류',
    detailDescription: '돌고래는 높은 지능을 가진 해양 포유류로, 사회성이 뛰어나며 무리 생활을 합니다. 초음파를 이용한 반향정위로 먹이를 찾고 의사소통을 하며, 놀이를 즐기고 인간에게 친근한 동물입니다.',
    zone: '바다 생물 존'
  },
  {
    id: 7,
    name: '상어',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800',
    description: '완벽한 포식자',
    detailDescription: '상어는 수백만 년 동안 진화해온 완벽한 포식자입니다. 예리한 감각과 유선형 몸체, 강력한 턱을 가지고 있으며, 해양 생태계의 균형을 유지하는 중요한 역할을 합니다.',
    zone: '바다 생물 존'
  },
  {
    id: 8,
    name: '쥐가오리',
    image: '/images/stingray.png',
    description: '우아하게 헤엄치는 친구',
    detailDescription: '쥐가오리는 납작한 몸과 긴 꼬리가 특징인 연골어류입니다. 우아하게 헤엄치는 모습이 마치 물속을 나는 것 같으며, 해저 바닥에서 조개와 작은 물고기를 먹고 삽니다. 마치 날개를 펄럭이듯 유영하는 모습이 아름답습니다.',
    zone: '바다 생물 존'
  },
  {
    id: 9,
    name: '해파리',
    image: '/images/jellyfish.png',
    description: '신비로운 투명 생물',
    detailDescription: '해파리는 95% 이상이 물로 이루어진 신비로운 생물입니다. 투명한 몸체와 촉수를 가지고 있으며, 물결을 타듯 우아하게 움직입니다. 일부 종은 아름다운 빛을 내기도 합니다.',
    zone: '바다 생물 존'
  },
  {
    id: 10,
    name: '물개',
    image: '/images/fur-seal.png',
    description: '민첩한 수영 실력',
    detailDescription: '물개는 기각류에 속하는 해양 포유류로, 민첩하게 헤엄치며 물고기를 사냥합니다. 귀여운 외모와 뛰어난 수영 실력을 가지고 있으며, 무리 생활을 하며 바위나 해변에서 쉽니다.',
    zone: '바다 생물 존'
  }
];

const deepSeaAnimals: Animal[] = [
  {
    id: 11,
    name: '심해 게',
    image: '/images/deep-sea-crab.png',
    description: '극한 환경의 생존자',
    detailDescription: '심해 게는 깊은 바다 밑바닥에 서식하며, 강한 집게와 단단한 껍질로 보호받습니다. 극한의 수압과 추운 환경에 적응하여 살아가는 놀라운 생물입니다.',
    zone: '심해 생물 존'
  },
  {
    id: 12,
    name: '대왕 오징어',
    image: '/images/giant-squid.png',
    description: '거대한 무척추동물',
    detailDescription: '대왕 오징어는 세계에서 가장 큰 무척추동물로, 길이가 13미터 이상까지 자랍니다. 심해에 살며 거대한 눈과 강력한 촉수를 가지고 있어 신비로운 생물로 알려져 있습니다.',
    zone: '심해 생물 존'
  },
  {
    id: 13,
    name: '심해 새우',
    image: '/images/deep-sea-shrimp.png',
    description: '투명한 갑각류',
    detailDescription: '심해 새우는 깊은 바다에서 서식하는 작은 갑각류로, 투명하거나 붉은 색을 띱니다. 열수 분출구 주변에서도 생존할 수 있는 놀라운 적응력을 가지고 있습니다.',
    zone: '심해 생물 존'
  },
  {
    id: 14,
    name: '심해 물고기',
    image: '/images/deep-sea-fish.png',
    description: '발광하는 신비로운 생물',
    detailDescription: '심해 물고기는 빛이 거의 없는 깊은 바다에 살며, 발광 기관이나 특이한 형태를 가지고 있습니다. 극한 환경에 적응하여 독특하게 진화한 신비로운 생물들입니다.',
    zone: '심해 생물 존'
  }
];

// 소식 데이터는 @/data/newsItems에서 import

export function HomePage() {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAnimalClick = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsDetailOpen(true);
  };

  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden mt-24">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1696482156853-8ee190d9cfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJhaW5mb3Jlc3QlMjBqdW5nbGV8ZW58MXx8fHwxNzYyNDk1OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Rainforest"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
          </div>
          <div className="w-1/2 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1698699653773-6dae6267c3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjB0dXJ0bGUlMjB1bmRlcndhdGVyfGVufDF8fHx8MTc2MjQ5NTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sea Turtle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/40 to-transparent"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="mb-2 text-sm tracking-widest">육지와 바다, 두세계가 만나다</div>
            <h1 className="text-7xl tracking-wider mb-8" style={{ fontWeight: 300, letterSpacing: '0.2em' }}>ARARIUM</h1>
            <Link href="/ticketing">
              <Button 
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 rounded-full"
              >
                예매하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Exhibition Section */}
      <section id="friends" className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-teal-600 text-white px-4 py-1 rounded-full mb-4 text-sm">
              전시 생물
            </div>
            <h2 className="text-4xl mb-2">전시 생물 소개</h2>
            <p className="text-gray-600">다양한 생물들을 만나보세요</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {landAnimals.map((animal) => (
              <div 
                key={animal.id}
                className="group cursor-pointer"
                onClick={() => handleAnimalClick(animal)}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 shadow-lg">
                  <ImageWithFallback
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-center bg-white rounded-lg py-3 shadow-sm">
                  <h3 className="mb-1">{animal.name}</h3>
                  <p className="text-sm text-gray-500">{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Exhibition Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1646995919720-a27def2d37e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwb2NlYW4lMjBibHVlfGVufDF8fHx8MTc2MjQ5NTk4NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Ocean"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-4xl mb-4">전시 생물 더보기</h2>
              <p className="text-blue-100 mb-8">신비로운 바다 생물들을 만나보세요</p>
              <div className="flex gap-4 flex-wrap">
                {seaAnimals.map((animal) => (
                  <div 
                    key={animal.id}
                    className="w-24 h-24 rounded-full bg-blue-400/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                    onClick={() => handleAnimalClick(animal)}
                  >
                    <span className="text-sm">{animal.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Character Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/images/character-display.png" 
                alt="아쿠아리움 캐릭터"
                className="w-64 h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Exhibition Section 2 */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1728391180319-42d0b114e010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc2VhJTIwZGFya3xlbnwxfHx8fDE3NjI0OTU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Deep Sea"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-4xl mb-4">전시 생물 탐험</h2>
              <p className="text-slate-300 mb-8">신비로운 심해 생물들을 탐험하세요</p>
              <div className="flex gap-4 flex-wrap">
                {deepSeaAnimals.map((animal) => (
                  <div 
                    key={animal.id}
                    className="w-28 h-28 rounded-full bg-slate-700/30 backdrop-blur-sm border-2 border-cyan-400/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                    onClick={() => handleAnimalClick(animal)}
                  >
                    <span className="text-sm text-center px-2">{animal.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Character Group Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/images/character-group.png" 
                alt="아쿠아리움 친구들"
                className="w-80 h-80 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="events" className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl text-white">최신 소식</h2>
            <Link 
              href="/events" 
              className="text-teal-400 hover:text-teal-300 transition font-semibold"
            >
              더보기 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {newsItems.slice(0, 6).map((news) => (
              <Link 
                key={news.id}
                href="/events"
                className="bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {news.isNew && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-teal-600">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {news.description}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {news.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            <button className="w-3 h-3 rounded-full bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-white/30"></button>
            <button className="w-3 h-3 rounded-full bg-white/30"></button>
          </div>
        </div>
      </section>

      {/* Animal Detail Sheet */}
      {mounted && (
        <Sheet open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <SheetContent side="right" className="w-full sm:w-[500px] bg-white overflow-y-auto">
            {selectedAnimal && (
            <>
              <SheetTitle className="text-3xl font-bold mb-6 text-gray-900">
                {selectedAnimal.name}
              </SheetTitle>
              
              <div className="space-y-6">
                {/* Image */}
                <div className="relative h-[300px] rounded-2xl overflow-hidden">
                  <img 
                    src={selectedAnimal.image} 
                    alt={selectedAnimal.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Zone Tag */}
                {selectedAnimal.zone && (
                  <div className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm">
                    {selectedAnimal.zone}
                  </div>
                )}

                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">소개</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedAnimal.detailDescription || selectedAnimal.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Link 
                    href="/creatures" 
                    className="flex-1 bg-teal-600 text-white py-3 rounded-lg text-center font-medium hover:bg-teal-700 transition"
                    onClick={() => setIsDetailOpen(false)}
                  >
                    전체 생물 보기
                  </Link>
                  <button 
                    onClick={() => setIsDetailOpen(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </>
            )}
          </SheetContent>
        </Sheet>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="flex-1">
              <div className="mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="아쿠아리움 로고" 
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm mb-6 text-gray-300">육지와 바다의 신비로운 만남</p>
              
              {/* Company Info */}
              <div className="space-y-2 text-xs leading-relaxed mb-6">
                <p><span className="text-gray-500">(주)아쿠아리움</span> | 서울시 강남구 테헤란로 123, 4층</p>
                <p><span className="text-gray-500">대표:</span> 홍길동 | <span className="text-gray-500">사업자등록번호:</span> 123-45-67890</p>
                <p><span className="text-gray-500">통신판매업신고:</span> 2024-서울강남-12345 | <span className="text-gray-500">고객센터:</span> 02-1234-5678</p>
                <p><span className="text-gray-500">이메일:</span> info@aquarium.com</p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-4 text-xs mb-6">
                <Link href="#" className="hover:text-white transition">이용약관</Link>
                <Link href="#" className="hover:text-white transition font-semibold text-white">개인정보처리방침</Link>
                <Link href="#" className="hover:text-white transition">위치기반서비스 이용약관</Link>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                (주)아쿠아리움은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.<br />
                상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
              </p>
            </div>

            {/* Social Media & App Links */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-3">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-xs text-gray-500">
            <p>Copyright © 2025 Aquarium Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
