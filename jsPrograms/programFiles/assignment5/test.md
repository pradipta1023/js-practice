| Description | Input | Output  |
| ---         | ---   | ---     |
| Simple increment of a normal day | 15-03-2021 | 16-03-2021 |
| Increment from month end to next month | 31-01-2021 | 01-02-2021 |
| Increment from month end of February to next month (non leap year) | 28-02-2021 | 01-03-2021 |
| Increment from 30 days month to next month| 30-04-2021 | 01-05-2021 |
| Increment from 31 days month to next month| 31-10-2021 | 01-11-2021 |
| Increment from second last date to last date of February (leap year) | 28-02-2000 | 29-02-2000 |
| Increment from month end to next month (leap year) | 29-02-2024 | 01-03-2024 |
| Increment (months having same no of days simultaneously) | 30-07-2024 | 31-07-2024 |
| Increment from year end to next year | 31-12-1999 | 01-01-2000 |
| Date should start from one | 00-01-2020 | "Invalid Date" |
| Month should start from zero | 00-00-2000 | "Invalid Date" |
| Non leap year doesn't have more than 28 days in February | 29-02-2021 | "Invalid Date" |
| February doesn't have more than 29 days either in leap year| 30-02-2021 | "Invalid Date" |
| Month with maximum 30 days can't accept more than 30 days | 31-04-2000 | "Invalid Date" |
| Month with maximum 31 days can't accept more than 31 days | 35-03-2000 | "Invalid Date" |
| Can't accept more than 12 in months section | 31-20-2000 | "Invalid Date" |