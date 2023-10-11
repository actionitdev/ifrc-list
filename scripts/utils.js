const ifrclist = require("../data/ifrclist.json");
const longlist = require("../data/longlist.json");
const _ = require("lodash");
const fs = require("fs");
const emojiflags = require("emoji-flags");

let newoutput = [];

for (const item of longlist) {
  //   const flag = _.find(ifrclist, { country: item.ctry });

  let obj = {
    code: item.iso_alpha2.toLowerCase(),
    iso_alpha2: item.iso_alpha2,
    iso_alpha3: item.iso_alpha3,
    name: `${item.ctry}: ${item.ns_name_en_formatted_dropdown}`,
    ns: item.ns_name_en_formatted_dropdown,
    country: item.ctry,
    location: {
      lat: item.latitude,
      long: item.longitude,
    },
    flag: emojiflags.countryCode(item.iso_alpha2).emoji,
    currency: item.currency,
    ifrc_region: item.region_code,
    names: {
      en: item.ns_name_en_official,
      es: item.ns_name_sp_official,
      ar: item.ns_name_ar_official,
      fr: item.ns_name_fr_official,
    },
  };

  newoutput.push(obj);

  // "code": "al",
  // "flag": "🇦🇱",
  // "name": "Albania: Albanian Red Cross",
  // "ns": "Albanian Red Cross",
  // "country": "Albania"
}

fs.writeFileSync("../data/combined.json", JSON.stringify(newoutput));
console.log(newoutput);
