function company(input) {
    let companies = {};
    for (const line of input) {
        let [currentCompany , employee] = line.split(' -> ')
        if (!companies.hasOwnProperty(currentCompany)) {
            companies[currentCompany] = []
        }
        if (!companies[currentCompany].includes(employee)) {
            companies[currentCompany].push(employee)
        }
    }    
    let sortedCompanies = Object.entries(companies)
    sortedCompanies.sort((a,b) => a[0].localeCompare(b[0]))
    for (const company of sortedCompanies) {
        let employees = company[1];
        console.log(company[0]);
        for (const employee of employees) {
            console.log(`-- ${employee}`);
        }
    }
}
company([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )