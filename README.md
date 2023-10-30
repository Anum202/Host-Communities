# HOST COMMUNITIES

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Introduction

Host Communities is a mobile application developed using expo for React Native.

## Features

- Sign Up.
- Create an Account.
- Sign In.
- Dashboard showing all statistics.
- CRUD operations.
- CRUD data is stored in a local SQLite database for offline access.
- Clean and user-friendly interface.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- Expo CLI installed globally.
- A mobile device or emulator to run the app (e.g., Android/iOS emulator or a physical device).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/HostCommunities.git

   ```

2. Change the directory:

   cd HostCommunities

3. Install the dependencies:

   npm install

4. Start the Expo development server:

   npx expo start

5. Use the Expo client to open the app on your mobile device or emulator.

## Usage

Firstly, a new user will have to sign up and then create a new account in Host Communities. If user is already registered, he/she can login using email and password. Then a DAshboard which is main the screen shows up having all the statistics. A Settings section where user can change their change their settings like Update Prfile, Update KYC, Notification Sttings, Delete Account. Moreover, a user can add 3 types of reports in Reports section.

## Folder Structure

The project's folder structure is organized as follows:

Host-Communities/
├── components/ # React Native components
├── screens/ # React Native Screens
├── navigation/ # React Native navigation
├── constants/ # React Native constants (Colors)
├── assets/ # React Native Assets (Images)
├── utils.js # Utility functions and helpers
├── App.js # Main entry point
├── package.json # Dependencies and scripts
└── README.md # Project documentation
