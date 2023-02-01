// Devuelve hace cuanto se creo la publicacion en minutos
const getDifTime = (date)=> {
	let created = new Date(date).getTime()
	let now = Date.now()
	let dif = Math.floor((now - created) / 60000)
	return dif
}

// Convierte los minutos de diferencia en mensajes para mostrar
export const formatDifTime = (date)=> {
    let dif = getDifTime(date)
	let toHour = Math.floor(dif / 60)
	let toDay = Math.floor(toHour / 24)
	let toWeek = Math.floor(toDay / 7)
	if (dif < 1) {
		return 'Hace un instante'
	} else if (dif === 1) {
		return 'Hace 1 minuto'
	} else if (dif < 60) {
		return 'Hace ' + dif + ' minutos'
	} else if (toHour >= 1 && toHour < 2) {
		return 'Hace 1 hora'
	} else if (toHour >= 2 && toHour < 24) {
		return 'Hace ' + toHour + ' horas'
	} else if (toDay >= 1 && toDay < 2) {
		return 'Hace 1 dia'
	} else if (toDay >= 2 && toDay < 7) {
		return 'Hace ' + toDay + ' dias'
	} else if (toWeek >= 1 && toWeek < 2) {
		return 'Hace 1 semana'
	} else {
		return 'Hace ' + toWeek + ' semanas'
	}
}
