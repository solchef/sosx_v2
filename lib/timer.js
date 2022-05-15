const moment = require('moment');
const { create } = require('ipfs-http-client')

const server = create({
    url: "http://localhost:5001"
})

const createFile = async() => {
    try {
        let data = JSON.stringify({
            roundStartTimeStamp: roundStartTime,
            // roundStartTime: moment(roundStartTime).format("DD MMM YYYY hh:mm:ss"),
            round
        }, null, 2)
        await server.files.mkdir(`/round-${round}`)
        await server.files.write(`/round-${round}/round.json`, data, { create: true })
        console.log(`round-${round}`, "created")
    } catch (err) {
        if (err.message === "file already exists") {
            round++
            createFile()
        }
    }
}

let stage
let round = 0
let interval = 1000
const calculateTimeLeft = (entryTime) => {
    let eventTime = moment(entryTime).unix();
    let currentTime = Number(Math.floor(Date.now() / 1000).toString());
    let leftTime = eventTime - currentTime;
    let duration = moment.duration(leftTime, "seconds");
    let interval = 1000;

    if (duration.asSeconds() <= 0) {
        clearInterval(interval);
    }

    duration = moment.duration(duration.asSeconds() - 1, "seconds");

    return { hr: duration.hours(), min: duration.minutes(), sec: duration.seconds(), stage, round }
}

let roundStartTime = 1652537864

let stageGroups = [];
let stage1 = { start: roundStartTime, end: roundStartTime + 1 * 5 };
let stage2 = { start: stage1.end, end: stage1.end + 1 * 5 };
let stage3 = { start: stage2.end, end: stage2.end + 1 * 5 };
let stage4 = { start: stage3.end, end: stage3.end + 1 * 5 };

stageGroups.push(stage1, stage2, stage3, stage4);
let current = moment().unix();
let check = stageGroups.findIndex(
    (group) => group.end > current && current > group.start
);

// console.log(check)
if (check === -1) {
    console.log("inside if ", check)
    round++
    console.log("round", round)
    console.log("end here")
    createFile()
    console.log("if runned")
} else {
    setInterval(() => {
        console.log("else runned")
        console.log("checked", check)
        let currTime = moment().unix();
        let checkStage = stageGroups.findIndex(
            (group) => group.end > currTime && currTime > group.start
        );
        console.log("inside setInt", checkStage)
        if (checkStage != -1) {
            console.log("checkStage", checkStage)
                // setStage(checkStage + 1);
            stage = checkStage + 1
            console.log(calculateTimeLeft(moment.unix(stageGroups[checkStage].end)))
        }
        //  else if (checkStage = -1) {
        //     round++
        //     console.log("round", round)
        //     console.log("end here")
        // }
    }, 1000);
}