# ifrc-list

List of IFRC National Societies.

## Data

Each entry in the array contains the following fields:

```json
{
    //ISO 3166-1 alpha-2 code of associated country
    "code": "al",
    //Unicode flag character
    "flag": "🇦🇱",
    //Full name of society including country
    "name": "Albania: Albanian Red Cross",
    //Name of society
    "ns": "Albanian Red Cross",
    //Country
    "country": "Albania"
  },
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
