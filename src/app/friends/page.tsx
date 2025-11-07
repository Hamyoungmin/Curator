import { Header } from '@/components/Header';

export default function FriendsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <h1 className="text-4xl font-bold p-8">친구들을 소개합니다</h1>
        <p className="px-8 text-gray-600">친구들을 소개합니다 페이지입니다.</p>
      </div>
    </div>
  );
}

