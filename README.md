# districtsofnepal🇳🇵
# Implementation of json data using jquery (district.js)

<img src="https://github.com/ayushkarn32/districtsofnepal/blob/master/dist.gif" alt="district-gif">

This repo Consists of districts of Nepal in alphabetical order with its respective states/provinces.
All the 77 districts have been enlisted here

As still most of the states are to be named the state's name is not included

Available Formats:
1) SQL
2) JSON


## How to use districtModule.js

Example:
<br>
<code>
  const districts=require('./districtModule');
  <br>
  console.log(districts.findState('Bara'));
  <br>
  console.log(districts.listByState('2'));
  <br>
  </code>
