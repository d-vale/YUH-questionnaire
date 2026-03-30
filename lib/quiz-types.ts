export type Screen = 'welcome' | 'question' | 'result'

export interface QuizState {
  screen: Screen
  currentQ: number
  score: number
  answered: boolean
}

export interface Question {
  q: string
  type: 'tf' | 'mcq'
  options: string[]
  correct: number
  feedbackOk: string
  feedbackFail: string
}

export interface ScoreTier {
  min: number
  max: number
  title: string
  sub: string
}
