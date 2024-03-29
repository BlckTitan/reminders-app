import React, { useEffect, useState } from 'react';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import { reminderService } from './services/reminder';

function App() {
  
  const [reminders, setReminders] = useState<Reminder[]>([])

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders()
    setReminders(reminders)
  }

  useEffect(() => {
    loadReminders()
  }, [])

  return (

    <div className="App">
      <ReminderList items={reminders}/>
    </div>
  );
}

export default App;
