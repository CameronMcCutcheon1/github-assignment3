export default function(){
    let dFuture = new Date("2023-04-18T19:24:17.741Z");
    let dNow = new Date();
    let nDifference = (dFuture - dNow)/(1000 * 3600 * 24);

    return <span>{Math.round(nDifference)}</span>
}