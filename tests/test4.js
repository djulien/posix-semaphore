

const Semaphore = require('../addon')

const sem = Semaphore('salut00')
sem.acquire()
sem.release()
sem.close()