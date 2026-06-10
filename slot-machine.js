function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

const reel = {
    symbols: [
        "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

const slotMachine = {
    reels: [
        Object.create(reel), 
        Object.create(reel), 
        Object.create(reel)
        // this slot machine needs 3 separate reels
        // hint: Object.create(..)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
        });
    },
    display() {
        const output = Array.from({length: 3}, ()=>new Array(3))
        for(let i = 0; i < 3; i++){
            const length = this.reels[i].symbols.length
            output[1][i] = this.reels[i].symbols[this.reels[i].position];
            output[0][i] = this.reels[i].symbols[(this.reels[i].position-1+length) % length];
            output[2][i] = this.reels[i].symbols[(this.reels[i].position+1) % length];
        }
        output.forEach(row => {
            console.log(row.join(" | "));
        })
        return output;
    }
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★