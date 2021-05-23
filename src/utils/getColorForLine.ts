export default function getColorForLine(lineId: string) {
  switch (lineId) {
    case 'bakerloo': return '#B36305';
    case 'central': return '#E32017';
    case 'circle': return '#FFD300';
    case 'district': return '#00782A';
    case 'dlr': return '#00A4A7';
    case 'hammersmith-city': return '#F3A9BB';
    case 'jubilee': return '#A0A5A9';
    case 'metropolitan': return '#9B0056';
    case 'northern': return '#000000';
    case 'overground': return '#EE7C0E';
    case 'piccadilly': return '#003688';
    case 'tramlink': return '#84B817';
    case 'victoria': return '#0098D4';
    case 'waterloo-city': return '#95CDBA';
    default: return undefined;
  }
}
