import { ref } from 'vue'

export const useQuizTimer = (onTimeout: () => void, duration = 15) => {
  const timer = ref(duration)
  let timerInterval: ReturnType<typeof setInterval> | null = null

  const start = () => {
    stop() // always clear before starting new
    timer.value = duration
    timerInterval = setInterval(() => {
      if (timer.value > 0) {
        timer.value--
      } else {
        stop()
        onTimeout()
      }
    }, 1000)
  }

  const stop = () => {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
  }

  return { timer, start, stop }
}
