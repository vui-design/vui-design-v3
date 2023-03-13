export interface Lang {
  locale: string;
  empty: {
    description: string;
  };
  image: {
    error: string;
  };
  form: {
    optional: string;
  };
  cascader: {
    placeholder: string;
    notFound: string;
  };
  select: {
    placeholder: string;
    loading: string;
    notFound: string;
  };
  datepicker: {
    selectDate: string;
    selectTime: string;
    startTime: string;
    endTime: string;
    clear: string;
    ok: string;
    year: string;
    month: string;
    weekStartDay: string;
    weekDays: {
      sun: string;
      mon: string;
      tue: string;
      wed: string;
      thu: string;
      fri: string;
      sat: string;
    };
    months: {
      m1: string;
      m2: string;
      m3: string;
      m4: string;
      m5: string;
      m6: string;
      m7: string;
      m8: string;
      m9: string;
      m10: string;
      m11: string;
      m12: string;
    }
  };
  time: {
    before: string;
    after: string;
    just: string;
    second: string;
    seconds: string;
    minute: string;
    minutes: string;
    hour: string;
    hours: string;
    day: string;
    days: string;
    month: string;
    months: string;
    year: string;
    years: string;
  };
  timeroutine: {
    week: string;
    time: string;
    weeks: {
      sun: string;
      mon: string;
      tue: string;
      wed: string;
      thu: string;
      fri: string;
      sat: string;
    };
    selected: string;
    unselected: string;
    placeholder: string;
    clear: string;
  };
  transfer: {
    search: string;
    notFound: string;
  };
  cascadeTransfer: {
    search: string;
    notFound: string;
    clear: string;
  };
  pagination: {
    prevPage: string;
    nextPage: string;
    prevFivePage: string;
    nextFivePage: string;
    total: string;
    item: string;
    items: string;
    pageSize: string;
    goto: string;
    page: string;
  };
  table: {
    confirm: string;
    clear: string;
    empty: string;
  };
  drawer: {
    cancelText: string;
    okText: string;
  };
  modal: {
    cancelText: string;
    okText: string;
  };
  popconfirm: {
    cancelText: string;
    okText: string;
  };
};

export type I18nMessages = Record<string, Lang>;