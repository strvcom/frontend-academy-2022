/**
 * Event minimal date.
 *
 * To compute it, we grab the date part from the current date,
 * excluding any time related information.
 */
const EVENT_MIN_DATE = new Date().toISOString().split('T')[0]

export { EVENT_MIN_DATE }
