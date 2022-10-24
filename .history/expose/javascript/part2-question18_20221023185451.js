let d = new Date();
let time = d.toLocaleTimeString();
while(true) {
    setTimeout(() => {
        console.log(time);
    }, 1000)
}
