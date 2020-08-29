import * as moment from 'moment'

const dateFormat = (dateString, format = 'MMMM Do YYYY') =>
  moment(dateString).format(format)

export default dateFormat
