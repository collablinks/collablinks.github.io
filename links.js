/* =====================================================================
   ✏️  YOUR BUTTON LINKS
   ---------------------------------------------------------------------
   1. Delete the old link between the quotes " " and paste your own.
   2. Keep the quotes and the comma at the end of each line.
   3. Click the green "Commit changes" button. Your site updates in a
      few minutes.
   ===================================================================== */

var MY_LINKS = {

  // ----- Platform buttons (the 4 glass icons) -----
  twitch:     "https://www.twitch.tv/YOUR-HANDLE",
  youtube:    "https://www.youtube.com/@YOUR-HANDLE",
  tiktok:     "https://www.tiktok.com/@YOUR-HANDLE",
  kick:       "https://kick.com/YOUR-HANDLE",

  // ----- Trading buttons -----
  blackCrown: "https://www.blackcrownmarkets.com/",                         // "Open" button
  rolex:      "https://www.blackcrownmarkets.com/win-a-rolex?code=RXWVET",  // "Enter" button
  festx:      "https://www.tradewithfestx.com/",                            // "Trade" button

};

/* ---------------- Don't change anything below this line ---------------- */
(function () {
  var buttons = document.querySelectorAll("[data-link]");
  for (var i = 0; i < buttons.length; i++) {
    var url = MY_LINKS[buttons[i].getAttribute("data-link")];
    if (!url) continue;
    url = String(url).trim();
    if (!/^[a-z]+:\/\//i.test(url)) url = "https://" + url; // fixes links pasted without https://
    buttons[i].href = url;
  }
})();
