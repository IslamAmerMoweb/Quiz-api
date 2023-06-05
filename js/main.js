'use strict'

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './js/particles.json');

import { StartQuiz } from './api.js'

new StartQuiz()