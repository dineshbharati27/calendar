# Interactive Calendar Application

A modern, responsive calendar application built with React that allows users to manage events, view event details, and navigate through different months and years.

🌐 **Live Demo**: [https://calendar-one-alpha.vercel.app/](https://calendar-one-alpha.vercel.app/)

## Features

- 📅 Monthly calendar view with intuitive navigation
- ✨ Create, view, and delete events
- 🎨 Color-coded event badges
- 📱 Responsive design for all screen sizes
- 🔍 Event search functionality
- 📝 Detailed event information display
- 🎯 Easy month and year selection

## Project Structure

```
src/
├── components/
│   ├── Calendar.jsx           # Main calendar component
│   ├── CalendarGrid.jsx       # Grid layout for calendar days
│   ├── CalendarHeader.jsx     # Header with navigation controls
│   ├── DayCell.jsx           # Individual day cell component
│   ├── EventBadge.jsx        # Event display badge
│   ├── EventDetailsModal.jsx # Event details popup
│   ├── MonthPicker.jsx       # Month selection component
│   └── NewEventModal.jsx     # New event creation form
├── utils/
│   └── calendarHelpers.js    # Utility functions for calendar operations
├── data/
│   └── events.js             # Event data management
├── App.jsx                   # Main application component
└── main.jsx                  # Application entry point
```

## Key Components

### Calendar
The main component that orchestrates the calendar functionality, managing state and coordinating between different sub-components.

### Event Management
- **Event Creation**: Add new events with title, description, and color
- **Event Viewing**: Click on events to view detailed information
- **Event Deletion**: Remove events with confirmation

### Navigation
- Month and year selection
- Previous/Next month navigation
- Current date highlighting

## Technical Details

- Built with React and modern JavaScript
- Responsive design using CSS
- Event state management
- Modal-based user interactions
- Date manipulation utilities

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Navigate through months using the arrow buttons
2. Click on a day to add a new event
3. Click on an existing event to view or delete it
4. Use the month picker to quickly jump to a specific month
5. Search for events using the search functionality

## Contributing

Feel free to submit issues and enhancement requests!

