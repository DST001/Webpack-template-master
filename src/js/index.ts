function toounces(gramtoounces:number):number{
    return gramtoounces / 28.34952;    
}
function togram(ouncestogram:number):number{
    return ouncestogram * 28.34952;    
}
// ie står for input element 
let ie : HTMLInputElement = <HTMLInputElement>document.getElementById("veardi");
let veagt:number;
let knapgramtilounces: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ounces");
let knapouncestilgram: HTMLButtonElement = <HTMLButtonElement> document.getElementById("gram");

let converttext: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("converted");

knapgramtilounces.addEventListener("click", MouseEvent =>
{
    veagt = toounces(ie.valueAsNumber);
    converttext.innerHTML = veagt + " ounces"; 
});
knapouncestilgram.addEventListener("click", MouseEvent =>
{
    veagt = togram(ie.valueAsNumber);
    converttext.innerHTML = veagt + " gram";
});