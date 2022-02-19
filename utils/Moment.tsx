import moment from 'moment';

export enum MomentEnum {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
  Night = 'Night',
}

const MomentDefinitions = {
  [MomentEnum.Morning]: {
    from: '5:30:00',
    to: '12:00:00',
  },
  [MomentEnum.Afternoon]: {
    from: '12:01:00',
    to: '18:00:00',
  },
  [MomentEnum.Evening]: {
    from: '18:01:00',
    to: '21:00:00',
  },
};

/**
 * Helps to know which is the moment of the current day.
 *
 * @return {MomentEnum} Returns the moment of the day
 */
export function getMomentOfDay(): MomentEnum {
  return getMomentOfDayFromDate(new Date());
}

/**
 * Helps to know which is the moment of the day in parameter.
 *
 * @param {Date} date
 * @return {MomentEnum} Returns the moment of the day
 */
export function getMomentOfDayFromDate(date: Date): MomentEnum {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const format = 'hh:mm:ss';
  const time = moment(`${hours}:${minutes}:${seconds}`, format);

  const index = Object.values(MomentDefinitions).findIndex(({ from, to }) =>
    time.isBetween(moment(from, format), moment(to, format)),
  );

  return (
    (Object.keys(MomentDefinitions)[index] as MomentEnum) || MomentEnum.Night
  );
}
