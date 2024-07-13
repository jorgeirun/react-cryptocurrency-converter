# Crypto Converter

This React application allows users to select a cryptocurrency from a dropdown menu and convert a specified amount of the selected cryptocurrency to its equivalent USD value.

Features

	•	Fetches cryptocurrency data from the Messari API.
	•	Allows users to select a cryptocurrency from a dropdown menu.
	•	Displays the price of the selected cryptocurrency.
	•	Converts a specified amount of cryptocurrency to its equivalent USD value.

## Setup and Installation

1. Clone the Repository:

```git clone https://github.com/jorgeirun/crypto-converter.git```

```cd crypto-converter```

2.	Install Dependencies:
Make sure you have Node.js installed. Then, install the project dependencies:

```npm install```

3. Run the Application:

```npm start```

This will start the development server and open the application in your default web browser. The app will be available at http://localhost:3000.

## Usage

	1.	Select a Cryptocurrency:
	•	Use the dropdown menu to select a cryptocurrency. The dropdown menu will display the symbol of each cryptocurrency.
	2.	Enter an Amount:
	•	In the input field labeled Crypto Value, enter the amount of the selected cryptocurrency you want to convert to USD.
	3.	View the Conversion:
	•	The equivalent USD value will be displayed in the USD Value input field. The value is calculated based on the current price of the selected cryptocurrency.


## Code Overview

- App.js

The App.js file contains the main application component. It manages the state and handles user interactions.

- DataFetcher.js

The DataFetcher.js file contains the DataFetcher component, which fetches data from the Messari API.

## License

This project is open source and available under the MIT License.

MIT License

Copyright (c) [2024] [Jorge Irún]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.