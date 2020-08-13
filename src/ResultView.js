import React from "react";

function printTime(time) {
    var date = new Date(time.raw).toString();
    return date.substr(0, date.indexOf('(')); ;
}

export default ({ result }) => (
  <li className="sui-result dense">
  <a href={result.gitterid.raw}>
  <span class="sui-result-header"><span class="author">{result.display_name.raw}</span> ({result.username.raw}) | {result.group_name.raw} | {printTime(result.sent)}</span>
  <span class="sui-result-body">{result.message.raw}</span>
  </a>
  </li>
);
