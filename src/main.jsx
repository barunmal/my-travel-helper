import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const tabs = [
  { id: 'schedule', label: '일정', icon: 'calendar' },
  { id: 'shopping', label: '구매', icon: 'bag' },
  { id: 'map', label: '지도', icon: 'map' },
  { id: 'checklist', label: '체크', icon: 'check' },
  { id: 'budget', label: '예산', icon: 'wallet' }
]

const schedule = [
  {
    day: 'Day 1',
    title: '도착과 텐진 쇼핑',
    items: [
      {
        time: '10:00',
        name: '후쿠오카 도착',
        desc: '입국 후 시내 이동 준비',
        query: 'Fukuoka Airport',
        image: 'https://www.jal.co.jp/nl/en/guide-to-japan/destinations/articles/fukuoka/enjoy-fukuoka-airport/_jcr_content/root/responsivegrid/sectioncontainer_cop/image.coreimg.jpeg/1776404334179.jpeg'
      },
      {
        time: '13:00',
        name: '쿠라스시',
        desc: '가볍게 시작하기 좋은 회전초밥. 대기 시간을 고려해 여유 있게 이동하세요.',
        query: 'Kura Sushi Fukuoka Tenjin',
        image: 'https://blog.kakaocdn.net/dna/trByy/btsIAXToKlV/AAAAAAAAAAAAAAAAAAAAAFpT7I17n0TXb1ZJqKvLqtiKSqNvX1k2RttWFMeO21SK/img.png?allow_ip=&allow_referer=&credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1782831599&signature=fKODQPSEZ8eQ%2F%2FH7FngQ%2F5MMVUw%3D'
      },
      {
        time: '14:10',
        name: '이시무라 만세이도 본점',
        desc: '후쿠오카 과자와 선물 쇼핑 코스',
        query: 'Ishimura Manseido Main Store Fukuoka',
        image: 'https://i0.wp.com/www.fukuoka-now.com/wp-content/uploads/2021/08/manseido-opening-14.jpg?resize=1024%2C768&ssl=1'
      },
      {
        time: '14:40',
        name: '텐진 지하상가',
        desc: '날씨와 상관없이 쇼핑하기 좋은 지하 쇼핑 거리',
        query: 'Tenjin Underground Mall',
        image: 'https://coinventmediastorage.blob.core.windows.net/media-storage-container/gphoto_ChIJdaaw2I2RQTURZx5SLoy1OgQ_1.jpg'
      },
      {
        time: '15:30',
        name: '호텔 몬토레 라 스루 후쿠오카 체크인',
        desc: '짐 정리 후 저녁 동선 준비',
        query: 'Hotel Monterey La Soeur Fukuoka',
        image: 'https://www.hotelmonterey.co.jp/img/hotelinfo/img_lsf.jpg'
      },
      {
        time: '16:00',
        name: '돈키호테',
        desc: '의약품, 간식, 생활용품 쇼핑',
        query: 'Don Quijote Fukuoka Tenjin',
        image: 'https://kaikk.tw/wp-content/uploads/2023/08/IMG_9703.jpg'
      },
      {
        time: '17:30',
        name: '가챠가챠의 숲',
        desc: '캡슐토이 쇼핑 코스',
        query: 'Gachagacha no Mori Fukuoka',
        image: 'https://www.luluarq.co.jp/news/detail/202/branch1.jpg'
      },
      {
        time: '19:00',
        name: '신신라멘',
        desc: '후쿠오카식 돈코츠 라멘으로 하루 마무리',
        query: 'Shin Shin Ramen Tenjin',
        image: 'https://cdn-ak.f.st-hatena.com/images/fotolife/l/lunch-fukuoka/20180808/20180808234403.jpg'
      }
    ]
  },
  {
    day: 'Day 2',
    title: '공원과 자유시간',
    items: [
      {
        time: '09:00',
        name: '후쿠오카 동식물원',
        desc: '가볍게 산책하며 보기 좋은 오전 코스',
        query: 'Fukuoka City Zoological Garden',
        image: 'https://www.en-hd.jp/gardenfukuoka/wp/wp-content/uploads/2024/11/pixta_81689337_M.jpg'
      },
      {
        time: '12:30',
        name: '함바그',
        desc: '든든한 점심 메뉴',
        query: 'Hamburg steak Fukuoka Tenjin',
        image: 'https://tblg.k-img.com/restaurant/images/Rvw/349146/150x150_square_402b3077ab043c42550e7ccc4d18eb9d.jpg'
      },
      {
        time: '14:00',
        name: '오호리공원',
        desc: '호수 주변 산책과 카페 쉬어가기',
        query: 'Ohori Park Fukuoka',
        image: 'https://imgcp.aacdn.jp/img-a/1440/auto/global-aaj-front/article/2019/08/5d424e7eee303_5d424e6047138_1924732013.png'
      },
      {
        time: '16:00',
        name: '텐진 자유시간',
        desc: '쇼핑, 카페, 드럭스토어 추가 방문',
        query: 'Tenjin Fukuoka',
        image: 'https://showcase.city.fukuoka.lg.jp/admn/mrgt/images/2014/03/img0694.jpg'
      }
    ]
  },
  {
    day: 'Day 3',
    title: '마지막 쇼핑과 귀국',
    items: [
      {
        time: '오전',
        name: '카고패스',
        desc: '짐 보관 또는 배송 확인',
        query: 'Fukuoka cargo pass luggage',
        image: 'https://pbs.twimg.com/media/Gx2px93aUAEZmIv?format=jpg&name=large'
      },
      {
        time: '오전',
        name: '포켓몬센터',
        desc: '한정 굿즈와 배스볼 구매 체크',
        query: 'Pokemon Center Fukuoka',
        image: 'https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_uAPF6JZYlr9KjgNmObWfIybNQqbiIVLtgXF-QYXQbp3HhMZMO9L0g0dEMeOsnO8ajbLzRBAyoR9HJ5nc2CrLaJogYfAtyviG2UgoLJN9MeBLGr-TUdQKA8jdiD9sfXddoDTBykyx39gTGylgSx8EkQRLAfEpPXuBgCdDUEXTJFOcQqrWeMUubuRh1XLQ%3Ds0-d'
      },
      {
        time: '오전',
        name: '하카타 버스터미널 가챠샵',
        desc: '마지막 가챠 쇼핑',
        query: 'Hakata Bus Terminal gachapon',
        image: 'https://bandainamco-am.co.jp/images/others/capsule-toy-store/store/img_store_hakatabt_2.jpg'
      },
      {
        time: '점심',
        name: '점심',
        desc: '공항 이동 전 가볍게 식사',
        query: 'Hakata Station lunch',
        image: 'https://www.crossroadfukuoka.jp/storage/special_feature_paragraph_contents/6449/responsive_images/rFtmiqoREMBjwdpyvP2VTbsjcE1UoxC8qo0HMb1q__1763_1175.jpg'
      },
      {
        time: '출국',
        name: '공항',
        desc: '면세와 탑승 수속 시간 여유 있게 확보',
        query: 'Fukuoka Airport International Terminal',
        image: 'https://www.jal.co.jp/nl/en/guide-to-japan/destinations/articles/fukuoka/enjoy-fukuoka-airport/_jcr_content/root/responsivegrid/sectioncontainer/image_1980883808.coreimg.jpeg/1776404334613.jpeg'
      }
    ]
  }
]

const shoppingItems = [
  { name: '포켓몬 배스볼', category: '굿즈', image: 'https://images.unsplash.com/photo-1609372332255-611485350f25?auto=format&fit=crop&w=700&q=80' },
  { name: '케이프 슈퍼하드', category: '헤어', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=700&q=80' },
  { name: '모아립', category: '뷰티', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80' },
  { name: '신비오페르민', category: '의약품', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=700&q=80' },
  { name: '에비오스', category: '영양제', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80' },
  { name: '록소닌', category: '의약품', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=700&q=80' },
  { name: '다이쇼K', category: '의약품', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=700&q=80' },
  { name: '간식 / 젤리 / 과자', category: '간식', image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=700&q=80' }
]

const checklistItems = [
  '여권',
  '여권 비상용 사진 챙기기',
  '돈키호테 쿠폰',
  '비상약',
  '보조배터리 찾기',
  '돼지코',
  '충전기',
  '동전지갑 챙기기',
  '우산 - 일기예보 보고 결정',
  '카드-토스카드',
  '카드-현대카드',
  '카드-네이버',
  '로밍',
  '애플워치-설정-셀룰러-데이터로밍끄기',
  '아이패드 데이터 로밍 끄기',
  '휴대폰',
  '패드',
  '워치',
  '속옷',
  '양말',
  '모자',
  '안경, 썬글라스',
  '복용약',
  '세안제',
  '로션',
  '자외선차단제',
  '칫솔',
  '치약',
  '수건',
  '면도기',
  '면도크림',
  '볼펜',
  '메모지',
  '작은가방'
]
const budgetFields = [
  { id: 'shopping', label: '쇼핑' },
  { id: 'food', label: '식비' },
  { id: 'transport', label: '교통비' }
]

function Icon({ name }) {
  const paths = {
    calendar: 'M7 2v3M17 2v3M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z',
    bag: 'M6 7h12l1 14H5L6 7ZM9 7a3 3 0 0 1 6 0',
    map: 'M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3ZM9 3v15M15 6v15',
    check: 'M20 6 9 17l-5-5',
    wallet: 'M3 7a3 3 0 0 1 3-3h13v16H6a3 3 0 0 1-3-3V7Zm14 5h4v5h-4a2.5 2.5 0 0 1 0-5Z'
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  )
}

function useLocalState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  const update = (nextValue) => {
    const resolved = typeof nextValue === 'function' ? nextValue(value) : nextValue
    setValue(resolved)
    localStorage.setItem(key, JSON.stringify(resolved))
  }

  return [value, update]
}

function mapUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function App() {
  const [activeTab, setActiveTab] = useState('schedule')
  const [shoppingChecked, setShoppingChecked] = useLocalState('shoppingChecked', {})
  const [readyChecked, setReadyChecked] = useLocalState('readyChecked', {})
  const [budget, setBudget] = useLocalState('budget', { shopping: '', food: '', transport: '' })
  const total = useMemo(
    () => budgetFields.reduce((sum, field) => sum + Number(String(budget[field.id] || '0').replaceAll(',', '')), 0),
    [budget]
  )

  const allPlaces = schedule.flatMap((day) => day.items.map((item) => ({ ...item, day: day.day })))

  return (
    <main className="min-h-screen bg-[#f8fbff] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-white shadow-iphone">
        <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 px-5 pb-3 pt-[max(18px,env(safe-area-inset-top))] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-600">2박 3일</p>
              <h1 className="text-2xl font-bold tracking-normal">여행 도우미</h1>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-[8px] bg-blue-50 text-xl">✈</div>
          </div>
          <div className="mt-4 h-32 overflow-hidden rounded-[8px]">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1000&q=80" alt="일본 여행 거리 풍경" />
          </div>
        </header>

        <div className="flex-1 px-5 pb-28 pt-5">
          {activeTab === 'schedule' && <Schedule />}
          {activeTab === 'shopping' && (
            <Shopping checked={shoppingChecked} onToggle={(name) => setShoppingChecked((prev) => ({ ...prev, [name]: !prev[name] }))} />
          )}
          {activeTab === 'map' && <MapList places={allPlaces} />}
          {activeTab === 'checklist' && (
            <Checklist checked={readyChecked} onToggle={(name) => setReadyChecked((prev) => ({ ...prev, [name]: !prev[name] }))} />
          )}
          {activeTab === 'budget' && <Budget budget={budget} setBudget={setBudget} total={total} />}
        </div>

        <nav className="fixed bottom-0 left-1/2 z-30 grid w-full max-w-md -translate-x-1/2 grid-cols-5 border-t border-slate-100 bg-white/95 px-2 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              aria-label={tab.label}
              onClick={() => setActiveTab(tab.id)}
              className={`flex h-14 flex-col items-center justify-center gap-1 rounded-[8px] text-xs font-semibold transition ${
                activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500'
              }`}
            >
              <Icon name={tab.icon} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </section>
    </main>
  )
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
    </div>
  )
}

function Schedule() {
  return (
    <div>
      <SectionTitle title="일정" subtitle="하루씩 펼쳐서 동선을 확인하세요." />
      <div className="space-y-4">
        {schedule.map((day) => (
          <article key={day.day} className="rounded-[8px] border border-slate-100 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-blue-600">{day.day}</p>
                <h3 className="text-lg font-bold">{day.title}</h3>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{day.items.length}곳</span>
            </div>
            <div className="space-y-3">
              {day.items.map((item) => (
                <PlaceCard item={item} key={`${day.day}-${item.name}`} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function PlaceCard({ item }) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-slate-100 bg-slate-50">
      {item.image && <img src={item.image} alt={item.name} className="h-36 w-full object-cover" />}
      <div className="p-4">
        <div className="flex gap-3">
          <time className="min-w-14 rounded-[8px] bg-white px-2 py-2 text-center text-xs font-bold text-blue-700 shadow-sm">{item.time}</time>
          <div className="min-w-0 flex-1">
            <h4 className="font-bold">{item.name}</h4>
            <p className="mt-1 text-sm leading-5 text-slate-600">{item.desc}</p>
          </div>
        </div>
        <a className="mt-3 flex h-11 items-center justify-center rounded-[8px] bg-blue-600 font-bold text-white" href={mapUrl(item.query)} target="_blank" rel="noreferrer">
          Google Maps
        </a>
      </div>
    </div>
  )
}

function Shopping({ checked, onToggle }) {
  const doneCount = shoppingItems.filter((item) => checked[item.name]).length
  return (
    <div>
      <SectionTitle title="구매리스트" subtitle={`${doneCount}/${shoppingItems.length}개 체크됨`} />
      <div className="grid grid-cols-2 gap-3">
        {shoppingItems.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => onToggle(item.name)}
            className={`overflow-hidden rounded-[8px] border text-left shadow-sm transition ${
              checked[item.name] ? 'border-blue-500 bg-blue-50' : 'border-slate-100 bg-white'
            }`}
          >
            <img src={item.image} alt={item.name} className="h-28 w-full object-cover" />
            <div className="p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{item.category}</span>
                <span className={`grid h-6 w-6 place-items-center rounded-[8px] border ${checked[item.name] ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                  {checked[item.name] ? '✓' : ''}
                </span>
              </div>
              <p className="text-sm font-bold leading-5">{item.name}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function MapList({ places }) {
  return (
    <div>
      <SectionTitle title="지도" subtitle="장소별 Google Maps 바로가기" />
      <div className="space-y-3">
        {places.map((place) => (
          <a key={`${place.day}-${place.name}`} className="flex items-center justify-between rounded-[8px] border border-slate-100 bg-white p-4 shadow-sm" href={mapUrl(place.query)} target="_blank" rel="noreferrer">
            <div>
              <p className="text-xs font-bold text-blue-600">{place.day} · {place.time}</p>
              <h3 className="mt-1 font-bold">{place.name}</h3>
            </div>
            <span className="rounded-[8px] bg-blue-600 px-3 py-2 text-sm font-bold text-white">지도</span>
          </a>
        ))}
      </div>
    </div>
  )
}

function Checklist({ checked, onToggle }) {
  return (
    <div>
      <SectionTitle title="체크리스트" subtitle="출발 전 준비물을 빠짐없이 확인하세요." />
      <div className="space-y-3">
        {checklistItems.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onToggle(item)}
            className={`flex min-h-16 w-full items-center justify-between gap-3 rounded-[8px] border px-4 py-3 text-left shadow-sm ${
              checked[item] ? 'border-blue-500 bg-blue-50' : 'border-slate-100 bg-white'
            }`}
          >
            <span className="min-w-0 flex-1 break-keep text-sm font-bold leading-5">{item}</span>
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-[8px] border ${checked[item] ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
              {checked[item] ? '✓' : ''}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function Budget({ budget, setBudget, total }) {
  return (
    <div>
      <SectionTitle title="예산" subtitle="금액을 입력하면 총합이 자동 계산됩니다." />
      <div className="rounded-[8px] bg-blue-600 p-5 text-white shadow-lg shadow-blue-200">
        <p className="text-sm font-semibold text-blue-100">총합</p>
        <p className="mt-1 text-3xl font-bold">₩{total.toLocaleString('ko-KR')}</p>
      </div>
      <div className="mt-4 space-y-3">
        {budgetFields.map((field) => (
          <label key={field.id} className="block rounded-[8px] border border-slate-100 bg-white p-4 shadow-sm">
            <span className="text-sm font-bold text-slate-700">{field.label}</span>
            <div className="mt-2 flex items-center gap-2 rounded-[8px] bg-slate-50 px-3">
              <span className="font-bold text-slate-400">₩</span>
              <input
                inputMode="numeric"
                value={budget[field.id]}
                onChange={(event) => setBudget((prev) => ({ ...prev, [field.id]: event.target.value.replace(/[^\d]/g, '') }))}
                className="h-12 w-full bg-transparent text-lg font-bold outline-none"
                placeholder="0"
              />
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}
