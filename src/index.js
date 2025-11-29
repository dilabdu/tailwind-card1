export function calculatePrice(price){
    const _price=Intl.NumberFormat("de-De",{
        style:"currency",
        currency:"EUR",
    }).format(price)
    console.log(_price)
}