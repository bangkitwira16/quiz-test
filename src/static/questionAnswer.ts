import { QuestionAnswerProps } from '../interfaces/QuestionAnswer'

export const questionAnswer: QuestionAnswerProps[] = [
  {
    id: '1',
    questionOptions: [
      { mark: 'A', label: 'Singapura' },
      { mark: 'B', label: 'Jakarta' },
      { mark: 'C', label: 'Tokyo' },
      { mark: 'D', label: 'Kuala Lumpur' },
    ],
    question: 'Apa nama ibukota Malaysia',
    answer: 'D',
  },
  {
    id: '2',
    questionOptions: [
      { mark: 'A', label: 'Hijau' },
      { mark: 'B', label: 'Biru' },
      { mark: 'C', label: 'Kuning' },
      { mark: 'D', label: 'Hitam' },
    ],
    question: 'Apa warna matahari',
    answer: 'C',
  },
  {
    id:'3',
    questionOptions: [
      { mark: 'A', label: '50' },
      { mark: 'B', label: '0' },
      { mark: 'C', label: '15' },
      { mark: 'D', label: '5' },
    ],
    question: 'Berapa 5 x 10',
    answer: 'A',
  },
]
