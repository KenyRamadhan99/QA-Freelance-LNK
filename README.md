Scrapping data menggunakan faker.js : https://fakerjs.dev/

cara instalasi : npm install @faker-js/faker --save-dev

Penjelasan folder dan file 
1. letak test case ada pada path : cypress/e2e/TCS
2. folder pageObject berisi element-element web 
3. folder fixtures berisi data file untuk digunakan sebagai data driven testing,dalam kasus ini saya menggunakan json dan library faker.js
4. folder reports berisikan template html yang berisi laporan mengenai tcs yang sudah di running

Cara running tcs :
1. Buka terminal pada path folder project
2. ketik : npx cypress run
3. tunggu sampai running selesai
4. buka folder reports untuk melihat reports hasil running

Cara membuka UI Cypress
1. Buka terminal pada path folder project
2. ketik : npx cypress open
3. UI Cypress akan muncul
4. Pilih browser yg akan digunakan untuk menjalankan test case
