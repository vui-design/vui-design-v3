export type Breakpoint = "xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
export type BreakpointMediaQueries = Record<Breakpoint, string>;
export type Screens = Partial<Record<Breakpoint, boolean>>;
export type ScreenSizes = Partial<Record<Breakpoint, string | number>>;
export type Subscriber = (screens: Screens, breakpoint: Breakpoint) => void;
export interface MatchHandlers {
  [prop: string]: {
    mql: MediaQueryList;
    listener: ((this: MediaQueryList, e: MediaQueryListEvent) => any) | null;
  };
};

export const breakpoints: Breakpoint[] = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
export const breakpointMediaQueries: BreakpointMediaQueries = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
  xxxl: "(min-width: 2000px)"
};

const subscribers = new Map<Number, Subscriber>();
let id = -1;
let screens = {};

const responsiveObserver = {
  matchHandlers: {} as MatchHandlers,
  dispatch(newScreens: Screens, breakpoint: Breakpoint) {
    screens = newScreens;
    subscribers.forEach(subscriber => subscriber(screens, breakpoint));

    return subscribers.size >= 1;
  },
  subscribe(subscriber: Subscriber): number {
    if (!subscribers.size) {
      this.register();
    }

    id++;
    subscribers.set(id, subscriber);
    subscriber(screens, null as unknown as Breakpoint);

    return id;
  },
  unsubscribe(token: number) {
    subscribers.delete(token);

    if (!subscribers.size) {
      this.unregister();
    }
  },
  register() {
    Object.keys(breakpointMediaQueries).forEach(breakpoint => {
      const matchMediaQuery = breakpointMediaQueries[breakpoint as Breakpoint];
      const mql = window.matchMedia(matchMediaQuery);
      const listener = ({ matches }: { matches: boolean }) => {
        this.dispatch({
          ...screens,
          [breakpoint]: matches
        }, breakpoint as Breakpoint);
      };

      mql.addListener(listener);

      this.matchHandlers[matchMediaQuery] = {
        mql,
        listener
      };

      listener(mql);
    });
  },
  unregister() {
    Object.keys(breakpointMediaQueries).forEach((breakpoint) => {
      const matchMediaQuery = breakpointMediaQueries[breakpoint as Breakpoint];
      const matchHandler = this.matchHandlers[matchMediaQuery];

      matchHandler?.mql.removeListener(matchHandler?.listener);
    });

    subscribers.clear();
  }
};

export default responsiveObserver;