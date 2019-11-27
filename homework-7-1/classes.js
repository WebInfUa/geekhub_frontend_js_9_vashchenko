class Console {
  constructor() {
	 this.histories = [];
  }

  log(...args) {
    let result = args.map(value => {
        if (typeof value == 'object') {
         value = JSON.stringify(value);
        }
        if (typeof value == 'function') {
         value = String(value).replace('function()', 'function ()');
        }
          return value;
        }).join('');
    this.histories.push(result);
    return result;
  }

  history(range) {
    let [start, end] = range;
    if(!range) return this.histories.join('\n');
    if (end < start) end = start;
    if (start < 0) start = 1;
    return this.histories.slice(start - 1, end).join('\n');
  }

  clearHistory() {
    this.histories = [];
    return true;
  }
}
