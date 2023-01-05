// El email no puede contener espacios, caracteres especiales y tampoco mas de un arroba, ademas debe usar un dominio valido
export const validateEmail = (email)=> {
    // Dominios permitidos
    let validDomains = ['gmail', 'hotmail']
    let response = {
        error: true
    }
    // Quita arrobas, guiones y puntos
    let newEmail = email.replaceAll('@', '').replaceAll('_', '').replaceAll('.', '')
    // Valida que sea un email valido
    if (!email.includes('@') || email.includes(' ') || email.split('@').length > 2 || /\W/g.test(newEmail) || email.length < 12) {
        response.message = "El email no es válido" 
        return response  
    } else {
        // Si es valido, valida que el dominio este permitido
        let validDomain = false
        for (let domain of validDomains) {
            if (email.split('@')[1] === (domain + '.com')) {
                validDomain = true
                break
            }
        }
        if (!validDomain) {
            response.message = "Ese email no esta permitido, solo gmail o hotmail"
            return response
        }
    }
    response.error = false
    return response
}