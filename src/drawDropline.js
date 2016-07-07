import dropline from 'dropline';

export function drawDropline() {
  const data = [
    { date: '1-May-12', value: 582.13 },
    { date: '30-Apr-12', value: 583.98 },
    { date: '27-Apr-12', value: 603.00 },
    { date: '26-Apr-12', value: 607.70 },
    { date: '25-Apr-12', value: 610.00 },
    { date: '24-Apr-12', value: 560.28 },
    { date: '23-Apr-12', value: 571.70 },
    { date: '20-Apr-12', value: 572.98 },
    { date: '19-Apr-12', value: 587.44 },
    { date: '18-Apr-12', value: 608.34 },
    { date: '17-Apr-12', value: 609.70 },
    { date: '16-Apr-12', value: 580.13 },
    { date: '13-Apr-12', value: 605.23 },
    { date: '12-Apr-12', value: 622.77 },
    { date: '11-Apr-12', value: 626.20 },
    { date: '10-Apr-12', value: 628.44 },
    { date: '9-Apr-12', value: 636.23 },
    { date: '5-Apr-12', value: 633.68 },
    { date: '4-Apr-12', value: 624.31 },
    { date: '3-Apr-12', value: 629.32 },
    { date: '2-Apr-12', value: 618.63 }
  ];
   
  dropline.plot('body', data);
}