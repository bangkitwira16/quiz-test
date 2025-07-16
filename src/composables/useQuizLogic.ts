import { ref, computed } from 'vue'
import { questionAnswer } from '../static/questionAnswer'
import type { UserAnswer } from '../interfaces/UserAnswer'
import type { QuestionProps } from '../interfaces/QuestionAnswer'

export const useQuizLogic = () => {
  const currentQuestion = ref(0)
  const nilai = ref(0)
  const userAnswer = ref<UserAnswer[]>([])
  const currentSelectedAnswer = ref<QuestionProps['mark'] | undefined>(undefined)
  const isFinished = computed(() => currentQuestion.value === questionAnswer.length)

  const handleAnswer = (mark: QuestionProps['mark']) => {
    currentSelectedAnswer.value = mark
  }

  const handleNext = (timerValue: number) => {
    const question = questionAnswer[currentQuestion.value]
    const selectedMark = currentSelectedAnswer.value

    const selectedLabel = question.questionOptions.find((option) => option.mark === selectedMark)?.label || ''
    const isCorrect = selectedMark === question.answer

    userAnswer.value.push({
      question: question.question,
      answer: `${selectedMark ? selectedMark + '.' : 'tidak menjawab'} ${selectedLabel}`,
      isCorrected: isCorrect,
      nilai: timerValue,
    })

    if (isCorrect) {
      nilai.value += timerValue
    }

    currentQuestion.value++
    currentSelectedAnswer.value = undefined
  }

  return {
    currentQuestion,
    nilai,
    userAnswer,
    currentSelectedAnswer,
    isFinished,
    handleAnswer,
    handleNext,
  }
}
