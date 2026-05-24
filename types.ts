/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  role: 'buyer' | 'seller' | 'dealer' | 'admin';
  avatar: string;
  nationalIdVerified: boolean;
  walletBalance: number; // in Tomans
  rating: number;
  city: string;
  memberSince: string;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  yearJalali: number; // e.g. 1401, 1402
  mileage: number; // in km
  colorOuter: string;
  colorInner: string;
  transmission: 'manual' | 'automatic';
  fuelType: 'petrol' | 'diesel' | 'gas' | 'hybrid';
  engineStatus: string;
  bodyStatus: 'paintless' | 'minor_paint' | 'major_paint' | 'accidented' | 'scratched';
  chassisStatus: 'healthy' | 'damaged';
  insuranceValidityMonths: number;
  ownersCount: number;
  description: string;
  images: string[];
}

export interface ClassifiedAd {
  id: string;
  vehicle: Vehicle;
  price: number; // in Tomans. 0 means "توافقی" (negotiable)
  city: string;
  district: string;
  createdAt: string;
  isUrgent: boolean;
  isFeatured: boolean;
  views: number;
  sellerId: string;
  sellerName: string;
  sellerRole: 'individual' | 'dealer';
  status: 'active' | 'sold' | 'expired';
}

export interface LiveAuction {
  id: string;
  vehicle: Vehicle;
  startPrice: number; // Tomans
  reservePrice: number; // Tomans
  buyNowPrice?: number; // Tomans
  currentBid: number; // Tomans
  minBidIncrement: number; // Tomans
  bidsCount: number;
  watchersCount: number;
  startTime: string; // ISO string or Jalali
  endTime: string; // ISO string
  status: 'upcoming' | 'live' | 'ended';
  sellerName: string;
  sellerAvatar: string;
  isVerifiedDealer: boolean;
}

export interface Bid {
  id: string;
  auctionId: string;
  bidderName: string;
  amount: number;
  timestamp: string;
  isAutoBid: boolean;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  timestamp: string;
  isOffer?: boolean;
  offerPrice?: number;
  offerStatus?: 'pending' | 'accepted' | 'declined';
  isAudio?: boolean;
  audioDuration?: string;
}

export interface ChatRoom {
  id: string;
  adId: string;
  adTitle: string;
  adImage: string;
  buyerId: string;
  buyerName: string;
  sellerId: string;
  sellerName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export interface Dealership {
  id: string;
  name: string;
  manager: string;
  logo: string;
  address: string;
  city: string;
  phone: string;
  isVerified: boolean;
  rating: number;
  banners: string[];
  activeAdsCount: number;
  activeAuctionsCount: number;
  description: string;
}

export interface WalletTransaction {
  id: string;
  type: 'deposit' | 'withdraw' | 'payment_escrow' | 'refund' | 'payout';
  amount: number;
  description: string;
  refId: string; // Zarinpal Ref ID simulation
  status: 'success' | 'failed' | 'processing';
  timestamp: string;
}
