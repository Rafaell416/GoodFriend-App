'use strict'

const monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ]

function getRandomDate () {
    const randomValue = (min, max) => Math.floor( Math.random() * ( max - min ) + min )

  const randomDay = randomValue(1, 30)
  const randomMonth = monthNames[randomValue(0, 11)]

  return `${randomMonth}, ${randomDay}`
}


export function addRandomBirthdayToUsers (users) {
  return users.map(user => ({ ...user, birthday: getRandomDate() }))
}

export function formatDate (date) {
  const stringDate = String( date )
  const baseDate = new Date( stringDate )

  const day = baseDate.getDate()
  const month = monthNames[baseDate.getMonth()] 

  return `${month}, ${day} `
}
