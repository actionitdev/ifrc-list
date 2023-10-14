# ifrc-list

List of IFRC National Societies.

## Data

Each entry in the array contains the following fields:

```json
{
  //ISO 3166-1 alpha-2 code of associated country
  "code": "al",
  //ISO 3166-1 alpha-2 code of associated country
  "iso_alpha2": "AL",
  //ISO alpha-3 code of associated country
  "iso_alpha3": "ALB",
  //Full name of society including country
  "name": "Albania: Albanian Red Cross",
  //Name of society
  "ns": "Albanian Red Cross",
  //Country
  "country": "Albania",
  //Latitude and longitude of country
  "location": { "lat": 41.1533, "long": 20.168331 },
  //Unicode flag character
  "flag": "🇦🇱",
  //Currency of country
  "currency": "ALL",
  //IFRC region country is within
  "ifrc_region": "EU",
  //Official names in em,es,ar,fr
  "names": {
    "en": "Albanian Red Cross",
    "es": "Cruz Roja de Albania",
    "ar": "الصليب الأحمر الألباني",
    "fr": "Croix-Rouge albanaise"
  }
}
```

## Usage

```cmd
npm install ifrc-list
```

```js
//ES6
import { ifrcList } from "ifrc-list";
```

```js
//NodeJS
const ifrcList = require("ifrc-list");
```

```html
<!-- Directly in HTML -->
<script src="scripts/ifrc-list.min.js"></script>
<script>
  console.log(ifrcList);
</script>
```
