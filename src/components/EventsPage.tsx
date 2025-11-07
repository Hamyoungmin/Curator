'use client';

import { useState } from 'react';
import { Header } from './Header';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { newsItems, type NewsCategory } from '@/data/newsItems';

const categories: NewsCategory[] = ['전체', '이벤트', '공지사항', '새소식', '프로그램'];

export function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('전체');

  const filteredNews = selectedCategory === '전체' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: NewsCategory) => {
    switch (category) {
      case '이벤트': return 'bg-pink-100 text-pink-700';
      case '공지사항': return 'bg-blue-100 text-blue-700';
      case '새소식': return 'bg-green-100 text-green-700';
      case '프로그램': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[350px] mt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/intro-education.png)',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">아쿠아리움 소식</h1>
          <p className="text-xl">최신 이벤트와 소식을 만나보세요</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-24 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <div 
                key={news.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {news.isNew && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </div>
                  )}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(news.category)}`}>
                    {news.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.description}
                  </p>

                  {/* Info */}
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{news.date}</span>
                    </div>
                    {news.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{news.location}</span>
                      </div>
                    )}
                    {news.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{news.time}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">해당 카테고리의 소식이 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/intro-education.png)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <h2 className="text-4xl font-bold mb-4">특별한 이벤트에 참여하세요!</h2>
          <p className="text-xl mb-8">
            아쿠아리움의 다양한 프로그램과 이벤트로<br />
            더욱 즐거운 추억을 만들어보세요
          </p>
          <Link 
            href="/ticketing"
            className="inline-block bg-white text-teal-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition"
          >
            지금 예매하기
          </Link>
        </div>
      </section>
    </div>
  );
}

