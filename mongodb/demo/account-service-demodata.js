/**
 * Creates pre-filled demo account
 */

print('Mongo DB Demo Data Start');

db.accounts.update(
    { "_id": "demo" },
    {
    "_id": "demo",
    "lastSeen": new Date(),
    "note": "demo note",
    "expenses": [
        {
            "amount": 1300,
            "currency": "CAD",
            "icon": "home",
            "period": "MONTH",
            "title": "Rent"
        },
        {
            "amount": 120,
            "currency": "CAD",
            "icon": "utilities",
            "period": "MONTH",
            "title": "Utilities"
        },
        {
            "amount": 20,
            "currency": "CAD",
            "icon": "meal",
            "period": "DAY",
            "title": "Meal"
        },
        {
            "amount": 240,
            "currency": "CAD",
            "icon": "gas",
            "period": "MONTH",
            "title": "Gas"
        },
        {
            "amount": 3500,
            "currency": "EUR",
            "icon": "island",
            "period": "YEAR",
            "title": "Vacation"
        },
        {
            "amount": 30,
            "currency": "EUR",
            "icon": "phone",
            "period": "MONTH",
            "title": "Phone"
        },
        {
            "amount": 700,
            "currency": "CAD",
            "icon": "sport",
            "period": "YEAR",
            "title": "Gym"
        }
    ],
    "incomes": [
        {
            "amount": 42000,
            "currency": "CAD",
            "icon": "wallet",
            "period": "YEAR",
            "title": "Salary"
        },
        {
            "amount": 500,
            "currency": "CAD",
            "icon": "edu",
            "period": "MONTH",
            "title": "Scholarship"
        }
    ],
    "saving": {
            "amount": 5900,
            "capitalization": false,
            "currency": "CAD",
            "deposit": true,
            "interest": 3.32
        }
    },
    { upsert: true }
);

print('Mongo DB Demo Data complete');