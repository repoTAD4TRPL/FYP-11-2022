const merchParticipant = (ticketType) => {
  if (ticketType === 'Undangan') {
    const merch = ['Card', 'Book', 'Pulpen', 'Snack']
    return merch
  } 

  if (ticketType === 'Media') {
    const merch = ['Card', 'Book', 'Pulpen', 'Snack', 'Syal']
    return merch
  }
}

module.exports = merchParticipant