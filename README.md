A simple animated web app showing Santa and his reindeer flying across the sky with snowflakes and fireworks. 🎅🦌🎆 This
web app will bring holiday joy to your visitors. Ho, ho, ho! 🎅 Merry Christmas! 🎄

## 📝 Overview

This project is a Dockerized web application served via **Nginx**. It includes interactive animations created with *
*p5.js** and incorporates fun elements such as:

- Animated falling snowflakes ❄️
- Flying Santa and reindeer 🦌
- Exploding fireworks 🎆
- Merry Christmas message with glowing effects ✨
- Background music and an interactive *"Ho Ho Ho"* sound effect 📢
- A lighting moon and twinkling stars 🌙✨

## 🚀 Features

- **Animations**: Watch Santa and his reindeer soar across the sky with dynamic snowflakes and fireworks.
- **Background Music**: Starts when the user interacts with the screen.
- **Ho Ho Ho Sound**: Play a spooky 'Ho Ho Ho' sound when tapping the screen again.
- **Responsive Design**: Full-screen experience optimized for different devices.
- **Dockerized Deployment**: Easy to run and serve using Docker and Nginx.

## 📦 Prerequisites

To run the web app locally, ensure you have:

- **Docker** installed on your machine.
- A registered domain/subdomain for external/public access (e.g., `xmas.domain`). (Optional)

## 🛠️ Installation

Follow these steps to set up and run the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/betazetadev/merry-christmas-2024.git
   cd merry-christmas-2024
   ```

2. **Check Required Files**:
   Ensure your audio files (`christmas_song.mp3` and `hohoho.mp3`) are placed in the `assets` folder.

3. **Build and Run Docker Containers**:
   Use Docker Compose to start the app:
   ```bash
   docker-compose up -d
   ```

4. **Access the App**:
   Open your browser and visit:
   ```
   http://localhost:9090
   ```
   Or use your configured subdomain (e.g., `xmas.domain`).

5. **Stop the Containers**:
   To stop the app, run:
   ```bash
   docker-compose down
   ```

## 📁 Project Structure

```
📦 merry-christmas-webapp
├── assets
│   ├── christmas_song.mp3       # Background music
│   ├── bzd_logo.png             # Our logo, you can replace it with your own
│   └── hohoho.mp3               # "Ho Ho Ho" clip sound
├── model
│   ├── firework.js              # Firework class
│   └── snowflake.js             # Snowflake class
├── sketch.js                    # p5.js animations and interactivity
│   index.html                   # Main web app page
├── Dockerfile                   # Dockerfile for Nginx setup
├── docker-compose.yml           # Docker Compose configuration
└── README.md                    # You're reading this! 🎉
```

## 🎅 Credits

- **Animations**: Created with [p5.js](https://p5js.org/).
- **Dockerization**: Nginx setup for smooth deployment.

### 🎶 Audio Credits

- **Christmas Song**: [Alberto Méndez](https://albertomendez.me)
- **Ho Ho Ho Clip**: [Ho Ho Ho, Merry Christmas! from Cloud-10](https://freesound.org/people/Cloud-10/sounds/536245/)
  modified with [Audacity](https://www.audacityteam.org/) for a spooky effect.

## 📜 License

This project is licensed under the MIT License.

## 🎉 Enjoy!

Bring holiday cheer to everyone with this interactive Merry Christmas app! 🎄✨
