# Mother's Day Menu Order SPA

![GitHub top language](https://img.shields.io/github/languages/top/infamousjoeg/mothers-day-menu-order-spa)
![GitHub last commit](https://img.shields.io/github/last-commit/infamousjoeg/mothers-day-menu-order-spa)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=mothers-day-menu-order-spa)

A single-page application (SPA) for a Mother's Day-themed menu order form. Users can select menu items and submit their orders, which will be sent to an email address. The app is built using React and deployed on Vercel.

## Table of Contents

- [Mother's Day Menu Order SPA](#mothers-day-menu-order-spa)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Deploying to Vercel](#deploying-to-vercel)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Features

- React-based single page application
- Responsive Mother's Day-themed design
- Easy to use menu item selection
- Email submission of orders using Mailgun
- Serverless function on Vercel

## Getting Started

Follow these steps to set up a local development environment.

### Prerequisites

- Node.js 12.x or higher
- npm or yarn
- Vercel CLI (optional)

### Installation

1. Clone the repository:

`git clone https://github.com/infamousjoeg/mothers-day-menu-order-spa.git`

2. Install the required dependencies:

`npm install`

or

`yarn install`


3. Create a `.env` file in the project root directory with the following environment variables:

```text
MAILGUN_API_KEY=your_mailgun_api_key
MAILGUN_DOMAIN=your_mailgun_domain
RECIPIENT_EMAIL=your_email@example.com
```


## Usage

1. Start the development server:

`npm start`

or

`yarn start`

2. Open your browser and navigate to `http://localhost:3000` to view the app.

## Deploying to Vercel

Follow the instructions in the [Deploying to Vercel](https://github.com/user/repo#deploying-to-vercel) section.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Vercel](https://vercel.com/)
- [Mailgun](https://www.mailgun.com/)
