export function calculatePrice(price){
    const _price=Intl.NumberFormat("de-De",{
        style:"currency",
        currency:"EUR",
    }).format(price)
  return _price;
}