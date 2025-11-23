import { createMachine, assign } from 'xstate';

interface IntroContext {
  currentStage: 'splash' | 'morph' | 'done';
  showGAN: boolean;
  fadeOutOthers: boolean;
}

export const introMachine = createMachine({
  id: 'intro',
  initial: 'splash',
  context: {
    currentStage: 'splash',
    showGAN: false,
    fadeOutOthers: false,
  } as IntroContext,
  states: {
    splash: {
      entry: assign({
        currentStage: 'splash',
        showGAN: false,
        fadeOutOthers: false,
      }),
      on: {
        ENTER: {
          target: 'morph',
          actions: assign({ currentStage: 'morph' }),
        },
        BACK: {
          target: 'splash',
        },
      },
    },
    morph: {
      entry: [
        assign({ currentStage: 'morph', showGAN: true }),
        // Start showing GAN letters immediately
        'showGANLetters',
      ],
      after: {
        // Wait for N letter to finish animating in
        1600: {
          target: 'fadingOut',
          actions: assign({ fadeOutOthers: true }),
        },
      },
      on: {
        ADVANCE: {
          target: 'done',
          actions: assign({ currentStage: 'done' }),
        },
        BACK: {
          target: 'splash',
        },
      },
    },
    fadingOut: {
      after: {
        // Wait for fade-out animation to complete
        1000: {
          target: 'done',
          actions: assign({ currentStage: 'done' }),
        },
      },
    },
    done: {
      entry: assign({
        currentStage: 'done',
        showGAN: false,
        fadeOutOthers: false,
      }),
      on: {
        ADVANCE: {
          target: 'main',
        },
        BACK: {
          target: 'morph',
        },
      },
    },
    main: {
      on: {
        BACK: {
          target: 'done',
        },
      },
    },
  },
  on: {
    SKIP: {
      target: '.main',
      actions: assign({
        currentStage: 'done',
        showGAN: false,
        fadeOutOthers: false,
      }),
    },
    RESTART: {
      target: '.splash',
      actions: assign({
        currentStage: 'splash',
        showGAN: false,
        fadeOutOthers: false,
      }),
    },
  },
}, {
  actions: {
    showGANLetters: () => {
      console.log('Showing GAN letters');
    },
  },
});
