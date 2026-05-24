/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClassifiedAd, LiveAuction, Dealership, UserProfile, WalletTransaction } from './types';

export const IRANIAN_CITIES = [
  'تهران',
  'مشهد',
  'اصفهان',
  'کرج',
  'شیراز',
  'تبریز',
  'قم',
  'اهواز',
  'رشت',
  'کرمان'
];

export const CURRENT_USER: UserProfile = {
  id: 'usr-current',
  name: 'احسان محمدی',
  phone: '09123456789',
  role: 'buyer',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop',
  nationalIdVerified: true,
  walletBalance: 450000000, // 450 Million Tomans
  rating: 4.8,
  city: 'تهران',
  memberSince: '۱۴۰۱/۰۷'
};

export const INITIAL_DEALERSHIPS: Dealership[] = [
  {
    id: 'deal-1',
    name: 'اتو گالری لوکس فرشته',
    manager: 'جناب سهرابی',
    logo: '🚗',
    address: 'خیابان ولیعصر، نرسیده به میدان تجریش، پلاک ۲۴',
    city: 'تهران',
    phone: '۰۲۱-۲۲۰۰۳۳۰۰',
    isVerified: true,
    rating: 4.9,
    banners: ['https://images.unsplash.com/photo-1562575214-da9fcf59b907?q=80&w=400&auto=format&fit=crop'],
    activeAdsCount: 14,
    activeAuctionsCount: 2,
    description: 'نماینده رسمی توزیع خودروهای وارداتی و لوکس صفر کیلومتر در منطقه یک تهران با بیش از دو دهه سابقه درخشان.'
  },
  {
    id: 'deal-2',
    name: 'اتو خسروانی (شعبه غرب)',
    manager: 'خسروی پور',
    logo: '⭐',
    address: 'بزرگراه یادگار امام، خروجی سعادت آباد، خیابان سرو غربی',
    city: 'تهران',
    phone: '۰۲۱-۴۴۲۲۸۸۹۹',
    isVerified: true,
    rating: 4.7,
    banners: [],
    activeAdsCount: 28,
    activeAuctionsCount: 4,
    description: 'بزرگترین زنجیره خرید و فروش خودرو در کشور با ارائه گارانتی مغایرت و خدمات پس از فروش انحصاری.'
  },
  {
    id: 'deal-3',
    name: 'نمایشگاه خودرو پایتخت',
    manager: 'علیرضا حسینی',
    logo: '⚡',
    address: 'بلوار وکیل آباد، بین وکیل آباد ۱۲ و ۱۴',
    city: 'مشهد',
    phone: '۰۵۱-۳۸۸۰۰۹۰۰',
    isVerified: true,
    rating: 4.6,
    banners: [],
    activeAdsCount: 9,
    activeAuctionsCount: 1,
    description: 'مرکز تخصصی کارشناسی و معاوضه بی‌واسطه انواع خودروهای لوکس چینی و کره‌ای در خراسان رضوی.'
  }
];

export const INITIAL_CLASSIFIEDS: ClassifiedAd[] = [
  {
    id: 'ad-1',
    vehicle: {
      id: 'v-1',
      brand: 'ایران خودرو',
      model: 'دنا پلاس توربو اتوماتیک',
      yearJalali: 1402,
      mileage: 18000,
      colorOuter: 'سفید صدفی',
      colorInner: 'مشکی',
      transmission: 'automatic',
      fuelType: 'petrol',
      engineStatus: 'کاملا سالم به شرط کارشناسی',
      bodyStatus: 'paintless',
      chassisStatus: 'healthy',
      insuranceValidityMonths: 9,
      ownersCount: 1,
      images: ['https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop'],
      description: 'دنا پلاس توربو اتوماتیک آپشنال، بدنه بدون رنگ و خط و خش، گارانتی فعال ایران خودرو، روکش صندلی چرمی درجه یک کفی ۳ بعدی شیشه‌ها دودی ضد یووی. سرویس‌ها کاملا در نمایندگی انجام شده.'
    },
    price: 980000000, // 980 Million Tomans
    city: 'تهران',
    district: 'جنت‌آباد',
    createdAt: '۲ ساعت پیش',
    isUrgent: true,
    isFeatured: true,
    views: 142,
    sellerId: 'deal-2',
    sellerName: 'اتو خسروانی (شعبه غرب)',
    sellerRole: 'dealer',
    status: 'active'
  },
  {
    id: 'ad-2',
    vehicle: {
      id: 'v-2',
      brand: 'پژو',
      model: 'پژو ۲۰۷ MC سقف قرمز',
      yearJalali: 1401,
      mileage: 32000,
      colorOuter: 'مشکی',
      colorInner: 'مشکی با تریم قرمز',
      transmission: 'automatic',
      fuelType: 'petrol',
      engineStatus: 'سالم و بی‌نقص',
      bodyStatus: 'paintless',
      chassisStatus: 'healthy',
      insuranceValidityMonths: 4,
      ownersCount: 2,
      images: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop'],
      description: '۲۰۷ اتومات دورنگ، موتور TU5P سرپا و شتاب عالی. لاستیک‌ها ۸۰ درصد زاپاس هنوز نو زیرش نرفته. معاوضه با آپارتمان ندارم فقط نقد.'
    },
    price: 840000000, // 840 Million Tomans
    city: 'اصفهان',
    district: 'مرداویج',
    createdAt: '۵ ساعت پیش',
    isUrgent: false,
    isFeatured: false,
    views: 89,
    sellerId: 'usr-102',
    sellerName: 'امیر قاسمی',
    sellerRole: 'individual',
    status: 'active'
  },
  {
    id: 'ad-3',
    vehicle: {
      id: 'v-3',
      brand: 'سایپا',
      model: 'شاهین G دنده‌ای',
      yearJalali: 1401,
      mileage: 41000,
      colorOuter: 'نوک‌مدادی',
      colorInner: 'طوسی',
      transmission: 'manual',
      fuelType: 'petrol',
      engineStatus: 'سالم، سرویس دوره‌ای تازه انجام شده',
      bodyStatus: 'minor_paint',
      chassisStatus: 'healthy',
      insuranceValidityMonths: 6,
      ownersCount: 1,
      images: ['https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=600&auto=format&fit=crop'],
      description: 'شاهین دارای سانروف، استارت دکمه‌ای، مانیتور و دوربین دنده عقب. گلگیر سمت راست به علت مالیدگی به درب پارکینگ رنگ شده، بدون کوچکترین ضربه شاسی کاملا پلمپ.'
    },
    price: 670000000, // 670 Million Tomans
    city: 'مشهد',
    district: 'هاشمیه',
    createdAt: 'دیروز',
    isUrgent: false,
    isFeatured: true,
    views: 210,
    sellerId: 'usr-103',
    sellerName: 'رضا صبوری',
    sellerRole: 'individual',
    status: 'active'
  },
  {
    id: 'ad-4',
    vehicle: {
      id: 'v-4',
      brand: 'هایما',
      model: 'Hayma S7 توربو پلاس',
      yearJalali: 1400,
      mileage: 58000,
      colorOuter: 'خاکستری تیره',
      colorInner: 'چرم قهوه‌ای مشکی',
      transmission: 'automatic',
      fuelType: 'petrol',
      engineStatus: 'پرقدرت توربو بی‌صدا',
      bodyStatus: 'paintless',
      chassisStatus: 'healthy',
      insuranceValidityMonths: 11,
      ownersCount: 1,
      images: ['https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop'],
      description: 'هایما اس۷ جک دار، سانروف برقی صندلی برقی، گرمکن صندلی، دوربین ۳۶۰ درجه فعال. بسیار تمیز، بیمه بدنه هم دارد، سند تک برگ آماده انتقال در محضر.'
    },
    price: 1390000000, // 1.39 Billion Tomans
    city: 'تهران',
    district: 'سعادت‌آباد',
    createdAt: '۱ روز پیش',
    isUrgent: false,
    isFeatured: false,
    views: 345,
    sellerId: 'deal-1',
    sellerName: 'اتو گالری لوکس فرشته',
    sellerRole: 'dealer',
    status: 'active'
  },
  {
    id: 'ad-5',
    vehicle: {
      id: 'v-5',
      brand: 'پژو',
      model: 'پژو پارس ELX موتور XU7P',
      yearJalali: 1402,
      mileage: 12000,
      colorOuter: 'سفید صدفی',
      colorInner: 'بژ مانیتوردار',
      transmission: 'manual',
      fuelType: 'petrol',
      engineStatus: 'نو در حد صفر',
      bodyStatus: 'paintless',
      chassisStatus: 'healthy',
      insuranceValidityMonths: 12,
      ownersCount: 1,
      images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop'],
      description: 'پارس سال سفارشی ELX مجهز به رینگ آلومینیومی، مانیتور مالتی مدیا، سنسور نور و باران، دریچه گاز برقی. کارت طلایی تک ستاره فعال. فقط معاوضه با تارا یا دنا صفر.'
    },
    price: 720000000, // 720 Million Tomans
    city: 'تبریز',
    district: 'ائل‌گلی',
    createdAt: '۳ روز پیش',
    isUrgent: true,
    isFeatured: false,
    views: 402,
    sellerId: 'usr-105',
    sellerName: 'وحید خسروشاهی',
    sellerRole: 'individual',
    status: 'active'
  }
];

export const INITIAL_AUCTIONS: LiveAuction[] = [
  {
    id: 'auc-1',
    vehicle: {
      id: 'av-1',
      brand: 'پژو',
      model: '۲۰۷i پانوراما اتوماتیک TU5P',
      yearJalali: 1403,
      mileage: 1500,
      colorOuter: 'سفید',
      colorInner: 'مشکی',
      transmission: 'automatic',
      fuelType: 'petrol',
      engineStatus: 'صفر کیلومتر واقعی',
      bodyStatus: 'paintless',
      chassisStatus: 'healthy',
      insuranceValidityMonths: 12,
      ownersCount: 1,
      images: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop'],
      description: 'مزایده فوق العاده خودروی پژو ۲۰۷ دنده اتوماتیک ارتقا یافته با استاندارد ۸۵گانه سقف پانوراما، تحویل دیروز از کارخانه، بدنه ۱۰۰ درصد پلمپ بدون نقطه تحویل در پارکینگ خانه.'
    },
    startPrice: 850000000,
    reservePrice: 920000000,
    buyNowPrice: 975000000,
    currentBid: 905000000,
    minBidIncrement: 5000000,
    bidsCount: 11,
    watchersCount: 382,
    startTime: '۲۰۲۶-۰۵-۱۹T۱۰:۰۰:۰۰Z',
    endTime: '۲۰۲۶-۰۵-۲۰T۱۸:۰۰:۰۰Z', // Active
    status: 'live',
    sellerName: 'اتو گالری لوکس فرشته',
    sellerAvatar: '🚗',
    isVerifiedDealer: true
  },
  {
    id: 'auc-2',
    vehicle: {
      id: 'av-2',
      brand: 'کیا',
      model: 'Kia Cerato مونتاژ ۲.۰ لیتری آپشنال',
      yearJalali: 1398,
      mileage: 72000,
      colorOuter: 'سرامیکی قهوه‌ای متالیک',
      colorInner: 'چرم مشکی',
      transmission: 'automatic',
      fuelType: 'petrol',
      engineStatus: 'سرویس‌های زنجیر تایم تازه انجام شده',
      bodyStatus: 'paintless',
      chassisStatus: 'healthy',
      insuranceValidityMonths: 7,
      ownersCount: 2,
      images: ['https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=600&auto=format&fit=crop'],
      description: 'کیا سراتو آپشنال سایپا ۲۰۰۰ سی‌سی بسیار تمیز، دارای سانروف، شیفتر پشت فرمان، کیلس استارتر، سیستم چند رسانه‌ای هوشمند. بدون هیچ ضربه‌ای کارشناسی پلمپ.'
    },
    startPrice: 1750000000,
    reservePrice: 1890000000,
    buyNowPrice: 1950000000,
    currentBid: 1840000000,
    minBidIncrement: 10000000,
    bidsCount: 7,
    watchersCount: 219,
    startTime: '۲۰۲۶-۰۵-۱۹T۱۲:۰۰:۰۰Z',
    endTime: '۲۰۲۶-۰۵-۲۰T۲۰:۳۰:۰۰Z', // Active
    status: 'live',
    sellerName: 'اتو خسروانی (شعبه غرب)',
    sellerAvatar: '⭐',
    isVerifiedDealer: true
  },
  {
    id: 'auc-3',
    vehicle: {
      id: 'av-3',
      brand: 'چری',
      model: 'Tiggo 7 Pro اکسلنت',
      yearJalali: 1401,
      mileage: 38000,
      colorOuter: 'سفید صدفی',
      colorInner: 'چرم فرمولا وان قرمز',
      transmission: 'automatic',
      fuelType: 'petrol',
      engineStatus: 'فوق العاده تمیز تحت سرویس مدیران خودرو',
      bodyStatus: 'paintless',
      chassisStatus: 'healthy',
      insuranceValidityMonths: 10,
      ownersCount: 1,
      images: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600&auto=format&fit=crop'],
      description: 'تیگو ۷ پرو اکسلنت توربو شارژ. گارانتی فعال ۵ ساله مدیران خودرو، تماماً در نمایندگی مرکزی هروی سرویس گردیده. شرایط بدنه عالی و عاری از هرگونه رنگ شدگی.'
    },
    startPrice: 1400000000,
    reservePrice: 1520000000,
    buyNowPrice: 1590000000,
    currentBid: 0,
    minBidIncrement: 10000000,
    bidsCount: 0,
    watchersCount: 95,
    startTime: '۲۰۲۶-۰۵-۲۲T۱۴:۰۰:۰۰Z',
    endTime: '۲۰۲۶-۰۵-۲۳T۱۸:۰۰:00Z',
    status: 'upcoming',
    sellerName: 'کاربازار مشهد',
    sellerAvatar: '⚡',
    isVerifiedDealer: true
  }
];

export const INITIAL_WALLET_TRANSACTIONS: WalletTransaction[] = [
  {
    id: 'wtx-1',
    type: 'deposit',
    amount: 50000000, // 50 Million
    description: 'افزایش اعتبار کیف پول از طریق درگاه زرین‌پال - ملت',
    refId: 'ZP-9831728321',
    status: 'success',
    timestamp: '۱۴۰۵/۰۲/۲۸ - ۱۶:۴۰'
  },
  {
    id: 'wtx-2',
    type: 'payment_escrow',
    amount: 10000000,
    description: 'بیعانه تضمین شرکت در مزایده بابت شماره #auc-1 پژو ۲۰۷',
    refId: 'ZP-1049283748',
    status: 'success',
    timestamp: '۱۴۰۵/۰۲/۲۹ - ۱۰:۱۵'
  }
];

export const ARCHITECTURE_SPECS = [
  {
    title: 'PostgreSQL Database Schema (Enterprise)',
    description: 'Fully certified and structured SQL schema reflecting modern indices, relationships, and constraints required for KhodroYar.',
    code: `-- SQL Dump setup for KhodroYar PostgreSQL database
CREATE TYPE user_role AS ENUM ('buyer', 'seller', 'dealer', 'admin', 'moderator');
CREATE TYPE ad_status AS ENUM ('active', 'sold', 'expired', 'deleted');
CREATE TYPE auction_status AS ENUM ('upcoming', 'live', 'ended', 'cancelled');
CREATE TYPE transaction_type AS ENUM ('deposit', 'withdraw', 'payment_escrow', 'refund', 'payout');

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE,
    national_id VARCHAR(10) UNIQUE,
    is_verified BOOLEAN DEFAULT FALSE,
    role user_role DEFAULT 'buyer',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Profiles table
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    full_name VARCHAR(150),
    avatar_url VARCHAR(255),
    city VARCHAR(50),
    bio TEXT,
    rating NUMERIC(3, 2) DEFAULT 5.0
);

-- Dealers table
CREATE TABLE dealers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    showroom_name VARCHAR(150) NOT NULL,
    license_number VARCHAR(100) UNIQUE NOT NULL,
    address TEXT NOT NULL,
    landline_phone VARCHAR(20),
    logo_url VARCHAR(255),
    verified_badge BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Vehicles table
CREATE TABLE vehicles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    production_year INT NOT NULL,
    mileage INT NOT NULL,
    color_outer VARCHAR(50) NOT NULL,
    color_inner VARCHAR(50) NOT NULL,
    transmission VARCHAR(20) NOT NULL,
    fuel_type VARCHAR(20) NOT NULL,
    engine_condition VARCHAR(100),
    body_condition VARCHAR(100),
    chassis_condition VARCHAR(100),
    insurance_months INT NOT NULL,
    owners_count INT DEFAULT 1,
    technical_report_url VARCHAR(255),
    description TEXT
);

-- Ads table (Divar-like)
CREATE TABLE ads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vehicle_id UUID REFERENCES vehicles(id) ON DELETE RESTRICT,
    seller_id UUID REFERENCES users(id) ON DELETE CASCADE,
    price_toman BIGINT NOT NULL, -- 0 for negotiable
    city VARCHAR(100) NOT NULL,
    district VARCHAR(100),
    is_urgent BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    views_count INT DEFAULT 0,
    status ad_status DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Live Auctions table
CREATE TABLE auctions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vehicle_id UUID REFERENCES vehicles(id) ON DELETE RESTRICT,
    seller_id UUID REFERENCES users(id) ON DELETE CASCADE,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    start_price_toman BIGINT NOT NULL,
    reserve_price_toman BIGINT NOT NULL,
    buy_now_price_toman BIGINT,
    min_increment BIGINT DEFAULT 1000000,
    status auction_status DEFAULT 'upcoming',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Bids table
CREATE TABLE bids (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auction_id UUID REFERENCES auctions(id) ON DELETE CASCADE,
    bidder_id UUID REFERENCES users(id) ON DELETE CASCADE,
    amount BIGINT NOT NULL,
    is_autobid BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Indices for High Performance
CREATE INDEX idx_ads_city ON ads(city);
CREATE INDEX idx_ads_status ON ads(status);
CREATE INDEX idx_auctions_status ON auctions(status);
CREATE INDEX idx_bids_auction_amount ON bids(auction_id, amount DESC);
`
  },
  {
    title: 'Docker Architecture Config (docker-compose.yml)',
    description: 'Fully isolated environment containing PostgreSQL, Redis, NestJS, next-facing proxy and Elasticsearch.',
    code: `version: '3.8'

services:
  # Database Storage Engine
  postgres:
    image: postgres:15-alpine
    container_name: khodroyar-db
    environment:
      POSTGRES_DB: khodroyar_prod
      POSTGRES_USER: admin_dev
      POSTGRES_PASSWORD: SecretUltraSecurePassword2026
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U admin_dev -d khodroyar_prod"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Performance Cache and Realtime Sync Storage
  redis:
    image: redis:7-alpine
    container_name: khodroyar-redis
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data

  # ElasticSearch Engine for Smart Persian Ads Autocomplete
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.10.2
    container_name: khodroyar-search
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ports:
      - "9200:9200"
    volumes:
      - esdata:/usr/share/elasticsearch/data

  # NestJS Core Application Engine (Backend)
  api-service:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: khodroyar-api
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://admin_dev:SecretUltraSecurePassword2026@postgres:5432/khodroyar_prod?schema=public
      - REDIS_URL=redis://redis:6379
      - ELASTICSEARCH_NODE=http://elasticsearch:9200
      - GEMINI_API_KEY=\${GEMINI_API_KEY}
    ports:
      - "4000:4000"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started

volumes:
  pgdata:
  redisdata:
  esdata:
`
  },
  {
    title: 'Nginx Configuration with SSL and RTL Support',
    description: 'Nginx site block for routing incoming Web traffic and managing headers safely optimized for ArvanCloud & Cloudflare.',
    code: `server {
    listen 80;
    server_name khodroyar.ir www.khodroyar.ir;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name khodroyar.ir;

    ssl_certificate /etc/letsencrypt/live/khodroyar.ir/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/khodroyar.ir/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Performance buffers
    client_max_body_size 24M;
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;

    location / {
        proxy_pass http://localhost:3000; # Local preview endpoint
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /api/ {
        proxy_pass http://localhost:4000/; # Backend controller Express/Nest
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Static uploads with caching headers
    location /static/uploads/ {
        alias /var/www/khodroyar/uploads/;
        expires 7d;
        add_header Cache-Control "public, no-transform";
    }
}
`
  }
];
