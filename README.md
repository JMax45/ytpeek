[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://t.me/ytpeekbot">
    <img src="https://i.imgur.com/Fhg2bU8.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">YtPeek</h3>

  <p align="center">
    Download videos from YouTube with Telegram
    <br />
    <a href="https://github.com/JMax45/ytpeek/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#distributor-usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

YtPeek is a Telegram bot that allows you to download videos in audio or video format

[![Software demonstration 1][software-demonstration1]](#)

You can find a live demo [here](https://t.me/ytpeekbot) (might not be online all the time)

### Built With

- [ytdl-core](https://github.com/fent/node-ytdl-core)
- [telegraf](https://github.com/telegraf/telegraf)

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JMax45/ytpeek.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create an .env file with the following content:
   ```
   BOT_TOKEN=bot token from @BotFather
   ```
4. Build the source code
   ```sh
   npm run build
   ```

<!-- USAGE EXAMPLE -->

## Usage

You can launch the bot with `npm start`

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/MyFeature`)
3. Commit your Changes (`git commit -m 'Add MyFeature'`)
4. Push to the Branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [README template by othneildrew](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/JMax45/ytpeek?style=for-the-badge
[contributors-url]: https://github.com/JMax45/ytpeek/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/JMax45/ytpeek?style=for-the-badge
[issues-url]: https://github.com/JMax45/ytpeek/issues
[license-shield]: https://img.shields.io/github/license/JMax45/ytpeek?style=for-the-badge
[license-url]: https://github.com/JMax45/ytpeek/blob/master/LICENSE
[software-demonstration1]: https://i.imgur.com/U6aoSQC.png
