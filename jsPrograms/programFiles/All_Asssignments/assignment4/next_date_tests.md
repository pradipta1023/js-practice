| Description | Input | Output  |
| ---         | ---   | ---     |
| Simple increment of a normal day | 15-03-2021 | 16-03-2021 |
| Increment from month end to next month |31-01-2021 |01-02-2021 |
| Increment from month end to next month (non leap year) |28-02-2021 |01-03-2021 |
| Increment from month end to next month (non leap year) |28-02-1900 |01-03-1900 |
| Increment from second last date to last date (leap year) |28-02-2000 |29-02-2000 |
| Increment from month end to next month (leap year) |29-02-2024 |01-03-2024 |
| Increment from second last date to last date |30-03-2024 |31-03-2024 |
| Increment from month end to next month |31-03-2024 |01-04-2024 |
| Increment (months having same no of days simultaneously )|31-07-2024 |01-08-2024 |
| Increment (months having same no of days simultaneously )|31-12-2024 |01-01-2025 |
| Increment from second last date to last date of July |30-07-2024 |31-07-2024 |
| Increment from second last date to last date of December |30-12-2000 |31-12-2000 |
| Increment from second last date to last date of December |30-12-2000 |31-12-2000 |
| Increment from year end to next year |31-12-1999 |01-01-2000 |
| Increment from year end to next year |31-12-2005 |01-01-2006 |
| Increment from year end to next year |01-01-0000 |02-01-0000 |
| Increment from year end to next year |31-12-0000 |01-01-0001 |
| Increment for invalid year |00-01-0000 |"Invalid Date" |
| Increment for invalid month & year |00-00-0000 |"Invalid Date" |
| Increment for invalid month |00-00-0001 |"Invalid Date" |
| Increment for invalid date |29-02-2021 |"Invalid Date" |
| Increment for invalid date |29-02-1900 |"Invalid Date" |
| Increment for invalid date |30-02-2000 |"Invalid Date" |
| Increment for invalid date |31-04-2000 |"Invalid Date" |
| Increment for invalid date |35-03-2000 |"Invalid Date" |
| Increment for invalid date |31-09-2000 |"Invalid Date" |
| Increment for invalid date |31-09-2000 |"Invalid Date" |
| Increment for invalid date |36-09-2000 |"Invalid Date" |
| Increment for invalid month |31-20-2000 |"Invalid Date" |
| Increment for invalid date |31-32-2000 |"Invalid Date" |
| Increment for invalid date |31-32-2000 |"Invalid Date" |
| Increment for invalid date |undefined-undefined-undefined |"Invalid Date" |
| Increment for invalid date |"12"-"13"-"1234" |"Invalid Date" |