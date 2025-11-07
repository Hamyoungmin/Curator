'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Header } from './Header';

const ticketTypes = [
  {
    id: 'adult',
    title: '성인권',
    description: '만 19세 이상 ~ 64세 이하',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1663074973171-f6b3bd82d39a?w=200'
  },
  {
    id: 'teen',
    title: '청소년권',
    description: '만 13세 이상 ~ 18세 이하',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1663074973171-f6b3bd82d39a?w=200'
  }
];

export function TicketingPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 10, 7)); // November 7, 2025
  const [selectedTickets, setSelectedTickets] = useState<{[key: string]: number}>({
    adult: 0,
    teen: 0
  });

  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
  
  const totalPrice = Object.entries(selectedTickets).reduce((sum, [ticketId, count]) => {
    const ticket = ticketTypes.find(t => t.id === ticketId);
    return sum + (ticket ? ticket.price * count : 0);
  }, 0);

  const totalTickets = Object.values(selectedTickets).reduce((sum, count) => sum + count, 0);

  const handleTicketChange = (ticketId: string, delta: number) => {
    setSelectedTickets(prev => ({
      ...prev,
      [ticketId]: Math.max(0, (prev[ticketId] || 0) + delta)
    }));
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
  };

  const previousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 mt-24">
        <h1 className="text-3xl mb-8">티켓 예매 / 시간 예약</h1>

        {/* Calendar Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={previousMonth}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl">
              {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월
            </h2>
            <button 
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
              <div key={day} className="text-center text-gray-500 py-2 text-sm">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
              <div key={`empty-${idx}`} className="aspect-square"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const day = idx + 1;
              const isSelected = selectedDate.getDate() === day;
              const isToday = new Date().getDate() === day && 
                             new Date().getMonth() === selectedDate.getMonth();
              
              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  className={`
                    aspect-square rounded-lg flex items-center justify-center transition
                    ${isSelected 
                      ? 'bg-teal-600 text-white' 
                      : isToday 
                      ? 'bg-teal-100 text-teal-600' 
                      : 'hover:bg-gray-100'
                    }
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900">
              선택한 날짜: {formatDate(selectedDate)}
            </p>
          </div>
        </div>

        {/* Time Selection */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h3 className="mb-4">시간 선택</h3>
          <div className="flex gap-3 flex-wrap">
            {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(time => (
              <button
                key={time}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-teal-600 hover:text-teal-600 transition"
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Ticket Selection */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h3 className="mb-6">티켓 선택</h3>
          
          {ticketTypes.map((ticket) => (
            <div key={ticket.id} className="flex items-center gap-6 mb-6 pb-6 border-b last:border-b-0">
              <div className="w-20 h-20 bg-blue-100 rounded-lg overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl">
                  표
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="mb-1">{ticket.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{ticket.description}</p>
                <p className="text-teal-600">{ticket.price.toLocaleString()}원</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleTicketChange(ticket.id, -1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                  disabled={!selectedTickets[ticket.id]}
                >
                  -
                </button>
                <span className="w-12 text-center">{selectedTickets[ticket.id] || 0}</span>
                <button
                  onClick={() => handleTicketChange(ticket.id, 1)}
                  className="w-10 h-10 rounded-full border-2 border-teal-600 text-teal-600 flex items-center justify-center hover:bg-teal-50 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-600 mb-1">총 티켓 수량</p>
              <p className="text-2xl">{totalTickets}매</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 mb-1">총 결제 금액</p>
              <p className="text-3xl text-teal-600">{totalPrice.toLocaleString()}원</p>
            </div>
          </div>
          
          <Button 
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 rounded-lg text-lg"
            disabled={totalTickets === 0}
          >
            예매하기
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white">A</div>
                <span className="text-white">아쿠아리움</span>
              </div>
              <p className="text-sm">육지와 바다의 신비로운 만남</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm">
            <p>© 2025 ARARIUM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
