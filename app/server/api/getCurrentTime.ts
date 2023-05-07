function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default defineEventHandler(async (event) => {
  await sleep(2000)
  return new Date()
})
