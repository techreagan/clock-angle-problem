const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question('Enter Hour?\n', (hour) => {
	readline.question('Enter Minute?\n', (minutes) => {
		console.log(`\n\nOutput\n${clockAngle(hour, minutes)}`)
		readline.close()
	})
})

function clockAngle(hour, minutes) {
	const calculateHour = ((hour % 12) + minutes / 60) * 30
	const calculateMinutes = minutes * 6
	let angle = Math.abs(calculateHour - calculateMinutes)

	if (angle > 180) {
		angle = 360 - angle
	}

	return angle
}
