"use client";

import { useState } from "react";

const projects = [
  {
    id: -1,
    company: "IICOMBINED",
    title: "IIC BO (RMS)",
    subtitle: "Gentle Monster 글로벌 리테일 관리 시스템",
    period: "2025.06 ~",
    team: "PM 1명, 백엔드 3명, 프론트 2명, ERP 개발 2명",
    role: [
      "IIC BO 내 ERP(NetSuite)와 3개 계열사 운영 프로세스 관리 및 연계 운영 총괄",
      "SCM / MD / WMS / Store 사용자 대상 전체 시스템 기획 및 구축",
      "US 법인 리테일 시스템 도입 — 12개 스토어 안정 운영, 렌즈 비즈니스 특화 대응 (기여도 100%)",
      "CA 법인 리테일 운영 시스템 도입 — 신규 법인 오픈 대응 및 리테일 프로세스 완성 (기여도 75%)",
      "ERP 연동 사례 구축 및 시스템 연계 케이스 스터디 전파",
    ],
    tools: ["SAP", "OMS", "WMS", "NetSuite", "Shopify", "ERP"],
    summary:
      "Gentle Monster의 글로벌 리테일 관리 시스템(IIC BO). 글로벌 법인의 리테일 운영을 통합 관리하는 백오피스 시스템으로, ERP 연동 및 다국가 운영 프로세스를 표준화. US 법인 12개 스토어 전체 운영 커버링 및 CA 법인 신규 온보딩까지 수행.",
    process: [
      "요구사항 분석 및 시스템 설계",
      "SCM/MD/WMS/Store 시스템 구축",
      "US·CA 법인 도입 및 안정 운영",
      "ERP 연계 및 운영 검증",
    ],
    results: [
      "US 법인 모든 운영 커버링 기능 100% 대응",
      "US 12개 스토어 대상 안정 운영 달성",
      "CA 법인 리테일 프로세스 안정화 및 빠른 온보딩",
      "렌즈 비즈니스 특화 상세 대응 시스템 반영",
      "BOP(S)/BOH(S) 통합 설계 진행",
    ],
  },
  {
    id: 1,
    company: "TeamFresh",
    title: "RDMS_JP",
    subtitle: "재팬 유통&물류 전산 시스템 신규 프로젝트",
    period: "2024.07 ~ 2024.11",
    team: "기획 1명, 개발(BE) 5명 — 총 6명",
    role: [
      "프로젝트 일정 관리",
      "기능정의 및 필요 요구사항 기획화",
      "단위 테스트 지원",
      "현지 도입 지원 및 안정화",
    ],
    tools: ["Figma", "JIRA", "Confluence", "Notion"],
    summary:
      "일본 현지 유통 환경의 전산화 필요에 따라, 기존 국내 시스템을 일본 환경에 맞게 커스터마이징하여 개발 및 적용. 범용 및 전용 고객사의 물류 처리와 재고 관리에 특화된 시스템으로, 일본어와 한국어 간 교차 적용이 가능한 다국어 지원 기능을 포함.",
    process: [
      "요구사항 파악 및 일정 전체 관리",
      "현지 환경 조사",
      "필수 기능 목록화",
      "기능 기획",
      "테스트 & 현지 안정화",
    ],
    results: [
      "대규모 프랜차이즈 전용 유통 및 물류 시스템 도입 지원을 통해 고객사의 국내 업무 효율화와 사용성 증가를 기대",
      "자체 해외 시장 경험을 쌓을 수 있는 기회",
      "고객 만족도 향상으로 인한 신규 고객사 유치 > 매출 증대 목표",
      "자체 일본 법인에 대한 사업성 확대",
    ],
  },
  {
    id: 2,
    company: "TeamFresh",
    title: "TIMF O:da",
    subtitle: "비즈니스 식자재 주문 플랫폼",
    period: "2023.09 ~ 2024.02",
    team: "기획 1명, 개발 2명 — 총 3명",
    role: [
      "상품 조회 프로세스 및 UI 초안 기획",
      "QC / 현장 안정화 교육",
      "서비스 운영 및 고도화 기능 기획",
    ],
    tools: ["Figma", "JIRA", "Confluence", "Notion"],
    summary:
      "고객사(매출처)를 대상으로 하는 식자재 새벽배송 주문 플랫폼으로, RDMS에서 주문 규제 조건을 제외한 모든 상품을 브랜드 및 매출처 기준으로 주문할 수 있는 시스템.",
    process: [
      "필요 기능 목록화",
      "화면 설계",
      "테스트",
      "배포",
    ],
    results: [
      "유통&물류 시스템 동시 배포 지원 및 완료",
      "통합 및 단위 테스트 시행",
    ],
  },
  {
    id: 3,
    company: "TeamFresh",
    title: "RDMS",
    subtitle: "기업 유통/물류 전산 통합 시스템",
    period: "2023.03 ~ 2024.04",
    team: "기획 3명, 개발(BE) 7명 — 총 10명",
    role: [
      "ERP, WMS 기획 (프로세스 및 화면설계)",
      "QC / 현장 베타테스트",
      "서비스 운영 및 고도화 기획",
    ],
    tools: ["Figma", "JIRA", "Confluence", "Notion"],
    summary:
      "유통 사업부의 재고 수불 불일치와 잦은 운영 대응으로 인한 리소스 낭비 문제를 발굴. 총 6개의 운영 센터와 7개 파트의 이해관계자 사용성을 반영한 유통 전산 통합 시스템. ERP, OMS, WMS, TMS, CRM 총 5개 모듈과 46개의 관리 메뉴 기반으로 구성.",
    process: [
      "기능 및 화면 설계",
      "운영 정책 정립",
      "CBT & OBT",
      "서비스 운영 및 기능 고도화",
    ],
    results: [
      "휴먼 에러 제거로 재고 및 단가 정합성이 증가하고, 신뢰할 수 있는 재고 수불 내역을 통해 자산 관리가 더욱 용이해짐",
      "새로운 사업 카테고리와 프로세스 도입 기반을 마련하여 비즈니스 확장에 긍정적 영향",
      "실시간 작업 현황 및 재고 반영으로 즉각적인 모니터링 가능",
    ],
    roadmap: [
      "Phase 1 — 사용자 편의성 개선: 주문 플랫폼 UI/UX 개선, 입/출고 현황 및 지표 관리용 신규 메뉴 개설",
      "Phase 2 — 사업 확장성 반영: 축산 카테고리 식자재 유통을 위한 계근 프로세스 및 시스템 도입",
      "Phase 3 — 관리자 리소스 자동화: 매입/매출 정산 간소화 및 발송/확정 프로세스 자동화",
    ],
  },
  {
    id: 4,
    company: "Jocoos",
    title: "mybeautip+",
    subtitle: "국내 / 국외 통합 관리 어드민",
    period: "2023.02 ~ 2023.08",
    team: "기획 1명, 개발(백엔드, Web) 3명 — 총 4명",
    role: [
      "프로젝트 전체 일정 관리",
      "프로세스 및 화면 설계 문서 제작",
      "QA",
    ],
    tools: ["Google Sheets", "Figma", "Diagrams"],
    summary:
      "KR(한국), TH(태국), VN(베트남) 서비스에 따른 통합 어드민. 3개 국가별로 분리된 백오피스 관리로 인한 관리자 공수를 줄이기 위해, 사용자, 상품, 콘텐츠 관리를 통합한 어드민 시스템.",
    process: [
      "사용자 인터뷰 및 요구사항 파악",
      "어드민 기능 및 화면 설계",
      "어드민 기획 — 추가 지원",
      "테스트",
    ],
    results: [
      "단일 백오피스에서 모든 서비스를 통합 관리함으로써, 반복 작업이나 제약으로 인한 관리 공수를 대폭 축소할 수 있는 구조 가능",
      "관리자 공수를 축소하여 영업 및 콘텐츠 제작에 더 많은 리소스를 할당 가능",
      "결과적으로 서비스 유저 증가 및 매출 증대를 기대",
    ],
    roadmap: [
      "Phase 1 — 국가별 현지화 지원을 위한 관리자 언어 패치",
      "Phase 2 — 단순 전시 상품 등록 외 재고 관리 기능 추가",
      "Phase 3 — 실시간 라이브 커머스와 이벤트 홍보 기능 추가",
    ],
  },
  {
    id: 5,
    company: "Jocoos",
    title: "mybeautip",
    subtitle: "K뷰티 커뮤니티 & 커머스 플랫폼 앱",
    period: "2022.08 ~ 2023.09",
    team: "기획 1명, 개발(BE, 모바일, Web) 5명, 디자이너 1명 — 총 7명",
    role: [
      "프로젝트 전체 일정 관리",
      "기획 관련 문서 제작 및 버전 관리",
      "필요 기능 고도화 및 우선순위 정의",
    ],
    tools: ["Google Sheets", "Figma", "Diagrams"],
    summary:
      "각 OS별 운영 체제에 맞춘 네이티브 앱 서비스. K뷰티 제품에 대한 팁, 소개, 불편사항 등을 공유할 수 있는 익명 커뮤니티 게시판 서비스. 사용자가 직접 제품을 소개하고 판매하며, 수수료 혜택을 받을 수 있는 라이브 커머스 플랫폼.",
    process: [
      "요구사항 분석",
      "서비스 / 기능 설계",
      "UI/UX 설계",
      "테스트",
      "운영지원 & 고도화 목표 수립",
    ],
    results: [],
  },
  {
    id: 6,
    company: "THE ASTA",
    title: "Passpartout",
    subtitle: "가상계좌 결제가 가능한 호텔 & 여행 플랫폼",
    period: "2021.01 ~ 2022.08",
    team: "기획 2명, 개발(BE2, FE1) 3명, 디자이너 2명 — 총 7명",
    role: [
      "프로젝트 전체 일정 관리",
      "필요 기획 문서 작업(F/C, S/B)",
      "Expedia API 문서 분석 및 필요 항목 정의 (개발 협업)",
    ],
    tools: ["Google Sheets", "Figma"],
    summary:
      "수동 예약 관리 문제 해결을 위해 Expedia의 API를 활용한 실시간 호텔 예약 서비스. 자체 가상자산(ASTA) 결제 방식을 더하여 환산 정보 반영 프로세스 도입. ASTA Wallet 자체 시스템을 통해 결제 및 잔액 확인이 가능한 서비스.",
    process: [
      "요구사항 분석 및 정의",
      "기능 및 화면 설계",
      "개발 F/U 및 기존 서비스 운영 지원",
      "QA 및 검수",
    ],
    results: [
      "관리자의 수동업무 비중을 축소함에 따라 업무 효율 개선 & 사용자의 서비스 이용 편의 개선",
      "고객 만족도 향상으로 인한 매출 증대 목표",
    ],
    budget: "약 20억원",
  },
];

const skills = [
  { category: "기획 도구", items: ["Figma", "JIRA", "Confluence", "Notion", "Google Sheets", "Diagrams", "Claude Code", "Git"] },
  { category: "시스템", items: ["SAP", "OMS", "WMS", "NetSuite", "Shopify", "ERP", "TMS", "CRM"] },
  { category: "역할", items: ["서비스 기획", "프로젝트 관리", "요구사항 분석", "화면 설계", "QA/QC", "운영 고도화"] },
  { category: "도메인", items: ["글로벌 리테일", "유통/물류", "커머스/라이브커머스", "여행/호텔 예약", "식자재 B2B 플랫폼", "뷰티 커뮤니티"] },
];

export default function Home() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-navy-800">
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span></span>
          <div className="flex gap-6 text-sm text-navy-100/70">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-navy-800 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
          <p className="text-sm text-navy-100/50 mb-6 animate-fade-in-up">Product Management Portfolio</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in-up animate-delay-100">
            운영 현장의 문제를 시스템으로 풀어내는 PM
          </h1>
          <div className="mt-5 flex items-center gap-3 text-navy-100/70 animate-fade-in-up animate-delay-200">
            <span className="text-base font-medium text-white">이우주</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm">Wooju Lee</span>
          </div>
          <p className="mt-4 text-sm text-navy-100/60 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-300">
            글로벌 리테일 시스템부터 B2B 유통/물류 통합 플랫폼까지,
            복잡한 운영 환경을 구조화하고 실제 현장에서 동작하는 시스템을 만들어 왔습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 animate-fade-in-up animate-delay-400">
            {["Global Retail", "B2B/B2C Commerce", "WMS·ERP·OMS Integration", "Multi-region Operation", "AI Workflow"].map((chip) => (
              <span key={chip} className="text-xs px-3 py-1.5 rounded-full border border-navy-100/20 text-navy-100/70">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-navy-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy-900 mb-10">About</h2>

          {/* Career timeline with impact */}
          <div className="space-y-4">
            {[
              {
                company: "IICOMBINED",
                role: "PM (프로젝트매니저)",
                period: "2025.01 ~ 재직중",
                desc: "글로벌 리테일 시스템 기획, SAP·Shopify·NetSuite 연계 운영 환경 구축",
                impact: "글로벌 법인 운영 통합 · US 온·오프라인 12개 스토어 실시간 운영 관리",
              },
              {
                company: "TeamFresh",
                role: "서비스 기획",
                period: "2023.03 ~ 2024.11",
                desc: "유통/물류 전산 통합 시스템(RDMS) 기획, 식자재 주문 플랫폼, 일본 법인 시스템 도입",
                impact: "6개 운영센터 · 5개 모듈(ERP/OMS/WMS/TMS/CRM) · 46개 관리 메뉴 구축",
              },
              {
                company: "Jocoos",
                role: "서비스 기획",
                period: "2022.08 ~ 2023.09",
                desc: "K뷰티 커뮤니티 & 커머스 플랫폼, 글로벌 통합 어드민 기획",
                impact: "한국·태국·베트남 3개국 통합 운영 백오피스 구축",
              },
              {
                company: "THE ASTA",
                role: "서비스 기획",
                period: "2021.01 ~ 2022.08",
                desc: "가상자산 결제 기반 호텔/여행 예약 플랫폼 기획",
                impact: "Expedia API 연동 실시간 예약 시스템 · 가상자산 결제 프로세스 도입",
              },
            ].map((c) => (
              <div key={c.company} className="bg-white rounded-xl p-5 border border-navy-100">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-semibold text-sm text-navy-900">{c.company}</p>
                  <p className="text-xs text-navy-600">{c.period}</p>
                </div>
                <p className="text-xs text-navy-600 mb-1.5">{c.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                <p className="text-xs text-navy-700 mt-2 font-medium">→ {c.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy-900 mb-2">Projects</h2>
          <p className="text-sm text-navy-600 mb-10">2021 — 2026</p>

          <div className="space-y-4">
            {projects.map((p) => {
              const isOpen = openId === p.id;
              return (
                <div
                  key={p.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:shadow-md flex"
                >
                  {/* Left accent bar */}
                  <div className="w-1.5 bg-navy-800 shrink-0 rounded-l-xl" />
                  <div className="flex-1 min-w-0">
                  {/* Summary row */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : p.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs font-medium text-navy-800 bg-navy-50 px-2 py-0.5 rounded">
                          {p.company}
                        </span>
                        <h3 className="text-base font-semibold text-navy-900 truncate">{p.title}</h3>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{p.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xs text-navy-600 hidden sm:block">{p.period}</span>
                      <svg
                        className={`w-5 h-5 text-navy-600/40 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Detail */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                      <div className="grid md:grid-cols-2 gap-8 mt-5">
                        {/* Left column */}
                        <div className="space-y-5">
                          <div>
                            <p className="text-xs font-medium text-navy-600 mb-1">기간</p>
                            <p className="text-xs">{p.period}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-navy-600 mb-1">투입 인력</p>
                            <p className="text-xs">{p.team}</p>
                          </div>
                          {"budget" in p && (
                            <div>
                              <p className="text-xs font-medium text-navy-600 mb-1">투입 예산</p>
                              <p className="text-xs">{(p as typeof projects[5]).budget}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-xs font-medium text-navy-600 mb-2">담당 업무</p>
                            <ul className="space-y-1">
                              {p.role.map((r) => (
                                <li key={r} className="text-xs text-gray-600 flex gap-2">
                                  <span className="text-gray-300">·</span>{r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-navy-600 mb-2">활용 도구</p>
                            <div className="flex flex-wrap gap-1.5">
                              {p.tools.map((t) => (
                                <span key={t} className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right column */}
                        <div className="space-y-5">
                          <div>
                            <p className="text-xs font-medium text-navy-600 mb-2">소개</p>
                            <p className="text-xs text-gray-600 leading-relaxed">{p.summary}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-navy-600 mb-2">작업 프로세스</p>
                            <div className="flex flex-wrap gap-2">
                              {p.process.map((step, i) => (
                                <div key={step} className="flex items-center gap-2">
                                  <span className="text-[10px] bg-navy-800 text-white w-4 h-4 rounded-full flex items-center justify-center">
                                    {i + 1}
                                  </span>
                                  <span className="text-xs text-gray-600">{step}</span>
                                  {i < p.process.length - 1 && (
                                    <span className="text-gray-300 text-xs">→</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                          {p.results.length > 0 && (
                            <div>
                              <p className="text-xs font-medium text-navy-600 mb-2">기대 결과</p>
                              <ul className="space-y-1">
                                {p.results.map((r) => (
                                  <li key={r} className="text-xs text-gray-600 flex gap-2">
                                    <span className="text-gray-300 shrink-0">·</span>
                                    <span>{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {"roadmap" in p && (
                            <div>
                              <p className="text-xs font-medium text-navy-600 mb-2">확장 로드맵</p>
                              <ul className="space-y-1">
                                {(p as typeof projects[2]).roadmap!.map((r) => (
                                  <li key={r} className="text-xs text-gray-600 flex gap-2">
                                    <span className="text-gray-300 shrink-0">·</span>
                                    <span>{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-navy-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy-900 mb-10">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((s) => (
              <div key={s.category} className="bg-white rounded-xl p-6 border border-navy-100">
                <p className="text-sm font-medium text-navy-600 mb-3">{s.category}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="text-sm bg-navy-50 px-3 py-1.5 rounded-lg text-navy-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-navy-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Let&apos;s Connect</h2>
          <p className="text-navy-100/60 mb-10 text-sm leading-relaxed">
            새로운 기회나 협업에 열려 있습니다.<br />
            아래 연락처로 편하게 연락해주세요.
          </p>
          <div className="flex justify-center gap-12 text-sm">
            <a href="mailto:Landa0707@naver.com" className="group">
              <p className="text-navy-100/40 text-xs mb-1.5">Email</p>
              <p className="text-white group-hover:underline">Landa0707@naver.com</p>
            </a>
            <div>
              <p className="text-navy-100/40 text-xs mb-1.5">Phone</p>
              <p className="text-white">+82 10 7211 9843</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-xs text-navy-100/40">
          &copy; 2026 Wooju Lee. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
