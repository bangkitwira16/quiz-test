<!-- eslint-disable vue/no-template-shadow -->
<template>
  <section>
    <QuizHeader v-if="!isFinished" :nilai="nilai" :timer="timer" />
    <QuestionBox v-for="(item, index) in questionAnswer" :key="item.id" :question="item"
      :visible="index === currentQuestion" :current-selected="currentSelectedAnswer" @select-answer="handleAnswer" />
    <button v-if="currentQuestion !== questionAnswer.length" @click="() => handleNext(timer)"
      class="bg-blue-500 p-4 rounded-md mt-6 w-full xl:w-auto">Lanjut</button>
    <Result v-if="currentQuestion === questionAnswer.length" :nilai="nilai" :user-answer="userAnswer" />
  </section>
</template>

<script lang="ts" setup>

import { onMounted, onUnmounted } from 'vue'
import { questionAnswer } from '../static/questionAnswer'
import Result from '../components/Result.vue'
import QuizHeader from '../components/QuizHeader.vue'
import QuestionBox from '../components/QuestionBox.vue'
import { useQuizTimer } from '../composables/useQuizTimer'
import { useQuizLogic } from '../composables/useQuizLogic'

const {
  currentQuestion,
  nilai,
  userAnswer,
  currentSelectedAnswer,
  isFinished,
  handleAnswer,
  handleNext: handleNextLogic,
} = useQuizLogic()

const { timer, start: startTimer, stop: stopTimer } = useQuizTimer(() => handleNext(timer.value))

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
const handleNext = (timeLeft: number) => {
  handleNextLogic(timeLeft)
  if (!isFinished.value) {
    startTimer()
  } else {
    stopTimer()
  }
}
</script>