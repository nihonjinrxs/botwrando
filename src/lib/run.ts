export enum RunState {
  None,
  Init,
  Running,
  Paused,
  Ended,
}

export type Run = {
  state: RunState;
  runner: string;
  rundate: number;
  pausedTime: number;
  seed: string;
  showSeed: boolean;
  waypointIds: number[];
  splits: Map<number, number>;
  wrSplits: Map<number, number>;
  pbSplits: Map<number, number>;
};

export const getDefaultRun = () => ({
  state: RunState.None,
  runner: 'Default Runner',
  rundate: -1,
  pausedTime: -1,
  seed: '',
  showSeed: false,
  waypointIds: [],
  splits: new Map<number, number>([]),
  wrSplits: new Map<number, number>([]),
  pbSplits: new Map<number, number>([]),
});
