# react-native-calendar

React Native calendar component exercise

## Requirements

- **Node.js:** v22.0.0 (.nvmrc file supported)
- **Yarn:** Latest classic version or follow [Yarn Berry instructions](https://yarnpkg.com/getting-started/install)
- **Expo Go:** The latest version installed on a device or emulator

## Install

Dependencies can be installed using the embedded Yarn Berry:

```sh
yarn install
```

## Usage

Start the development server with:

```sh
yarn start
```

You can now scan the presented QR code to install the App on your Expo Go application.

## Assumptions

This section describes a few assumptions I made based on the provided Figma design and requirements.

- The design shows only six columns in the calendar grid, and the days of the week are not specified. Because we need seven columns to be able to fit all the days of the week, the assumption is that for this calendar weekdays are not relevant and we only want to see all the days of a month.
- Because there is no weekday reference, there's also no way of telling in which column the first day of the month should be. The assumption here is that we expect all months to have a similar look & feel, so every 1st day of the month starts in the 3rd column. The first two slots are filled with the last two days of the previous month and the remaining slots with the first days of the next month (both grayed-out).
- Grayed-out days do not correspond to the current month, so the assumption is that they should be disabled.
- The design does not show a differentiation between the selected date and today's date. The assumption is that the UI does not need to show today's date, so the highlighted day is always the selected one. The selected date always starts on today's date.
- The requirements did not mention any other features/functionalities of the component, or what kind of use was expected from it. The assumption is we want to keep things simple for now and no other features/functionalities are required. For example, other than the UI change, nothing else happens when a date is selected.

I'll be happy to change or correct any of these assumptions if needed 🙂
