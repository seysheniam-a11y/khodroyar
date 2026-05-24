/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Classifieds from './components/Classifieds';
import AuctionList from './components/AuctionList';
import AuctionRoom from './components/AuctionRoom';
import AICarValuation from './components/AICarValuation';
import DealerShowrooms from './components/DealerShowrooms';
import ChatNegotiator from './components/ChatNegotiator';
import UserDashboard from './components/UserDashboard';
import ArchSpecs from './components/ArchSpecs';
import FinanceCalculator from './components/FinanceCalculator';

import { 
  CURRENT_USER, 
  INITIAL_CLASSIFIEDS, 
  INITIAL_AUCTIONS, 
  INITIAL_DEALERSHIPS, 
  INITIAL_WALLET_TRANSACTIONS 
} from './data';
import { UserProfile, ClassifiedAd, LiveAuction, WalletTransaction, ChatRoom } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('marketplace');
  
  // App persistent states
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('khodroyar_user');
    return saved ? JSON.parse(saved) : CURRENT_USER;
  });

  const [ads, setAds] = useState<ClassifiedAd[]>(() => {
    const saved = localStorage.getItem('khodroyar_ads');
    return saved ? JSON.parse(saved) : INITIAL_CLASSIFIEDS;
  });

  const [auctions, setAuctions] = useState<LiveAuction[]>(() => {
    const saved = localStorage.getItem('khodroyar_auctions');
    return saved ? JSON.parse(saved) : INITIAL_AUCTIONS;
  });

  const [transactions, setTransactions] = useState<WalletTransaction[]>(() => {
    const saved = localStorage.getItem('khodroyar_txs');
    return saved ? JSON.parse(saved) : INITIAL_WALLET_TRANSACTIONS;
  });

  const [savedAdIds, setSavedAdIds] = useState<string[]>(['ad-1', 'ad-3']); // Default saved ads
  const [selectedAuction, setSelectedAuction] = useState<LiveAuction | null>(INITIAL_AUCTIONS[0]);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('khodroyar_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('khodroyar_ads', JSON.stringify(ads));
  }, [ads]);

  useEffect(() => {
    localStorage.setItem('khodroyar_auctions', JSON.stringify(auctions));
  }, [auctions]);

  useEffect(() => {
    localStorage.setItem('khodroyar_txs', JSON.stringify(transactions));
  }, [transactions]);

  // Actions
  const handleAddNewAd = (newAd: ClassifiedAd) => {
    setAds(prev => [newAd, ...prev]);
  };

  const handlePlaceBid = (auctionId: string, amount: number) => {
    // Deduct standard bidding deposit from user wallet if it's user's actual action
    setAuctions(prev => prev.map(auc => {
      if (auc.id === auctionId) {
        return {
          ...auc,
          currentBid: amount,
          bidsCount: auc.bidsCount + 1
        };
      }
      return auc;
    }));
  };

  const handleAddFunds = (amount: number) => {
    setUser(prev => ({
      ...prev,
      walletBalance: prev.walletBalance + amount
    }));

    const newTx: WalletTransaction = {
      id: `tx-user-${Date.now()}`,
      type: 'deposit',
      amount,
      description: 'افزایش موجودی اتمسفریک درگاه زرین‌پال',
      refId: `ZP-${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      status: 'success',
      timestamp: 'هم‌اکنون'
    };
    setTransactions(prev => [newTx, ...prev]);
  };

  const handleRemoveSavedAd = (adId: string) => {
    setSavedAdIds(prev => prev.filter(id => id !== adId));
  };

  // Convert current selected active ad to live chat directly
  const [rooms, setRooms] = useState<ChatRoom[]>([
    {
      id: 'room-1',
      adId: 'ad-1',
      adTitle: 'دنا پلاس توربو اتوماتیک',
      adImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop',
      buyerId: 'usr-current',
      buyerName: 'احسان محمدی (شما)',
      sellerId: 'deal-2',
      sellerName: 'اتو خسروانی (شعبه غرب)',
      lastMessage: 'سلام، ماشین چه ساعتی برای بازدید مناسبه؟',
      lastMessageTime: '۱۰:۲۰',
      unreadCount: 0
    },
    {
      id: 'room-2',
      adId: 'ad-2',
      adTitle: 'پژو ۲۰۷ MC سقف قرمز',
      adImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop',
      buyerId: 'usr-current',
      buyerName: 'احسان محمدی (شما)',
      sellerId: 'usr-102',
      sellerName: 'امیر قاسمی',
      lastMessage: 'ممنون، فردا تماس میگیرم هماهنگ میکنیم.',
      lastMessageTime: 'دیروز',
      unreadCount: 0
    }
  ]);

  const handleOpenChatFromAd = (ad: ClassifiedAd) => {
    // Check if room exists
    const existingRoom = rooms.find(r => r.adId === ad.id);
    if (existingRoom) {
      setActiveTab('chat');
      return;
    }

    const newRoom: ChatRoom = {
      id: `room-custom-${Date.now()}`,
      adId: ad.id,
      adTitle: ad.vehicle.model,
      adImage: ad.vehicle.images[0],
      buyerId: 'usr-current',
      buyerName: user.name,
      sellerId: ad.sellerId,
      sellerName: ad.sellerName,
      lastMessage: 'شروع گفتگو بابت خودرو',
      lastMessageTime: 'هم‌اکنون',
      unreadCount: 0
    };

    setRooms(prev => [newRoom, ...prev]);
    setActiveTab('chat');
  };

  const handleSelectAuction = (auc: LiveAuction) => {
    setSelectedAuction(auc);
    setActiveTab('auction-room');
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-800 flex flex-col justify-between selection:bg-rose-500/20 selection:text-rose-900">
      {/* Dynamic persistent Header/Tabs bar */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} user={user} />

      {/* Main interactive tabs container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {activeTab === 'marketplace' && (
          <Classifieds 
            ads={ads} 
            onCreateAd={handleAddNewAd} 
            openChatAd={handleOpenChatFromAd}
            userWallet={user.walletBalance}
          />
        )}

        {activeTab === 'auctions' && (
          <AuctionList 
            auctions={auctions} 
            onSelectAuction={handleSelectAuction} 
          />
        )}

        {activeTab === 'auction-room' && selectedAuction && (
          <AuctionRoom 
            auction={selectedAuction} 
            userWallet={user.walletBalance} 
            onPlaceBid={handlePlaceBid} 
            onGoBack={() => setActiveTab('auctions')} 
          />
        )}

        {activeTab === 'valuation' && (
          <AICarValuation />
        )}

        {activeTab === 'finance' && (
          <FinanceCalculator />
        )}

        {activeTab === 'dealers' && (
          <DealerShowrooms dealers={INITIAL_DEALERSHIPS} />
        )}

        {activeTab === 'chat' && (
          <ChatNegotiator initialRooms={rooms} />
        )}

        {activeTab === 'dashboard' && (
          <UserDashboard 
            user={user} 
            transactions={transactions} 
            savedClassifiedIds={savedAdIds} 
            allAds={ads} 
            onAddFunds={handleAddFunds} 
            onRemoveSavedId={handleRemoveSavedAd} 
          />
        )}

        {activeTab === 'devops' && (
          <ArchSpecs />
        )}
      </main>

      {/* Persian styled humble layout footer */}
      <footer className="border-t border-slate-200 bg-white py-5 text-center text-[11px] text-slate-500 font-normal">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>خودرویار (KhodroYar) ۱۴۰۵ - کلیه حقوق مادی و معنوی متعلق به سوپراپلیکیشن معاملات هوشمند خودرو است.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-rose-600 transition-colors">قوانین و مقررات</a>
            <a href="#" className="hover:text-rose-600 transition-colors">حریم خصوصی</a>
            <a href="#" className="hover:text-rose-600 transition-colors">پشتیبانی صنف</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
