# Skip Microsoft Safe Links

Tired of clicking a link in Microsoft Teams only to be slowed down by a red "Checking link..." redirect page? This lightweight Google Chrome extension fixes that.

It intercepts Microsoft’s link-verification screens (`teams.public.onecdn.static.microsoft` and Outlook Safe Links), strips out the tracking wrapper, and sends you straight to your destination instantly.

## ✨ Features

- **No More Waiting:** Automatically skips the intermediate Microsoft check screen.
- **Instant Redirection:** Runs before the page even finishes loading a blank screen.
- **Completely Private:** Runs entirely locally in your browser. It does not track, store, or transmit your link history anywhere.

---

## 🚀 How to Install and Use (Locally)

You can load this extension manually into your Google Chrome browser in less than a minute:

1. Download or clone this project folder to your computer.
2. Open Google Chrome and navigate to: `chrome://extensions/`
3. Turn on the **Developer mode** toggle switch in the top-right corner.
4. Click the **Load unpacked** button in the top-left corner.
5. Select the **`dist`** folder inside this project.

The extension is now active! Any Teams or Outlook safe link you click will open instantly.

---

## 🤖 Automated Updates & Publishing

This project is configured to update itself automatically using GitHub Actions.

Whenever you draft and publish a **New Release** on GitHub:

1. **GitHub automatically builds** the latest, optimized version of the extension.
2. **A packaged `.zip` file** is attached directly to your GitHub Release page for easy download.
3. **It uploads to the Chrome Web Store:** If you link your Google Developer Account using the Repository Secrets (`EXTENSION_ID`, `CLIENT_ID`, `CLIENT_SECRET`, `REFRESH_TOKEN`), GitHub will automatically push the update to your Chrome Web Store listing for your users.

---

## ⚖️ License

This project is open-source under the **MIT License**. Feel free to share it with your coworkers or modify it!
