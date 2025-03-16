# Email Sending Application

A modern Node.js application(Backend) for sending automated emails using Nodemailer and Mailgen.

## Description

This project provides functionality to send emails programmatically using Gmail SMTP, with features including:
- Simple text emails
- HTML formatted emails
- Bill generation using Mailgen templates

## Installation

1. Clone the repository
2. Install dependencies
```bash
npm install nodemailer mailgen dotenv express
```

## Configuration

Create a `.env` file with your credentials:

```env
PORT=5000
EMAIL=your-email@gmail.com
PASSWORD=your-app-specific-password
```

## Features

- Email authentication using Gmail SMTP
- Template-based email generation using Mailgen
- Support for both plain text and HTML emails
- Bill generation functionality
- Error handling and status responses

## Dependencies

- nodemailer: ^6.10.0
- mailgen: ^2.0.29
- dotenv: ^16.4.7
- express: ^4.21.2

## License

MIT License

