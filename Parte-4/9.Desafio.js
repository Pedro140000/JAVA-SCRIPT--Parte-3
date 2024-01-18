const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975, },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004, },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tin Cook", foundedOn: 1976 },
];

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtra somente companhias fundados abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes > REDUCE

// const add10Percent = (company) => {
//   company.marketValue = company.marketValue + company.marketValue / 10;

//   return company;
// };

// const filterCompanies = (company) => company.foundedOn < 1990;

// const calculateTotalMarketValue = (acc, company) => acc + company.marketValue;

// const marketValueOldCompanies = companies
//   .map(add10Percent)
//   .filter(filterCompanies)
//   .reduce(calculateTotalMarketValue, 0);

// console.log(marketValueOldCompanies);

const newCompanies = (company) => {
    company.marketValue = company.marketValue + company.marketValue - 10;
  
    return company;
  };
  
  const filterCompanies = (company) => company.foundedOn > 1980;
  
  const calculateTotalMarketValue = (acc, company) => acc + company.marketValue;
  
  const marketValueOldCompanies = companies
    .map(newCompanies)
    .filter(filterCompanies)
    .reduce(calculateTotalMarketValue, 0);
  
  console.log(marketValueOldCompanies);

// Subtrair 10% de valor de mercado a todas as companhias
// Filtrar somente companhias fundadas depois de 1980
// Somar o valor de mercado das restantes