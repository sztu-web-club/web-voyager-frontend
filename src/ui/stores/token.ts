import { defineStore } from 'pinia'

export const useTokenStore = defineStore(
  'token',
  () => {
    const token = ref<string | null>(null)

    const setToken = (value: string) => {
      token.value = value
    }

    const isLogged = computed(() => token.value !== null)

    return {
      token,
      setToken,
      isLogged,
    }
  },
  {
    persist: true,
  },
)
