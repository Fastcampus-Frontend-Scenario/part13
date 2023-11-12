// /src/middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'bucket-marketing'

// 랜덤 버켓 선택
// Optional: 써드파티 서비스를 이용하여 버킷을 받을 수도 있습니다.
const MARKETING_BUCKETS = ['original', 'a', 'b'] as const
const getBucket = () => MARKETING_BUCKETS[Math.floor(Math.random() * MARKETING_BUCKETS.length)]

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/marketing')) {
    const cookies = req.cookies
    // Get the bucket cookie
    const bucket = cookies.get(COOKIE_NAME)?.value  || getBucket()

    // 적절한 variant 로 프록시
    const res = NextResponse.rewrite(new URL(`/marketing/${bucket}`, req.url))

    // 쿠키가 없다면 버켓을 추가
    if (!cookies.get(COOKIE_NAME)) {
      res.cookies.set(COOKIE_NAME, bucket)
    }

    return res
  }
}