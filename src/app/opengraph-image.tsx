import { ImageResponse } from 'next/og';

export const alt = 'Sourabh Chaudhary - Java Backend Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#07100d', color: '#f2f6f3', padding: '72px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24 }}>
        <strong>SC<span style={{ color: '#9ef7bd' }}>.</span></strong>
        <span style={{ color: '#9ef7bd' }}>Available for freelance projects</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: '#9ef7bd', fontSize: 25, letterSpacing: 5 }}>JAVA BACKEND ENGINEER</div>
        <div style={{ marginTop: 22, fontSize: 78, fontWeight: 700, letterSpacing: -4 }}>Your backend. Built to deliver.</div>
        <div style={{ marginTop: 28, color: '#a4b2aa', fontSize: 28 }}>Spring Boot · Kafka · Redis · PostgreSQL · AWS · GCP</div>
      </div>
    </div>,
    size,
  );
}
