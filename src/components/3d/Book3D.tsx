import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Book3D: React.FC = () => {
  const bookRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let animFrame: number;
    let startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000; // seconds
      if (bookRef.current) {
        // Gentle floating + slow Y rotation
        const floatY = Math.sin(elapsed * 1.2) * 12;
        const rotateY = -25 + Math.sin(elapsed * 0.5) * 10;
        const rotateX = 5 + Math.sin(elapsed * 0.8) * 3;
        bookRef.current.style.transform = `
          translateY(${floatY}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
      }
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div
      className="book3d-scene"
      aria-hidden="true"
      style={{
        perspective: '900px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Outer glow */}
      <div
        style={{
          position: 'absolute',
          width: '220px',
          height: '280px',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.35) 0%, transparent 70%)',
          filter: 'blur(30px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Book wrapper with 3D perspective */}
      <div
        ref={bookRef}
        onClick={() => navigate('/donate-book')}
        style={{
          position: 'relative',
          width: '160px',
          height: '220px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.05s linear',
          zIndex: 1,
          willChange: 'transform',
          cursor: 'pointer',
        }}
      >
        {/* Front Cover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 40%, #818cf8 100%)',
            borderRadius: '4px 16px 16px 4px',
            boxShadow: '4px 8px 32px rgba(79,70,229,0.5), inset -2px 0 8px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            gap: '12px',
            overflow: 'hidden',
          }}
        >
          {/* Cover shine */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            width: '35%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%)',
            transform: 'skewX(-10deg)',
            pointerEvents: 'none',
          }} />

          {/* Cover decoration lines */}
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: 'absolute',
              left: '14px',
              right: '14px',
              height: '1px',
              background: 'rgba(255,255,255,0.12)',
              top: `${25 + i * 12}%`,
            }} />
          ))}

          {/* Book icon */}
          <div style={{
            width: '56px',
            height: '56px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
            flexShrink: 0,
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Title lines */}
          <div style={{ textAlign: 'center', zIndex: 1 }}>
            <div style={{
              color: 'white',
              fontWeight: 800,
              fontSize: '15px',
              letterSpacing: '0.5px',
              lineHeight: 1.3,
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              fontFamily: 'Inter, sans-serif',
            }}>
              DONATE
            </div>
            <div style={{
              color: 'white',
              fontWeight: 800,
              fontSize: '14px',
              letterSpacing: '2px',
              marginTop: '4px',
              fontFamily: 'Inter, sans-serif',
            }}>
              BOOKS
            </div>
          </div>

          {/* Author line */}
          <div style={{
            position: 'absolute',
            bottom: '18px',
            left: 0,
            right: 0,
            textAlign: 'center',
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '8px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              padding: '3px 10px',
              borderRadius: '99px',
              fontFamily: 'Inter, sans-serif',
            }}>
              CLICK HERE
            </div>
          </div>
        </div>

        {/* Spine */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '32px',
            height: '100%',
            transform: 'translateX(-30px) rotateY(-90deg)',
            transformOrigin: 'right center',
            background: 'linear-gradient(180deg, #4338ca 0%, #3730a3 50%, #4338ca 100%)',
            borderRadius: '4px 0 0 4px',
            boxShadow: '-4px 0 12px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '8px',
            fontWeight: 700,
            letterSpacing: '2px',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            fontFamily: 'Inter, sans-serif',
          }}>
            DONATE BOOKS
          </div>
        </div>

        {/* Back Cover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: 'translateZ(-16px)',
            background: 'linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)',
            borderRadius: '4px 16px 16px 4px',
            boxShadow: '-4px 8px 24px rgba(0,0,0,0.4)',
          }}
        />

        {/* Pages (right side) */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${2 + i * 0.5}px`,
              right: `-${1 + i * 0.6}px`,
              width: '8px',
              height: `${216 - i}px`,
              background: i % 2 === 0 ? '#f1f5f9' : '#e2e8f0',
              transform: `translateZ(${-i * 2}px)`,
              borderRadius: '0 2px 2px 0',
            }}
          />
        ))}

        {/* Bottom pages stack */}
        <div style={{
          position: 'absolute',
          left: '2px',
          right: '2px',
          bottom: '-6px',
          height: '8px',
          background: 'linear-gradient(180deg, #e2e8f0, #cbd5e1)',
          borderRadius: '0 0 4px 4px',
          transform: 'rotateX(-90deg)',
          transformOrigin: 'top center',
        }} />
      </div>

      {/* Floating particles around book */}
      {[
        { x: -80, y: -60, size: 6, color: 'rgba(99,102,241,0.7)', delay: '0s' },
        { x: 90,  y: -40, size: 4, color: 'rgba(244,63,94,0.7)',  delay: '0.6s' },
        { x: -70, y:  60, size: 5, color: 'rgba(245,158,11,0.7)', delay: '1.1s' },
        { x: 80,  y:  70, size: 3, color: 'rgba(99,102,241,0.6)', delay: '0.3s' },
        { x:  10, y: -90, size: 4, color: 'rgba(244,63,94,0.5)',  delay: '0.8s' },
      ].map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.color,
            left: `calc(50% + ${p.x}px)`,
            top:  `calc(50% + ${p.y}px)`,
            animation: `book3d-float-particle 3s ease-in-out infinite`,
            animationDelay: p.delay,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}

      <style>{`
        @keyframes book3d-float-particle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.8; }
          50%       { transform: translateY(-14px) scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Book3D;
