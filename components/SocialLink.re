[@react.component]
let make = (~url, ~icon, ~size = 40, ~title) => 
  <a href={url} className="social-link" title>
    <img 
      src=icon 
      width=string_of_int(size) 
      height=string_of_int(size) 
      alt={j|$(title) Icon|j} 
    />
  </a>;
