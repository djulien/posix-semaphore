

const Semaphore = require('../addon')

const sem = Semaphore('salut00', { strict: true, debug: true })
sem.acquire()
sem.close()
const sem2 = Semaphore('salut00', { strict: true, debug: true })
sem2.acquire()