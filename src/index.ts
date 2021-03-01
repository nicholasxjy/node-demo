import random from 'random-number'

export default function getRandomNumber(base = 1) {
  const num = random(base)
  return num
}