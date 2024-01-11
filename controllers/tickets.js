const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
}

// don't use a forward slash in the beginning on render

async function newTicket(req, res) {
  res.render('tickets/new', { title: 'New Ticket', flightId: req.params.flightId });
}

async function create(req, res) {
  try {
    req.body.flight = req.params.flightId
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${req.params.flightId}`)
}