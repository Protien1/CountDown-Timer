const settBtn = document.querySelector('.setting-button')
const settingPanel = document.querySelector('.settings')
const namePanel = document.querySelector('.date')
const dayPanel = document.querySelector('.day')
const monthPanel = document.querySelector('.month')
const yearPanel = document.querySelector('.year')
const imgPanel = document.querySelector('.img')
const saveBtn = document.querySelector('.save')

const appBodyTop = document.querySelector('.app-top')
const appName = document.querySelector('.title')
const dayBox = document.querySelector('.day-time')
const hourBox = document.querySelector('.hour-time')
const minutBox = document.querySelector('.minut-time')
const secondBox = document.querySelector('.secound-time')

let interval
let userTime

const checkDay = params => {
	const day = parseInt(dayPanel.value)
	const minDay = parseInt(dayPanel.min)
	const maxDay = parseInt(dayPanel.max)

	if (day < minDay || isNaN(day)) {
		dayPanel.value = minDay
	} else if (day > maxDay) {
		dayPanel.value = maxDay
	}
}

const checkMonth = params => {
	const month = parseInt(monthPanel.value)
	const minMonth = parseInt(monthPanel.min)
	const maxMonth = parseInt(monthPanel.max)

	if (month < minMonth || isNaN(month)) {
		monthPanel.value = minMonth
	} else if (month > maxMonth) {
		monthPanel.value = maxMonth
	}
}

const checkYear = () => {
	const year = parseInt(yearPanel.value)
	const minYear = parseInt(yearPanel.min)
	const maxYear = parseInt(yearPanel.max)

	if (year < minYear || isNaN(year)) {
		yearPanel.value = minYear
	} else if (year > maxYear) {
		yearPanel.value = maxYear
	}
}

const checkForm = params => {
	if (
		namePanel.value !== '' &&
		dayPanel.value !== '' &&
		monthPanel.value !== '' &&
		yearPanel.value !== '' &&
		imgPanel.value !== ''
	) {
		setName()
		setDate()
		changeBackground()
		clearList()
	} else if (namePanel.value !== '' && dayPanel.value !== '' && monthPanel.value !== '' && yearPanel.value !== '') {
		setName()
		setDate()
		clearList()
	} else {
		console.log('errr')
	}
}

const setTime = () => {
	const currentTime = new Date()
	const result = userTime - currentTime

	dayBox.textContent = Math.floor(result / 1000 / 60 / 60 / 24)
	hourBox.textContent = Math.floor((result / 1000 / 60 / 60) % 24)
	minutBox.textContent = Math.floor(result / 1000 / 60) % 60
	secondBox.textContent = Math.floor(result / 1000) % 60

}


const setDate = () => {
	userTime = new Date(`${monthPanel.value}/${dayPanel.value}/${yearPanel.value}`)
	setTime()
	setInterval(setTime, 1000)
}


const setName = () => {
	appName.textContent = namePanel.value
}

const clearList = () => {
	namePanel.value = ''
	dayPanel.value = ''
	monthPanel.value = ''
	yearPanel.value = ''
	imgPanel.value = ''
}

const changeBackground = () => {
	appBodyTop.style.backgroundImage = `url(${imgPanel.value})`
}

const showSettingPanel = params => {
	settingPanel.classList.toggle('active')
}

saveBtn.addEventListener('click', checkForm)
settBtn.addEventListener('click', showSettingPanel)
dayPanel.addEventListener('input', checkDay)
monthPanel.addEventListener('input', checkMonth)
yearPanel.addEventListener('input', checkYear)
