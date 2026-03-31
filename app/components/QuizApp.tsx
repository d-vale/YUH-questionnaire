'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { QUESTIONS, SCORE_TIERS } from '@/lib/quiz-data'
import type { Screen } from '@/lib/quiz-types'

export default function QuizApp() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [exiting, setExiting] = useState(false)
  const [glowing, setGlowing] = useState(false)
  const [email, setEmail] = useState('')
  const [optIn, setOptIn] = useState(true)
  const [emailError, setEmailError] = useState(false)
  const [history, setHistory] = useState<Array<{ currentQ: number; score: number; answered: boolean; selectedIdx: number | null }>>([]);

  function startQuiz() {
    setScreen('email')
    setCurrentQ(0)
    setScore(0)
    setAnswered(false)
    setSelectedIdx(null)
    setExiting(false)
    setHistory([])
  }

  function startFromEmail() {
    const valid = email.trim().length > 0 && email.includes('@') && email.includes('.')
    if (!valid) {
      setEmailError(true)
      return
    }
    setEmailError(false)
    setScreen('question')
  }

  function handleBack() {
    if (screen === 'email') {
      setScreen('welcome')
      return
    }
    if (screen === 'question') {
      // Reset everything and return to welcome
      setScreen('welcome')
      setCurrentQ(0)
      setScore(0)
      setAnswered(false)
      setSelectedIdx(null)
      setGlowing(false)
      setHistory([])
      setEmail('')
      setOptIn(true)
      setEmailError(false)
    }
  }

  function handleAnswer(idx: number) {
    if (answered) return
    const q = QUESTIONS[currentQ]
    const ok = idx === q.correct
    setAnswered(true)
    setSelectedIdx(idx)
    if (ok) {
      setScore(s => s + 1)
      setGlowing(true)
    }
  }

  function handleNext() {
    setExiting(true)
    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setHistory(h => [...h, { currentQ, score, answered, selectedIdx }])
        setCurrentQ(q => q + 1)
        setAnswered(false)
        setSelectedIdx(null)
        setGlowing(false)
      } else {
        console.log('Lead:', { email, optIn })
        setScreen('result')
      }
      setExiting(false)
    }, 220)
  }

  function handleRestart() {
    setScreen('welcome')
    setCurrentQ(0)
    setScore(0)
    setAnswered(false)
    setSelectedIdx(null)
    setExiting(false)
    setGlowing(false)
    setHistory([])
  }

  const q = QUESTIONS[currentQ]
  const pad = String(currentQ + 1).padStart(2, '0')
  const isLast = currentQ === QUESTIONS.length - 1
  const tier = SCORE_TIERS.find(t => score >= t.min && score <= t.max)!

  const feedbackText = answered
    ? (selectedIdx === q?.correct ? q.feedbackOk : q.feedbackFail)
    : null
  const feedbackPrefix = answered
    ? (selectedIdx === q?.correct ? '✓' : '→')
    : null

  return (
    <div
      id="app"
      className={screen === 'welcome' ? 'welcome-active' : ''}
    >
      <div className="screen-content">

        {/* ── Welcome ─────────────────────────────────────── */}
        {screen === 'welcome' && (
          <div className="welcome-wrap">
            <div className="wordmark">
              <Image
                src="/Yuh_Logo_Single-Claim-FR_Black_RGB.svg"
                alt="Yuh"
                width={340}
                height={120}
                priority
              />
            </div>
            <p className="welcome-tagline">Yuh for you</p>
            <p className="welcome-meta">10 questions · sans prise de tête</p>
            <div className="welcome-cta">
              <button className="btn btn-primary" onClick={startQuiz}>
                C&apos;est parti →
              </button>
            </div>
          </div>
        )}

        {/* ── Email capture ────────────────────────────────── */}
        {screen === 'email' && (
          <div className="email-wrap slide-in">
            <button className="back-btn" onClick={handleBack}>← Retour</button>
            <h1 className="email-headline">Avant de commencer</h1>
            <p className="email-subline">
              Laisse-nous ton adresse e-mail pour rester en contact avec Yuh.
            </p>
            <div className="email-field-group">
              <input
                className={`email-input${emailError ? ' email-input--error' : ''}`}
                type="email"
                placeholder="ton@email.ch"
                value={email}
                onChange={e => { setEmail(e.target.value); setEmailError(false) }}
                onKeyDown={e => e.key === 'Enter' && startFromEmail()}
                autoComplete="email"
              />
              {emailError && (
                <p className="email-error">Merci d&apos;entrer une adresse e-mail valide.</p>
              )}
            </div>
            <label className="email-optin">
              <input
                type="checkbox"
                checked={optIn}
                onChange={e => setOptIn(e.target.checked)}
              />
              <span>J&apos;accepte de recevoir des offres et actualités de Yuh</span>
            </label>
            <button className="btn btn-primary" onClick={startFromEmail}>
              Commencer le quiz →
            </button>
          </div>
        )}

        {/* ── Question ─────────────────────────────────────── */}
        {screen === 'question' && (
          <div
            key={currentQ}
            className={`question-wrap ${exiting ? 'slide-out' : 'slide-in'}${glowing ? ' glow-correct' : ''}`}
            onAnimationEnd={(e) => {
              if (e.animationName === 'correctGlow') setGlowing(false)
            }}
          >
            <div className="q-ghost-num">{pad}</div>
            <div className="q-body">
              <button className="back-btn" onClick={handleBack}>← Retour à l'accueil</button>
              <div className="q-counter">
                <span>{pad} / {String(QUESTIONS.length).padStart(2, '0')}</span>
                <div className="q-counter-dots">
                  {QUESTIONS.map((_, i) => {
                    const cls = i < currentQ ? 'done' : i === currentQ ? 'active' : ''
                    return <span key={i} className={`q-counter-dot ${cls}`} />
                  })}
                </div>
              </div>
              <p className="q-text">{q.q}</p>
              <div className="options">
                {q.options.map((opt, i) => {
                  let cls = 'btn'
                  if (answered) {
                    if (i === q.correct) cls += ' correct'
                    else if (i === selectedIdx) cls += ' wrong'
                    else cls += ' locked'
                  }
                  return (
                    <button
                      key={i}
                      className={cls}
                      onClick={() => handleAnswer(i)}
                      disabled={answered}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {answered && feedbackText && (
                <div className="feedback">
                  <strong>{feedbackPrefix}</strong>{' '}
                  <span dangerouslySetInnerHTML={{ __html: feedbackText }} />
                </div>
              )}

              {answered && (
                <div className="next-wrap">
                  <button className="btn btn-primary" onClick={handleNext}>
                    {isLast ? 'Voir mes résultats →' : 'Continuer →'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Result ───────────────────────────────────────── */}
        {screen === 'result' && (
          <>
            <div className="result-wrap slide-in">
              <div className="result-ghost">{score}</div>
              <p className="result-label">Résultat final</p>
              <div className="score-display">
                {score}<span> / {QUESTIONS.length}</span>
              </div>
              <div className="result-line" />
              <p className="result-title">{tier.title}</p>
              <p className="result-sub">{tier.sub}</p>
              <div className="result-actions">
                <button className="btn btn-primary" onClick={handleRestart}>
                  Recommencer
                </button>
              </div>
            </div>
            {score >= 7 && <Confetti />}
          </>
        )}

      </div>
    </div>
  )
}

function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const COLORS = ['#6C47FF','#8B5CF6','#5835DB','#22C55E','#FF6B6B','#6C47FF','#6C47FF']
    const COUNT  = 160

    const particles = Array.from({ length: COUNT }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height * 0.35 - canvas.height * 0.1,
      vx:    (Math.random() - 0.5) * 5,
      vy:    Math.random() * -5 - 1.5,
      w:     Math.random() * 8 + 4,
      h:     Math.random() * 4 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle: Math.random() * Math.PI * 2,
      spin:  (Math.random() - 0.5) * 0.18,
      alpha: 1
    }))

    const FADE_START = 2200
    const FADE_END   = 2800
    let t0: number | null = null
    let rafId: number

    function tick(ts: number) {
      if (!t0) t0 = ts
      const elapsed = ts - t0
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      for (const p of particles) {
        p.x    += p.vx
        p.vy   += 0.18
        p.y    += p.vy
        p.angle += p.spin
        p.alpha = elapsed < FADE_START
          ? 1
          : Math.max(0, 1 - (elapsed - FADE_START) / (FADE_END - FADE_START))

        ctx!.save()
        ctx!.globalAlpha = p.alpha
        ctx!.translate(p.x, p.y)
        ctx!.rotate(p.angle)
        ctx!.fillStyle = p.color
        ctx!.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx!.restore()
      }

      if (elapsed < FADE_END) {
        rafId = requestAnimationFrame(tick)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="confetti-canvas"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 200 }}
    />
  )
}
