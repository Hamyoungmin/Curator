export type NewsCategory = '전체' | '이벤트' | '공지사항' | '새소식' | '프로그램';

export interface NewsItem {
  id: number;
  category: NewsCategory;
  title: string;
  description: string;
  date: string;
  image: string;
  isNew?: boolean;
  location?: string;
  time?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    category: '이벤트',
    title: '2024 겨울 특별전: 남극 탐험대',
    description: '펭귄과 함께하는 남극 체험! 귀여운 펭귄들의 일상을 가까이에서 관찰하고, 남극의 신비로운 생태계를 체험해보세요.',
    date: '2024.12.01 - 2025.02.28',
    image: '/images/penguin.png',
    isNew: true,
    location: '극지방 존',
    time: '10:00 - 18:00'
  },
  {
    id: 2,
    category: '새소식',
    title: '새로운 친구 쥐가오리 입주!',
    description: '거대하고 우아한 쥐가오리가 디 오션에 새롭게 입주했습니다. 날갯짓하며 유영하는 모습을 직접 만나보세요.',
    date: '2024.11.15',
    image: '/images/stingray.png',
    isNew: true,
    location: '디 오션'
  },
  {
    id: 3,
    category: '프로그램',
    title: '해양생물 먹이주기 체험',
    description: '바다사자와 물개에게 직접 먹이를 주며 교감하는 특별한 시간! 매일 오전 11시, 오후 3시 2회 진행됩니다.',
    date: '매일 운영',
    image: '/images/sea-lion.png',
    location: '바다사자 존',
    time: '11:00, 15:00'
  },
  {
    id: 4,
    category: '이벤트',
    title: '심해 생물 특별전',
    description: '평소에 보기 힘든 심해의 신비로운 생물들을 만나보세요. 대왕 오징어, 심해 물고기 등 다양한 심해 생물들이 여러분을 기다립니다.',
    date: '2024.11.01 - 2024.12.31',
    image: '/images/giant-squid.png',
    location: '심해 생물 존'
  },
  {
    id: 5,
    category: '공지사항',
    title: '연말연시 운영시간 안내',
    description: '12월 24일부터 1월 1일까지 특별 연장 운영합니다. 오전 9시부터 밤 10시까지 방문 가능합니다.',
    date: '2024.12.24 - 2025.01.01',
    image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800',
    time: '09:00 - 22:00'
  },
  {
    id: 6,
    category: '프로그램',
    title: '해파리와 함께하는 힐링 명상',
    description: '형형색색 아름다운 해파리들의 유영을 감상하며 명상하는 특별 프로그램입니다. 사전 예약 필수!',
    date: '매주 수, 금 운영',
    image: '/images/jellyfish.png',
    location: '해파리 존',
    time: '19:00 - 20:00'
  },
  {
    id: 7,
    category: '새소식',
    title: '피라냐 전시존 리뉴얼 오픈',
    description: '더욱 넓고 쾌적한 환경으로 새단장한 피라냐 전시존이 오픈했습니다. 날카로운 이빨과 빠른 움직임을 가까이서 관찰하세요.',
    date: '2024.11.10',
    image: '/images/piranha.png',
    isNew: true,
    location: '아마존 존'
  },
  {
    id: 8,
    category: '이벤트',
    title: '바다거북 보호 캠페인',
    description: '멸종위기의 바다거북을 위한 환경 보호 캠페인에 참여하세요. 참여자 전원 기념품 증정!',
    date: '2024.11.20 - 2024.12.20',
    image: '/images/sea-turtle.png',
    location: '바다거북 존'
  },
  {
    id: 9,
    category: '공지사항',
    title: '주차장 확장 공사 안내',
    description: '더 편리한 방문을 위해 주차장 확장 공사를 진행합니다. 공사 기간 중 일부 주차 공간이 제한될 수 있습니다.',
    date: '2024.12.01 - 2025.01.15',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800'
  }
];


