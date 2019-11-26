class Console {
    constructor() {
			this.histories = [];
    }

    log(...args) {
			const result = args.map(value => {
        if (typeof value == 'object') {
         value = JSON.stringify(value);
        }
          return value;
        }).join('');
			this.histories.push(result);
			return result;
    }

    history(range = [0, this.histories.length]) {
			let [start, end] = range;
			if(!range) return this.histories.join('\n');
			return this.histories.slice(start - 1, end).join('\n');
    }

    clearHistory() {
			this.histories = [];
			return true;
    }
}