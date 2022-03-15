class Timer {
  constructor(dt, title) {
    this.dt = dt;
    this.title = title;
  }
}

const start = () => {
  setInterval(every_second, 1000);
};

const every_second = () => {
  let tn = new Date(Date.now());
  let timers_div = document.getElementById("timers");
  let timers_divs = timers_div.getElementsByTagName("div");
  while (timers_divs.length < timers.length) {
    timers_div.appendChild(document.createElement("div"));
  }
  timers_div = timers_div.getElementsByTagName("div");
  for (let i = 0; i < timers.length; i++) {
    let ts = timers[i].dt - tn;
    let tsstr = ts2str(ts);
    timers_divs[i].innerHTML = `${timers[i].title}: ${tsstr}`;
  }
  console.log(timers_divs, timers);
};

const parsedt = () => {
  let date = document.getElementById("idt").value.split("-");
  date[1] = date[1] - 1;
  let time = document.getElementById("itm").value.split(":");
  let dateandtime = new Date(
    ...date.map((itm) => parseInt(itm)),
    ...time.map((itm) => parseInt(itm)),
    00,
    000
  );
  return new Timer(dateandtime, document.getElementById("ititle").value);
};

const ts2str = (ts) => {
  if (ts < 0) {
    return `${0}days ${0}hours ${0}mins ${0}secs`; // ${0}ms`
  }
  let msleft = ts;
  let sleft = Math.floor(msleft / 1000);
  let mleft = Math.floor(sleft / 60);
  let hleft = Math.floor(mleft / 60);
  let dleft = Math.floor(hleft / 24);
  return `${dleft}days ${hleft % 24}hours ${mleft % 60}mins ${sleft % 60}secs`; // ${msleft % 1000}ms`;
};

const timers = new Array();

const set_timer = () => {
  timers.push(parsedt());
};
