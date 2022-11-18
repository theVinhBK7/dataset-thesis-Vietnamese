import fetch from 'node-fetch';
// import  URLSearchParams  from 'url';

let TableId = 18;
let PageIndex = 1;
let PageSize = 10;
let filterTable = 18;
// let filterIds = ,3;
let SearchLeft = 0;
// let PageSize = 10;

let urlStr = `http://stinet.gov.vn/Search/SearchFullResult?TableId=${TableId}&PageIndex=${PageIndex}&PageSize=${PageSize}&filterTable=18,17&filterIds=,3&SearchLeft=0`

fetch(urlStr)
    .then(res => res.json())
    .then(text => console.log(text));