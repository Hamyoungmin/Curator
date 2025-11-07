'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <img 
            src="/Gemini_Generated_Image_xlzfzmxlzfzmxlzf.png" 
            alt="아쿠아리움 로고" 
            className="h-20 w-auto object-contain"
          />
          <img 
            src="/Gemini_Generated_Image_lwtby8lwtby8lwtb.png" 
            alt="AQUATICA 브랜드" 
            className="h-20 w-auto object-contain"
          />
        </Link>
        
        {/* Menu Button */}
        {mounted && (
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <SheetTitle className="text-2xl font-bold mb-4 text-gray-900 pl-6">메뉴</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8 px-6">
                <Link 
                  href="/intro" 
                  className="text-xl font-semibold text-gray-700 hover:text-teal-600 transition py-3 border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  아쿠아리움 소개
                </Link>
                <Link 
                  href="/creatures" 
                  className="text-xl font-semibold text-gray-700 hover:text-teal-600 transition py-3 border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  친구들을 소개합니다
                </Link>
                <Link 
                  href="/events" 
                  className="text-xl font-semibold text-gray-700 hover:text-teal-600 transition py-3 border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  아쿠아리움 소식
                </Link>
                <Link 
                  href="/ticketing" 
                  className="text-xl font-semibold text-gray-700 hover:text-teal-600 transition py-3 border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  티켓
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        )}
        {!mounted && (
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    </header>
  );
}

